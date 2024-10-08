import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer, and let $p$ and $q$ be real numbers with $0 < p < 1$ and $0 < q < 1$. <br>
		Consider $n$ students $S_1,S_2,...,S_n$ who hand in an assignment for COMP 2804. This assignment has 2 questions.
		For $i = 1,2,...,n$ let $A_i$ be the assignment handed in by student $S_i$. <br>
		Alexa and Zoltan are TAs for the course. Alexa is supposed to mark the first question, whereas Zoltan
		is supposed to mark the second question. Since both TAs are lazy, they use the following scheme
		(all random choices are mutually independent): <br>
		For $i = 1,2,...,n$,
		<ul>
			<li>Alexa marks the first question of assignment $A_i$ with probability $p,$</li>
			<li>Zoltan marks the second question of assignment $A_i$ with probability $q.$</li>
		</ul>
		Consider the random variable
		
		<ul>
  <li> X = the number of assignments that are marked by both Alexa and Zoltan.</li>
		</ul>
		
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`$(p + q) \cdot n$`;
const label2 = String.raw`$\frac{n}{p \cdot q}$`;
const label3 = String.raw`$p \cdot q \cdot n$`;
const label4 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
