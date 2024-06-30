import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
The Carleton Computer Science Society is organizing their annual Halloween party. At this party,
		<ul style="margin: 0.5rem 0;">
			<li>
				one student is dressed up as Donald Trump,
			</li>
			<li>
				one student is dressed up as Kim Jong Un,
			</li>
			<li>
				the remaining 57 students are dressed up as Kim Kardashian.
			</li>
		</ul>
		These students are arranged, uniformly at random, on a line.
		<br/>
		Define the event,
		[defs]
		  A = "Donald Trump is standing next to Kim Jong Un".
		[/defs]
		What is $\Pr(A)$?
`;

const label1 = String.raw`1/58`;
const label2 = String.raw`2/58`;
const label3 = String.raw`1/59`;
const label4 = String.raw`2/59`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
