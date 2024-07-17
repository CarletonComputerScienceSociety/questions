Let's use the example where $ n = 4 $ \\
The first possibility is that it starts with 0 and the rest of the bits are 0 \\
0000 \\
This is 1 possibility. \\
The second possibility is that it starts with a row of 1's and the rest of the bits are 0 \\
1111 \\
1110 \\
1100 \\
1000 \\
This is 4 possibilities. \\
So we have $ 1 + n $ possibilities. \\
For short bitstrings with simple equations, you can also brute force the possibilities.
Suppose $ n=2 $ \\
It can be 00, 10, 11 \\
There are 3 possibilities. \\
Since it's more than n by 1, we can say that there are $ n+1 $ possibilities.
