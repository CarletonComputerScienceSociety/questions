A = strings that start with $ abc $. 
A = first 3 bits are set in stone while other $ n-3 $ bits can be a, b, c, or d. 
$ |A| = 1 cdot 4^{n-3} $
B = strings that end with $ dddd $. 
B = last 4 bits are set in stone while the final bit can be a, b, c, or d. 
$ |B| = 1 cdot 4^{n-4} $
$ A cap B $ = strings that start with $ abc $ and end with $ dddd $. 
Assuming the string starts with $ abc $ and ends with $ dddd $, there are $ n-7 $ bits left that can be a, b, c, or d. 
$ |A cap B| = 1 cdot 4^{n-7} $
$ |A cup B| = |A| + |B| - |A cap B| $
$ |A cup B| = 1 cdot 4^{n-3} + 1 cdot 4^{n-4} - 4^{n-7} $
$ |A cup B| = 4^{n-3} + 4^{n-4} - 4^{n-7} $
