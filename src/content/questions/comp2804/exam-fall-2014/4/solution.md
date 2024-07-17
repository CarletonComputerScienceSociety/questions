\begin{enumerate}
\item A = Event that the bitstring starts with 010 \\
Since the bitstring starts with 010, the first 3 digits must be 010 \\
The remaining 10 digits can be chosen from the set \{0,1\}, so there are $ 2^{10} $ ways to choose the remaining digits \\
$ |A| = 2^{10} $
	\item B = Event that the bitstring ends with 11 \\
	      Since the bitstring ends with 11, the last 2 digits must be 11 \\
	      The remaining 11 digits can be chosen from the set \{0,1\}, so there are $ 2^{11} $ ways to choose the remaining digits \\
	      $ |B| = 2^{11} $
	\item $ A \cap B $ = Event that the bitstring starts with 010 and ends with 11 \\
	      Since the bitstring starts with 010 and ends with 11, the first 3 digits must be 010 and the last 2 digits must be 11 \\
	      The remaining 8 digits can be chosen from the set \{0,1\}, so there are $ 2^8 $ ways to choose the remaining digits \\
	      $ |A \cap B| = 2^8 $
\end{enumerate}
$ |A \cup B| = |A| + |B| - |A \cap B| $ \\
$ |A \cup B| = 2^{10} + 2^{11} - 2^8 $ \\
$ |A \cup B| = 1 \cdot 2^{10} + 2 \cdot 2^{10} - 2^8$ \\
$ |A \cup B| = (1+2) \cdot 2^{10} - 2^8 $ \\
$ |A \cup B| = 3 \cdot 2^{10} - 2^8 $
