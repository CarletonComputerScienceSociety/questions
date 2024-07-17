A = strings that start with $ ad $. 
A = first 2 bits are set in stone while other $ n-2 $ bits can be a, b, c, or d. 
$ |A| = 1 cdot 4^{n-2} $ 
B = strings that end with $ dcb $. 
B = last 3 bits are set in stone while the final $ n-3 $ bits can be a, b, c, or d. 
$ |B| = 1 cdot 4^{n-3} $ 
$ A cap B $ = strings that start with $ ad $ and end with $ dcb $. 
Assuming the string starts with $ ad $ and ends with $ dcb $, there are $ n-5 $ bits left that can be a, b, c, or d. 
$ |A cap B| = 1 cdot 4^{n-5} $ 
$ |A cap B| = 1 $ 
$ |A cup B| = |A| + |B| - |A cap B| $ 
$ |A cup B| = 1 cdot 4^{n-2} + 1 cdot 4^{n-3} - 4^{n-5} $ 
$ |A cup B| = 4^{n-2} + 4^{n-3} - 4^{n-5} $
