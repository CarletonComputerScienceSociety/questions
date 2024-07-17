To prove that this statement is false, we need to provide a counterexample:
Let X, Y, Z all represent the random variables where $X, Y, Z = 1$ if a coin toss is heads and $X, Y, Z = 0$ if a coin toss is tails.
The expected value of $X, Y, Z$ in this case (assuming that $frac{1}{2}$ chance of hitting heads or tails) is: $E(X) = E(Y) = E(Z) = 0 cdot frac{1}{2} + 1 cdot frac{1}{2} = frac{1}{2}$.
This means that the $min(E(X), E(Y), E(Z) = min(frac{1}{2}, frac{1}{2}, frac{1}{2}) = frac{1}{2}$ is $frac{1}{2}$.
For the LHS, we need to calculate the expected value for $min(X, Y, Z)$. There are only two possible values in this case: $min(X, Y, Z) = 0$ and $min(X, Y, Z) = 1$

<ul>
<li> Pr(min(X, Y, Z) = 1) = every coin has to come up with a heads = $(frac{1}{2})^{3} = frac{1}{8}$
<li> Pr(min(X, Y, Z) = 0) = 1 - Pr(min(X, Y, Z) = 1) = $1 - frac{1}{8} = frac{7}{8}$
<li> $E(min(X, Y, Z)) = 0 cdot Pr(min(X, Y, Z) = 0) + 1 cdot Pr(min(X, Y, Z) = 1) = 0 cdot frac{7}{8} + 1 cdot (frac{1}{8}) = frac{1}{8}$.
</ul>
Since $E(min(X, Y, Z)) = frac{1}{8}$ and $min(E(X), E(Y), E(Z)) = frac{1}{2}$, the two are not the same, so the statement is false.
