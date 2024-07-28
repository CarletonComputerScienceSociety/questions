import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider a standard 6-sided fair die. We roll this die 8 times. Let $A$ be the event
		<ul>
  <li> A = "there are at least two 5's in the sequence of 8 rolls".</li>
		</ul>
		What is $\Pr(A)$?
`;

const label1 = String.raw`$1 - {\frac{8 \cdot 5^{7}}{6^{8}}}$`;
const label2 = String.raw`$1 - {\frac{6^{8}}{5^{8} + 8 \cdot 5^{7}}}$`;
const label3 = String.raw`$1 - {\frac{5^{8} + 8 \cdot 5^{7}}{6^{8}}}$`;
const label4 = String.raw`$1 - {\frac{8^{5} + 8 \cdot 7^{5}}{8^{6}}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
