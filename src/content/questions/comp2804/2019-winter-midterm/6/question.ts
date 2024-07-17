import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer. A group of $n$ students write an exam. Each student receives a grade,
		which is an element of the set $\{A, B, C, D, F\}$. <br>
		What is the minimum value for $n$, such that there must be at least four students who receive the same grade?
`;

const label1 = String.raw`14`;
const label2 = String.raw`15`;
const label3 = String.raw`16`;
const label4 = String.raw`17`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
