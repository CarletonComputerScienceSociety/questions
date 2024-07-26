To calculate that the two events are independent, we have to show that $Pr(A \cap B) = Pr(A) \cdot Pr(B)$.

The probability that the max of 3 dice rolls is 4 is the following:

<ul>
    <li> We can get a roll, where we get 3 4's: $\binom{3}{3} \cdot \frac{1}{6} \cdot \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{216}$
    <li> We can get a roll, where we get 2 4's and 1 number that is less than 4: $\binom{3}{1} \cdot \frac{1}{6} \cdot \frac{1}{6} \cdot \frac{3}{6} = \frac{9}{216}$
    <li> We can get a roll where we get 1 four and 2 numbers that are less than 4: $\binom{3}{1} \cdot \frac{1}{6} \cdot \frac{3}{6} \cdot \frac{3}{6} = \frac{27}{216}$
    <li> If we sum all of these entries, we get $\frac{37}{216}$.
</ul>

Now the probability that the 3 dice rolls are an even number:

<ul>
    <li> For you to get an even number from 3 dice rolls, there are only two possible ways of getting this:
    <ul>
        <li> You either roll 3 even numbers: $\frac{1}{8}$
        <li> You either roll 2 odd numbers and 1 even number: $\frac{3}{8}$
    </ul>
    <li> This means in total, the probability the sum of the 3 dice rolls is an even number is $\frac{3}{8} + \frac{1}{8} = \frac{1}{2}$
</ul>

Now the probability that the 3 dice rolls are an even number and the maximum of the 3 dice rolls is a 4:

<ul>
    <li> This limits the possible sums of the 3 dices to $12, 10, 8, 6$.
    <ul>
        <li> $Pr(A \cap B = 6) = Pr(4 + 1 + 1) = \binom{3}{1} \cdot (\frac{1}{6})^3 = \frac{3}{216}$
        <li> $Pr(A \cap B = 8) = Pr(4 + 2 + 2) + Pr(4 + 3 + 1) = \frac{6}{216}$
        <li> $Pr(A \cap B = 10) = Pr(4 + 4 + 2) + Pr(4 + 3 + 3) = \frac{6}{216}$
        <li> $Pr(A \cap B = 12) = Pr(4 + 4 + 4) = \frac{1}{216}$
    </ul>
    <li> This means the total probability for the $A \cap B$ is: $\frac{16}{216}$
</ul>

Now, we can try and use the formula for independent invents to see if the events are independent or not:

<ul>
    <li> $Pr(A \cap B) = Pr(A) \cdot Pr(B)$
    <li> $\frac{16}{216} = \frac{37}{216} \cdot \frac{1}{2}$
    <li> $\frac{16}{216} \neq \frac{37}{432}$
</ul>

Since $LHS \neq RHS$, the two events are not independent.
