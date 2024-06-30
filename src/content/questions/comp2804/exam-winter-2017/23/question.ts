import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Is the following statement true or false?
		<p align="center">
			For any two random variables $X$ and $Y$,
			$\mathbb{E}(X \cdot Y) = \mathbb{E}(X) \cdot \mathbb{E}(Y)$.
		</p>
`;

const label1 = String.raw`The statement is true.`;
const label2 = String.raw`The statement is false.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
  ],
};
