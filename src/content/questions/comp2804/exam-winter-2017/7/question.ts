import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In this question, we consider bitstrings of length $n$, where $n$ is an even integer, and in which
		the positions are numbered $1,2,\dots,n$. <br>
		
		For any even integer $n$, let $S_n$ be the number of bitstrings of length $n$ that have both of the
		following two properties:
		<ul style="margin: 0.5rem 0;">
			<li>
				There is a 0 at every even position.
			</li>
			<li>
				The entire bitstring does not contain the substring 101.
			</li>
		</ul>
		Which of the following is true for all even integers $n \geq 6$?
`;

const label1 = String.raw`$S_n = S_{n/2} + S_{(n/2)-3}$`;
const label2 = String.raw`$S_n = S_{n-1} + S_{n-3}$`;
const label3 = String.raw`$S_n = S_{n-2} + S_{n-3}$`;
const label4 = String.raw`$S_n = S_{n-2} + S_{n-4}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
