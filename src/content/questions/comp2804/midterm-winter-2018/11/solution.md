Because there is a 0 at position 9, there must be a 1 at position 8 and 10 to avoid a 00. 
It looks something like this: ldots, 1, 0, 1, ldots, 1, ldots 
The number of 00-free bitstrings made from the first 8 bits $ text{bit positions 1 to 7} $ is $ f*{7+2} $. 
The number of 00-free bitstrings made from the 29 bits $ text{bit positions 11 to 39} $ between the second and third fixed 1's is $ f*{29+2} $. 
The number of 00-free bitstrings made from the last 15 bits $ text{bit positions 41 to 55} $ is $ f*{15+2} $. 
Thus, the number of 00-free bitstrings with the above conditions is $ f*{9} cdot f*{31} cdot f*{17} $.
