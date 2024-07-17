Let $X_i$ be 1 if the students at positions $i$ and $2i$ are politically correct

<ul>
<li> Let S be all possible combinations 
We choose k positions for the politically correct students: $ \binom{n}{k} $ 
$ |S| = \binom{n}{k} $
	<li> Let $X_i=1$ be the event that the students at positions $i$ and $2i$ are politically correct 
2 students at those positions are both politicall correct
We choose k-2 positions for the politically correct out of n-2 remaining positions: $ \binom{n-2}{k-2} $ 
$ |X*i=1| = \binom{n-2}{k-2} $
	      $ Pr (X_i=1 ) = \frac{X_i=1|}{|S|} $
	      $ Pr (X_i=1 ) = \frac{\binom{n-2}{k-2}}{\binom{n}{k}} $ 
	      $ Pr (X_i=1 ) = \frac{ \frac{ (n-2)! }{ (k-2)! (n-k)! }}{ \frac{n!}{k! (n-k)! }} $ 
	      $ Pr (X_i=1 ) = \frac{ (n-2)! }{ (k-2)! (n-k)! } \cdot \frac{k! (n-k)!}{n!} $ 
	      $ Pr (X_i=1 ) = \frac{ (n-2)! }{ (k-2)! (n-k)! } \cdot \frac{k! (n-k)!}{n \cdot (n-1) \cdot (n-2)!} $ 
	      $ Pr (X_i=1 ) = \frac{ 1 }{ (k-2)! (n-k)! } \cdot \frac{k! (n-k)!}{n \cdot (n-1) } $ 
	      $ Pr (X_i=1 ) = \frac{ 1 }{ (k-2)! } \cdot \frac{k!}{n \cdot (n-1) } $ 
	      $ Pr (X_i=1 ) = \frac{ 1 }{ (k-2)! } \cdot \frac{k \cdot (k-1) \cdot (k-2)! }{n \cdot (n-1) } $ 
	      $ Pr (X_i=1 ) = \frac{ 1 }{ 1 } \cdot \frac{k \cdot (k-1) \cdot 1 }{n \cdot (n-1) } $ 
	      $ Pr (X_i=1 ) = \frac{k \cdot (k-1) }{n \cdot (n-1) } $
</ul>
Well, $S_n$ corresponds to $S*{ \frac{n}{2} }$ 
$S_{n-2}$ corresponds to $S_{ \frac{n}{2}-1}$ 
$S_{n-4}$ corresponds to $S_{ \frac{n}{2}-2}$ 
Half of everyone has a corresponding junior 
$ E(X) = sum*{i=1}^{n/2} Pr(X_i=1) $ 
$ E(X) = sum*{i=1}^{n/2} \frac{k \cdot (k-1) }{n \cdot (n-1) } $ 
$ E(X) = \frac{k (k-1) }{n (n-1) } \cdot \frac{n}{2} $ 
IT'S OVER. THE PAIN. THE SUFFERING. THE NIGHTMARES.
