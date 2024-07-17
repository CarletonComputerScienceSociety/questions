I kind of brute forced a tree
begin{forest}
[X
[1
[1
[1]
[2]
[3]
]
[2
[1]
[2]
[3]
]
[3
[1]
[2]
[3]
]
]
[2
[1
[1]
[2]
[3]
]
[2
[1]
[2]
[3]
]
[3
[1]
[2]
[3]
]
]
[3
[1
[1]
[2]
[3]
]
[2
[1]
[2]
[3]
]
[3
[1]
[2]
[3]
]
]
]
end{forest}
Now, let's determine some variables

<ul>
<li> Let's determine A 
$ { (1,1), (1,2), (1,3), (3,1), (3,2), (3,3) } $ 
$ |A| = 6 $ 
$ Pr(A) = \frac{6}{9} $
	<li> Let's determine B 
	      $ { (1,2), (2,1), (2,3), (3,2) } $ 
	      $ |B| = 4 $ 
	      $ Pr(B) = \frac{4}{9} $
	<li> Let's determine $ A cap B $ 
	      $ { (1,2), (3,2) } $ 
	      $ |A cap B| = 2 $ 
	      $ Pr(A cap B) = \frac{2}{9} $
</ul>
Now, let's check if A and B are independent 
$ Pr(A cap B) = Pr(A) \cdot Pr(B) $ 
$ \frac{2}{9} = \frac{6}{9} \cdot \frac{4}{9} $ 
$ \frac{2}{9} = \frac{24}{81} $ 
$ \frac{2}{9} = \frac{8}{27} $ 
Since the equation is false, A and B are not independent.
