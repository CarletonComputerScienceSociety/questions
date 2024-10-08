import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bitstring is called 00-<em>free</em> if it does not contain two 0's next to each other.
		In class, we have seen that for any $m \geq 1$,
		the number of 00-free bitstrings of length $m$ is equal to the $(m+2)$-th Fibonacci number $f_{m+2}$. <br>
		
		Let $n \geq 3$ be an integer. What is the number of 00-free bitstrings of length $3n-1$ that have 0 at position $n$
		and 1 at position $2n$? (The positions are numbered $1,2,\dots,3n-1)$. <br>
		(n.b., $f^2_x = f_x \cdot f_x$)
`;

const label1 = "${f^2_{n+1}} \\cdot f_n$";
const label2 = "${f^2_{n}} \\cdot f_{n+1}$";
const label3 = "${f^2_{n+2}} \\cdot f_{n+1}$";
const label4 = "${f^2_{n+1}} \\cdot f_{n+2}$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
