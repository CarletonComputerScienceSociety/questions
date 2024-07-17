\begin{enumerate}
\item Let S be the set of all possibilities \\
$ |S| = 4^{25} $
	\item Let A be the set where we answer 17 correctly
	      We choose 17 of the 25 questions to be correct: $ \binom{25}{17} $ \\
	      The remaining 8 each have 3 possible incorrect answers: $ 3^{8} $ \\
	      $ |A| = \binom{25}{17} \cdot 3^{8} $
\end{enumerate}
$ \Pr(A) = \frac{|A|}{|S|} $ \\
$ \Pr(A) = \frac{\binom{25}{17} \cdot 3^{8}}{4^{25}} $
$ \Pr(A) = \binom{25}{17} \cdot {(\frac{3}{4})}^8 \cdot {(\frac{1}{4})}^{17} $
