import os
from PIL import Image

def crop_center_square(path):
    try:
        if not os.path.exists(path):
            print(f"File not found: {path}")
            return

        img = Image.open(path)
        min_dim = min(img.size)
        
        # Calculate center crop
        left = (img.width - min_dim) / 2
        top = (img.height - min_dim) / 2
        right = (img.width + min_dim) / 2
        bottom = (img.height + min_dim) / 2
        
        # Crop
        img_cropped = img.crop((left, top, right, bottom))
        
        # Save
        img_cropped.save(path)
        print(f"Successfully cropped {path} to {min_dim}x{min_dim}")
    except Exception as e:
        print(f"Error cropping {path}: {e}")

if __name__ == "__main__":
    base_dir = r"c:\Users\lodhi\Documents\GitHub\PersonalWebsite\public\logos"
    files_to_crop = ["retailogists.png", "discord.png"]
    
    for filename in files_to_crop:
        full_path = os.path.join(base_dir, filename)
        crop_center_square(full_path)
