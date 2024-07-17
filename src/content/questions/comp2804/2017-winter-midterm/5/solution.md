We can break this down into 2 cases: 
A = strings that start with $ abc $ 
There is $ 1 $ way to arrange the first 3 bits and $ 4^3 $ ways to choose the last 3 bits: $ 1 cdot 4^3 $ 
B = strings that end with $ ccc $ 
There is $ 1 $ way to arrange the last 4 bits and $ 4^2 $ ways to choose the first 2 bits: $ 1 cdot 4 $ 
$ A cap B = $ strings that start with $ abc $ and end with $ ccc $ 
There is $ 1 $ way to arrange the first 3 bits and $ 1 $ way to arrange the last 4 bits: $ 1 cdot 1 $ 
$ |A cup B| = |A| + |B| - |A cap B| $ 
$ |A cup B| = 1 cdot 4^3 + 1 cdot 4^2 - 1 cdot 1 $ 
$ |A cup B| = 4^3 + 4^2 - 1 $ 
$ |A cup B| = 64 + 16 - 1 $ 
$ |A cup B| = 79 $
