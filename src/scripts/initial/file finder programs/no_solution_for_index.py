import os

def find_empty_solution_files(directory):
    for root, _, files in os.walk(directory):
        if "solution.md" in files and "index.md" in files:
            solution_file_path = os.path.join(root, "solution.md")
            index_file_path = os.path.join(root, "index.md")
            
            with open(solution_file_path, "r", encoding="utf-8") as sf, open(index_file_path, "r", encoding="utf-8") as inf:
                solution_content = sf.read().strip()
                index_content = inf.read()

                if not solution_content and "solution" in index_content:
                    relative_index_path = os.path.relpath(index_file_path, directory)
                    print(f"Index file: {relative_index_path}")

if __name__ == "__main__":
    # Define the specific directory path here
    directory = r"C:\Users\johnl\OneDrive\Documents\GitHub\questions\src\content\questions\comp2804"
    find_empty_solution_files(directory)
