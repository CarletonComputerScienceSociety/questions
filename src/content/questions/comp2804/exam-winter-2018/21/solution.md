For $X$ and $Z$ to be independent, $Pr(X = x \cap Z = z) = Pr(X = x) \cdot Pr(Z = z)$, for all real numbers $x$ and $z$, by definition of independent random variables. \\
If we can find a counterexample, aka where $Pr(X = x \cap Z = z) \neq Pr(X = x) \cdot Pr(Z = z)$, then we know the two are not independent. \\
Let $z = 0$, $x = 0$ and $y = 0$:
\begin{enumerate}
\item $Pr(X = 0) = \frac{1}{2}$, from expression in question
\item $Pr(Y = 0) = \frac{1}{2}$, from expression in question
\item $Pr(Z = 0) = Pr(X \cdot Y = 0) = Pr(X = 0 \cap Y = 0) + Pr(X = 0 \cap Y = 1) + Pr(X = 1 \cap Y = 0) = (\frac{1}{2} \cdot \frac{1}{2}) + (\frac{1}{2} \cdot \frac{1}{2}) + (\frac{1}{2} \cdot \frac{1}{2}) = \frac{3}{4}$
\item $Pr(X = 0 \cap Z = 0) = Pr(X = 0 \cap Y = 0) + Pr(X = 0 \cap Y = 1) = \frac{1}{2}$
\end{enumerate}
Now we check if LHS = RHS for the expression:
\begin{enumerate}
\item $Pr(X = x \cap Z = z) = Pr(X = x) \cdot Pr(Z = z)$
\item $Pr(X = 0 \cap Z = 0) = Pr(X = 0) \cdot Pr(Z = 0)$
\item $\frac{1}{2} = \frac{1}{2} \cdot \frac{3}{4}$
\item $\frac{1}{2} \neq \frac{3}{8}$
\end{enumerate}
Since LHS is not equal to RHS, then the events $X$ and $Z$ are not independent.
