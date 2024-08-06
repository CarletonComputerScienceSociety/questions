# Adding a Question

## Navigate to Questions Directory

Navigate to `src > content > questions`

Enter correct course directory

- If there is a course directory for the evaluation, then enter that directory (e.g. comp2804)
- If there is no course directory for the evaluation, create a new directory (e.g. comp2402)

Enter correct evaluation directory

- If there is a directory for the evaluation, then enter that directory (e.g. 2013-fall-midterm)
- If there is no directory for the evaluation, create a new directory (e.g. 2023-winter-final)

Create numbered directory. (e.g. Directory for Question 1 is `1`)

## Adding New Question to Directory

### Creating index.md

Create a file called `index.md`

Add and fill in the following information

- title
- path
- type
- author
- question
- solution(if there is one)
- generator(if there is one)
- tags

E.g

![image](https://github.com/user-attachments/assets/b639cf2d-979f-41b2-83c3-eaf02b7183c7)

### Creating question.ts

Create a file called `question.ts`

Use the following template to add question and options

```
import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
What is the answer?
`;

const label1 = String.raw`This is option 1`;
const label2 = String.raw`This is option 2`;
const label3 = String.raw`This is option 3`;
const label4 = String.raw`Options can have latex: $13 \cdot 5^{13}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};

```
