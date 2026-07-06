from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "assets" / "site"
REF_IMAGE = ROOT / "source-assets" / "reference" / "SIMAN_homepage_design_4K_crisp.jpg"

CANVAS = (900, 560)
CREAM = (248, 246, 240)
PAPER = (255, 255, 255)
GREEN = (23, 63, 34)
SAGE = (128, 145, 105)
GOLD = (211, 169, 89)
SOAP = (232, 205, 153)


def add_gradient_background(img, tone=(236, 241, 231)):
    draw = ImageDraw.Draw(img)
    width, height = img.size
    for y in range(height):
        ratio = y / max(height - 1, 1)
        base = tuple(int(CREAM[i] * (1 - ratio) + tone[i] * ratio) for i in range(3))
        draw.line([(0, y), (width, y)], fill=base + (255,))
    draw.rectangle((0, int(height * 0.74), width, height), fill=(242, 238, 229, 255))
    return img


def paste_center(canvas, layer, center):
    x = int(center[0] - layer.width / 2)
    y = int(center[1] - layer.height / 2)
    canvas.alpha_composite(layer, (x, y))


def shadow_layer(size, box, blur=24, opacity=64):
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    draw.ellipse(box, fill=(23, 45, 25, opacity))
    return layer.filter(ImageFilter.GaussianBlur(blur))


def rounded_bar(width, height, color, radius=36, speckles=False, translucent=False):
    pad = 48
    layer = Image.new("RGBA", (width + pad * 2, height + pad * 2), (0, 0, 0, 0))
    mask = Image.new("L", layer.size, 0)
    md = ImageDraw.Draw(mask)
    box = (pad, pad, pad + width, pad + height)
    md.rounded_rectangle(box, radius=radius, fill=210 if translucent else 255)

    fill = Image.new("RGBA", layer.size, (0, 0, 0, 0))
    fd = ImageDraw.Draw(fill)
    for y in range(height):
        ratio = y / max(height - 1, 1)
        shade = tuple(max(0, min(255, int(color[i] * (1 - ratio * 0.16) + 255 * ratio * 0.13))) for i in range(3))
        fd.line((pad, pad + y, pad + width, pad + y), fill=shade + (210 if translucent else 255,))
    layer.alpha_composite(Image.composite(fill, Image.new("RGBA", layer.size, (0, 0, 0, 0)), mask))

    draw = ImageDraw.Draw(layer)
    draw.rounded_rectangle(box, radius=radius, outline=(255, 255, 255, 140), width=4)
    draw.arc((pad + 20, pad + 14, pad + width - 22, pad + height - 8), 190, 346, fill=(255, 255, 255, 70), width=5)
    if speckles:
        for i in range(54):
            x = pad + 18 + (i * 47) % max(width - 36, 1)
            y = pad + 16 + (i * 31) % max(height - 32, 1)
            draw.ellipse((x, y, x + 4, y + 4), fill=(104, 76, 47, 72))
    return layer


def place_bar(canvas, center, width, height, color, angle=0, radius=36, speckles=False, translucent=False):
    shadow = shadow_layer(canvas.size, (center[0] - width * 0.56, center[1] + height * 0.21, center[0] + width * 0.56, center[1] + height * 0.47))
    canvas.alpha_composite(shadow)
    bar = rounded_bar(width, height, color, radius, speckles, translucent)
    if angle:
        bar = bar.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)
    paste_center(canvas, bar, center)


