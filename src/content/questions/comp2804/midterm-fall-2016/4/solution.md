There are 6 possibilities for the first 3 bits.
<ul>
<li> 000
<li> 001
<li> 010
<li> 011
<li> 100
<li> 101
<li> 110
</ul>
We can also get 6 possibilities by taking all 8 possible 3 bit combinations and subtracting the 2 possibilities where all 3 bits are the same. 
For all other bits, there are 2 possibilities. 
Thus, there are $6 cdot 2^{n-3}$ bitstrings.
