We can break this down into 2 cases:
A = strings that start with $ ab $
There is $ 1 $ way to arrange the first 2 bits and $ 4^{n-2} $ ways to choose the last $ n-2 $ bits: $ 1 \cdot 4^{n-2} $
B = strings that start with $ abc $
There is $ 1 $ way to arrange the first 3 bits and $ 4^{n-3} $ ways to choose the last $ n-3 $ bits: $ 1 \cdot 4^{n-3} $
$ A cap B = $ strings that start with $ ab $ and start with $ abc $
There is $ 1 $ way to arrange the first 3 bits and $ 4^{n-3} $ ways to choose the last $ n-3 $ bits: $ 1 \cdot 4^{n-3} $
$ |A cup B| = |A| + |B| - |A cap B| $
$ |A cup B| = 1 \cdot 4^{n-2} + 1 \cdot 4^{n-3} - 1 \cdot 4^{n-3} $
$ |A cup B| = 4^{n-2} + 4^{n-3} - 4^{n-3} $
$ |A cup B| = 4^{n-2} $
