We can brute force the answer:
$ { (0, 0), (0, 1), (1, 0), (1, 1) } $

<ul>
	<li> For $ (0,0) $, the minimum value is 0 <br/> 
	      There is a $ \frac{1}{4} $ chance of this happening
	<li> For $ (0,1) $, the minimum value is 0 <br/> 
	      There is a $ \frac{1}{4} $ chance of this happening
	<li> For $ (1,0) $, the minimum value is 0 <br/> 
	      There is a $ \frac{1}{4} $ chance of this happening
	<li> For $ (1,1) $, the minimum value is 1 <br/> 
	      There is a $ \frac{1}{4} $ chance of this happening
</ul>
$ \mathbb{E}(Z) = 0 \cdot \frac{1}{4} + 0 \cdot \frac{1}{4} + 0 \cdot \frac{1}{4} + 1 \cdot \frac{1}{4} $ 
$ \mathbb{E}(Z) = 0 + 0 + 0 + \frac{1}{4} $ 
$ \mathbb{E}(Z) = \frac{1}{4} $
