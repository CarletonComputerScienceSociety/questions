Let's break me down
<ul>
<li> Let A be the set of all strings that have exactly 15 letters a \\
We choose 15 of the 85 positions to be a: $ \binom{85}{15} $ \\
The remaining 70 positions can be any of the 3 letters: $ 3^{70} $ \\
Thus, the total number of strings is $ \binom{85}{15} \cdot 3^{70} $
	<li> Let B be the set of all strings that have exactly 30 letters d \\
	      We choose 30 of the 85 positions to be d: $ \binom{85}{30} $ \\
	      The remaining 55 positions can be any of the 3 letters: $ 3^{55} $ \\
	      Thus, the total number of strings is $ \binom{85}{30} \cdot 3^{55} $
	<li> Let's determine $A \cap B$ \\
We choose 15 of the 85 positions to be a: $ \binom{85}{15} $ \\
We choose 30 of the 70 remaining positions to be d: $ \binom{70}{30} $ \\
The remaining 40 positions can be any of the 2 letters: $ 2^{40} $ \\
Thus, the total number of strings is $ \binom{85}{15} \cdot \binom{70}{30} \cdot 2^{40} $
</ul>
Now, we can determine $A \cup B$ \\
$ |A \cup B| = |A| + |B| - |A \cap B| $ \\
$ |A \cup B| = \binom{85}{15} \cdot 3^{70} + \binom{85}{30} \cdot 3^{55} - \binom{85}{15} \cdot \binom{70}{30} \cdot 2^{40} $
