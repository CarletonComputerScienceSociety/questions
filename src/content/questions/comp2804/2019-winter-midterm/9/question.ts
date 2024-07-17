import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 4$ be an even integer and let $k$ be an integer with $1 \leq k \leq n/2$. Consider
		strings consisting of $n$ characters, such that
		<ul style="margin: 0.5rem 0;">
			<li>
				each character is an element of $\{a, b, c\}$,
			</li>
			<li>
				the number of $a$'s is equal to $k$, and
			</li>
			<li>
				each $a$ is at an even position.
			</li>
		</ul>
		How many such strings are there?
`;

const label1 = "${n/2 \\choose k} \\cdot 2^{n-k}$";
const label2 = "${n/2 \\choose k} \\cdot 2^{n/2}$";
const label3 = "${n \\choose k} cdot 2^{n-k}$";
const label4 = "${n \\choose k} \\cdot 2^{n/2}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
