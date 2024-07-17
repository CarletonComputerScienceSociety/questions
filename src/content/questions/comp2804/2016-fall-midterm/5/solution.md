A = strings that start with $ ad$. 
A = first 2 bits are set in stone while other 2 bits can be a,b,c, or d. 
$ |A| = 1 \cdot 4 \cdot 4 = 16$
B = strings that end with $ dcb$.
B = last 3 bits are set in stone while the final bit can be a,b,c, or d.
$ |B| = 1 \cdot 4 = 4$
A $ cap $ B = strings that start with $ ad$ and end with $ dcb$. 
The only string that satisfies this is $ adcb$.
$ |A cap B| = 1$
$ |A cup B| = |A| + |B| - |A cap B|$
$ |A cup B| = 16 + 4 - 1 = 19$
