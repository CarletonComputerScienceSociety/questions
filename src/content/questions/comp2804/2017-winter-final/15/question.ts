import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 5$ be an integer. Consider a uniformly random permutation $a_1a_2 \dots a_n$ of the set
		$\{1,2,\dots,n\}$. Define the events
		<ul>
  <li> A = "$a_1 = 1$",</li>
  <li> B = "$a_n = 5$".</li>
		</ul>
		What is $\Pr(A \cup B)$?
`;

const label1 = "${\\frac{1}{n}} - {\\frac{1}{n(n-1)}}$";
const label2 = "${\\frac{2}{n}} - {\\frac{1}{n(n-1)}}$";
const label3 = "${\\frac{2}{n}} - {\\frac{1}{n^{2}}}$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
