import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $n$ and $k$ be integers such that $n$ is even, $n \geq 2$, and
		$1 \leq k \leq n$. The Carleton
		Computer Science Society (CCSS) is having their annual <s>Christmas</s> Holiday Season Party, which
		is attended by $n$ students.
		
		<!-- yes, i know, css li::marker is great. it also doesn't work on Safari -->
		<table style="margin: 1rem 0; padding-left: 1.1em;">
			<tbody>
				<tr>
					<td style="vertical-align: top; text-align: right; padding: 0;">(i)</td>
					<td style="padding: 0 0 0 0.35em;">
						$k$ of these $n$ students are politically correct and, thus, refuse to say <em>Merry Christmas</em>.
						Instead, they say <em>Happy Holidays</em>.
					</td>
				</tr>
				<tr>
					<td style="vertical-align: top; text-align: right; padding: 0;">(ii)</td>
					<td style="padding: 0 0 0 0.35em;">
						$n - k$ of these $n$ students do not care about political correctness and, thus, they say
						<em>Merry Christmas</em>.
					</td>
				</tr>
			</tbody>
		</table>
		
		Consider a uniformly random permutation of these $n$ students. The positions in this permutation are numbered
		as $1,2,...,n$.
		
		<p style="margin: 0.5rem 0;">
			Define the random variable $X$ as the number of positions $i$ with $1 \leq i \leq \left. n \middle/2 \right.$
			such that both students at positions $i$ and $2i$ are politically correct.
		</p>
		
		What is the expected value $\mathbb{E}(X)$ of the random variable $X$?
		
		<p style="margin-top: 0.5rem;">
			<em>Hint:</em> Use indicator random variables.
		</p>
`;

const label1 = String.raw`$n \cdot \frac{k(k - 1)}{n(n - 1)}$`;
const label2 = String.raw`$n \cdot \frac{(k - 1)(k - 2)}{n(n - 1)}$`;
const label3 = String.raw`$\frac{n}{2} \cdot \frac{k(k - 1)}{n(n - 1)}$`;
const label4 = String.raw`$\frac{n}{2} \cdot \frac{(k - 1)(k - 2)}{n(n - 1)}$`;

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: false },
    { label: label3, correct: true },
    { label: label4, correct: false },
  ],
};
