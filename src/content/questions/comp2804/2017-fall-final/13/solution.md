Let's find the values

<ul>
    <li> Let S be the set of all subsets of X <br/> 
    $ |S| = 2^{10} $
    <li> Let's determine $ Pr(B) $ <br/> 
    The even numbers in X are $ { 2, 4, 6, 8, 10 } $ <br/> 
    There are 5 elements to make subsets out of, so let's get this bread then <br/> 
    $ |B| = 2^25 $ <br/> 
    $ Pr(B) = \frac{|B|}{|S|} $ <br/> 
    $ Pr(B) = \frac{2^5}{2^{10}} $ <br/> 
    $ Pr(B) = \frac{1}{2^5} $
    <li> Let's determine $ Pr( A \cap B) $ <br/> 
    The even numbers in X are $ { 2, 4, 6, 8, 10 } $ <br/> 
    The number of subsets of X that contain at least 4 even numbers is $ \binom{5}{4} + \binom{5}{5} = 6 $ <br/> 
    $ |A \cap B| = 6 $ <br/> 
    $ Pr(A \cap B) = \frac{|A \cap B|}{|S|} $ <br/> 
    $ Pr(A \cap B) = \frac{6}{2^{10}} $ <br/> 
    $ Pr(A \cap B) = \frac{3}{2^9} $
</ul>

Now, let's find $ Pr(A|B) $

$ Pr(A|B) = \frac{Pr(A \cap B)}{Pr(B)} $

$ Pr(A|B) = \frac{ \frac{3}{2^9}}{ \frac{1}{2^5}} $

$ Pr(A|B) = \frac{3}{2^4} $

$ Pr(A|B) = \frac{3}{16} $
