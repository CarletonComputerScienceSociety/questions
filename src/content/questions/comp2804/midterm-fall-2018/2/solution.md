Let's break this down into 2 cases:
A = the bit at each even position is 0 \\
The even position bits are fixed as 0. The odd position bits can be either 0 or 1.
Thus, there are $ 2^5 $ ways to choose the odd position bits. \\
B = the bitstring starts with 1010 \\
The first 4 bits are fixed as 1010. The remaining 5 bits can be either 0 or 1.
Thus, there are $ 2^5 $ ways to choose the remaining 5 bits. \\
$ A \cap B = $ the bit at each even position is 0 and the bitstring starts with 1010: 1,0,1,0,X,0,X,0,X \\
The even position bits are fixed as 0. The first 4 bits are fixed as 1010. The remaining bit can be either 0 or 1.
Thus, there are $ 2^3 $ ways to choose the remaining bit. \\
$ |A \cup B| = |A| + |B| - |A \cap B| $ \\
$ |A \cup B| = 2^5 + 2^5 - 2^3 $ \\
$ |A \cup B| = 32 + 32 - 8 $ \\
$ |A \cup B| = 56 $
