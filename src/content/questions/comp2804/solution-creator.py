import os

# Get the directory where the script is located
root_dir = os.path.dirname(os.path.abspath(__file__))

# Walk through the directory tree
for root, dirs, files in os.walk(root_dir):
    for dir_name in dirs:
        # Check if the directory name is numeric
        if dir_name.isdigit():
            # Define the path for the solution.md file
            solution_file_path = os.path.join(root, dir_name, 'solution.md')
            
            # Create the file if it doesn't exist
            if not os.path.isfile(solution_file_path):
                print(f"Creating solution.md file in {solution_file_path}")
                with open(solution_file_path, 'w') as file:
                    pass  # Create an empty file

print("Finished creating solution.md files.")
