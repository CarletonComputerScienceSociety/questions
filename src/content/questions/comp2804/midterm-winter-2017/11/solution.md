(The positions are numbered $ 1, 2, \ldots, 3n-1) $. \\
Since the $ n^{th} $ position is 0, the $ {n-1}^{th} $ and $ {n+1}^{th} $ positions must be 1. \\
It would look something like: X,X,\ldots,1,0,1,\ldots,1,\ldots,X,X
\begin{enumerate}
	\item To the left of the first fixed 1, there are $ n - 2 $ bits that can be a, b, or c: $ f_{(n-2)+2} $ valid combinations
	\item Between the second fixed 1 and third fixed 1, there are $ n - 2 $ bits that can be a, b, or c: $ f_{(n-2)+2} $ valid combinations
	\item To the right of the third fixed 1, there are $ n - 1 $ bits that can be a, b, or c: $ f_{(n-1)+2} $ valid combinations
\end{enumerate}
$ f*{n} \cdot f*{n} \cdot f*{n+1} $ \\
$ {(f*{n})}^2 \cdot f*{n+1} $ \\
Thus, the number of 00-free bitstrings of length $ 3n-1 $ that have 0 at position $ n $ and 1 at position $ 2n $ is $ {(f*{n})}^2 \cdot f\_{n+1} $.
