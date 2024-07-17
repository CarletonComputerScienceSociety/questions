The answer is C, and I will show how the expression in the question shows the number of ways to choose a 2-element subset from a set consisting of m + n elements: \\
From a set of $m + n$ elements, we can form 2-element subsets in 3 different ways:
\begin{enumerate}
\item Choose 2 elements from the $m$ set: there are $\binom{m}{2}$ ways to do this
\item Choose 2 elements from the $n$ set: there are $\binom{n}{2}$ ways to do this
\item Choose 1 element from the $m$ set and 1 element from the $n$ set: there are $\binom{m}{1} \cdot \binom{n}{1} = m \cdot n$
\end{enumerate}
Now, if we apply the Sum Rule to all of these cases above, we get $\binom{m}{2} + \binom{n}{2} + m \cdot n$, which matches the expression above.
