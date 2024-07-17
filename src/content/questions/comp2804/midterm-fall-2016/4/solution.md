There are 6 possibilities for the first 3 bits.
\begin{enumerate}
\item 000
\item 001
\item 010
\item 011
\item 100
\item 101
\item 110
\end{enumerate}
We can also get 6 possibilities by taking all 8 possible 3 bit combinations and subtracting the 2 possibilities where all 3 bits are the same. \\
For all other bits, there are 2 possibilities. \\
Thus, there are $6 \cdot 2^{n-3}$ bitstrings.
