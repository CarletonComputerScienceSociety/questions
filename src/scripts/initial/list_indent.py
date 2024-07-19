import os


def adjust_indentation(lines):
    adjusted_lines = []
    indent_level = 0
    indent = "    "  # 4 spaces

    for line in lines:
        stripped_line = line.lstrip()

        if stripped_line.startswith("</ul>"):
            indent_level -= 1

        if stripped_line.startswith("<ul>"):
            adjusted_lines.append(indent * indent_level + stripped_line)
            indent_level += 1
        else:
            if stripped_line == "":
                adjusted_lines.append("\n")  # Preserve empty lines
            else:
                adjusted_lines.append(indent * indent_level + stripped_line)

    return adjusted_lines


def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.readlines()

    adjusted_lines = adjust_indentation(lines)

    with open(file_path, "w", encoding="utf-8") as file:
        file.writelines(adjusted_lines)


def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file == "solution.md":
                file_path = os.path.join(root, file)
                process_file(file_path)


if __name__ == "__main__":
    directory = os.path.dirname(os.path.abspath(__file__))
    process_directory(directory)
