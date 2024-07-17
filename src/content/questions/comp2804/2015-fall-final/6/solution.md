We're basically looking for the total number of strings of length $n$ excluding those that have no $a$s.

<ul>
<li> Let S be the set of all strings 
The first character can be any of the 3 characters: 3 
The second character can be any of the 3 characters: 3 
ldots 
The $n$th character can be any of the 3 characters: 3 
$ |S| = 3^n $
	<li> Let A be the event that a string has no $a$s. 
The first character can be any of the 2 characters: 2 
The second character can be any of the 2 characters: 2 
ldots 
The $n$th character can be any of the 2 characters: 2 
$ |A| = 2^n $
</ul>
Now, let's exclude the strings that contain no a's 
$ |S| - |A| = 3^n - 2^n $
