import os


def find_lines_with_brackets(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.readlines()

    lines_with_brackets = []
    inside_exclude_block = False

    for index, line in enumerate(lines):
        stripped_line = line.strip()

        if "begin" in stripped_line:
            inside_exclude_block = True
        if "end" in stripped_line:
            inside_exclude_block = False
            continue

        if not inside_exclude_block and ("[" in stripped_line or "]" in stripped_line):
            lines_with_brackets.append((index + 1, stripped_line))

    return lines_with_brackets


def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file == "solution.md":
                file_path = os.path.join(root, file)
                lines_with_brackets = find_lines_with_brackets(file_path)
                if lines_with_brackets:
                    print(f"File: {file_path}")
                    for line_number, line in lines_with_brackets:
                        print(f"  Line {line_number}: {line}")
                    print()


if __name__ == "__main__":
    directory = os.path.dirname(os.path.abspath(__file__))
    process_directory(directory)
