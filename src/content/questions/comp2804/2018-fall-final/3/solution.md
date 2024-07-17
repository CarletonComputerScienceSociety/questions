<ul>
<li> Let C be the event that the string has exactly 12 letters $c$ 
First, we choose 12 positions out of the 70 for the letter $c$: $ \binom{70}{12} $ 
Then, we choose the positions of the letters $a$ and $b$ for the remaining 58 positions: $ 2^{58} $ 
$ |C| = \binom{70}{12} \cdot 2^{58} $
	<li> Let B be the event that the string has exactly 30 letters $b$ 
First, we choose 30 positions out of the 70 for the letter $b$: $ \binom{70}{30} $ 
Then, we choose the positions of the letters $a$ and $c$ for the remaining 40 positions: $ 2^{40} $ 
$ |B| = \binom{70}{30} \cdot 2^{40} $
	<li> Let's determine $ B \cap C $ 
	      First, we choose 12 positions out of the 70 for the letter $c$: $ \binom{70}{12} $ 
Then, we choose 30 positions out of the remaining 58 for the letter $b$: $ \binom{58}{30} $ 
The remaining 28 positions are for the letter $a$: 1 
$ |B \cap C| = \binom{70}{12} \cdot \binom{58}{30} $
</ul>
$ |B \cup C| = |B| + |C| - |B \cap C| $ 
$ |B \cup C| = \binom{70}{30} \cdot 2^{40} + \binom{70}{12} \cdot 2^{58} - \binom{70}{12} \cdot \binom{58}{30} $