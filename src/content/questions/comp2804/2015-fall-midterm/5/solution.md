<ul>
    <li> Let A be the set of all bitstrings that start with abc. <br/>
    The first 3 letters are set in stone: 1 possibility <br/>
    The remaining 96 letters can be anything: $3^{96}$ possibilities <br/>
    $|A| = 1 \cdot 3^{96}$
    <li> Let B be the set of all bitstrings that end with bbb. <br/>
    The last 3 letters are set in stone: 1 possibility <br/>
    The remaining 96 letters can be anything: $3^{96}$ possibilities <br/>
    $|B| = 3^{96} \cdot 1$
    <li> Let $A \cap B$ be the set of all bitstrings that start with abc and end with bbb. <br/>
    The first 3 letters and last 3 letters are set in stone: 1 possibility <br/>
    The remaining 93 letters can be anything: $3^{93}$ possibilities <br/>
    $|A \cap B| = 1 \cdot 3^{93}$
</ul>

$|A \cup B| = |A| + |B| - |A \cap B|$

$|A \cup B| = 1 \cdot 3^{96} + 3^{96} \cdot 1 - 1 \cdot 3^{93}$

$|A \cup B| = 3^{96} + 3^{96} - 3^{93}$

$|A \cup B| = 2 \cdot 3^{96} - 3^{93}$
