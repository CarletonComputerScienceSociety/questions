import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n \geq 2$ be the number of students who are writing this exam. Each of these students has a
		uniformly random birthday, which is independent of the birthdays of the other students. We ignore
		leap years; thus, the year has 365 days. Define the event
		<ul>
  <li> A = "at least two students have their birthday on December 14".</li>
		</ul>
		What is $\Pr(A)$?
`;

const label1 =
  "${n \\choose 2} \\cdot \\left( \\frac{1}{365} \\right)^2 \\cdot \\left( \\frac{364}{365} \\right)^{n-2}$";
const label2 =
  "$1 - {n \\choose 2} \\cdot \\left( \\frac{1}{365} \\right)^2 \\cdot \\left( \\frac{364}{365} \\right)^{n-2}$";
const label3 =
  "$1 - \\left( \\frac{364}{365} \\right)^n - n \\cdot \\frac{1}{365} \\cdot \\left( \\frac{364}{365} \\right)^{n-1}$";
const label4 =
  "${\\sum_{k=2}^{n}} {n \\choose k} \\cdot \\left( \\frac{1}{365} \\right)^k$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
