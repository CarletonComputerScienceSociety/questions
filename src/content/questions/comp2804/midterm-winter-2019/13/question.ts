import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We consider binary $2 \times n$ matrices, i.e., matrices with 2 rows and $n$ columns, in which each
		entry is 0 or 1. A column in such a matrix is called a <span class="sticky">$1 \atop 1$-<em>column</em>,</span>
		if both bits in the column are 1. <br>
		For any integer $n \geq 1$ and integer $k$ with $0 \leq k \leq n$, let $M(n,k)$ be the number of binary $2 \times n$ matrices
		<ul style="margin: 0.5rem 0;">
			<li>
				that do not contain any $1 \atop 1$-column, and
			</li>
			<li>
				contain exactly $k$ many 1's.
			</li>
		</ul>
		Which of the following is true for all <span class="sticky">integers $n \geq 2$</span> and $k$ with $1 \leq k \leq n-1$?
`;

const label1 = String.raw`$M(n,k) = M(n-1,k)\ +$$\ M(n-1,k-1)$`;
const label2 = String.raw`$M(n,k) = M(n-1,k)\ +$$\ 2 \cdot M(n-1,k-1)$`;
const label3 = String.raw`$M(n,k) = M(n,k-1)\ +$$\ M(n-1,k-1)$`;
const label4 = String.raw`$M(n,k) = M(n,k-1)\ +$$\ 2 \cdot M(n-1,k-1)$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
