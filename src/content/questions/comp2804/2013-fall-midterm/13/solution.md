We can draw a recursive tree to see how many calls there are to $ FIB(0) $

\begin{forest}
[f$(5)$
[f$(4)$
[f$(3)$
[f$(2)$]
[f$(1)$]
[f$(0)$]
]
[f$(2)$
[f$(1)$]
[f$(0)$]
]
]
[f$(3)$
[f$(2)$
[f$(1)$]
[f$(0)$]
]
[f$(1)$]
]
]
\end{forest}

As can be seen, $ FIB(0) $ is called 3 times, which corresponds to $f_{n-1} = f_{5-1} = f_{4}$
