import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given two bitstrings $a_1,a_2,\dots,a_{77}$ and $b_1,b_2,\dots,b_{77}$ of length 77. In
		both bitstrings, each bit is 0 with probability 3/4, and 1 with probability 1/4 (independent of
		all other bits). <br>
		
		Consider the string
		$$
			a_1-b_1,a_2-b_2,\dots,a_{77}-b_{77}.
		$$
		What is the probability that each element in this string is non-zero?
`;

const label1 = String.raw`$(3/8)^{77}$`;
const label2 = String.raw`$(4/8)^{77}$`;
const label3 = String.raw`$(5/8)^{77}$`;
const label4 = String.raw`$(6/8)^{77}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
