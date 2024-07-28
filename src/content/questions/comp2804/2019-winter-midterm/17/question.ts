import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
This midterm has 17 questions. For each question, four options are given, exactly one of which is
		correct. Assume that you answer each question, by choosing one of the four options uniformly at random. <br>
		Let A be the event
		<ul>
  <li> A = "you answer at least 16 questions correctly".</li>
		</ul>
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\frac{4^{17}}{52}$`;
const label2 = String.raw`$\frac{51}{4^{17}}$`;
const label3 = String.raw`$\frac{49}{4^{17}}$`;
const label4 = String.raw`$\frac{52}{4^{17}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
