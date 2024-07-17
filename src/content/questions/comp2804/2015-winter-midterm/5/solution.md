Let A be the set of strings that start with $abc$.
|A| = first 3 letters are set in stone while other 96 letters can be anything.
Thus, there are $3 \cdot 3 \cdot 3 \cdot 3^{96}$ strings in A.
Let B be the set of strings that end with $bbb$.
|B| = last 3 letters are set in stone while other 96 letters can be anything.
Thus, there are $3^{96} \cdot 3 \cdot 3 \cdot 3$ strings in B.
Let $A cap B$ be the set of strings that start with $abc$ and end with $bbb$.
$|A cap B|$ = first 3 letters and last 3 letters are set in stone while other 93 etters can be anything.
$|A cup B| = |A| + |B| - |A cap B|$
$|A cup B| = 3^{96} + 3^{96} - 3^{93}$
$|A cup B| = 2 \cdot 3^{96} - 3^{93}$
