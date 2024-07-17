Draw out a tree
begin{forest}
[XXX
[HXX
[HHX
[HHH]
[HHT]
]
[HTX
[HTH]
[HTT]
]
]
[TXX
[THX
[THH]
[THT]
]
[TTX
[TTH]
[TTT]
]
]
]
end{forest}

<ul>
<li> Let's determine A 
$ { (HHH), (HHT) } $ 
$ |A| = 2 $ 
$ Pr(A) = \frac{2}{8} $
	<li> Let's determine B 
	      $ { (HHH), (HHT), (HTH), (THH) } $ 
	      $ |B| = 4 $ 
	      $ Pr(B) = \frac{4}{8} $
	<li> Let's determine $ A \cap B $ 
	      $ { (HHH), (HHT) } $ 
	      $ |A \cap B| = 2 $ 
	      $ Pr(A \cap B) = \frac{2}{8} $
</ul>
Now, let's check if A and B are independent 
$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $ 
$ \frac{2}{8} = \frac{2}{8} \cdot \frac{4}{8} $ 
$ \frac{2}{8} = \frac{1}{4} \cdot \frac{1}{2} $ 
$ \frac{2}{8} = \frac{1}{8} $ 
Since the equation is false, A and B are not independent.
