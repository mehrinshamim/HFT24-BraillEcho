from PIL import Image
from supabase import create_client
def crop_image(image_path):
    """Crop an image into five smaller images."""
    # Open the image
    print(image_path,"dsdsd")

    img = Image.open(image_path)
    
    # Get the dimensions of the image
    width, height = img.size
    
    # Calculate the width and height of each cropped image
    crop_width = width // 5
    crop_height = height
    
    # Crop the image into five smaller images
    cropped_images = []
    for i in range(5):
        left = i * crop_width
        upper = 0
        right = left + crop_width
        lower = crop_height
        box = (left, upper, right, lower)
        cropped_img = img.crop(box)
        cropped_images.append(cropped_img)
    
    return cropped_images

def save_images(images, output_dir):
    """Save cropped images to the output directory."""
    for i, img in enumerate(images):
        rgb_img = img.convert("RGB")  # Convert the image to RGB format
        rgb_img.save(f"{output_dir}/letter_{i+1}.jpg")

def list_letters():
    import glob
    from PIL import Image

    # Find all JPEG images in a directory
    images = []
    for filename in glob.glob('cropped/*.jpg'):
        img = Image.open(filename)
        images.append(img)
    return images

    # Now the `images` list contains all the opened images

def braille_dict():    
    from PIL import Image

    # Create an empty dictionary
    image_dict = {}

    # Open all images in a directory
    for filename in ['h.jpg','e.jpg','l.jpg','o.jpg','s.jpg','m.jpg','i.jpg']:
        path='dict//'+filename
        # Get the first letter of the filename as the key
        key = filename[0].upper() if filename[0].isalpha() else 'X'  

        # Open the image and add it to the dictionary
        img = Image.open(path)
        image_dict[key] = img
    return image_dict

    # Now the `image_dict` dictionary contains the images with alphabets as keys


def final1():

    from PIL import Image
    import imagehash
    image_list=list_letters()
    image_dict=braille_dict()
    print(image_dict)
    text=''
    print("noooo")
    # Load the images
    for a in image_list:
        image1=a
        for c,b in image_dict.items():
            image2=b
            print(c)

            # Compute the perceptual hash (phash) for each image
            hash1 = imagehash.phash(image1)
            hash2 = imagehash.phash(image2)

            # Compare the similarity between the two hashes
            similarity = 1 - (hash1 - hash2) / len(hash1.hash) ** 2
            print(similarity)

            # Print the similarity
            print("Similarity between the images: {:.2f}%".format(similarity * 100))
            if similarity*100==100:
                # Find the index of the value in the values sequence

            
                text+=c
                print(text,"checkk")
                
    return text

def tts(iptext):
    from gtts import gTTS
    import os
    import webbrowser


    # Language in which you want to convert
    language = "en"  # English

    # Pass text and language to the engine
    tts = gTTS(text=iptext, lang=language, slow=False)



    # Save the converted audio to a file
    tts.save("output.mp3")

    # Play the converted audio
    webbrowser.open("output.mp3")




def upload_to_supabase(file_path, bucket_name, supabase_url, supabase_key):
    # Create a Supabase client
    supabase = create_client(supabase_url, supabase_key)

    # Upload file to Supabase storage
    with open(file_path, 'rb') as f:
        supabase.storage.from_(bucket_name).upload(file=f, path='first', file_options={"content-type": "audio/mpeg"})

def final(imag):
    image_path = "smile.png"  # Path to the input image
    output_dir = "cropped"  # Output directory to save the cropped images
    from random import randint
    # Crop the image
    cropped_images = crop_image(image_path)
    
    # Save the cropped images
    save_images(cropped_images, output_dir)
    
    #print("Images cropped and saved successfully.")

    #image_list=list_letters()
    #image_dict=braille_dict()
    text=final1()
    print(text,"smileeeeee")
    tts(text)
    url = 'https://frywdlmmvfdyhcxqytfq.supabase.co'
    key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyeXdkbG1tdmZkeWhjeHF5dGZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODgxMjkwNSwiZXhwIjoyMDI0Mzg4OTA1fQ.kuwyj8COuOUtT8giHhMcDX99VJzkn2SqFV4oPN9n8y4'
    n=randint(1, 1000)
    file_path = 'output{n}.mp3'
    bucket_name = "audio's"
    
    upload_to_supabase(file_path, bucket_name, url, key)
    return(text)

#from PIL import Image

'''# Open all images in a directory
images = []
for i in range(5):
    filename="cropped/letter_"+str(i+1)+'.jpg'

    img = Image.open(filename)
    images.append(img)

# Now the `images` list contains all the opened images'''



