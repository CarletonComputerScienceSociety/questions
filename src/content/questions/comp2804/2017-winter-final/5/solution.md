Let's explain why some are incorrect while one is correct

<ul>
<li> The number of bitstrings of length $n$ in which the first bit is 0 or the last bit is 1. 
Surprisingly, it makes sense
<ul>
<li> The number of bitstrings of length $n$ in which the first bit is 0: $ 2^{n-1} $
		      <li> The number of bitstrings of length $n$ in which the last bit is 1: $ 2^{n-1} $
		      <li> The number of bitstrings of length $n$ in which the first bit is 0 and the last bit is 1: $ 2^{n-2} $
	      </ul>
	      Adding them up, we get $ 2^{n-1} + 2^{n-1} - 2^{n-2} = 2^{n} - 2^{n-2} $
	<li> The number of bitstrings of length $n$ in which the first bit is 0 and the last bit is 1. 
This one is just $ 2^{n-2} $
	<li> The number of bitstrings of length $n$ in which the first bit is equal to the last bit. 
The first bit can be anything: 2 
The second bit can be anything: 2 
ldots 
The second last bit can be anything: 2 
The last bit must be the same as the first bit: 1 
$ 2 cdot 2 cdot 2 cdot ldots cdot 2 cdot 1 = 2^{n-1} $
	<li> The number of bitstrings of length $n$ in which the first bit is not equal to the last bit. 
This is basically the same as the third option. The last bit's value is dependent on the first bit's value: $ 2^{n-1} $
</ul>
