Well, let's break it down

<ul>
<li> Let A be the event that a string of length n is a palindrome <br/> 
The leftmost bit can be 1 or 0: 2 possibilities <br/> 
The rightmost bit must be the same as the leftmost bit: 1 possibility <br/> 
The second leftmost bit can be 1 or 0: 2 possibilities <br/> 
The second rightmost bit must be the same as the second leftmost bit: 1 possibility <br/> 
... <br/> 
The innermost leftmost bit can be 1 or 0: 2 possibilities <br/> 
The innermost rightmost bit must be the same as the innermost leftmost bit: 1 possibility <br/> 
$ |A| = 2 \cdot 1 \cdot 2 \cdot 1 \cdot ... \cdot 2 \cdot 1 = 2^{n/2} $
	<li> Let S be the set of all bitstrings of length n <br/> 
	      $ |S| = 2^n $
</ul>
$ Pr(A) = \frac{|A|}{|S|} $ 
$ Pr(A) = {left( \frac{1}{2} right)}^{n/2} $
