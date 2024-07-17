Let $X_i$ be 1 if $C$ is not at position 1 and 2 if $C$ is at position 1 \\
$ \Pr(X*i=1) = \Pr(\text{$B_i$ is at position 1}) = \frac{1}{n+1} $ \\
$ \Pr(X_i=2) = \Pr(\text{$C$ is at position 1}) = \frac{1}{n+1} $ \\
$ \mathbb{E}(X) = \sum*{k=2}^{n+1} 1 \cdot \Pr(X*i=1) + 2 \cdot \Pr(X_i=2) $ \\
$ \mathbb{E}(X) = \sum*{k=2}^{n+1} 1 \cdot \frac{1}{n+1} + 2 \cdot \frac{1}{n+1} $ \\
$ \mathbb{E}(X) = \sum\_{k=2}^{n+1} \frac{1}{n+1} + \frac{2}{n+1} $ \\
$ \mathbb{E}(X) = (n+1-2) \cdot (\frac{1}{n+1} + \frac{2}{n+1})$ \\
$ \mathbb{E}(X) = \frac{n+1-2+1+2}{n+1} $ \\
$ \mathbb{E}(X) = \frac{n+2}{n+1} $
