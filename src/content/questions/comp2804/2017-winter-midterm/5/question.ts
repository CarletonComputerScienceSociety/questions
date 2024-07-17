import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings of length six consisting of the characters $a$, $b$, $c$, and $d$. How many such
		strings are there that start with $abc$ or end with $cccc$?
`;

const label1 = String.raw`79`;
const label2 = String.raw`80`;
const label3 = String.raw`81`;
const label4 = String.raw`82`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
