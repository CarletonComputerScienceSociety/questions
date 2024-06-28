# Questions (name tbd)

# Setup

1. Install the required dependencies:

```bash
npm install
```

2. Start the application:

```bash
npm run dev
```

# Add a new Multiple Choice Question

Every multiple choice question directory should have the following structure

- `index.md`: Metadata of the question, make sure to mark the type as `multiple-choice`
- `question.ts`: The formatting question with it's options that can later be shuffled
- `solution.md` (optional): The markdown solution
- `generator.ts` (optional): A script that generates a question alike to the one in the director
- `generator.test.ts` (optional): The unit tests for `generator.ts`
