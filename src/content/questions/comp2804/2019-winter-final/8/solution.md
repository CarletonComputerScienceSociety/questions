1. Setup

   So we have something that looks like XXXXXXXXXX1XXXXXXXX0

   We can deduce that position 19 must be a 1, since we can't have two 0's next to each other, so it'd look like

   XXXXXXXXXX1XXXXXXX10

2. Possible first 10 bits

   Let's determine the number of 00-free bitstrings of length 9 that make up the first section

   m=10

   $f_{10+2} = f_{12}$

3. Possible bitstrings from bit 12 to 18

   Let's determine the number of 00-free bitstrings of length 8 that make up the second section

   m=7

   $f_{7+2} = f_{9}$

4. Profit

   $f_{12} \cdot f_{9}$
