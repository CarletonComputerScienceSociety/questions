<ul>
	<li> A = Event that the password contains 0 event digits <br/>
	Since every digit is odd, each of the 13 digits must be chosen from the set {1,3,5,7,9} <br/>
	$ |A| = 5^{13} $
	<li> B = Event that the password contains 1 event digit <br/>
	Since 1 of the digits is even, there are 13 positions to place the single even digit: $ \binom{13}{1} $ <br/>
	Since the 1 even digit can be chosen from the set {0,2,4,6,8}, there are 5 choices for the even digit: $ 5 $ <br/>
	The remaining 12 digits must be chosen from the set {1,3,5,7,9}, so there are $ 5^{12} $ ways to choose the remaining digits<br/> 
	$ |B| = \binom{13}{1} \cdot 5 \cdot 5^{12} $
	<li>  C = Event that the password contains 2 event digits <br/>
	Since 2 of the digits are even, there are $ \binom{13}{2} $ ways to choose the 2 positions for the even digits <br/>
	Since the 2 even digits can be chosen from the set {0,2,4,6,8}, each digit has 5 choices: $ 5^2 $ <br/>
	The remaining 11 digits must be chosen from the set {1,3,5,7,9}, so there are $ 5^{11} $ ways to choose the remaining digits <br/>
	$ |C| = \binom{13}{2} \cdot 5^2 \cdot 5^{11} $
</ul>

$ |A| + |B| + |C| = 5^{13} + \binom{13}{1} \cdot 5 \cdot 5^{12} + \binom{13}{2} \cdot 5^2 \cdot 5^{11} $

$ |A| + |B| + |C| = 5^{13} + 13 \cdot 5^{13} + \binom{13}{2} \cdot 5^{13} $
