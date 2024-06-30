import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $S$ be the set of ordered pairs of integers that is recursively defined in the following way:
		<ul style="margin: 0.5rem 0;">
			<li>
				$(1,6) \in S$.
			</li>
			<li>
				If $(a,b) \in S$ then $(a+3, b+4) \in S$.
			</li>
			<li>
				If $(a,b) \in S$ then $(a+5, b+2) \in S$.
			</li>
		</ul>
		Which of the following is true?
`;

const label1 = String.raw`For every element $(a,b)$ in $S$, $a + b$ is divisible by 7.`;
const label2 = String.raw`For every element $(a,b)$ in $S$, $a + b$ is not divisible by 7.`;
const label3 = String.raw`$S = \{(a,b) : a > 0$ and $b > 0$ are integers and $a + b$ is divisible by 7$\}$.`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
