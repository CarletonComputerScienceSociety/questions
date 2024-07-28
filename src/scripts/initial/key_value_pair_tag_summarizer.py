import os
import re

def find_unique_tags(directory):
    unique_tags = set()
    tag_pattern = re.compile(r'tags:\s*\n((?:\s*-\s*[^\n]+\n)*)', re.IGNORECASE)

    for root, _, files in os.walk(directory):
        if "index.md" in files:
            index_file_path = os.path.join(root, "index.md")
            
            with open(index_file_path, "r", encoding="utf-8") as inf:
                index_content = inf.read()
                tag_match = tag_pattern.search(index_content)
                
                if tag_match:
                    tags_block = tag_match.group(1)
                    tags = re.findall(r'-\s*([^\n]+)', tags_block)
                    unique_tags.update(tags)
    
    return unique_tags

def parse_tag(tag):
    match = re.search(r'\(([\d.]+)\)$', tag)
    if match:
        numbers = tuple(map(int, match.group(1).split('.')))
    else:
        numbers = ()
    return numbers

def sort_tags(tags):
    return sorted(tags, key=lambda tag: (parse_tag(tag), tag))

def create_display_tags(tags):
    display_tags = {}
    for tag in tags:
        key = "comp2804-" + tag.lower().replace(" ", "-")
        display_tags[key] = tag
    return display_tags

if __name__ == "__main__":
    # Define the specific directory path here
    directory = r"C:\Users\johnl\OneDrive\Documents\GitHub\questions\src\content\questions\comp2804"
    unique_tags = find_unique_tags(directory)
    
    # Sort the tags with the custom sorting function
    sorted_tags = sort_tags(unique_tags)
    
    # Create display tags
    display_tags = create_display_tags(sorted_tags)
    
    # Write display tags to a file
    output_path = os.path.join(directory, "displayTags.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("const displayTags = {\n")
        for key, display in display_tags.items():
            f.write(f'  "{key}": "{display}",\n')
        f.write("};\n")
    
    print(f"Display tags have been written to {output_path}")
