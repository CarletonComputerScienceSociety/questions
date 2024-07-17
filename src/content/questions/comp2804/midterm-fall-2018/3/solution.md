The size of the set of all strings of length 15 is $ 52^{15} $. \\
Let's break this down into 2 cases:
A = the string contains no lowercase letters \\
There are $ 26^{15} $ ways to choose the characters in the string. \\
B = the string contains exactly one lowercase letter \\
There are $ 15 $ ways to choose the position of the lowercase letter. \\
There are $ 26 $ ways to choose the lowercase letter. \\
There are $ 26^{14} $ ways to choose the remaining characters. \\
C = The string contains at least two lowercase letters \\
$ |C| = |U| - |A| - |B| $ \\
$ |C| = 52^{15} - 26^{15} - 15 \cdot 26 \cdot 26^{14} $ \\
$ |C| = 52^{15} - 26^{15} - 15 \cdot 26^{15} $
