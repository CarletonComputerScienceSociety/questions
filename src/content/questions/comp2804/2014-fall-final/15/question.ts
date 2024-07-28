import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
A bowl contains 5 blue balls and 4 red balls. We choose 2 balls uniformly at random. Define the
		events
		<ul>
  <li> A = "both balls are red",</li>
  <li> B = "both balls have the same color".</li>
		</ul>
		What is the conditional probability $\Pr(A|B)$?
`;

const label1 = String.raw`$\frac{{4 \choose 2}}{{5 \choose 2} + {4 \choose 2}}$`;
const label2 = String.raw`$\frac{{5 \choose 2} + {4 \choose 2}}{{4 \choose 2}}$`;
const label3 = String.raw`$\frac{{4 \choose 2}}{{9 \choose 2}}$`;
const label4 = String.raw`$\frac{{4 \choose 2}}{{5 \choose 2}{4 \choose 2}}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
