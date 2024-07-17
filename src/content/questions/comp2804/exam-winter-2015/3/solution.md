Let A be the event that a bitstring of length 77 starts with 1111. 
The first 4 bits are fixed as 1111. 
The remaining 73 bits can be any combination of 0s and 1s: $2^{73}$. 
$ |A| = 2^{73} $ 
Let B be the event that a bitstring of length 77 ends with 0000. 
The last 4 bits are fixed as 0000. 
The first 73 bits can be any combination of 0s and 1s: $2^{73}$. 
$ |B| = 2^{73} $ 
Let $ A cap B $ be the event that a bitstring of length 77 starts with 1111 AND ends with 0000. 
The first 4 bits are fixed as 1111. 
The last 4 bits are fixed as 0000. 
The remaining 69 bits can be any combination of 0s and 1s: $2^{69}$. 
$ |A cap B| = 2^{69} $ 
The total number of bitstrings of length 77 that start with 1111 or end with 0000 is $ |A| + |B| - |A cap B| $ 
$ = 2^{73} + 2^{73} - 2^{69} $ 
$ = (1+1) 2^{73} - 2^{69} $ 
$ = (2) 2^{73} - 2^{69} $ 
$ = 2^{74} - 2^{69} $
