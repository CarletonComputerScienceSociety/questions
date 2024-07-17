I have a gut feeling that they're independent, but let's check

<ul>
<li> Let S be all possible permutations of the set ${1, 2, 3, 4}$: $ |S| = 4! = 24 $
	<li> Let's determine A 
	      We can view it untuitively or mathematically
	      <ul>
		      <li> Intuitively: When $a_1$ and $a_2$ are random values in a set, there's a $ \frac{1}{2} $ chance of $a_1 > a_2 $ 
		            $ Pr(A) = \frac{1}{2} $
		      <li> Mathematically: Start off by choosing 2 random values from the set ${1, 2, 3, 4}$ to take the place of $a_1$ and $a_2$: $ \binom{4}{2} $ 
There's only 1 correct permutation of the 2 values that allow $ a_1 > a_2 $: $ 1 $ 
		            The value at position $a_3$ can be one of the 2 remaining values: $ 2 $ 
The value at position $a_4$ can be the remaining value: $ 1 $ 
$ |A| = \binom{4}{2} \cdot 1 \cdot 2 \cdot 1 $ 
$ |A| = 12 $ 
$ Pr(A) = \frac{12}{24} $ 
$ Pr(A) = \frac{1}{2} $
	      </ul>
	<li> Let's determine B 
	      We can view it untuitively or mathematically
	      <ul>
		      <li> Intuitively: When $a_3$ and $a_4$ are random values in a set, there's a $ \frac{1}{2} $ chance of $a_3 > a_4 $ 
		            $ Pr(B) = \frac{1}{2} $
		      <li> Mathematically: Start off by choosing 2 random values from the set ${1, 2, 3, 4}$ to take the place of $a_3$ and $a_4$: $ \binom{4}{2} $ 
There's only 1 correct permutation of the 2 values that allow $ a_3 > a_4 $: $ 1 $ 
		            The value at position $a_1$ can be one of the 2 remaining values: $ 2 $ 
The value at position $a_2$ can be the remaining value: $ 1 $ 
$ |B| = \binom{4}{2} \cdot 1 \cdot 2 \cdot 1 $ 
$ |B| = 12 $ 
$ Pr(B) = \frac{12}{24} $ 
$ Pr(B) = \frac{1}{2} $
	      </ul>
	<li> Let's determine $ A \cap B $ 
	      We take any 2 random values from the set ${1, 2, 3, 4}$ to take the place of $a_1$ and $a_2$: $ \binom{4}{2} $ 
Now, there's only 1 correct permutation of the 2 values that allow $ a_1 > a_2 $: $ 1 $ 
	      Smilarly, we take 2 random values from the remaining set: $ \binom{2}{2} $ 
	      There's only 1 correct permutation of the remaining 2 values that allow $ a_4 > a_3 $: $ 1 $ 
	      $ |A \cap B| = \binom{4}{2} \cdot 1 \cdot \binom{2}{2} \cdot 1 $ 
	      $ |A \cap B| = 6 $
	      $ Pr(A \cap B) = \frac{6}{24} $ 
	      $ Pr(A \cap B) = \frac{1}{4} $
</ul>
Now, let's check whether they're independent 
$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $ 
$ \frac{1}{4} = \frac{1}{2} \cdot \frac{1}{2} $ 
$ \frac{1}{4} = \frac{1}{4} $ 
They are independent
