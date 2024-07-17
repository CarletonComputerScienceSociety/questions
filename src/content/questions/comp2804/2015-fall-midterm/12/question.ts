import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 1$ be an integer and let $S_n$ be the number of ways in which $n$ can be written as a
		sum of 1s and 2s, such that
		<ul style="margin: 0.5rem 0;">
			<li>
				the order in which the 1s and 2s occur in the sum matters, and
			</li>
			<li>
				it is not allowed to have two consecutive 2s.
			</li>
		</ul>
		For example, if $n = 7$, then both
		$$
			7 = 1 + 2 + 1 + 2 + 1
		$$
		and
		$$
			7 = 2 + 1 + 1 + 2 + 1
		$$
		are allowed, whereas
		$$
			7 = 1 + 2 + 2 + 1 + 1
		$$
		is not allowed. <br>
		
		Which of the following is true?
`;

const label1 = String.raw`$S_n = S_{n-1} + S_{n-2}$`;
const label2 = String.raw`$S_n = S_{n-1} + S_{n-3}$`;
const label3 = String.raw`$S_n = S_{n-2} + S_{n-3}$`;
const label4 = String.raw`$S_n = S_{n-1} + S_{n-2} + S_{n-3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
