import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be an integer and consider a group $P_1,P_2,\dots,P_n$ of $n$ people.
		Each of these people has a uniformly random birthday, which is independent of the birthdays of the
		other people. We ignore leap years; thus, the year has 365 days. <br>
		
		Define the random variable $X$ to be the number of unordered pairs $\{P_i,P_j\}$ of people that have
		the same birthday. <br>
		
		What is the expected value $\mathbb{E}(X)$ of $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = String.raw`$\frac{1}{365} \cdot {n \choose 2}$`;
const label2 = String.raw`$\left( \frac{1}{365} \right)^2 \cdot {n \choose 2}$`;
const label3 = String.raw`$\frac{1}{365} \cdot n^2$`;
const label4 = String.raw`$\left( \frac{1}{365} \right)^2 \cdot n^2$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
