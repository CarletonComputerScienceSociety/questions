import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Consider strings consisting of 40 characters, where each character is one of the letters $a$, $b$, and
		$c$. Such a string is called <em>cool</em> if
		<ul style="margin: 0.5rem 0;">
			<li>
				it contains exactly 8 many $a$'s
			</li>
		</ul>
		or
		<ul style="margin: 0.5rem 0;">
			<li>
				it contains exactly 7 many $b$'s.
			</li>
		</ul>
		How many cool strings are there?
`;

const label1 = "${{40 choose 8} cdot 2^{32} + {40 choose 7} cdot 2^{33}}$";
const label2 =
  "${{40 choose 8} cdot 2^{32} + {40 choose 7} cdot 2^{33} - {40 choose 15} cdot {15 choose 8} cdot 2^{25}}$";
const label3 =
  "${{40 choose 8} cdot 2^{32} + {40 choose 7} cdot 2^{33} - {40 choose 15} cdot {15 choose 8}}$";
const label4 = "None of the above.";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
