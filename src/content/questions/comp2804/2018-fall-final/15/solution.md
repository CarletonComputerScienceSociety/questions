I have a gut feeling that they're independent, but let's check

<ul>
    <li> Let S be all possible permutations of the set ${1, 2, 3, 4}$: $ |S| = 4! = 24 $
    <li> Let's determine A <br/> 
    We can view it untuitively or mathematically <br/> 
    <ul>
        <li> Intuitively: When $a_1$ and $a_2$ are random values in a set, there's a $ \frac{1}{2} $ chance of $a_1 > a_2 $ <br/> 
        $ Pr(A) = \frac{1}{2} $
        <li> Mathematically: Start off by choosing 2 random values from the set ${1, 2, 3, 4}$ to take the place of $a_1$ and $a_2$: $ \binom{4}{2} $ <br/> 
        There's only 1 correct permutation of the 2 values that allow $ a_1 > a_2 $: $ 1 $ <br/> 
        The value at position $a_3$ can be one of the 2 remaining values: $ 2 $ <br/> 
        The value at position $a_4$ can be the remaining value: $ 1 $ <br/> 
        $ |A| = \binom{4}{2} \cdot 1 \cdot 2 \cdot 1 $ <br/> 
        $ |A| = 12 $ <br/> 
        $ Pr(A) = \frac{12}{24} $ <br/> 
        $ Pr(A) = \frac{1}{2} $
    </ul>
    <li> Let's determine B <br/> 
    We can view it untuitively or mathematically <br/> 
    <ul>
        <li> Intuitively: When $a_3$ and $a_4$ are random values in a set, there's a $ \frac{1}{2} $ chance of $a_3 > a_4 $ <br/> 
        $ Pr(B) = \frac{1}{2} $
        <li> Mathematically: Start off by choosing 2 random values from the set ${1, 2, 3, 4}$ to take the place of $a_3$ and $a_4$: $ \binom{4}{2} $ <br/> 
        There's only 1 correct permutation of the 2 values that allow $ a_3 > a_4 $: $ 1 $ <br/> 
        The value at position $a_1$ can be one of the 2 remaining values: $ 2 $ <br/> 
        The value at position $a_2$ can be the remaining value: $ 1 $ <br/> 
        $ |B| = \binom{4}{2} \cdot 1 \cdot 2 \cdot 1 $ <br/> 
        $ |B| = 12 $ <br/> 
        $ Pr(B) = \frac{12}{24} $ <br/> 
        $ Pr(B) = \frac{1}{2} $
    </ul>
    <li> Let's determine $ A \cap B $ <br/> 
    We take any 2 random values from the set ${1, 2, 3, 4}$ to take the place of $a_1$ and $a_2$: $ \binom{4}{2} $ <br/> 
    Now, there's only 1 correct permutation of the 2 values that allow $ a_1 > a_2 $: $ 1 $ <br/> 
    Smilarly, we take 2 random values from the remaining set: $ \binom{2}{2} $ <br/> 
    There's only 1 correct permutation of the remaining 2 values that allow $ a_4 > a_3 $: $ 1 $ <br/> 
    $ |A \cap B| = \binom{4}{2} \cdot 1 \cdot \binom{2}{2} \cdot 1 $ <br/> 
    $ |A \cap B| = 6 $ <br/> 
    $ Pr(A \cap B) = \frac{6}{24} $ <br/> 
    $ Pr(A \cap B) = \frac{1}{4} $
</ul>
Now, let's check whether they're independent 
$ Pr(A \cap B) = Pr(A) \cdot Pr(B) $ 
$ \frac{1}{4} = \frac{1}{2} \cdot \frac{1}{2} $ 
$ \frac{1}{4} = \frac{1}{4} $ 
They are independent
