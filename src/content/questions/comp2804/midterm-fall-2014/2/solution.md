We can break it down

Let A be the set of all bitstrings of length 99 starting with 1010: $|A|= 2^{99-4 \text{ bits that I set}} = 2^{95}$

Let B be the set of all bitstrings of length 99 ending with 1010: $|B|= 2^{99-4 \text{ bits that I set}} = 2^{95}$

Set A takes into account the cases in Set B, but Set B also takes into account cases in Set A. So, to avoid double counting, we subtract the case when both occur:

$|A \cap B| = 2^{99-4-4} = 2^{91}$

Now, to put everything together

$|A \cup B| = |A|+|B|-|A \cap B|$

$|A \cup B| = 2^{95} + 2^{95} - 2^{91}$

$|A \cup B| = 2(2^{95}) - 2^{91}$

$|A \cup B| = 2^1 \cdot 2^{95} - 2^{91}$

$|A \cup B| = 2^{96} - 2^{91}$
