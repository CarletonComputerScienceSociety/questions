Let $X_i$ be 1 if the bitstring contains 010 and 0 otherwise. \\
Three is a 1 in 3 chance of a 0 followed by a 2 in 3 chance of a 1 followed by a 1 in 3 chance of a 0. \\
$ \Pr(X*i = 1) = \frac{1}{3} \cdot \frac{2}{3} \cdot \frac{1}{3} $ \\
$ \Pr(X_i = 1) = \frac{2}{27} $ \\
When we are predicting the value of the current bit and the next 2 bits, there must be 2 bits after the current bit \\
As a result, the second last bit and last bit are not considered. \\
We consider the first $ n-2 $ bits of the bitstring. \\
$ E(X) = \sum*{i=1}^{n-2} \frac{2}{27} $ \\
$ E(X) = (n-2) \cdot \frac{2}{27} $
$ E(X) = \frac{2(n-2)}{27} $
