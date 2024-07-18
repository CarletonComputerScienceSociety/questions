Yeah, so this is the dividers method. Let's define some stuff I guess

Let $x_1, x_2, x_3, x_4, x_5, x_6, x_7$ be the number of bananas Nick eats on each day

Now, $x_1 + x_2 + x_3 + x_4 + x_5 + x_6 + x_7 = 25$

Assuming you have a sea of bananas, let's put dividers to split them off into different days

<ul>
    <li> $x_1$ is the number of bananas to the left of the first divider
    <li> $x_2$ is the number of bananas between the first and second divider
    <li> $x_3$ is the number of bananas between the second and third divider
    <li> $x_4$ is the number of bananas between the third and fourth divider
    <li> $x_5$ is the number of bananas between the fourth and fifth divider
    <li> $x_6$ is the number of bananas between the fifth and sixth divider
    <li> $x_7$ is the number of bananas to the right of the sixth divider
</ul>

Now, we have 6 dividers and 25 bananas, so we have 31 objects in total

Since each object has a position, we can just move the dividers around to change any x.

We choose 6 spots out of the 31 to be dividers: $ \binom{31}{6} $
