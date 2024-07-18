import os
import re


def find_phrases_without_backslash(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.readlines()

    patterns = [(r"(?<!\\)neq", "neq"), (r"(?<!\\)geq", "geq"), (r"(?<!\\)leq", "leq")]

    lines_with_phrases = []
    for index, line in enumerate(lines):
        for pattern, phrase in patterns:
            if re.search(pattern, line):
                lines_with_phrases.append((index + 1, line.strip(), phrase))

    return lines_with_phrases


def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file == "solution.md":
                file_path = os.path.join(root, file)
                lines_with_phrases = find_phrases_without_backslash(file_path)
                if lines_with_phrases:
                    print(f"File: {file_path}")
                    for line_number, line, phrase in lines_with_phrases:
                        print(f"  Line {line_number}: {line} (contains '{phrase}')")
                    print()


if __name__ == "__main__":
    directory = os.path.dirname(os.path.abspath(__file__))
    process_directory(directory)
