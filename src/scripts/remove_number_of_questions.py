import os

def remove_lines_with_phrase(file_path, phrase):
    """Remove lines containing the specified phrase from the given file."""
    try:
        with open(file_path, 'r') as file:
            lines = file.readlines()

        # Write lines back to file, excluding those containing the phrase
        with open(file_path, 'w') as file:
            for line in lines:
                if phrase not in line:
                    file.write(line)

    except Exception as e:
        print(f"Error processing file {file_path}: {e}")

def process_directory(root_dir, phrase):
    """Recursively process directories to remove lines from .md files."""
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.md'):
                file_path = os.path.join(dirpath, filename)
                remove_lines_with_phrase(file_path, phrase)

if __name__ == "__main__":
    directory_path = "C:\\Users\\johnl\\OneDrive\\Documents\\GitHub\\questions\\src\\content\\tags"
    search_phrase = "number_of_questions"
    
    if os.path.isdir(directory_path):
        process_directory(directory_path, search_phrase)
        print("Processing complete.")
    else:
        print("The provided path is not a directory.")
