import os
import yaml
import re
from collections import defaultdict


def extract_slugs_from_md(md_directory):
    slugs = defaultdict(int)

    # Walk through the directory to find all .md files
    for root, _, files in os.walk(md_directory):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)

                # Read the .md file
                with open(file_path, "r") as f:
                    content = f.read()

                # Extract slugs from the file
                if content.startswith("---"):
                    end_of_yaml = content.find("---", 3)
                    if end_of_yaml != -1:
                        yaml_content = content[3:end_of_yaml].strip()
                        data = yaml.safe_load(yaml_content)
                        slug = data.get("slug")
                        if slug:
                            slugs[slug] = 0  # Initialize slug with count 0
    return slugs


def update_slug_counts_in_index_files(base_directory, slugs):
    # Recursively search for index.md files
    for root, _, files in os.walk(base_directory):
        for file in files:
            if file == "index.md":
                file_path = os.path.join(root, file)

                # Read the index.md file
                with open(file_path, "r") as f:
                    content = f.read()

                # Find all slugs in the file content
                for slug in slugs.keys():
                    slugs[slug] += content.count(slug)


def update_md_files_with_counts(md_directory, slugs):
    # Update the original .md files with the new counts
    for root, _, files in os.walk(md_directory):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)

                with open(file_path, "r") as f:
                    content = f.read()

                if content.startswith("---"):
                    end_of_yaml = content.find("---", 3)
                    if end_of_yaml != -1:
                        yaml_content = content[3:end_of_yaml].strip()
                        data = yaml.safe_load(yaml_content)
                        slug = data.get("slug")

                        if slug in slugs:
                            # Update the number_of_questions
                            data["number_of_questions"] = slugs[slug]

                            # Write updated content back to the file
                            updated_yaml = yaml.dump(
                                data, default_flow_style=False
                            ).strip()
                            updated_content = f"---\n{updated_yaml}\n---\n"
                            updated_content += content[end_of_yaml + 3 :]

                            with open(file_path, "w") as f:
                                f.write(updated_content)

    print(f"Markdown files have been updated in '{md_directory}'")


# Define directories
md_directory = "C:\\Users\\johnl\\OneDrive\\Documents\\GitHub\\questions\\src\\content\\rags\\comp2804"  # Directory with original .md files
index_directory = "C:\\Users\\johnl\\OneDrive\\Documents\\GitHub\\questions\\src\\content\\questions\\comp2804"  # Directory to recursively search for index.md files

# Extract slugs and initialize counts
slugs = extract_slugs_from_md(md_directory)

# Update counts based on index.md files
update_slug_counts_in_index_files(index_directory, slugs)

# Write the updated counts back to the .md files
update_md_files_with_counts(md_directory, slugs)
