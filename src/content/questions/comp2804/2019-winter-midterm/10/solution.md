Because there is a 0 at position 59, there must be a 1 at position 58 and 60 to avoid a 00.
It looks something like this: ldots, 1, 0, 1, ldots, 1, ldots
The number of 00-free bitstrings made from the first 57 bits $ text{bit positions 1 to 57} $ is $ f*{57+2} $.
The number of 00-free bitstrings made from the 17 bits $ text{bit positions 61 to 77} $ is $ f*{17+2} $.
Thus, the number of 00-free bitstrings with the above conditions is $ f*{59} \cdot f*{19} $.
