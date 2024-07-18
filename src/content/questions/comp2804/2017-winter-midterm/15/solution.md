\enquote{hello} is printed when HELLO is called with an argument of 0 or 1.
We can draw a recursive tree to see how many times the HELLO$(1)$ is called.
begin{forest}
[HELLO $ (7) $
[HELLO $ (6) $
[HELLO $ (3) $
[HELLO $ (2) $
[HELLO $ (1) $]
]
[HELLO $ (1) $]
]
]
[HELLO $ (5) $
[HELLO $ (4) $
[HELLO $ (2) $
[HELLO $ (1) $]
]
]
[HELLO $ (3) $
[HELLO $ (2) $
[HELLO $ (1) $]
]
[HELLO $ (1) $]
]
]
]
end{forest} 
HELLO$ (1) $ is called 5 times. Thus, \enquote{hello} is printed 5 times.
