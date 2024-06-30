import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
<div hidden>
	$\newcommand{\ThreeHeadsOrThreeTails}{{\rm T {\scriptsize HREE} H {\scriptsize EADS} O {\scriptsize R} T {\scriptsize HREE} T {\scriptsize AILS}}}$
</div>

Consider the following recursive algorithm $\ThreeHeadsOrThreeTails$, which takes as input a positive integer $k$:

<div style="margin: 1rem 0;">
	$\mathbf{Algorithm}$ $\ThreeHeadsOrThreeTails(k)\mathrm{:}$ <br>
	$\text{flip a fair coin three times};$ <br>
	$\mathbf{if}\ \text{the result is \(HHH\) or \(TTT\)}$ <br>
	$\mathbf{then}\ \mathrm{return}\ k$ <br>
	$\mathbf{else}\ \ThreeHeadsOrThreeTails(k + 1)$ <br>
	$\mathbf{endif}$
</div>

You run algorithm $\ThreeHeadsOrThreeTails(1)$, i.e., with $k = 1$. Define the random variable $X$ to be the value of the output
of this algorithm. What is the expected value of $X$?
`;

const label1 = String.raw`2`;
const label2 = String.raw`3`;
const label3 = String.raw`4`;
const label4 = String.raw`5`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
