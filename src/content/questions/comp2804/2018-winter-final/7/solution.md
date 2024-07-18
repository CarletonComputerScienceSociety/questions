<ul>
    <li> Let S be the set of all strings that contain the substring $OO$ <br/> 
    First, we choose 1 of the 6 positions to place the $B$: $ \binom{6}{1} = 6$ <br/> 
    Then we choose 2 of the remaining 5 positions to place the $O$'s: $ \binom{5}{2} $ <br/> 
    Then we choose 1 of the remaining 3 positions to place the $G$: $ \binom{3}{1} = 3$ <br/> 
    Then we choose 1 of the remaining 2 positions to place the $E$: $ \binom{2}{1} = 2$ <br/> 
    Then we choose 1 of the remaining 1 positions to place the $R$: $ \binom{1}{1} = 1$ <br/> 
    $ |S| = 6 \cdot \binom{5}{2} \cdot 3 \cdot 2 \cdot 1$
    <li> Let $ \overline{A} $ represent the set of all strings where the substring $OO$ is present <br/> 
    First, we group the O's together and treat them as one entity, meaning we have 5 entities to arrange <br/> 
    We choose 1 of the 5 positions to place the $B$: $ \binom{5}{1} = 5 $ <br/> 
    Then we choose 1 of the remaining 4 positions to place the $G$: $ \binom{4}{1} = 4 $ <br/> 
    Then we choose 1 of the remaining 3 positions to place the $E$: $ \binom{3}{1} = 3 $ <br/> 
    Then we choose 1 of the remaining 2 positions to place the $R$: $ \binom{2}{1} = 2 $ <br/> 
    Then we choose 1 of the remaining 1 positions to place the $OO$: $ \binom{1}{1} = 1 $ <br/> 
    $ |\overline{A}| = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 5! $
</ul>

Now, we can find the number of awesome strings

$|A| = |S| - |\overline{A}| $

$|A| = (6 \cdot \binom{5}{2} \cdot 3 \cdot 2 \cdot 1) - 5!$

$|A| = (6 \cdot \binom{5}{2} \cdot 3 \cdot 2) - 5!$
