from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
RAW_PRODUCTS = ROOT / "source-assets" / "raw" / "products"
OUT = ROOT / "public" / "assets" / "site"

CANVAS_SIZE = (900, 560)
CREAM = (248, 246, 240)
FLOOR = (238, 234, 224)
LINE = (225, 221, 211)
GREEN = (23, 63, 34)


def open_image(filename):
    image = Image.open(RAW_PRODUCTS / filename)
    image = ImageOps.exif_transpose(image)
    return image.convert("RGB")


def fit_contain(image, size):
    fitted = image.copy()
    fitted.thumbnail(size, Image.Resampling.LANCZOS)
    return fitted


def soft_background(size=CANVAS_SIZE):
    canvas = Image.new("RGB", size, CREAM)
    draw = ImageDraw.Draw(canvas)
    width, height = size
    for y in range(height):
        ratio = y / max(1, height - 1)
        color = tuple(int(CREAM[i] * (1 - ratio) + FLOOR[i] * ratio) for i in range(3))
        draw.line((0, y, width, y), fill=color)
    draw.ellipse((-80, int(height * 0.76), width + 80, int(height * 1.08)), fill=(232, 228, 218))
    return canvas.convert("RGBA")


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


def add_shadow(canvas, box, opacity=56):
    x1, y1, x2, y2 = box
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(shadow)
    draw.ellipse((x1 - 18, y2 - 28, x2 + 18, y2 + 38), fill=(23, 45, 25, opacity))
    canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(20)))


