Warning: I don't know but I can try

<ul>
	<li> Let S be the set of all possible permutations <br/>
	$ |S| = 20! $
	<li> Let's determine $A$ <br/>
	We could pick 1 and any of the 19 larger integers and the other 18 numbers have 18! posible permutations <br/>
	We could pick 2 and any of the 18 larger integers and the other 18 numbers have 18! posible permutations <br/>
	\ldots <br/>
	We could pick 19 and 20 and the other 18 numbers have 18! posible permutations <br/>
	$ |A| = 19 \cdot 18! + 18 \cdot 18! + \ldots + 1 \cdot 18! $ <br/>
	$ |A| = 18! \cdot \frac{(19)(20)}{2}$ <br/>
	$ |A| = 18! \cdot (19)(10) $ <br/>
	$ |A| = 18! \cdot 190 $
	$ |A| = 10 \cdot 19! $
	$ \Pr(A) = \frac{|A|}{|S|} $ <br/>
	$ \Pr(A) = \frac{10 \cdot 19!}{20!} $ <br/>
	$ \Pr(A) = \frac{10}{20} $ <br/>
	$ \Pr(A) = \frac{1}{2} $
	<li> Let's determine $\Pr(B)$ <br/>
	We could pick 1 and any of the 19 larger integers and the other 18 numbers have 18! posible permutations <br/>
	We could pick 2 and any of the 18 larger integers and the other 18 numbers have 18! posible permutations <br/>
	\ldots <br/>
	We could pick 19 and 20 and the other 18 numbers have 18! posible permutations <br/>
	$ |A| = 19 \cdot 18! + 18 \cdot 18! + \ldots + 1 \cdot 18! $ <br/>
	$ |A| = 18! \cdot \frac{(19)(20)}{2}$ <br/>
	$ |A| = 18! \cdot (19)(10) $ <br/>
	$ |A| = 18! \cdot 190 $
	$ |A| = 10 \cdot 19! $
	$ \Pr(A) = \frac{|A|}{|S|} $ <br/>
	$ \Pr(A) = \frac{10 \cdot 19!}{20!} $ <br/>
	$ \Pr(A) = \frac{10}{20} $ <br/>
	$ \Pr(A) = \frac{1}{2} $
	<li> Let's determine $\Pr(A \cap B)$ <br/>
	Well, let's go I guess!
	<ul>
		<li> $\pi_{12}$ could be 1 and $\pi_{11}$ would have to be any of the 19 values smaller than it and $\pi_{10}$ would have to be any value larger than $\pi_{11}$. The remaining 17 values have 17! permutations
		<li> $\pi_{12}$ could be 2 and $\pi_{11}$ would have to be any of the 18 values smaller than it and $\pi_{10}$ would have to be any value larger than $\pi_{11}$. The remaining 17 values have 17! permutations
		<li> \ldots
		<li> $\pi_{12}$ could be 19 and $\pi_{11}$ would have to be 20 and $\pi_{10}$ would have to be any value larger than $\pi_{11}$. The remaining 17 values have 17! permutations
	</ul>
	Idk if there's a way to express it but we can try <br/>
	$ \sum_{i=1}^{18} ( \sum_{j=i+1}^{19} (\sum_{k=j+1}^{20} 1 \cdot 17!) ) $<br/>
	$ 17! \cdot \sum_{i=1}^{18} ( \sum_{j=i+1}^{19} (\sum_{k=j+1}^{20} 1) ) $<br/>
	$ 17! \cdot \sum_{i=1}^{20} ( \sum_{j=1}^{i-1} (\sum_{k=1}^{j-1} 1) ) $<br/>
	$ 17! \cdot \sum_{i=1}^{20} ( \sum_{j=1}^{i-1} ( j - 1 ) ) $<br/>
	$ 17! \cdot \sum_{i=1}^{20} ( \frac{(i-1)(i-2)}{2}) $<br/>
	$ 17! \cdot \frac{1}{2} \cdot \sum_{i=1}^{20} ( (i-1)(i-2) ) $<br/>
	$ 17! \cdot \frac{1}{2} \cdot \sum_{i=1}^{20} ( i^2 - 3i + 2 ) $<br/>
	$ 17! \cdot \frac{1}{2} \cdot ( \sum_{i=1}^{20} i^2 - \sum_{i=1}^{20} 3i + \sum_{i=1}^{20} 2 ) $<br/>
	$ 17! \cdot \frac{1}{2} \cdot ( \frac{20 \cdot 21 \cdot 41}{6} - 3 \sum_{i=1}^{20} i + 2 \sum_{i=1}^{20} 1 ) $<br/>
	$ 17! \cdot \frac{1}{2} \cdot ( \frac{20 \cdot 21 \cdot 41}{6} - 3 \cdot \frac{20 \cdot 21}{2} + 2 \cdot 20 ) $<br/>
	$ 17! \cdot \frac{1}{2} \cdot ( \frac{20 \cdot 7 \cdot 41}{2} - 3 \cdot \frac{10 \cdot 21}{1} + 40 ) $<br/>
	$ 17! \cdot \frac{1}{2} \cdot ( \frac{10 \cdot 7 \cdot 41}{1} - 3 \cdot 10 \cdot 21 + 40 ) $<br/>
	$ 17! \cdot \frac{1}{2} \cdot ( 10 \cdot 7 \cdot 41 - 3 \cdot 10 \cdot 21 + 40 ) $<br/>
	$ 17! \cdot ( 5 \cdot 7 \cdot 41 - 3 \cdot 5 \cdot 21 + 20 ) $<br/>
	$ 17! \cdot ( 5 \cdot 7 \cdot 41 - 3 \cdot 5 \cdot 21 + 20 ) $<br/>
	$ 17! \cdot ( 1435 - 315 + 420 ) $<br/>
	$ 17! \cdot ( 1540 ) $<br/>
	ngl, the value is actually wrong. Basically the probability of A intersect B is smaller than the product of the 2 probabilities
</ul>

There's no way this is the actual way to do the question, right? This is bullshit. I am LITERALLY losing my sanity
