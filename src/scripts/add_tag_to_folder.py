import os
import yaml


def add_tag_to_questions_in_test(root_dir, test_name, new_tag):
    # Walk through the directory structure
    for course_dir in os.listdir(root_dir):
        course_path = os.path.join(root_dir, course_dir)
        if os.path.isdir(course_path):
            test_path = os.path.join(course_path, test_name)
            if os.path.isdir(test_path):
                for question_dir in os.listdir(test_path):
                    question_path = os.path.join(test_path, question_dir)
                    if os.path.isdir(question_path):
                        index_file_path = os.path.join(question_path, "index.md")
                        if os.path.exists(index_file_path):
                            # Read the content of the index.md file
                            with open(index_file_path, "r", encoding="utf-8") as file:
                                content = file.read()

                            # Separate the frontmatter from the content
                            frontmatter, markdown_content = content.split("---", 2)[1:3]
                            frontmatter = frontmatter.strip()
                            markdown_content = markdown_content.strip()

                            # Parse the frontmatter using yaml
                            frontmatter_dict = yaml.safe_load(frontmatter)

                            # Add the new tag to the tags list
                            if "tags" in frontmatter_dict:
                                if new_tag not in frontmatter_dict["tags"]:
                                    frontmatter_dict["tags"].append(new_tag)
                            else:
                                frontmatter_dict["tags"] = [new_tag]

                            # Convert the updated frontmatter back to a string
                            new_frontmatter = yaml.dump(
                                frontmatter_dict, sort_keys=False
                            ).strip()

                            # Write the updated content back to the index.md file
                            with open(index_file_path, "w", encoding="utf-8") as file:
                                file.write(
                                    f"---\n{new_frontmatter}\n---\n\n{markdown_content}"
                                )
                            print(f"Updated {index_file_path}")


# Define the root directory, test name, and the new tag
root_directory = "../content/questions"
test_name = "2014-winter-midterm"
new_tag = "comp2804-midterm"

# Run the function
add_tag_to_questions_in_test(root_directory, test_name, new_tag)
