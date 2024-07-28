import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You choose a uniformly random element, say $a$, from the set $\{1,2,\dots,100\}$, and you choose a
		uniformly random element, say $b$, from the same set $\{1,2,\dots,100\}$. ($a$ and $b$ are chosen
		independently of each other.) Define the random variable $X$ to be
		<ul>
  <li> X = $\max(a,b)$.</li>
		</ul>
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$?
`;

const label1 = "${\\sum_{k=1}^{100}} k \\cdot \\frac{k^{2}}{100^{2}}$";
const label2 = "${\\sum_{k=1}^{100}} k \\cdot \\frac{k(k-1)}{100^{2}}$";
const label3 = "${\\sum_{k=1}^{100}} k \\cdot \\frac{2k}{100^{2}}$";
const label4 =
  "${\\sum_{k=1}^{100}} k \\cdot \\left( \\frac{1+2(k-1)}{100^{2}} \\right)$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
