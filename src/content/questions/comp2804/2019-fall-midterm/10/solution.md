1. Let's calculate $f(1)$

   $f(1) = \frac{1}{3} \cdot f(0) = \frac{1}{3} \cdot 7 = \frac{7}{3}$

   $f(2) = \frac{2}{3} \cdot f(1) = \frac{2}{3} \cdot \frac{7}{3} = \frac{14}{9}$

2. Let's test

<ul>
    <li>$f(n) = 7 \cdot \frac{n!}{3^n}$ <br/>
    $f(1) = 7 \cdot \frac{2!}{3^1} = 7 \cdot \frac{1}{3} = \frac{7}{3}$
    <li>$f(n) = 7^n \cdot \frac{n!}{3^n}$ <br/>
    $f(1) = 7^1 \cdot \frac{2!}{3^1} = 7 \cdot \frac{2}{3} = \frac{14}{3}$
    <li>$f(n) = 7 \cdot \frac{(n + 1)!}{3^n}$ <br/>
    $f(1) = 7 \cdot \frac{3!}{3^1} = 7 \cdot \frac{6}{3} = 14$
    <li>$f(n) = 7^n \cdot \frac{(n + 1)!}{3^n}$ <br/>
    $f(1) = 7^1 \cdot \frac{3!}{3^1} = 7 \cdot \frac{6}{3} = 14$
</ul>

3. Profit

   As we can see, the first one is correct
