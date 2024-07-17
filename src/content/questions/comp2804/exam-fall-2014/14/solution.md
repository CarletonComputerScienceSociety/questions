Let's go through each option and explain
\begin{enumerate}
\item $1 - (1/2)^{7}$ \\
This is just the complement rule, which usually works but they're subtracting the probability that we get 6 tails followed by a head \\
It might've worked if they were subtracting the probability that we get 7 tails followed by a head from the whole set of possibilities
\item $\sum_{k=0}^{7} (1/2)^{k}$ \\
This one is wrong because it starts at $ { \left( \frac{1}{2} \right)}^0 $ but it doesn't take into account the fact that we have to flip a head to stop, which has a probability of $ \frac{1}{2} $
	\item $\sum_{k=0}^{7} (1/2)^{k+1}$ \\
This one is beautiful \\
It says, probability of flipping a heads right away, probability of flipping a tails folloewd by a heads, probability of flipping 2 tails followed by a heads, and so on until 7 tails followed by a heads
\end{enumerate}
