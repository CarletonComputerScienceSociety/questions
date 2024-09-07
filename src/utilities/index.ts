import "mathjax/es5/tex-svg-full.js";
import { DiscordMessageType, sendAlert } from "./discord";

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

const dynamicImport = async (path: string, meta: string) => {
  try {
    const pathString = decodeURIComponent(new URL(path, meta).pathname);
    const module = await import(pathString);
    return module;
  } catch (error) {
    sendAlert({
      type: DiscordMessageType.ERROR,
      data: {
        message: `Failed to dynamically import: ${path}`,
        error: error,
        path: path,
        meta: meta,
      },
    });
    throw error;
  }
};

export { dynamicImport, mathjaxLoad, mathjaxTypeset };
