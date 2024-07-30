import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider the following statement: For any three random variables $X$, $Y$, and $Z$,
		
		<ul>
  <li> $\mathbb{E}(\min(X,Y,Z)) = \min(\mathbb{E}(X), \mathbb{E}(Y), \mathbb{E}(Z))$</li>
		</ul>
		
		Which of the following is correct?
`;

const label1 = String.raw`The statement is true.`;
const label2 = String.raw`The statement is false.`;
const label3 = String.raw`None of the above.`;
const label4 = String.raw`All of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
