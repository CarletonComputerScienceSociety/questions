Let's write out the possibilities and sum them:

<ul>
    <li> $ 1, S*{n-1} $ is not allowed since this would mean the recursive call's next value could also be 1, which leads to 11
    <li> $ 0, S*{n-1} $
    <li> $ 1, 0, S_{n-2} $
</ul>

Although this takes into account many possibilities, it does not take into a bitstring that is made of all 1's: 1

$ S*n = S*{n-1} + S\_{n-2} + 1 $
