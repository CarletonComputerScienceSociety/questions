Let's check for the probability that 3 people have the same birthday for every subset of 3 people
We choose 3 people out of the n people: $ binom{n}{3} $
The first dude in the subset can have birthday on any day of the year: $ frac{365}{365} $
The second bro in the subset must have the same birthday as the first dude: $ frac{1}{365} $
The thid mate in the subset must have the same birthday as the first dude: $ frac{1}{365} $
The probability that 3 people have the same birthday is $ frac{1}{365^2} $
$ mathbb{E}(X) = binom{n}{3} cdot frac{1}{365^2} $
