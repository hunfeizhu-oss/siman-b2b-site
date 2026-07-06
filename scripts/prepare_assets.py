from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ASSET_ROOT = ROOT / "public" / "assets"
RAW = ROOT / "source-assets" / "raw"
SITE = ASSET_ROOT / "site"


def open_rgb(path):
    image = Image.open(path)
    image = ImageOps.exif_transpose(image)
    return image.convert("RGB")


def crop_nonwhite(image, threshold=246):
    rgb = image.convert("RGB")
    pixels = rgb.load()
    width, height = rgb.size
    xs = []
    ys = []

    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]
            if not (r > threshold and g > threshold and b > threshold):
                xs.append(x)
                ys.append(y)

    if not xs:
        return image

    padding = 20
    box = (
        max(min(xs) - padding, 0),
        max(min(ys) - padding, 0),
        min(max(xs) + padding, width),
        min(max(ys) + padding, height),
    )
    return image.crop(box)


def save_cover(src, dst, size, quality=88):
    image = ImageOps.fit(open_rgb(src), size, method=Image.Resampling.LANCZOS)
    image.save(dst, quality=quality, optimize=True)


def save_contain(src, dst, size, bg=(255, 255, 255), quality=88):
    image = open_rgb(src)
    image.thumbnail(size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", size, bg)
    canvas.paste(image, ((size[0] - image.width) // 2, (size[1] - image.height) // 2))
    canvas.save(dst, quality=quality, optimize=True)


def rounded_paste(canvas, src, box, radius=24):
    image = ImageOps.fit(
        open_rgb(src),
        (box[2] - box[0], box[3] - box[1]),
        method=Image.Resampling.LANCZOS,
    )
    mask = Image.new("L", image.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, image.width, image.height], radius=radius, fill=255)
    canvas.paste(image, (box[0], box[1]), mask)


def add_border(canvas, box, radius=24, color=(226, 221, 208)):
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle(box, radius=radius, outline=color, width=2)


def build_hero():
    canvas = Image.new("RGB", (1360, 860), (246, 244, 237))
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle([650, 55, 1320, 775], radius=36, fill=(236, 233, 222))
    draw.rounded_rectangle([704, 100, 1290, 532], radius=28, fill=(255, 255, 252))

    blocks = [
        ("product-19.jpg", (712, 118, 980, 386), 24),
        ("product-05.jpg", (1000, 118, 1270, 386), 24),
        ("product-10.jpg", (738, 416, 1038, 688), 24),
        ("product-18.jpg", (1062, 416, 1270, 688), 24),
        ("product-25.jpg", (628, 638, 885, 795), 18),
        ("product-24.jpg", (906, 638, 1074, 795), 18),
        ("product-26.jpg", (1095, 638, 1320, 795), 18),
        ("product-11.jpg", (470, 444, 640, 622), 24),
        ("product-13.jpg", (400, 626, 626, 772), 24),
    ]

    for filename, box, radius in blocks:
        rounded_paste(canvas, RAW / "products" / filename, box, radius)
        add_border(canvas, box, radius)

    canvas.save(SITE / "hero-siman-collage.jpg", quality=90, optimize=True)


def build_oem_collage():
    canvas = Image.new("RGB", (960, 420), (246, 244, 237))
    blocks = [
        ("product-09.jpg", (32, 38, 276, 338), 22),
        ("product-21.jpg", (300, 38, 544, 338), 22),
        ("product-16.jpg", (568, 38, 812, 338), 22),
        ("product-07.jpg", (700, 112, 932, 398), 22),
    ]

    for filename, box, radius in blocks:
        rounded_paste(canvas, RAW / "products" / filename, box, radius)

    canvas.save(SITE / "oem-packaging-collage.jpg", quality=88, optimize=True)


def main():
    SITE.mkdir(parents=True, exist_ok=True)

    logo = crop_nonwhite(open_rgb(RAW / "logos" / "product-03.png"))
    logo.thumbnail((520, 180), Image.Resampling.LANCZOS)
    logo.save(SITE / "logo-siman.png", optimize=True)

    cover_assets = {
        "category-shampoo-bar.jpg": "product-19.jpg",
        "category-handmade-soap.jpg": "product-18.jpg",
        "category-laundry-soap.jpg": "product-05.jpg",
        "category-soap-base.jpg": "product-10.jpg",
        "category-transparent-soap.jpg": "product-11.jpg",
        "category-oem-soap.jpg": "product-21.jpg",
        "product-cleansing-soap.jpg": "product-16.jpg",
        "product-essential-soap.jpg": "product-03.jpg",
        "product-laundry-pack.jpg": "product-04.jpg",
        "product-soap-base-stack.jpg": "product-10.jpg",
        "product-shampoo-bar.jpg": "product-19.jpg",
        "product-handmade-gift.jpg": "product-17.jpg",
        "factory-building.jpg": "product-24.jpg",
        "factory-workshop.jpg": "product-22.jpg",
        "factory-production-line.jpg": "product-25.jpg",
        "factory-warehouse.jpg": "product-26.jpg",
        "factory-courtyard.jpg": "product-27.jpg",
        "factory-lab-1.jpg": "product-28.jpg",
        "factory-lab-2.jpg": "product-29.jpg",
        "soap-base-blocks.jpg": "product-13.jpg",
    }

    for output_name, source_name in cover_assets.items():
        is_factory = output_name.startswith("factory") or output_name == "soap-base-blocks.jpg"
        size = (720, 480) if is_factory else (640, 480)
        save_cover(RAW / "products" / source_name, SITE / output_name, size, quality=87)

    cert_sources = [
        "cert-01.png",
        "cert-01.jpg",
        "cert-02.jpg",
        "cert-02.png",
        "cert-03.png",
    ]
    for index, source_name in enumerate(cert_sources, 1):
        save_contain(
            RAW / "certifications" / source_name,
            SITE / f"certificate-{index}.jpg",
            (420, 560),
            bg=(255, 255, 255),
            quality=88,
        )

    build_hero()
    build_oem_collage()
    print(f"Prepared {len(list(SITE.glob('*')))} assets in {SITE}")


if __name__ == "__main__":
    main()
