import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\ShortLastName}{{\rm S {\scriptsize HORT} L {\scriptsize AST} N {\scriptsize AME}}}$
		</div>
		
		In the city of $\ShortLastName$, every person has a last name consisting of two characters, the first one being
		an uppercase letter and the second one being a lowercase letter. What is the minimum number of people
		needed so that we can guarantee that at least 4 of them have the same last name?
`;

const label1 = String.raw`$3 \cdot 26^{2}$`;
const label2 = String.raw`$4 \cdot 26^{2}$`;
const label3 = String.raw`$3 \cdot 26^{2} + 1$`;
const label4 = String.raw`$4 \cdot 26^{2} + 1$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
