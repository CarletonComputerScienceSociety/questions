We can draw a recursive tree to see how many calls there are to $FIB(95)$. \\
\begin{forest}
[FIB$(99)$
[FIB$(98)$
[FIB$(97)$
[FIB$(96)$
[FIB$(95)$]
]
[FIB$(95)$]
]
[FIB$(96)$
[FIB$(95)$]
[FIB$(94)$]
]
]
[FIB$(97)$
[FIB$(96)$
[FIB$(95)$]
]
[FIB$(95)$]
]
]
\end{forest} \\
We can see that there are 5 calls to $FIB(95)$.
