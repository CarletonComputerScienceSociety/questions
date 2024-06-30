import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In the city of <em>ShortLastName</em>, every person has a last name consisting of one uppercase letter,
		followed by two lowercase letters. No two letters in a last name can be equal. Thus, <em>Lin</em>
		is a valid last name, whereas <em>Xax</em> is not a valid last name. <br>
		
		What is the minimum size of the population of <em>ShortLastName</em>, such that there must be at least two people
		who have the same last name?
`;

const label1 = String.raw`$1 + 26!$`;
const label2 = String.raw`$1 + 26^{3}$`;
const label3 = String.raw`$1 + \frac{24 \cdot 25 \cdot 26}{3!}$`;
const label4 = String.raw`$1 + 24 \cdot 25 \cdot 26$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
