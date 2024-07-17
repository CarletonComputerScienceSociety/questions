Let A be the set of all bitstrings of length 55 that start with 101.
$ |A| = 2^{55-3} = 2^{52} $
Let B be the set of all bitstrings of length 55 that end with 1111.
$ |B| = 2^{55-4} = 2^{51} $
Let C be the set of all bitstrings of length 55 that start with 101 and end with 1111.
$ |C| = 2^{55-3-4} = 2^{48} $
$ |A \cup B| = |A| + |B| - |A \cap B| $
$ |A \cup B| = 2^{52} + 2^{51} - 2^{48} $
