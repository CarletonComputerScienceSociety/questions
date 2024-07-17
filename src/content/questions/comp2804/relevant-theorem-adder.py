import os
import re

def read_midterms_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def parse_midterms_content(content):
    sections = re.findall(r'\\section\{(.+?)\}(.+?)(?=\\section|$)', content, re.DOTALL)
    parsed_sections = {}
    for section_title, section_content in sections:
        section_title = section_title.strip().lower().replace(" ", "-")
        questions = re.findall(r'\\subsection\{(.+?)\}(.+?)(?=\\subsection|$)', section_content, re.DOTALL)
        parsed_sections[section_title] = []
        for question_title, question_content in questions:
            relevant_theorems = re.findall(r'\\textbf{Relevant Theorems: }(.+?)\\', question_content)
            if relevant_theorems:
                relevant_theorems = [theorem.strip() for theorem in relevant_theorems[0].split(",")]
            else:
                relevant_theorems = []
            parsed_sections[section_title].append((question_title.strip(), relevant_theorems))
    return parsed_sections

def update_index_file(index_file_path, theorems):
    with open(index_file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # Find the end of the front matter
    end_of_front_matter_index = next((i for i, line in enumerate(lines) if line.strip() == "---" and i > 0), None)
    
    # Find the tags line
    tag_line_index = next((i for i, line in enumerate(lines) if line.startswith("tags:")), None)
    
    if tag_line_index is not None and end_of_front_matter_index is not None:
        for theorem in theorems:
            tag_line_index += 1
            while tag_line_index < end_of_front_matter_index and lines[tag_line_index].strip().startswith("-"):
                tag_line_index += 1
            lines.insert(tag_line_index, f"  - {theorem}\n")
        if tag_line_index < end_of_front_matter_index:
            end_of_front_matter_index += len(theorems)

    with open(index_file_path, 'w', encoding='utf-8') as file:
        file.writelines(lines)

def process_midterms_directory(base_dir, parsed_midterms):
    for midterm_name, questions in parsed_midterms.items():
        midterm_dir = os.path.join(base_dir, midterm_name)
        if not os.path.exists(midterm_dir):
            continue
        for i, (_, theorems) in enumerate(questions):
            question_dir = os.path.join(midterm_dir, str(i + 1))
            index_file_path = os.path.join(question_dir, 'index.md')
            if os.path.exists(index_file_path):
                update_index_file(index_file_path, theorems)

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))  # This should be the 'comp2804' directory
    midterms_file_path = os.path.join(base_dir, 'Midterms.txt')

    midterms_content = read_midterms_file(midterms_file_path)
    parsed_midterms = parse_midterms_content(midterms_content)
    process_midterms_directory(base_dir, parsed_midterms)
