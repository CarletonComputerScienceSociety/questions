import os
import re

def find_incorrect_binom_usage(start_dir):
    for root, dirs, files in os.walk(start_dir):
        for file in files:
            if file == "solution.md":
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                    for line in lines:
                        if re.search(r'(?<!\\)cdot', line):
                            print(f"File: {file_path}")
                            print(f"Line: {line.strip()}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))  # The directory where the script is located
    find_incorrect_binom_usage(base_dir)
