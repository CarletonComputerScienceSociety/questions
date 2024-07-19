1. Determine the first couple of values of $C(n)$

   $C(1) = 0$

   $C(2) = 2 + C(1) + C(1) = 2 + 0 + 0 = 2$

   $C(4) = 4 + C(2) + C(2) = 4 + 2 + 2 = 8$

   $C(8) = 8 + C(4) + C(4) = 8 + 8 + 8 = 24$

2. Check which formula it's true for

<ul>
    <li> $C(n) = n \log n - 1$ <br/>
    C(8) = 8 \log 8 - 1 = 8 \cdot 3 - 1 = 24 - 1 = 23
    <li> $C(n) = 2n \log n$ <br/>
    C(8) = 2 \cdot 8 \log 8 = 16 \cdot 3 = 48
    <li> $C(n) = n \log n + 1$ <br/>
    C(8) = 8 \log 8 + 1 = 8 \cdot 3 + 1 = 24 + 1 = 25
    <li> $C(n) = n \log n$ <br/>
    C(8) = 8 \log 8 = 8 \cdot 3 = 24
</ul>

3. Profit

   Since the last one is the only one that is correct, we have that $C(n) = n \log n$
