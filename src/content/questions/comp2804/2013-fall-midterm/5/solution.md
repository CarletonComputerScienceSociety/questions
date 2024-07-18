<ul>
    <li>Let A be the set of all bitstrings of length 55 that start with 101. <br />
        $ |A| = 2^{55-3} = 2^{52} $
    <li>Let B be the set of all bitstrings of length 55 that end with 1111. <br />
        $ |B| = 2^{55-4} = 2^{51} $
    <li>Let $A \cap B$ be the set of all bitstrings of length 55 that start with 101 and end with 1111. <br />
        $ |A \cap B| = 2^{55-3-4} = 2^{48} $
</ul>

$ |A \cup B| = |A| + |B| - |A \cap B| $

$ |A \cup B| = 2^{52} + 2^{51} - 2^{48} $
