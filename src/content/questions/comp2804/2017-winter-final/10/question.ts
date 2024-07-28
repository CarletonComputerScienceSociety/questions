import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
We choose, uniformly at random, a string consisting of 14 characters, where each character is a
		lowercase letter. Let $A$ be the event
		<ul>
  <li> A = "the string contains at least one vowel".</li>
		</ul>
		(A vowel is one of the letters $a$, $e$, $i$, $o$, and $u$.) What is $\Pr(A)$?
`;

const label1 = String.raw`$1 - (21/26)^{14}$`;
const label2 = String.raw`$1 - (26/21)^{14}$`;
const label3 = String.raw`$5 \cdot (5/26) \cdot (21/26)^{13}$`;
const label4 = String.raw`$14 \cdot (5/26) \cdot (21/26)^{13}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: true },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
