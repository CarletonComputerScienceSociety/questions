1. Determine probability of $X_i$

   Let $X_i$ be the 1 if $c_i \cdot c_{i + 1}$ is odd

   <ul>
       <li> $1 \cdot 1$ is odd </li>
       <li> $1 \cdot 2$ is even </li>
       <li> $1 \cdot 3$ is odd </li>
       <li> $2 \cdot 1$ is even </li>
       <li> $2 \cdot 2$ is even </li>
       <li> $2 \cdot 3$ is even </li>
       <li> $3 \cdot 1$ is odd </li>
       <li> $3 \cdot 2$ is even </li>
       <li> $3 \cdot 3$ is odd </li>
   </ul>

   $X_i$ is odd with probability $\frac{4}{9}$

2. Profit

   $ \mathbb{E}(X) = \sum\_{i=1}^{n-1} \mathbb{E}(X_i) $

   $ \mathbb{E}(X) = \sum\_{i=1}^{n-1} \frac{4}{9} $

   $ \mathbb{E}(X) = \frac{4}{9} \cdot (n-1) $
