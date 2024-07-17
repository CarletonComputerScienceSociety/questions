We can break this down into 2 cases:
A = the leftmost kid is a girl
There are $ g $ ways to choose the leftmost kid: $ g $
There are $ (b+g-1)! $ ways to arrange the remaining kids:
B = the rightmost kid is a boy
There are $ b $ ways to choose the rightmost kid: $ b $
There are $ (b+g-1)! $ ways to arrange the remaining kids
$ A cap B = $ the leftmost kid is a girl and the rightmost is a boy
There are $ g $ girls to choose to be the leftmost kid and $ b $ boys to choose to be the rightmost kid: $ g cdot b $
There are $ (b+g-2)! $ ways to arrange the remaining kids
$ |A cup B| = |A| + |B| - |A cap B| $
$ |A cup B| = g cdot (b+g-1)! + b cdot (b+g-1)! - g cdot b cdot (b+g-2)! $
