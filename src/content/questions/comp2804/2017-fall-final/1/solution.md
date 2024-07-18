Okay, so let's break it down

<ul>
    <li> First, there are 10 beer bottles on the leftmost side: 1
    <li> This means we need to choose 10 beer bottles out of the 20 beer bottles: $ \binom{20}{10} $
    <li> We also need to calculate how many ways there are to arrange the 10 beer bottles <br/> 
    The first bottle can be placed in any of the first ten leftmost positions: 10 <br/> 
    The second bottle can be placed in any of the remaining nine positions: 9 <br/> 
    ... <br/> 
    The tenth bottle can be placed in the last remaining position: 1 <br/> 
    $ 10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 10! $
    <li> There are also 10 cider bottles on the rightmost side: 1
    <li> This means we need to choose 10 cider bottles out of the 30 cider bottles: $ \binom{30}{10} $
    <li> We also need to calculate how many ways there are to arrange the 10 cider bottles <br/> 
    The first bottle can be placed in any of the first ten rightmost positions: 10 <br/> 
    The second bottle can be placed in any of the remaining nine positions: 9 <br/> 
    ... <br/> 
    The tenth bottle can be placed in the last remaining position: 1 <br/> 
    $ 10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 10! $
    <li> Now, we've calculated the leftmost and rightmost bottles but not the permutations for the remaining 10 beer bottles and 20 cider bottles <br/> 
    The first remaining bottle can be placed in any of the remainining 30 inner positions: 30 <br/> 
    The second remaining bottle can be placed in any of the remaining 29 positions: 29 <br/> 
    ... <br/> 
    The thirtieth remaining bottle can be placed in the last remaining position: 1 <br/> 
    $ 30 \cdot 29 \cdot 28 \cdot 27 \cdot 26 \cdot 25 \cdot 24 \cdot 23 \cdot 22 \cdot 21 \cdot 20 \cdot 19 \cdot 18 \cdot 17 \cdot 16 \cdot 15 \cdot 14 \cdot 13 \cdot 12 \cdot 11 \cdot 10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 30! $
</ul>

In total, there are $ \binom{20}{10} \cdot 10! \cdot \binom{30}{10} \cdot 10! \cdot 30! $ ways to arrange the bottles.
