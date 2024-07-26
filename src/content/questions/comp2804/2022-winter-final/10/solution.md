Let's just plug in some values and see what happens

$ T(0) = 3 $

$ T(1) = 2 \cdot 3 + 3 = 9 $

$ T(2) = 2 \cdot 9 + 3 = 21 $

$ T(3) = 2 \cdot 21 + 3 = 45 $

Now, we see which one matches

<ul>
    <li> $T(n) = 3n$ <br/>
    $T(1) = 3 \neq 3 \cdot 1 = 3$
    <li> $T(n) = 2^{n+1} + 1$ <br/>
    $T(1) = 9 \neq 2^{1+1} + 1 = 5$
    <li> $T(n) = 3(2^{n+1} - 1)$ <br/>
    $T(1) = 3(2^2 - 1) = 3(4 - 1) = 9$ <br/>
    $T(2) = 3(2^3 - 1) = 3(8 - 1) = 21$
    <li> $T(n) = 2(3^{n+1} - 1)$ <br/>
    $T(1) = 2(9-1) = 16$
    <li> $T(n) = 3^{n+1}$ <br/>
    $T(1) = 9$ <br/>
    $T(2) = 27$
</ul>

Since only c matches, the answer is c
