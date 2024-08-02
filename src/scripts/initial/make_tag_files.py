import os
import yaml


def process_markdown_file(input_path, output_directory):
    # Read the content of the input .md file
    with open(input_path, "r") as file:
        content = file.read()

    # Extract YAML front matter
    if content.startswith("---"):
        end_of_yaml = content.find("---", 3)
        if end_of_yaml == -1:
            raise ValueError("Invalid YAML front matter format")

        yaml_content = content[3:end_of_yaml].strip()
        tags_content = content[end_of_yaml + 3 :].strip()

        # Load YAML content
        data = yaml.safe_load(yaml_content)
        tags = data.get("tags", {})

        # Process each tag
        for key, value in tags.items():
            slug = key
            title = value
            output_content = f"""---
course: "{data['course']}"
slug: {slug}
title: {title}
number_of_questions: 1
---"""

            # Define the output file name
            output_file_name = f"{slug}.md"
            output_file_path = os.path.join(output_directory, output_file_name)

            # Write the output content to the new file
            with open(output_file_path, "w") as output_file:
                output_file.write(output_content)

        print(f"Markdown files have been created in '{output_directory}'")


# Define input path and output directory
input_path = "C:\\Users\\johnl\\OneDrive\\Documents\\GitHub\\questions\\src\\content\\tags\\comp2804.md"
output_directory = "C:\\Users\\johnl\\OneDrive\\Documents\\GitHub\\questions\\src\\content\\rags\\comp2804"

# Ensure the output directory exists
os.makedirs(output_directory, exist_ok=True)

# Process the file
process_markdown_file(input_path, output_directory)
