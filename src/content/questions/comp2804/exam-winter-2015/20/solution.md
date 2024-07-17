Let $X_i$ be 1 if the $i$th edge is in $E'$ and 0 otherwise. \\
For an edge to be in $E'$, both of its vertices must be in $V'$ \\
$ \Pr(X*i=1) = \frac{1}{4} $ \\
Now, we need to check how many edges in $E$ are in $E'$ based on the vertices in $V'$ \\
$ \mathbb{E}(X) = \sum*{i=1}^{m} \mathbb{E}(X*i) $ \\
$ \mathbb{E}(X) = \sum*{i=1}^{m} \Pr(X*i=1) $ \\
$ \mathbb{E}(X) = \sum*{i=1}^{m} \frac{1}{4} $ \\
$ \mathbb{E}(X) = \frac{m}{4} $
