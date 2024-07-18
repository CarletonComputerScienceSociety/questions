Let $X_i$ be 1 if $c_i = c_{i+1}$ and 0 otherwise

So $c_i$ can be any of the 5 characters, but $c_{i+1}$ needs to follow after $c_i$. It has a 1 in 5 chance of being the same character: $ \frac{1}{5} $

We do this for every value from 1 to n-1. We exclude n because there is not value that comes after the last value: $ (n-1) $

$ \mathbb{E}(X) = \mathbb{E}(X_1 + X_2 + \text{...} + X\_{n-1}) $

$ \mathbb{E}(X) = \sum\_{k=1}^{n-1} \mathbb{E}(X_i) $

$ \mathbb{E}(X) = \sum\_{k=1}^{n-1} \frac{1}{5} $

$ \mathbb{E}(X) = \frac{n-1}{5} $
