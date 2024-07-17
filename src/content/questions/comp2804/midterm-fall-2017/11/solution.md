If there is a 0 at position 7, position 6 and 8 must be 1. \\
It would look something like: XXXXX101XXXXXXXXXXXX \\
Because the first 5 bits are 00-free bitstrings of length 5, there are $ f*{5+2} $ combinations. \\
Bitstrings from position 9 to 20 are 00-free bitstrings of length 12, there are $ f*{12+2} $ combinations. \\
Thus, there are $ f*{7} \cdot f*{14} $ combinations.
