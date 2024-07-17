Let's explain why some are wrong and one is right
\begin{enumerate}
\item The number of bitstrings of length $n$ \\
Pretty sure this is wrong because the equation for the number of bitstrings of length $n$ is $2^n$
\item The number of bitstrings of length $\frac{n-2}{2}$ \\
Pretty sure this is wrong because the equation for the number of bitstrings of length $n$ is $2^n$
\item The number of bitstrings of length $n$ having an odd number of 0's. \\
Let's write out the first few values of $ \binom{n}{2k+1} $
	      \begin{enumerate}
		      \item $ \binom{n}{1} $
		      \item $ \binom{n}{3} $
		      \item $ \binom{n}{5} $
	      \end{enumerate}
	      As can be seen, the number of 0's is odd. \\
	      So that's great. The reason why $k$ only reaches a total of $ \frac{n-2}{2} $ is because in the actual equation, $k$ is multiplied by 2. \\
If we were to have $k$ possibly be $n$, then it would be $ \binom{n}{2n+1} $, which is not possible.
	\item The number of bitstrings of length $n$ in which the number of 0's plus the number of 1's is at most $ \frac{n-1}{2} $
I'm not sure why this would be correct
\end{enumerate}