def paste_photo(canvas, image, center, max_size, radius=28, shadow=True):
    photo = fit_contain(image, max_size).convert("RGBA")
    box = (
        int(center[0] - photo.width / 2),
        int(center[1] - photo.height / 2),
        int(center[0] + photo.width / 2),
        int(center[1] + photo.height / 2),
    )
    if shadow:
        add_shadow(canvas, box)

    mask = rounded_mask(photo.size, radius)
    canvas.alpha_composite(photo, (box[0], box[1]))
    border = Image.new("RGBA", photo.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(border)
    draw.rounded_rectangle(
        (0, 0, photo.width - 1, photo.height - 1),
        radius=radius,
        outline=(255, 255, 255, 170),
        width=3,
    )
    canvas.alpha_composite(Image.composite(border, Image.new("RGBA", photo.size, (0, 0, 0, 0)), mask), (box[0], box[1]))
    return box


def paste_cutout(canvas, image, center, max_size, bg_color=None, tolerance=68, radius=20):
    product = fit_contain(image, max_size).convert("RGBA")
    pixels = product.load()
    width, height = product.size
    if bg_color is None:
        samples = [
            product.getpixel((2, 2))[:3],
            product.getpixel((width - 3, 2))[:3],
            product.getpixel((2, height - 3))[:3],
            product.getpixel((width - 3, height - 3))[:3],
        ]
        bg_color = tuple(sum(c[i] for c in samples) // len(samples) for i in range(3))

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            dist = ((r - bg_color[0]) ** 2 + (g - bg_color[1]) ** 2 + (b - bg_color[2]) ** 2) ** 0.5
            if dist < tolerance:
                pixels[x, y] = (r, g, b, 0)
            elif dist < tolerance + 24:
                pixels[x, y] = (r, g, b, int(a * (dist - tolerance) / 24))

    alpha = product.getchannel("A").filter(ImageFilter.GaussianBlur(0.7))
    product.putalpha(alpha)
    box = (
        int(center[0] - product.width / 2),
        int(center[1] - product.height / 2),
        int(center[0] + product.width / 2),
        int(center[1] + product.height / 2),
    )
    add_shadow(canvas, box, opacity=44)
    canvas.alpha_composite(product, (box[0], box[1]))

    if radius:
        draw = ImageDraw.Draw(canvas)
        draw.rounded_rectangle((70, 48, CANVAS_SIZE[0] - 70, CANVAS_SIZE[1] - 46), radius=radius, outline=(255, 255, 255, 95), width=2)


def crop(filename, box):
    return open_image(filename).crop(box)


def save_card(name, image, mode="photo", max_size=(710, 390), center=(450, 285), **kwargs):
    canvas = soft_background()
    if mode == "cutout":
        paste_cutout(canvas, image, center=center, max_size=max_size, **kwargs)
    else:
        paste_photo(canvas, image, center=center, max_size=max_size, **kwargs)
    canvas.convert("RGB").save(OUT / name, quality=91, optimize=True)


def save_composite(name, tiles):
    canvas = soft_background((1200, 720))
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((42, 44, 1158, 676), radius=34, fill=(246, 243, 235, 190), outline=(231, 227, 216, 220), width=2)
    for item in tiles:
        filename, source_box, center, max_size, radius = item
        tile = crop(filename, source_box)
        paste_photo(canvas, tile, center=center, max_size=max_size, radius=radius)
    canvas.convert("RGB").save(OUT / name, quality=91, optimize=True)


def soft_paste(canvas, image, box, feather=28, opacity=255):
    image = ImageOps.fit(image, (box[2] - box[0], box[3] - box[1]), method=Image.Resampling.LANCZOS).convert("RGBA")
    mask = Image.new("L", image.size, opacity)
    edge = Image.new("L", image.size, 0)
    draw = ImageDraw.Draw(edge)
    draw.rectangle((feather, feather, image.width - feather, image.height - feather), fill=opacity)
    mask = edge.filter(ImageFilter.GaussianBlur(feather // 2))
    canvas.alpha_composite(Image.composite(image, Image.new("RGBA", image.size, (0, 0, 0, 0)), mask), (box[0], box[1]))


def save_banner(name, filename, source_box, media_box, accent=(229, 236, 223)):
    canvas = Image.new("RGBA", (1680, 620), CREAM + (255,))
    draw = ImageDraw.Draw(canvas)
    for x in range(canvas.width):
        ratio = x / max(canvas.width - 1, 1)
        color = tuple(int(CREAM[i] * (1 - ratio) + accent[i] * ratio) for i in range(3))
        draw.line((x, 0, x, canvas.height), fill=color + (255,))
    draw.ellipse((770, 455, 1715, 740), fill=(224, 219, 207, 170))

    image = crop(filename, source_box)
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    sd.rounded_rectangle(
        (media_box[0] + 8, media_box[1] + 18, media_box[2] + 12, media_box[3] + 22),
        radius=34,
        fill=(23, 45, 25, 42),
    )
    canvas.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(20)))

    fitted = ImageOps.fit(image, (media_box[2] - media_box[0], media_box[3] - media_box[1]), method=Image.Resampling.LANCZOS).convert("RGBA")
    mask = rounded_mask(fitted.size, 34)
    canvas.alpha_composite(Image.composite(fitted, Image.new("RGBA", fitted.size, (0, 0, 0, 0)), mask), (media_box[0], media_box[1]))
    border = Image.new("RGBA", fitted.size, (0, 0, 0, 0))
    bd = ImageDraw.Draw(border)
    bd.rounded_rectangle((0, 0, fitted.width - 1, fitted.height - 1), radius=34, outline=(255, 255, 255, 135), width=3)
    canvas.alpha_composite(border, (media_box[0], media_box[1]))
    canvas.convert("RGB").save(OUT / name, quality=92, optimize=True)


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    save_card(
        "real-clean-soap.jpg",
        crop("product-06.jpg", (36, 330, 428, 620)),
        max_size=(620, 350),
        center=(450, 290),
    )
    save_card(
        "real-clean-handmade-soap.jpg",
        crop("product-18.jpg", (42, 92, 760, 630)),
        max_size=(780, 420),
        center=(450, 282),
    )
    save_card(
        "real-clean-laundry-soap.jpg",
        crop("product-08.jpg", (185, 188, 648, 612)),
        max_size=(650, 395),
        center=(450, 286),
    )
    save_card(
        "real-clean-soap-base.jpg",
        crop("product-13.jpg", (50, 110, 1455, 865)),
        max_size=(780, 420),
        center=(450, 286),
    )
    save_card(
        "real-clean-shampoo-bar.jpg",
        crop("product-19.jpg", (218, 214, 704, 675)),
        max_size=(650, 420),
        center=(450, 286),
    )
    save_card(
        "real-clean-olive-oil-soap.jpg",
        crop("product-20.jpg", (118, 430, 674, 1100)),
        max_size=(440, 470),
        center=(450, 290),
    )
    save_card(
        "real-clean-essential-oil-soap.jpg",
        crop("product-17.jpg", (36, 134, 728, 620)),
        max_size=(760, 405),
        center=(450, 286),
    )
    save_card(
        "real-clean-transparent-soap.jpg",
        crop("product-14.jpg", (88, 110, 1550, 900)),
        max_size=(780, 420),
        center=(450, 286),
    )
    save_card(
        "real-clean-goat-milk-soap.jpg",
        crop("product-02.jpg", (120, 455, 668, 1110)),
        max_size=(440, 470),
        center=(450, 290),
    )

    save_composite(
        "real-clean-oem-solutions.jpg",
        [
            ("product-01.jpg", (54, 330, 428, 640), (315, 362), (360, 300), 28),
            ("product-03.jpg", (74, 298, 430, 608), (585, 350), (345, 300), 28),
            ("product-07.jpg", (72, 336, 432, 612), (860, 356), (360, 280), 28),
        ],
    )

    save_composite(
        "hero-real-product-scene.jpg",
        [
            ("product-18.jpg", (44, 96, 760, 632), (390, 248), (520, 385), 30),
            ("product-08.jpg", (126, 174, 688, 620), (820, 242), (420, 330), 30),
            ("product-19.jpg", (218, 214, 704, 675), (790, 510), (390, 330), 30),
            ("product-13.jpg", (74, 112, 1500, 855), (386, 520), (520, 290), 30),
        ],
    )

    save_composite(
        "oem-real-packaging.jpg",
        [
            ("product-01.jpg", (54, 330, 428, 640), (286, 350), (345, 290), 28),
            ("product-03.jpg", (74, 298, 430, 608), (590, 350), (345, 290), 28),
            ("product-09.jpg", (70, 330, 430, 620), (890, 350), (345, 290), 28),
        ],
    )

    save_banner(
        "banner-oem-direct.jpg",
        "product-08.jpg",
        (118, 162, 706, 628),
        (865, 86, 1568, 552),
        accent=(236, 229, 214),
    )
    save_banner(
        "banner-custom-handmade.jpg",
        "product-18.jpg",
        (35, 86, 760, 640),
        (792, 72, 1602, 576),
        accent=(238, 232, 218),
    )
    save_banner(
        "banner-soap-base-supply.jpg",
        "product-13.jpg",
        (35, 60, 1580, 920),
        (792, 72, 1602, 576),
        accent=(226, 234, 225),
    )

    print("Generated real product assets")


if __name__ == "__main__":
    main()
