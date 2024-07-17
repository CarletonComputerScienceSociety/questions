For anything less than 5 flips, I honestly just draw a tree diagram to find the answer \\
\begin{forest}
[
[H
[H
[H]
[T]
]
[T
[H]
[T]
]
]
[T
[H
[H]
[T]
]
[T
[H]
[T]
]
]
]
\end{forest}
<ul>
<li> Let's determine S \\
S is the set of all possible outcomes of the 3 coin flips \\
$ |S| = 2^3 = 8$
	<li> Let's determine A \\
	      A occurs when we either get 0 or 2 heads \\
	      $ |A| = 4 $ \\
	      $ \Pr(A) = \frac{4}{8} = \frac{1}{2} $
	<li> Let's determine B \\
	      B occurs when we get 2 or 3 heads \\
	      $ |B| = 3 $ \\
	      $ \Pr(B) = \frac{3}{8} $
	<li> Let's determine $ A \cap B $ \\
	      $ |A \cap B| = 2 $ \\
	      $ \Pr(A \cap B) = \frac{2}{8} = \frac{1}{4} $
</ul>
Now, let's check if A and B are independent \\
$ \Pr(A \cap B) = \Pr(A) \cdot \Pr(B) $ \\
$ \frac{1}{4} = \frac{1}{2} \cdot \frac{3}{8} $ \\
$ \frac{1}{4} = \frac{3}{16} $ \\
Since the equation is false, A and B are not independent.
