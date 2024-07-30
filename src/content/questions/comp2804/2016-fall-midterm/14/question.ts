import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
			$\newcommand{\ElisaDrinksCider}{{\rm E {\scriptsize LISA} D {\scriptsize RINKS} C {\scriptsize IDER}}}
			 \newcommand{\elsesp}{\phantom{\mathbf{else}\ }}$
		</div>
		
		Consider the following recursive algorithm $\ElisaDrinksCider$, which takes as input an integer
		$n \geq 1$, which is a power of 2:

		<p>
			$\mathbf{Algorithm} \text{ ElisaDrinksCider}(n):$ <br>
			$\quad \mathbf{if}\ n = 1\ \mathbf{then}$ <br>
			$\quad \quad \text{order Fibonachos}$ <br>
			$\quad \mathbf{else}$ <br>
			$\quad \quad \ElisaDrinksCider(n / 2);$ <br>
			$\quad \quad \text{drink n bottles of cider};$ <br>
			$\quad \quad \ElisaDrinksCider(n / 2)$ <br>
			$\quad \mathbf{endif}$
		</p>
		
		For $n$ a power of 2, let $C(n)$ be the total number of bottles of cider that you drink when running algorithm
		$\ElisaDrinksCider(n)$. Which of the following is true for any $n \geq 1$ that is a power of 2? <br>
		(n.b., $\log$ denotes the base-2 logarithm)
`;

const label1 = String.raw`$C(n) = n \log n - 1$`;
const label2 = String.raw`$C(n) = n \log n + 1$`;
const label3 = String.raw`$C(n) = n \log n$`;
const label4 = String.raw`$C(n) = 2n \log n$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
