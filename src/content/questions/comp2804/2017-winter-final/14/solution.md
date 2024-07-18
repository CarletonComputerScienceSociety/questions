<ul>
    <li> Let S be all possible permutations: $ |S| = n! $
    <li> Let's determine A <br/> 
    $a_n = 1$ is fixed <br/> 
    The other n-1 numbers can be placed in any order: $ (n-1)! $ <br/> 
    $ |A| = (n-1)! $ <br/> 
    $ Pr(A) = \frac{(n-1)!}{n!} = \frac{(n-1)!}{n \cdot (n-1)!} = \frac{1}{n} $
    <li> Let's determine B <br/> 
    First, we pick 2 numbers to be $a_1$ and $a_2$: $ \binom{n}{2} $ <br/> 
    The other n-2 numbers can be placed in any order: $ (n-2)! $ <br/> 
    $ |B| = \binom{n}{2} \cdot (n-2)! $ <br/> 
    $ |B| = \frac{n!}{2! (n-2)!} \cdot (n-2)! $ <br/> 
    $ |B| = \frac{n!}{2!} $ <br/> 
    $ Pr(B) = \frac{n!}{2! \cdot n!} = \frac{1}{2} $
    <li> Let's determine $ A \cap B $ <br/> 
    $a_n$ is set to $n$: 1 <br/> 
    We choose 2 numbers to be $a_1$ and $a_2$: $ \binom{n-1}{2} $ <br/> 
    The other n-3 numbers can be placed in any order: $ (n-3)! $ <br/> 
    $ |A \cap B| = \binom{n-1}{2} \cdot (n-3)! $ <br/> 
    $ |A \cap B| = \frac{(n-1)!}{2! (n-3)!} \cdot (n-3)! $ <br/> 
    $ |A \cap B| = \frac{(n-1)!}{2!} $ <br/> 
    $ Pr(A \cap B) = \frac{(n-1)!}{2 \cdot n!} = \frac{1}{2n} $
</ul>
Now, let's check for independence 
$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $ 
$ \frac{1}{2n} = \frac{1}{n} \cdot \frac{1}{2} $ 
$ \frac{1}{2n} = \frac{1}{2n} $ 
Since the equation is true, A and B are independent
