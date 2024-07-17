All this to say that the current bit is different from the next bit
<ul>
<li> Let S be the set of all pairs of bits of length n \\
$ S = \{ (0,0), (0,1), (1,0), (1,1) \} $ \\
$ |S| = 4^n $
	<li> Let A be the event that the current bit is different from the next bit \\
	      $ A = \{ (0,1), (1,0) \} $ \\
	      $ |A| = 2 $ \\
	      $ \Pr(A) = \frac{2}{4} = \frac{1}{2} $
</ul>
Since we're considering the current bit and its next bit, we don't consider the last bit since there's no bit after the last bit \\
This means we have n-1 pairs \\
$ \mathbb{E}(X) = \sum\_{i=1}^{n-1} 1 \cdot \Pr(A) $ \\
$ \mathbb{E}(X) = (n-1) \cdot \frac{1}{2} $ \\
$ \mathbb{E}(X) = \frac{n-1}{2} $ \\
The expected value of X is $ \frac{n-1}{2} $
