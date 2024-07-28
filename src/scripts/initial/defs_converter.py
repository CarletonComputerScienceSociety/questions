import os
import re

def update_question_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    updated_lines = []
    inside_def = False

    for line in lines:
        if "[defs]" in line:
            updated_lines.append(line.replace("[defs]", "<ul>"))
            inside_def = True
        elif "[/defs]" in line:
            updated_lines.append(line.replace("[/defs]", "</ul>"))
            inside_def = False
        elif inside_def:
            updated_lines.append("  <li> " + line.strip() + "</li>\n")
        else:
            updated_lines.append(line)

    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(updated_lines)

def find_and_update_question_files(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file == "question.ts":
                question_file_path = os.path.join(root, file)
                update_question_file(question_file_path)

if __name__ == "__main__":
    # Define the specific directory path here
    directory = r"C:\Users\johnl\OneDrive\Documents\GitHub\questions\src\content\questions\comp2804"
    find_and_update_question_files(directory)
    
    print("question.ts files have been updated.")
