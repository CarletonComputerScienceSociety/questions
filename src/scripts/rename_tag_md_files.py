import os
import re

def rename_md_files(directory):
    # Define the regular expression pattern
    pattern = re.compile(r'-(\d+(\.\d+)*)(?=\()')

    # Walk through the directory
    for filename in os.listdir(directory):
        # Check if the file is a markdown file
        if filename.endswith('.md'):
            # Remove the numbers and hyphens before them
            new_filename = re.sub(pattern, '', filename)
            
            # Check for the opening bracket and remove the - before it
            if '(' in new_filename:
                new_filename = re.sub(r'-\([^)]*\)', '', new_filename)
            
            # Define the full path for old and new filenames
            old_filepath = os.path.join(directory, filename)
            new_filepath = os.path.join(directory, new_filename)
            
            # Check if the new file path already exists
            if not os.path.exists(new_filepath):
                # Rename the file
                os.rename(old_filepath, new_filepath)
            else:
                print(f"Skipping {filename}: {new_filepath} already exists.")

directory_path = 'C:\\Users\\johnl\\OneDrive\\Documents\\GitHub\\questions\\src\\content\\tags\\comp2804'  # Replace with your directory path
rename_md_files(directory_path)
