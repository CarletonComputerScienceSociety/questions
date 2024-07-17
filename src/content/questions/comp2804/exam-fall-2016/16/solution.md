\begin{enumerate}
\item Let's determine $ S $ \\
S is the set of all possible outcomes of the birthdays of the students \\
$ |S| = 365^n $ \\
$ \Pr(S) = \frac{365^n}{365^n} = 1 $
	\item Let's determine $ B $ \\
	      B is the set of all outcomes where no students have their birthday on December 14 \\
	      The first student has 364 possible birthdays \\
	      The second student has 364 possible birthdays \\
	      \ldots \\
	      The nth student has 364 possible birthdays \\
	      $ |B| = 364^n $ \\
	      $ \Pr(B) = \frac{364^n}{365^n} $
	\item Let's determine $ C $ \\
	      C is the set of all outcomes where exactly one student has their birthday on December 14 \\
	      Out of n students, choose 1 of them to have their birthday on December 14: $ \binom{n}{1} = n $ \\
	      The student with the birthday on December 14 has 1 possible birthday: 1 \\
	      The other students have 364 possible birthdays: $ 364^{n-1} $ \\
	      $ |C| = n \cdot 1 \cdot 364^{n-1} $ \\
	      $ \Pr(C) = \frac{n \cdot 1 \cdot 364^{n-1}}{365^n} $
\end{enumerate}
Now, let's determine $ A $ \\
$ \Pr(A) = \Pr(S) - \Pr(B) - \Pr(C) $ \\
$ \Pr(A) = 1 - \frac{364^n}{365^n} - \frac{n \cdot 1 \cdot 364^{n-1}}{365^n} $
