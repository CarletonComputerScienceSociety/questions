import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
In the fall term of 2015, Nick took COMP 2804. Nick was always sitting in the back of the classroom
		and spent most of his time eating bananas. <br>
		
		Nick buys 25 bananas at Alexa's Banana Emporium (ABE) and 30 bananas at Shelly's Fruit Market (SFM).
		Nick chooses, uniformly at random, a 15-element subset of these bananas. Define the event
		[defs]
		  A = "the subset chosen by Nick contains exactly 7 bananas from ABE".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`$\frac{{25 \choose 8} + {30 \choose 7}}{55 \choose 15}$`;
const label2 = String.raw`$\frac{{25 \choose 8} \cdot {30 \choose 7}}{55 \choose 15}$`;
const label3 = String.raw`$\frac{{25 \choose 7} + {30 \choose 8}}{55 \choose 15}$`;
const label4 = String.raw`$\frac{{25 \choose 7} \cdot {30 \choose 8}}{55 \choose 15}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
