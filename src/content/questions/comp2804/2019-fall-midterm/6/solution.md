1. Determine A

   Let A be the event that an n letter string starts with $ad$

   The first 2 letters are locked in place: 1 possibility

   The last $n-2$ letters can be any of the 4 letters: $4^{n-2}$ possibilities

   $|A| = 1 \cdot 4^{n-2} = 4^{n-2}$

2. Determine B

   Let B be the event that an n letter string ends with $dcb$

   The last 3 letters are locked in place: 1 possibility

   The first $n-3$ letters can be any of the 4 letters: $4^{n-3}$ possibilities

   $|B| = 1 \cdot 4^{n-3} = 4^{n-3}$

3. Determine $A \cap B$

   Let A and B be the event that an n letter string starts with $ad$ and ends with $dcb$

   The first 2 letters are locked in place: 1 possibility

   The last 3 letters are locked in place: 1 possibility

   The other $n-5$ letters can be any of the 4 letters: $4^{n-5}$ possibilities

   $|A \cap B| = 1 \cdot 1 \cdot 4^{n-5} = 4^{n-5}$

4. Profit

   $A \cup B = |A| + |B| - |A \cap B|$

   $A \cup B = 4^{n-2} + 4^{n-3} - 4^{n-5}$
