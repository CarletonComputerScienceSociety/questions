import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\Silly}{{\rm S \scriptsize ILLY}}$
		</div>
		
		What does
		$$
			\sum_{k=2}^{n-1} (k-1)(n-k)
		$$
		count?
`;

const label1 = String.raw`The number of 3-element subsets of an $(n-1)$-element set.`;
const label2 = String.raw`The number of 3-element subsets of an $n$-element set.`;
const label3 = String.raw`The number of 3-element subsets of an $(n+1)$-element set.`;
const label4 = String.raw`The number of times you fart when running algorithm $\Silly(n)$.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
