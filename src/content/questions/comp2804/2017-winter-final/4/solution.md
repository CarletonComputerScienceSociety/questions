Let A be the event that a string of length n is a palindrome 
The leftmost bit can be 1 or 0: 2 possibilities 
The rightmost bit must be the same as the leftmost bit: 1 possibility 
The second leftmost bit can be 1 or 0: 2 possibilities 
The second rightmost bit must be the same as the second leftmost bit: 1 possibility 
ldots 
The innermost leftmost bit can be 1 or 0: 2 possibilities 
The innermost rightmost bit must be the same as the innermost leftmost bit: 1 possibility 
$ |A| = 2 cdot 1 cdot 2 cdot 1 cdot ldots cdot 2 cdot 1 = 2^{n/2} $ 
Usually, this would be right; however, we know the middle bit is always the same as itself AND n/2 is a fraction since n is odd 
$ |A| = 2^{frac{n+1}{2}} $
