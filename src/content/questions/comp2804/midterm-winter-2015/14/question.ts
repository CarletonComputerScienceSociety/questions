import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\NationalAnthem}{{\rm N {\scriptsize ATIONAL} A {\scriptsize NTHEM}}}
			 \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}$
		</div>
		
		Consider the following recursive algorithm $\NationalAnthem$, which takes as input an integer $n \geq 1$,
		which is a power of 2:
		
		<p>
			$\mathbf{Algorithm}\ \NationalAnthem(n)\mathrm{:}$ <br>
			$\mathbf{if}\ n = 1$ <br>
			$\mathbf{then}\ \mathrm{sing}\ {\it O\ Canada}\ \mathrm{once}$ <br>
			$\mathbf{else}\ \NationalAnthem(n / 2);$ <br>
			$\elsesp \mathrm{sing}\ {\it O\ Canada}\ \mathrm{once};$ <br>
			$\elsesp \NationalAnthem(n / 2)$ <br>
			$\mathbf{endif}$
		</p>
		
		For $n$ a power of 2, let $S(n)$ be the number of times you sing <em>O Canada</em> when running algorithm
		$\NationalAnthem(n)$. Which of the following is true? <br>
		(n.b., $\log$ denotes the base-2 logarithm)
`;

const label1 = String.raw`$S(n) = 1 + \log n$`;
const label2 = String.raw`$S(n) = 1 + n \log n$`;
const label3 = String.raw`$S(n) = 2n + 1$`;
const label4 = String.raw`$S(n) = 2n - 1$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: false },
    { label: label4, correct: true },
  ],
};
