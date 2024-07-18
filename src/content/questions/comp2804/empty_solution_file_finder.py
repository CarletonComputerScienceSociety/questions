import os

def find_empty_solution_files(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file == 'solution.md':
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, directory)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read().strip()
                    if not content:
                        print(f"Empty file: {relative_path}")

if __name__ == "__main__":
    directory = os.path.dirname(os.path.abspath(__file__))
    find_empty_solution_files(directory)
