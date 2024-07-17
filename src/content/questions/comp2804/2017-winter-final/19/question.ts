import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 3$ be an integer and consider a group $P_1,P_2,\dots,P_n$ of $n$ people. Each of these
		people has a uniformly random birthday, which is independent of the birthdays of the other people.
		We ignore leap years; thus, the year has 365 days. <br>
		
		Define the random variable $X$ to be the number of unordered triples $\{P_i,P_j,P_k\}$ of people
		(i.e., subsets consisting of three people) that have the same birthday. <br>
		
		What is the expected value $\mathbb{E}(X)$ of $X$? <br>
		<em>Hint:</em> Use indicator random variables.
`;

const label1 = "${\\frac{1}{365^2}} \\cdot {n \\choose 3}$";
const label2 = "${\\frac{1}{365^3}} \\cdot {n \\choose 3}$";
const label3 = "${\\frac{1}{365^2}} \\cdot n^3$";
const label4 = "${\\frac{1}{365^3}} \\cdot n^3$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
