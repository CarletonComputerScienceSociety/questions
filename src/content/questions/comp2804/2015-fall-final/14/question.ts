import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n$ be the number of students who are writing this exam. Each of these students has a uniformly
		random birthday, which is independent of the birthdays of the other students. We ignore leap years;
		thus, the year has 365 days. Define the event
		[defs]
		  A = "at least one student's birthday is on December 21".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`$n \cdot (1/365) \cdot (364/365)^{n-1}$`;
const label2 = String.raw`$365 \cdot n \cdot (364/365)^{n-1}$`;
const label3 = String.raw`$1 - (1/365)^{n}$`;
const label4 = String.raw`$1 - (364/365)^{n}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
