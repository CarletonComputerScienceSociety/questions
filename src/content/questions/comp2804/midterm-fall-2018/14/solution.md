Every call other than Fart$(1)$ and Fart$(0)$ results in a fart. 
Let's draw a recursive tree to see how many times the fart procedure is called. 
begin{forest}
[FART$ (9) $
		[FART$ (8) $
				[FART$ (4) $
						[FART$ (2) $
								[FART$ (1) $]
							]
					]
			]
			[FART$ (10) $
				[FART$ (5) $
						[FART$ (4) $
								[FART$ (2) $
										[FART$ (1) $]
									]
							]
							[FART$ (6) $
								[FART$ (3) $
										[FART$ (2) $
												[FART$ (1) $]
											]
											[FART$ (4) $
												[FART$ (2) $
														[FART$ (1) $]
													]
											]
									]
							]
					]
			]
	]
end{forest} 
Calls above Fart$(1)$ and Fart$(0)$ result in a total of 13 farts.
