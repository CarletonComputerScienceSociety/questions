import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
You are given a fair die that has six faces. One face has the letter $a$ on it, two faces have the
		letter $b$ on them, and three faces have the letter $c$ on them. Assume you roll this die twice,
		independently of each other. Define the events
		<ul>
  <li> A = "both rolls result in the same letter",</li>
  <li> B = "at least one of the rolls results in the letter $a$".</li>
		</ul>
		What is $\Pr(A|B)$?
`;

const label1 = String.raw`2/7`;
const label2 = String.raw`1/7`;
const label3 = String.raw`2/11`;
const label4 = String.raw`1/11`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
