import type { MultipleChoiceQuestion } from "@common/MultipleChoiceQuestionGenerator";

const body = String.raw`
Let $m \geq 1$ and $n \geq 1$ be integers. Consider a rectangle whose horizontal side has length $m$
		and whose vertical side has length $n$. A path from the bottom-left corner to the top-right corner is
		called <em>valid</em>, if in each step, it either goes one unit to the right or one unit upwards. <br>
		In the example below, you see a valid path for the case when $m = 5$ and $n = 3$.
		
		<img width="342" height="222" style="display: block; max-width: 100%; height: auto; margin: 1rem auto;"
			src="data:image/png;base64,
			iVBORw0KGgoAAAANSUhEUgAAAVYAAADeAQMAAABc9brBAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAfZJREFUaN7t
			1z1Ow0AQBeC3G8ukiJBLOlJyBApkm45jrMQ9YOk4lo9iiQukdIESkLw/sh17ZiVAIZlpRpv9Eq2frNUEtxbsMim2YcIC2HJtCYBr
			q29onz+W6+CqhQLfXsOgr7m+c2ewUJayXd8eADSkjesay6WiNYayn9HWfFsT56XstPvYaBvrNywR2J9Z+pzpFidgJV/JV/KVfCVf
			yResXiY802OCfbN827Ct+bbU3ButomyZYKs2WryUfY3766GvvVsbaLYFMnLubeFrTc69JkYybyefb8m5F8HWlpplo7UJ9mBn594z
			vh/C3m/ZC79/JV/JV/KVfCXf/5hvnmDLhPPmbIsTsEdyKHxnZFb6zrBV43p7xMYZdlj70YybYoF8Ou/6Ps1sOu/6Tlhmvqoj/29V
			jbefpAVSrPH2jO8Hg5n6aXuh96/kK/lKvpKv5Cv5nmG+RUJmZYKtWoatwgy7XCkWsSoLdj3ghGtNE9UN7aqD2vnNZmhzZ3DvbAvt
			P7rytnN249Z3fdOA3ox+V2V9DxtPwebZyOrcrRl2pUfP/86whTuTz2E3tfBnaIdWrxfsjTfh/FObDZ8t8zY7YsOey/2wYAt3lHz4
			3fyY3YY92tZ9yzbehrXejK0d2So8o16PrNLhHRzUahffySu3pzXYtdrP7XwBhSQdbPCsOHQAAAAASUVORK5CYII=">
		
		How many valid paths are there?
`;

const label1 = "${m + n \\choose n - 1}$";
const label2 = "${m + n \\choose n}$";
const label3 = "$2^{m + n}$";
const label4 = "$2^m + 2^n$";

export const question: MultipleChoiceQuestion = {
  body: body,
  options: [
    { label: label1, correct: false },
    { label: label2, correct: true },
    { label: label3, correct: false },
    { label: label4, correct: false },
  ],
};
