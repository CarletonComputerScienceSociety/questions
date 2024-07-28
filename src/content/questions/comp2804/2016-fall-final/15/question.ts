import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We flip a fair coin three times; these flips are independent of each other. These three coin flips
		give us a sequence of length three, where each symbol is $H$ or $T$. Define the events
		<ul>
  <li> A = "the sequence contains at most one $T$",</li>
  <li> B = "the symbols in the sequence are not all equal".</li>
		</ul>
		Which of the following is true?
`;

const label1 = String.raw`The events $A$ and $B$ are independent.`;
const label2 = String.raw`The events $A$ and $B$ are not independent.`;
const label3 = String.raw`None of the above.`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
  ],
};