def leaf(size=(86, 34), color=(94, 123, 78), angle=0):
    layer = Image.new("RGBA", (size[0] + 18, size[1] + 18), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    box = (9, 9, size[0] + 9, size[1] + 9)
    draw.ellipse(box, fill=color + (225,), outline=(255, 255, 255, 80), width=2)
    draw.line((13, size[1] // 2 + 9, size[0] + 5, size[1] // 2 + 9), fill=(244, 241, 229, 125), width=2)
    return layer.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)


def place_leaf(canvas, center, angle=0, scale=1.0, color=(94, 123, 78)):
    lf = leaf((int(86 * scale), int(34 * scale)), color, angle)
    paste_center(canvas, lf, center)


def draw_bottle(canvas, x, y, w, h, color, label=True):
    draw = ImageDraw.Draw(canvas)
    canvas.alpha_composite(shadow_layer(canvas.size, (x - 20, y + h - 15, x + w + 28, y + h + 38), blur=22, opacity=58))
    draw.rounded_rectangle((x, y + 58, x + w, y + h), radius=44, fill=color + (228,), outline=(255, 255, 255, 105), width=3)
    draw.rounded_rectangle((x + w * 0.36, y + 28, x + w * 0.64, y + 74), radius=12, fill=(32, 31, 29, 245))
    draw.rounded_rectangle((x + w * 0.26, y + 14, x + w * 0.78, y + 32), radius=8, fill=(25, 24, 23, 245))
    draw.rectangle((x + w * 0.58, y + 5, x + w * 0.95, y + 17), fill=(25, 24, 23, 245))
    draw.line((x + w * 0.55, y + 62, x + w * 0.25, y + h - 20), fill=(255, 255, 255, 45), width=8)
    if label:
        draw.rounded_rectangle((x + w * 0.19, y + h * 0.48, x + w * 0.81, y + h * 0.75), radius=12, fill=(248, 244, 234, 230))


def draw_box(canvas, x, y, w, h, color):
    draw = ImageDraw.Draw(canvas)
    canvas.alpha_composite(shadow_layer(canvas.size, (x - 22, y + h - 10, x + w + 28, y + h + 32), blur=20, opacity=52))
    draw.rounded_rectangle((x, y, x + w, y + h), radius=12, fill=color + (255,), outline=(255, 255, 255, 150), width=3)
    draw.line((x + 28, y + 58, x + w - 28, y + 58), fill=(255, 255, 255, 100), width=3)
    draw.rounded_rectangle((x + 52, y + 92, x + w - 52, y + h - 58), radius=10, outline=(70, 83, 54, 92), width=4)


def new_card(tone=(236, 241, 231)):
    return add_gradient_background(Image.new("RGBA", CANVAS, CREAM + (255,)), tone)


def save_card(name, draw_func):
    img = new_card()
    draw_func(img)
    img = img.convert("RGB")
    img.save(OUT_DIR / name, quality=92, optimize=True)


def soap_family(img):
    place_bar(img, (360, 330), 280, 128, SOAP, angle=-4, speckles=True)
    place_bar(img, (520, 306), 300, 134, (145, 155, 102), angle=3)
    place_bar(img, (470, 236), 260, 116, (238, 218, 178), angle=0, speckles=True)
    place_leaf(img, (570, 198), angle=-28, scale=1.1)
    place_leaf(img, (625, 220), angle=25, scale=0.85)


def handmade_family(img):
    place_bar(img, (328, 332), 250, 120, (220, 146, 116), angle=-5, speckles=True)
    place_bar(img, (478, 316), 265, 125, (146, 162, 115), angle=3, speckles=True)
    place_bar(img, (566, 236), 230, 110, (242, 218, 184), angle=0, speckles=True)
    place_leaf(img, (350, 214), angle=-34)
    place_leaf(img, (404, 194), angle=18, scale=0.82)


def laundry_family(img):
    place_bar(img, (332, 330), 315, 118, (236, 206, 92), angle=-4, radius=18)
    place_bar(img, (525, 302), 335, 122, (246, 228, 126), angle=3, radius=18)
    place_bar(img, (478, 224), 270, 92, (243, 218, 99), radius=18)
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((202, 380, 690, 415), radius=17, fill=(221, 230, 226, 210))


def soap_base_family(img):
    for i in range(4):
        place_bar(img, (356 + i * 58, 350 - i * 36), 250, 92, (249, 249, 246), angle=-2, radius=16)
    for i in range(3):
        place_bar(img, (560 + i * 38, 326 - i * 34), 220, 86, (244, 246, 242), angle=2, radius=16)
    place_leaf(img, (650, 180), angle=-22, scale=0.75, color=(122, 144, 100))


def shampoo_family(img):
    draw = ImageDraw.Draw(img)
    img.alpha_composite(shadow_layer(img.size, (218, 362, 702, 432), blur=24, opacity=58))
    for x, y, color in [(330, 308, (119, 144, 92)), (462, 292, (156, 174, 119)), (572, 326, (227, 213, 165))]:
        draw.ellipse((x - 96, y - 96, x + 96, y + 96), fill=color + (255,), outline=(255, 255, 255, 160), width=4)
        draw.ellipse((x - 42, y - 42, x + 42, y + 42), outline=(255, 255, 255, 78), width=3)
    place_leaf(img, (456, 204), angle=-25, scale=0.9)


def oem_family(img):
    draw_bottle(img, 248, 140, 130, 258, (130, 143, 91))
    draw_box(img, 500, 206, 210, 188, (151, 157, 112))
    draw_box(img, 380, 248, 170, 150, (222, 191, 144))
    place_bar(img, (516, 414), 248, 98, (205, 190, 138), radius=22, speckles=True)


def olive_family(img):
    place_bar(img, (382, 330), 280, 118, (133, 149, 83), angle=-4)
    place_bar(img, (530, 286), 300, 124, (166, 177, 105), angle=4)
    place_leaf(img, (455, 208), angle=-28, scale=1.05)
    place_leaf(img, (514, 210), angle=24, scale=0.82)


def transparent_family(img):
    place_bar(img, (360, 330), 280, 126, (218, 174, 96), angle=-4, radius=24, translucent=True)
    place_bar(img, (536, 294), 315, 138, (236, 204, 137), angle=4, radius=24, translucent=True)
    place_bar(img, (470, 222), 245, 96, (226, 229, 202), radius=22, translucent=True)
    place_leaf(img, (580, 208), angle=-26, scale=0.8)


def goat_milk_family(img):
    place_bar(img, (354, 336), 300, 126, (243, 229, 200), angle=-5, speckles=True)
    place_bar(img, (528, 296), 300, 134, (234, 214, 180), angle=4)
    place_bar(img, (470, 218), 238, 100, (251, 239, 218), radius=30)
    draw = ImageDraw.Draw(img)
    draw.ellipse((230, 180, 278, 240), fill=(255, 255, 255, 210))
    draw.ellipse((250, 152, 310, 226), fill=(255, 255, 255, 180))


def essential_family(img):
    handmade_family(img)
    draw = ImageDraw.Draw(img)
    draw.ellipse((598, 162, 642, 206), fill=(224, 184, 108, 220))
    draw.rectangle((615, 124, 626, 166), fill=(235, 220, 190, 230))
    draw.rounded_rectangle((598, 116, 642, 132), radius=6, fill=(204, 159, 80, 240))


def extract_reference_assets():
    if not REF_IMAGE.exists():
        return
    ref = Image.open(REF_IMAGE).convert("RGB")
    crops = {
        "hero-studio-scene.jpg": (1960, 205, 3630, 1060),
        "oem-studio-packaging.jpg": (2550, 2210, 3430, 2690),
    }
    for name, box in crops.items():
        image = ref.crop(box)
        image.save(OUT_DIR / name, quality=92, optimize=True)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    extract_reference_assets()
    save_card("clean-soap.jpg", soap_family)
    save_card("clean-handmade-soap.jpg", handmade_family)
    save_card("clean-laundry-soap.jpg", laundry_family)
    save_card("clean-soap-base.jpg", soap_base_family)
    save_card("clean-shampoo-bar.jpg", shampoo_family)
    save_card("clean-oem-solutions.jpg", oem_family)
    save_card("clean-olive-oil-soap.jpg", olive_family)
    save_card("clean-essential-oil-soap.jpg", essential_family)
    save_card("clean-transparent-soap.jpg", transparent_family)
    save_card("clean-goat-milk-soap.jpg", goat_milk_family)


if __name__ == "__main__":
    main()
