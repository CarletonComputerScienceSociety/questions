We can draw a recursive tree to see how many calls there are to $ \text{FIB}(8) $. 
begin{forest}
	[FIB$ (12) $
		[FIB$ (11) $
				[FIB$ (10) $
						[FIB$ (9) $
								[FIB$ (8) $]
							]
							[FIB$ (8) $]
					]
					[FIB$ (9) $
						[FIB$ (8) $]
							[FIB$ (7) $]
					]
			]
			[FIB$ (10) $
				[FIB$ (9) $
						[FIB$ (8) $]
					]
					[FIB$ (8) $]
]
]
end{forest}
We can see that there are 5 calls to $ \text{FIB}(8) $.
