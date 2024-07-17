<ul>
<li> Let A be the set of all bitstrings of length k that contain at least 1 
To do this question, we can think of it as enquote{All bitstrings minus bitstrings that have exactly 0 1's} 
The only way to have exactly 0 1's is to have all 0's 
Thus, the number of bitstrings that have exactly 0 1's is 1 
$ |A| = 2^{k} - 1 $
	<li> Let B be the set of all bitstrings of length n that contain exactly seven 0s 
	      We choose 7 spots out of the n spots to place the 0s 
	      $ |B| = \binom{n}{7} $
</ul>
Let's just see what happens when $n = 7$ 
$ |A| = 2^{7} - 1 = 127 $ 
$ |B| = \binom{7}{7} = 1 $ 
Now, we can say for certain that $2^{n} - 1 geq \binom{n}{7} $
