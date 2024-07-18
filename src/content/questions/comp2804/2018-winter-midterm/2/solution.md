Let's break this down into 2 cases:

A = Each even position has 3 choices: $ a, b, c $

There are 6 even positions, so there are $ 3^6 $ ways to choose the characters for the even positions.

The other 6 odd positions can be any of the 5 characters: $ a, b, c, d, e $

$ |A| = 3^6 \cdot 5^6 $

B = Each odd position has 2 choices: $ d, e $

There are 6 odd positions, so there are $ 2^6 $ ways to choose the characters for the odd positions.

The other 6 even positions can be any of the 5 characters: $ a, b, c, d, e $

$ |B| = 2^6 \cdot 5^6 $

$ |A \cup B| = |A| + |B| - |A \cap B| $

$ |A \cup B| = 3^6 \cdot 5^6 + 2^6 \cdot 5^6 - 3^6 \cdot 2^6 $
