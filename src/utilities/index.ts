import "mathjax/es5/tex-svg-full.js";

const mathjaxLoad = () => {
  if (!(window as any).MathJax.config.tex.inlineMath) {
    (window as any).MathJax.config.tex.inlineMath = [
      ["$", "$"],
      ["\\(", "\\)"],
    ];
    (window as any).MathJax.config.tex.displayMath = [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ];
    (window as any).MathJax.startup.getComponents();
  }
};

const mathjaxTypeset = () => {
  (window as any).MathJax.typeset();
};

export { mathjaxLoad, mathjaxTypeset };
