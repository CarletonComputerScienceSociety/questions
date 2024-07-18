Let's draw a recursive tree to find out how many calls there are to $FIB(73)$ when we run $FIB(77)$.
\begin{forest}
[FIB$ (77) $
		[FIB$ (76) $
				[FIB$ (75) $
						[FIB$ (74) $
								[FIB$ (73) $]
							]
							[FIB$ (73) $]
					]
					[FIB$ (74) $
						[FIB$ (73) $]
					]
			]
			[FIB$ (75) $
				[FIB$ (74) $
						[FIB$ (73) $]
					]
					[FIB$ (73) $]
			]
	]
\end{forest} 
As can be seen, there are 5 calls to $FIB(73)$ when we run $FIB(77)$.
