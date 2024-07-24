I kind of brute forced a tree

![image](/images/comp2804/2017-fall-final/16/image.png)

Now, let's determine some variables

<ul>
    <li> Let's determine A <br/> 
    $ { (1,1), (1,2), (1,3), (3,1), (3,2), (3,3) } $ <br/> 
    $ |A| = 6 $ <br/> 
    $ Pr(A) = \frac{6}{9} $
    <li> Let's determine B <br/> 
    $ { (1,2), (2,1), (2,3), (3,2) } $ <br/> 
    $ |B| = 4 $ <br/> 
    $ Pr(B) = \frac{4}{9} $
    <li> Let's determine $ A \cap B $ <br/> 
    $ { (1,2), (3,2) } $ <br/> 
    $ |A \cap B| = 2 $ <br/> 
    $ Pr(A \cap B) = \frac{2}{9} $
</ul>

Now, let's check if A and B are independent

$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $

$ \frac{2}{9} = \frac{6}{9} \cdot \frac{4}{9} $

$ \frac{2}{9} = \frac{24}{81} $

$ \frac{2}{9} = \frac{8}{27} $

Since the equation is false, A and B are not independent.
