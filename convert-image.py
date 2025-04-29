#!/usr/bin/env python3
"""
Simple script to convert HEIC image to JPG using Pillow and pillow-heif
Requirements:
    pip install pillow pillow-heif
"""

try:
    from PIL import Image
    import pillow_heif
    import os
    import sys

    def convert_heic_to_jpg(input_path, output_path):
        """Convert HEIC image to JPG format"""
        try:
            # Register HEIF opener
            pillow_heif.register_heif_opener()
            
            # Open the HEIC image
            image = Image.open(input_path)
            
            # Convert to RGB (in case it's RGBA)
            if image.mode != "RGB":
                image = image.convert("RGB")
            
            # Save as JPG
            image.save(output_path, "JPEG", quality=90)
            print(f"Successfully converted {input_path} to {output_path}")
            return True
        except Exception as e:
            print(f"Error converting image: {e}")
            return False

    if __name__ == "__main__":
        input_file = "ritesh profile photo.HEIC"
        output_file = "ritesh-profile.jpg"
        
        if len(sys.argv) > 1:
            input_file = sys.argv[1]
        if len(sys.argv) > 2:
            output_file = sys.argv[2]
        
        if not os.path.exists(input_file):
            print(f"Error: Input file '{input_file}' not found.")
            sys.exit(1)
        
        success = convert_heic_to_jpg(input_file, output_file)
        
        if success:
            print("\nNow update your HTML file to use the new image:")
            print('1. Open index.html')
            print('2. Find the line with: <img src="profile-placeholder.svg" alt="Ritesh Ranjan">')
            print('3. Change it to: <img src="ritesh-profile.jpg" alt="Ritesh Ranjan">')
        else:
            print("\nConversion failed. Please try using an online converter:")
            print("1. Visit https://heictojpg.com/ or https://cloudconvert.com/heic-to-jpg")
            print("2. Upload your HEIC file and convert it")
            print("3. Save the converted JPG file as 'ritesh-profile.jpg' in this folder")
            print("4. Update the HTML file as described above")

except ImportError:
    print("Required libraries not found. Please install them with:")
    print("pip install pillow pillow-heif")
    print("\nOr use an online converter instead:")
    print("1. Visit https://heictojpg.com/ or https://cloudconvert.com/heic-to-jpg")
    print("2. Upload your HEIC file and convert it")
    print("3. Save the converted JPG file as 'ritesh-profile.jpg' in this folder")
    print("4. Update your HTML file to use the new image")
