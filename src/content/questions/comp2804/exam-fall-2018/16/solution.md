\begin{enumerate}
\item Let's determine $ A $ \\
As discussed in the solution to question 11, the probability of getting an even number of heads is the same as getting an odd number of heads \\
$ \Pr(A) = \frac{1}{2} $
	\item Let's determine $ B $ \\
	      We choose 0 tails out of the 3 flips: $ \binom{3}{0} = 1 $ \\
	      We choose 1 tail out of the 3 flips: $ \binom{3}{1} = 3 $ \\
	      $ |B| = 1 + 3 = 4 $ \\
	      $ \Pr(B) = \frac{4}{8} = \frac{1}{2} $
	\item Let's determine $ A \cap B $ \\
	      We need an even number of heads at at most 1 tail \\
	      In the case of 0 tails, we have 3 heads, which means an odd number of heads: 0 \\
	      In the case of 1 tail, we have 2 heads, which means an even number of heads \\
	      We choose 1 tail out of the 3 flips: $ \binom{3}{1} = 3 $ \\
	      $ |A \cap B| = 3 $ \\
	      $ \Pr(A \cap B) = \frac{3}{8} $
\end{enumerate}
Now, let's check whether they're independent \\
$ \Pr(A \cap B) = \Pr(A) \cdot \Pr(B) $ \\
$ \frac{3}{8} = \frac{1}{2} \cdot \frac{1}{2} $ \\
$ \frac{3}{8} = \frac{1}{4} $ \\
