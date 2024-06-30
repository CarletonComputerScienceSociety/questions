import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Is the following statement true or false?
		
		<p style="text-align: center;">
			For any random variable $X$, $\mathbb{E}\left(1 \middle/ X \right) = 1 / \mathbb{E}(X)$.
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
