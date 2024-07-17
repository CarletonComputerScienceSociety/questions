import os
import re

def update_index_md(file_path, solution_path):
    with open(file_path, 'r') as file:
        content = file.read()
    
    # Check if the 'solution' field already exists
    if 'solution:' in content:
        return
    
    # Add the solution field
    content = re.sub(r'(question:\s*.+)', r'\1\nsolution: comp2804/' + solution_path, content)

    with open(file_path, 'w') as file:
        file.write(content)

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        if 'index.md' in files:
            index_path = os.path.join(root, 'index.md')
            
            # Extract the question path from the index.md file
            with open(index_path, 'r') as file:
                content = file.read()
            
            match = re.search(r'question:\s*(.+)', content)
            if match:
                question_path = match.group(1).strip()
                
                # Calculate the relative path for the solution
                relative_path = os.path.relpath(root, start=directory)
                solution_path = os.path.join(relative_path, 'solution.md').replace(os.sep, '/')
                
                # Update index.md
                update_index_md(index_path, solution_path)

# Get the directory where the script is located
base_dir = os.path.dirname(os.path.abspath(__file__))

# Process the base directory
process_directory(base_dir)

print("Finished updating index.md files.")
