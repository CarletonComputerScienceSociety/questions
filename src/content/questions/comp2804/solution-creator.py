import os

def replace_text_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    content = content.replace("\\begin{enumerate}", "<ul>")
    content = content.replace("\\end{enumerate}", "</ul>")
    content = content.replace("\\item", "<li>")
    content = content.replace("//", "")

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file == "solution.md":
                file_path = os.path.join(root, file)
                replace_text_in_file(file_path)

if __name__ == "__main__":
    script_directory = os.path.dirname(os.path.abspath(__file__))
    process_directory(script_directory)
