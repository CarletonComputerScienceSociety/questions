import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Alexa, Tri, and Zoltan each have a uniformly random birthday. (We ignore leap years, so that one
		year has 365 days.) <br>
		
		Define the event
		<ul>
  <li> A = "Alexa, Tri, and Zoltan have different birthdays".</li>
		</ul>
		What is $\text{Pr}(A)$?
`;

const label1 = String.raw`$\frac{365^2}{363 \cdot 364}$`;
const label2 = String.raw`$\frac{363^3}{362 \cdot 363 \cdot 364}$`;
const label3 = String.raw`$\frac{363 \cdot 364}{365^2}$`;
const label4 = String.raw`$\frac{362 \cdot 363 \cdot 364}{365^3}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
