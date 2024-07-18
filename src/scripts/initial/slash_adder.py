import os
import re


def correct_math_symbols(start_dir):
    for root, dirs, files in os.walk(start_dir):
        for file in files:
            if file == "solution.md":
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8") as f:
                    lines = f.readlines()

                modified_lines = []
                modified = False

                for line in lines:
                    # Find phrases between two $ signs and make replacements
                    new_line = re.sub(r"(?<=\$)([^$]*?)(?=\$)", replace_phrases, line)
                    if new_line != line:
                        modified = True
                    modified_lines.append(new_line)

                if modified:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.writelines(modified_lines)


def replace_phrases(match):
    text = match.group(0)
    replacements = {
        r"(?<!\\)times": r"\\times",
        r"(?<!\\)mathbb{": r"\\mathbb{",
        r"(?<!\\)text{": r"\\text{",
        r"(?<!\\)sum": r"\\sum",
    }
    for pattern, repl in replacements.items():
        text = re.sub(pattern, repl, text)
    return text


if __name__ == "__main__":
    base_dir = os.path.dirname(
        os.path.abspath(__file__)
    )  # The directory where the script is located
    correct_math_symbols(base_dir)
