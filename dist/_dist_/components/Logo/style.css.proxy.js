// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#logo {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 350px;\n}\n\n#logo .finder {\n    max-width: 50%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}