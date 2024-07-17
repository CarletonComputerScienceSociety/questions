<ul>
<li> Let $A$ be the set of all subsets of $S$ that contain $x$ and $y$ \\
We take for granted that one of the element has a fixed possibility of being $x$: 1 \\
We take for granted that one of the element has a fixed possibility of being $y$: 1 \\
Now that we've guaranteed that $x$ and $y$ are in the subset, we need to calculate all possible add-ons. \\
For instance, it could $ (x,y) $ or $ (x,y,a) $ or $ (x,y,a,b) $ or $ (x,y,a,b,z) $ and so many others \\
Looking at it, it's basically asking for $x$, $y$, and any subset of $S$
We can create subsets from the remaining 23 elements. \\
$|A| = 2^{23}$
<li> Let $B$ be the set of all subsets of $S$ that contain $x$, $y$ AND $z$ \\
We take for granted that one of the element has a fixed possibility of being $x$: 1 \\
We take for granted that one of the element has a fixed possibility of being $y$: 1 \\
We take for granted that one of the element has a fixed possibility of being $z$: 1 \\
Now that we've guaranteed that $x$, $y$, and $z$ are in the subset, we need to calculate all possible add-ons. \\
For instance, it could $ (x,y,z) $ or $ (x,y,z,a) $ or $ (x,y,z,a,b) $ or $ (x,y,z,a,b,c) $ and so many others \\
Looking at it, it's basically asking for $x$, $y$, $z$, and any subset of $S$
We can create subsets from the remaining 22 elements. \\
$|B| = 2^{22}$
</ul>
Now, it's pretty much just subtraction. We can subtract B from A to get all subsets that contain $x$ and $y$ but not $z$. \\
Think about it in a different way. A is the set of all subsets that contain $x$ and $y$. B is the set of all subsets that contain $x$, $y$, and $z$. \\
By subtracting B from A, we get rid of all subsets that contain $x$, $y$ and $z$ from all subsets that contain $x$ and $y$. \\
This pretty much just leaves us with the subsets that contain $x$ and $y$ but not $z$. \\
$ |A| - |B| = 2^{23} - 2^{22} $ \\
$ |A| - |B| = 2^1 \cdot 2^{22} - 2^0 \cdot 2^{22} $ \\
$ |A| - |B| = 2 \cdot 2^{22} - 1 \cdot 2^{22} $ \\
$ |A| - |B| = (2-1) \cdot 2^{22} $ \\
$ |A| - |B| = 1 \cdot 2^{22} $ \\
$ |A| - |B| = 2^{22} $
