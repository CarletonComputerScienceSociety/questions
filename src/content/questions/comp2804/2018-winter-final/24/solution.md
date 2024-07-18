Let S be the set of all possibilities = $ |S| = 8^{3} $

Let A be the set of all possibilities where a student gets exactly 2 ciders

To get exactly 2 ciders, a student has to have 2 ciders and 1 beer. There are 3 ways to get 2 ciders and a beer: $CBC, BCC, CCB$.

<ul>
    <li> Number of ways for combination $CBC$: $\binom{5}{1} \cdot \binom{3}{1} \cdot \binom{5}{1} = 5^2 \cdot 3$
    <li> Number of ways for combination $BCC$: $\binom{3}{1} \cdot \binom{5}{1} \cdot \binom{5}{1} = 5^2 \cdot 3$
    <li> Number of ways for combination $CCB$: $\binom{5}{1} \cdot \binom{5}{1} \cdot \binom{3}{1} = 5^2 \cdot 3$
</ul>

Now, we can sum

$ Pr(A) = Pr( CBC ) + Pr( BCC ) + Pr( CCB ) $

$ Pr(A) = (5^2 \cdot 3) + (5^2 \cdot 3) + (5^2 \cdot 3) $

$ Pr(A) = 3 \cdot \frac{5^2 \cdot 3}{8^3} $

$ Pr(A) = \frac{3^2 \cdot 5^2}{8^3}$

Let $X_i$ be an indicator random variable where:

$ 1 \text{ if a student gets exactly 2 ciders} $

$ 0 \text{ otherwise} $

$ Pr(X_i = 1) = Pr(A) = \frac{3^2 \cdot 5^2}{8^3}$

$ \mathbb{E}(X) = \sum\_{k=1}^{16} 1 \cdot Pr(X_i = 1) $

$ \mathbb{E}(X) = \sum\_{k=1}^{16} \frac{3^2 \cdot 5^2}{8^3} $

$ \mathbb{E}(X) = 16 \cdot \frac{3^2 \cdot 5^2}{8^3} $

$ \mathbb{E}(X) = 2^4 \cdot \frac{3^2 \cdot 5^2}{8^3} $

$ \mathbb{E}(X) = \frac{2^4 \cdot 3^2 \cdot 5^2}{8^3} $

$ \mathbb{E}(X) = 2^4 \cdot 3^2 \cdot \frac{5^2}{8^3} $
