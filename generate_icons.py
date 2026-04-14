from PIL import Image

def create_icons():
    # Cargar imagen original
    img = Image.open('images/castillo_osaka.png')
    
    # Hacerla cuadrada (recorte central)
    width, height = img.size
    new_size = min(width, height)
    left = (width - new_size) / 2
    top = (height - new_size) / 2
    right = (width + new_size) / 2
    bottom = (height + new_size) / 2
    img_square = img.crop((left, top, right, bottom))
    
    # Redimensionar a tamaños estrictos para PWA
    img_192 = img_square.resize((192, 192), Image.Resampling.LANCZOS)
    img_192.save('images/icon-192.png')

    img_512 = img_square.resize((512, 512), Image.Resampling.LANCZOS)
    img_512.save('images/icon-512.png')
    
    print("Iconos 192x192 y 512x512 generados con éxito.")

if __name__ == '__main__':
    create_icons()
