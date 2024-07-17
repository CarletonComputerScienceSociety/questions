Let $X_i$ be 1 if $b_i \cdot b_{i+1} = 0$ and 0 otherwise. This only happens if a pair of consecutive bits contain a 0. \\
$ \Pr(X*i = 1) = \Pr{(b_i = 0 \text{ and } b*{i+1} = 1)} + \Pr{(b*i = 1 \text{ and } b*{i+1} = 0)} + \Pr{(b*i = 0 \text{ and } b*{i+1} = 0)} $ \\
$ \Pr(X*i = 1) = \frac{1}{2} \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{2} + \frac{1}{2} \cdot \frac{1}{2} $ \\
$ \Pr(X_i = 1) = \frac{1}{4} + \frac{1}{4} + \frac{1}{4} $ \\
$ \Pr(X_i = 1) = \frac{3}{4} $ \\
Since the last bit has no bit after it, we only take into account the first $n-1$ bits \\
$ \mathbb{E}(X) = \sum*{k=1}^{n-1} 1 \cdot \Pr(X*i = 1) $ \\
$ \mathbb{E}(X) = \sum*{k=1}^{n-1} \frac{3}{4} $ \\
$ \mathbb{E}(X) = \frac{3}{4} \cdot (n-1) $ \\
$ \mathbb{E}(X) = \frac{3(n-1)}{4} $
