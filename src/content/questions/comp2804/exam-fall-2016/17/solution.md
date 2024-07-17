\begin{enumerate}
\item Let's determine $ S $ \\
S is the set of all possible outcomes of the 17 students \\
$ |S| = \binom{100}{17} $
	\item Let's determine $ B $ \\
	      B occurs when 4 is in the subset \\
	      We choose 4: 1 \\
	      We choose 16 from the remaining 99: $ \binom{99}{16} $ \\
	      $ |B| = 1 \cdot \binom{99}{16} $ \\
	      $ \Pr(B) = \frac{1 \cdot \binom{99}{16}}{\binom{100}{17}} $
	\item Let's determine $ C $ \\
	      C occurs when 7 is in the subset \\
	      We choose 17: 1 \\
	      We choose 16 from the remaining 99: $ \binom{99}{16} $ \\
	      $ |C| = 1 \cdot \binom{99}{16} $ \\
	      $ \Pr(C) = \frac{1 \cdot \binom{99}{16}}{\binom{100}{17}} $
	\item Let's determine $ B \cap C $ \\
	      We choose 17: 1 \\
	      We choose 4: 1 \\
	      We choose 15 from the remaining 98: $ \binom{98}{15} $ \\
	      $ |B \cap C| = 1 \cdot 1 \cdot \binom{98}{15} $ \\
	      $ \Pr(B \cap C) = \frac{1 \cdot 1 \cdot \binom{98}{15}}{\binom{100}{17}} $
\end{enumerate}
Now, let's determine $ A $ \\
$ \Pr(A) = \Pr(B) + \Pr(C) - \Pr(B \cap C) $ \\
$ \Pr(A) = \frac{1 \cdot \binom{99}{16}}{\binom{100}{17}} + \frac{1 \cdot \binom{99}{16}}{\binom{100}{17}} - \frac{1 \cdot 1 \cdot \binom{98}{15}}{\binom{100}{17}} $ \\
$ \Pr(A) = \frac{2 \cdot \binom{99}{16} - \binom{98}{15}}{\binom{100}{17}} $
