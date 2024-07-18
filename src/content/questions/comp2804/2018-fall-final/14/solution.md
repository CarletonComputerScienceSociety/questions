Let's see some products

<ul>
<li> $ 0 \cdot 0 = 0 $
	<li> $ 1 \cdot 0 = 0 $
	<li> $ 0 \cdot 1 = 0 $
	<li> $ 1 \cdot 1 = 1 $
</ul>
Let $k$ be the number of 1s in this bitstring. 
There are n positions and the probability of getting a 1 is $ \frac{1}{4} $ 
$X \sim\text{Binomial}(n, 1/4)$ 
$ Pr(X=k) = \binom{n}{k} {\left( \frac{1}{4} \right)}^{k} {\left( \frac{3}{4} \right)}^{n-k} $ 
$ Pr(X=k) = \binom{n}{k} \frac{1^k \cdot 3^{n-k}}{4^n} $ 
$ Pr(X=k) = \binom{n}{k} \frac{3^{n-k}}{4^n} $
