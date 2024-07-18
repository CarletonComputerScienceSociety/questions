<ul>
	<li> Let A be the event that a bitstring of length 55 starts with 000. <br/> 
	The first 3 bits are fixed as 000. <br/> 
	The remaining 52 bits can be any combination of 0s and 1s: $2^{52}$. <br/> 
	$ |A| = 2^{52} $
	<li> Let B be the event that a bitstring of length 55 ends with 1010. <br/> 
	The last 4 bits are fixed as 1010. <br/> 
	The first 51 bits can be any combination of 0s and 1s: $2^{51}$. <br/> 
	$ |B| = 2^{51} $
	<li> Let $ A \cap B $ be the event that a bitstring of length 55 starts with 000 AND ends with 1010. <br/> 
	The first 3 bits are fixed as 000. <br/> 
	The last 4 bits are fixed as 1010. <br/> 
	The remaining 48 bits can be any combination of 0s and 1s: $2^{48}$. <br/> 
	$ |A \cap B| = 2^{48} $
</ul>

Since it's asking for OR, we need to find $ A \cup B $

$ |A \cup B| = |A| + |B| - |A \cap B| $

$ |A \cup B| = 2^{52} + 2^{51} - 2^{48} $
