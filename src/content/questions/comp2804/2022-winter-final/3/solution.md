Let's tear it apart

<ul>
	<li> Let A be the set of all strings with exactly 5 letters $a$ <br/>
	We choose 5 positions out of the 70 positions to place $a$'s: $ \binom{70}{5} $ <br/>
	Each of the remaining 65 positions can be any of the 4 other letters: $ 4^{65} $ <br/>
	$ |A| = \binom{70}{5} \cdot 4^{65} $
	<li> Let B be the set of all strings with exactly 15 letters $b$ <br/>
	We choose 15 positions out of the 70 positions to place $b$'s: $ \binom{70}{15} $ <br/>
	Each of the remaining 55 positions can be any of the 4 other letters: $ 4^{55} $ <br/>
	$ |B| = \binom{70}{15} \cdot 4^{55} $
	<li> Let's determine $A \cap B$ <br/>
	We choose 5 positions out of the 70 positions to place $a$'s: $ \binom{70}{5} $ <br/>
	We choose 15 positions out of the remaining 65 positions to place $b$'s: $ \binom{65}{15} $ <br/>
	Each of the remaining 50 positions can be any of the 3 other letters: $ 3^{50} $ <br/>
	$ |A \cap B| = \binom{70}{5} \cdot \binom{65}{15} \cdot 3^{50} $
</ul>

Now, let's get this bread

$ |A \cup B| = |A| + |B| - |A \cap B| $

$ |A \cup B| = \binom{70}{5} \cdot 4^{65} + \binom{70}{15} \cdot 4^{55} - \binom{70}{5} \cdot \binom{65}{15} \cdot 3^{50} $
