import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
This midterm has 17 questions. For each question, four options are given. Assume that you answer each
		question, by choosing one of the four options uniformly at random. <br>
		
		Define the event
		<ul>
  <li> A = "you answer exactly 7 questions correctly".</li>
		</ul>
		What $\Pr(A)$?
`;

const label1 = String.raw`$\frac{{17 \choose 7} \cdot 3^{10}}{4^{17}}$`;
const label2 = String.raw`$\frac{{17 \choose 7} \cdot 2^{10}}{4^{17}}$`;
const label3 = String.raw`$\frac{{17 \choose 7}}{4^{17}}$`;
const label4 = String.raw`$\frac{4^{17}}{{17 \choose 7}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
