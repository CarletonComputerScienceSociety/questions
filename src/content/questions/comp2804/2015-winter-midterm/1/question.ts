import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The Carleton Computer Science Society has a Board of Directors consisting of a President and a
		seven-person Advisory Board. The President cannot be on the Advisory Board. Let $n$ be the number of
		students in Carleton's Computer Science program, where $n \geq 8$. In how many ways can a Board of
		Directors be chosen?
`;

const label1 = String.raw`$(n - 7) + {n \choose 7}$`;
const label2 = String.raw`$n + {n \choose 7}$`;
const label3 = String.raw`$(n - 7) \cdot {n \choose 7}$`;
const label4 = String.raw`$n \cdot {n \choose 7}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
