To guarantee that a string is a palindrome in this case, we have to ensure that the first half of the string matches the second half (but reversed). \\
At each position in the "half of the string", there is a $\frac{1}{3}$ chance that the corresponding character in the other half of the string is the same since there are 3 character options (a, b, c) and only 1 of those can match. \\
Since the string is an odd integer, half of a string would be: $\frac{n-1}{2}$. So if $n = 3$, then half of the string would be $\frac{3-1}{2} = 1$. This makes sense, as we would check if the 1st and last character are the same, and the 2nd character we know would already be the same as itself. \\
This means that the total probability a string is a palindrome is: $(\frac{1}{3})^{n-1/2}$
