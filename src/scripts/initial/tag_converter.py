import os
import re


def update_tags_in_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    tags_pattern = re.compile(r"(tags:\s*\n)((?:\s*-\s*[^\n]+\n)*)", re.IGNORECASE)
    match = tags_pattern.search(content)

    if match:
        tags_block = match.group(2)
        tags = re.findall(r"-\s*([^\n]+)", tags_block)
        updated_tags = []

        for tag in tags:
            if not tag.startswith("comp2804"):
                tag = "comp2804 " + tag
            updated_tag = tag.lower().replace(" ", "-")
            updated_tags.append(updated_tag)

        updated_tags_block = (
            "tags:\n" + "\n".join([f"  - {tag}" for tag in updated_tags]) + "\n"
        )
        updated_content = (
            content[: match.start(2)] + updated_tags_block + content[match.end(2) :]
        )

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(updated_content)


def find_and_update_tags(directory):
    for root, _, files in os.walk(directory):
        if "index.md" in files:
            index_file_path = os.path.join(root, "index.md")
            update_tags_in_file(index_file_path)


if __name__ == "__main__":
    # Define the specific directory path here
    directory = r"C:\Users\johnl\OneDrive\Documents\GitHub\questions\src\content\questions\comp2804"
    find_and_update_tags(directory)

    print("Tags have been updated in all index.md files.")
