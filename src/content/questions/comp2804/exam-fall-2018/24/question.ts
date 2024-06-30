import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer. There are $n$ students $S_1,S_2,\dots,S_n$ writing this exam. Each
		student has brought one backpack with them. Before the exam starts, all students have to leave their
		backpacks at the front of the examination room. <br>
		
		At the end of the exam, the proctor places the backpacks in a uniformly random order $b_1,b_2,\dots,b_n$,
		and, for each $i = 1, 2, ..., n$, gives backpack $b_i$ to student $S_i$. <br>
		
		Define the following random variable $X$:
		[defs]
		  X = the number of students who get their own backpack.
		[/defs]
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`1`;
const label2 = String.raw`2`;
const label3 = String.raw`$\left. (n + 1) \middle/ n \right.$`;
const label4 = String.raw`$\left. (n - 1) \middle/ n \right.$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
