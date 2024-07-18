import os

def find_lines_with_begin(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    lines_with_begin = []
    for index, line in enumerate(lines):
        if "begin{" in line:
            lines_with_begin.append((index + 1, line.strip()))

    return lines_with_begin

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file == 'solution.md':
                file_path = os.path.join(root, file)
                lines_with_begin = find_lines_with_begin(file_path)
                if lines_with_begin:
                    print(f"File: {file_path}")
                    for line_number, line in lines_with_begin:
                        print(f"  Line {line_number}: {line}")
                    print()

if __name__ == "__main__":
    directory = os.path.dirname(os.path.abspath(__file__))
    process_directory(directory)
