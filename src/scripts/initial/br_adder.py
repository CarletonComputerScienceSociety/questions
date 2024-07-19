import os


def process_li_lines(lines):
    processed_lines = []
    add_br = False
    for i in range(len(lines)):
        line = lines[i]
        next_line = lines[i + 1] if i + 1 < len(lines) else ""

        if "<li>" in line:
            add_br = True
        if "<br/>" in line:
            add_br = False
        if "<li>" in next_line:
            add_br = False
        if "</ul>" in next_line:
            add_br = False

        if add_br:
            line = line.rstrip() + " <br/> \n"

        processed_lines.append(line)

    return processed_lines


def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.readlines()

    processed_lines = process_li_lines(lines)

    with open(file_path, "w", encoding="utf-8") as file:
        file.writelines(processed_lines)


def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file == "solution.md":
                file_path = os.path.join(root, file)
                process_file(file_path)


if __name__ == "__main__":
    directory = os.path.dirname(os.path.abspath(__file__))
    process_directory(directory)
