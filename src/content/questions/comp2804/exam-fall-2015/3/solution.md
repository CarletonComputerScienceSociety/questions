\begin{enumerate}
\item Let A be the event that $s_1s_2s_3 = 100$. \\
The first 3 bits are fixed: 1 0 0. \\
The remaining 17 bits can be any combination of 0s and 1s: $2^{17}$. \\
$ |A| = 2^{17} $
	\item Let B be the event that $s_2s_3s_4 = 000$. \\
The bits are fixed: 0 0 0. \\
The remaining 17 bits can be any combination of 0s and 1s: $2^{17}$. \\
$ |B| = 2^{17} $
	\item Let $A \cap B$ be the event that $s_1 s_2 s_3 s_4= 10000$ \\
The bits are fixed: 1 0 0 0. \\
The remaining 16 bits can be any combination of 0s and 1s: $2^{16}$. \\
$ |A \cap B| = 2^{16} $
\end{enumerate}
$ |A \cup B| = |A| + |B| - |A \cap B| $ \\
$ |A \cup B| = 2^{17} + 2^{17} - 2^{16} $ \\
$ |A \cup B| = (1+1) \cdot 2^{17} - 2^{16} $ \\
$ |A \cup B| = 2 \cdot 2^{17} - 2^{16} $ \\
$ |A \cup B| = 2^{18} - 2^{16} $
