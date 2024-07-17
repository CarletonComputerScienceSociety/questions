<ul>
<li> Let A be the set of all strings that contain exactly 5 $a$'s \\
First, choose 5 positions out of the 40 for the $a$'s: $ \binom{40}{5} $ \\
Then for the remaining characters in the strings, they can be either $b$, $c$ or $d$ = $ 3^{35} $ \\
$ |A| = \binom{40}{5} \cdot 3^{35} $
	<li> Let B be the set of all strings that contain exactly 5 $c$'s \\
First, choose 5 positions out of the 40 for the $c$'s: $ \binom{40}{5} $ \\
Then for the remaining characters in the strings, they can be either $a$, $b$ or $d$ = $ 3^{35} $ \\
$ |B| = \binom{40}{5} \cdot 3^{35} $
	<li> Let's determine $ A \cap B $ \\
	      We need to choose 5 positions out of the 40 for the $a$'s and the $c$'s: $ \binom{40}{5} $ \\
We need to choose 5 positions out of the remaining 35 for the $c$'s: $ \binom{35}{5} $ \\
Then for the remaining characters in the strings, they can be either $b$ or $d$ = $ 2^{30} $
</ul>
Now, we can find $ A \cup B $ \\
$ |A \cup B| = |A| + |B| - |A \cap B| $ \\
$ |A \cup B| = \binom{40}{5} \cdot 3^{35} + \binom{40}{5} \cdot 3^{35} - \binom{40}{5} \cdot \binom{35}{5} \cdot 2^{30} $ \\
$ |A \cup B| = 2 \cdot \binom{40}{5} \cdot 3^{35} - \binom{40}{5} \cdot \binom{35}{5} \cdot 2^{30} $
