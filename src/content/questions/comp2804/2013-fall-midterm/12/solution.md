We can draw a recursive tree to see how many calls there are to $ FIB(2) $
\begin{forest}
[$f(5)$
    [$f(4)$
        [$f(3)$
            [$f(2)$]
            [$f(1)$]
        ]
        [$f(2)$]
    ]
    [$f(3)$
        [$f(2)$]
        [$f(1)$]
    ]
]
\end{forest}
