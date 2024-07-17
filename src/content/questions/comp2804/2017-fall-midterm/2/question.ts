import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $s \geq 1$, $t \geq 1$, and $k \geq 1$ be integers. The Carleton Computer Science Society is
		organizing their annual Halloween party. At this party, there are
		<ul style="margin: 0.5rem 0;">
			<li>
				$s$ students who are dressed up as Superman,
			</li>
			<li>
				$t$ students who are dressed up as Donald Trump,
			</li>
			<li>
				$k$ students who are dressed up as Kim Jong Un.
			</li>
		</ul>
		These $s+t+k$ students are arranged on a line, such that all Supermen are standing next to each
		other, all Trumps are standing next to each other, all Kims are standing next to each other, and no
		Trump is standing next to any Kim. How many such arrangements are there?
`;

const label1 = String.raw`$\left. (s+t+k)! \middle/ (s! \cdot t! \cdot k!) \right.$`;
const label2 = String.raw`$\left. (s+t+k)! \middle/ (2 \cdot s! \cdot t! \cdot k!) \right.$`;
const label3 = String.raw`$s! \cdot t! \cdot k!$`;
const label4 = String.raw`$2 \cdot s! \cdot t! \cdot k!$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
