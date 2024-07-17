import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $m \geq 2$ and $n \geq 2$ be integers. What does
		$$
			{m \choose 2} + {n \choose 2} + mn
		$$
		count?
`;

const label1 = String.raw`The number of ways to choose an ordered pair $(x,y)$ from a group consisting of $m$ men and $n$ women, where $x$ must be a man and $y$ must be a woman.`;
const label2 = String.raw`The number of ways to choose an ordered pair $(x,y)$ from a group consisting of $m$ men and $n$ women, where $x$ and $y$ cannot both be men.`;
const label3 = String.raw`The number of ways to choose an unordered pair of people from a group consisting of $m$ men and $n$ women, where at least one man must be chosen.`;
const label4 = String.raw`The number of ways to choose an unordered pair of people from a group consisting of $m$ men and $n$ women.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
