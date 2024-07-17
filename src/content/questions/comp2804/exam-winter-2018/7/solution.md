\begin{enumerate}
\item Let S be the set of all strings that contain the substring $OO$ \\
First, we choose 1 of the 6 positions to place the $B$: $ \binom{6}{1} = 6$ \\
Then we choose 2 of the remaining 5 positions to place the $O$'s: $ \binom{5}{2} $ \\
Then we choose 1 of the remaining 3 positions to place the $G$: $ \binom{3}{1} = 3$ \\
Then we choose 1 of the remaining 2 positions to place the $E$: $ \binom{2}{1} = 2$ \\
Then we choose 1 of the remaining 1 positions to place the $R$: $ \binom{1}{1} = 1$ \\
$ |S| = 6 \cdot \binom{5}{2} \cdot 3 \cdot 2 \cdot 1$
	\item Let $ \overline{A} $ represent the set of all strings where the substring $OO$ is present \\
First, we group the O's together and treat them as one entity, meaning we have 5 entities to arrange \\
We choose 1 of the 5 positions to place the $B$: $ \binom{5}{1} = 5 $ \\
Then we choose 1 of the remaining 4 positions to place the $G$: $ \binom{4}{1} = 4 $ \\
Then we choose 1 of the remaining 3 positions to place the $E$: $ \binom{3}{1} = 3 $ \\
Then we choose 1 of the remaining 2 positions to place the $R$: $ \binom{2}{1} = 2 $ \\
Then we choose 1 of the remaining 1 positions to place the $OO$: $ \binom{1}{1} = 1 $ \\
$ |\overline{A}| = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 5! $
\end{enumerate}
Now, we can find the number of awesome strings \\
$|A| = |S| - |\overline{A}| $ \\
$|A| = (6 \cdot \binom{5}{2} \cdot 3 \cdot 2 \cdot 1) - 5!$ \\
$|A| = (6 \cdot \binom{5}{2} \cdot 3 \cdot 2) - 5!$
