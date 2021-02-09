// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".wrapper {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.wrapper .main {\n    display: flex;\n    align-items: flex-end;\n    flex-grow: 1;\n    padding: 20px 35px;\n}\n\n.wrapper .main .linkButton {\n    width: 100%;\n}\n\n.wrapper .pikachu {\n    max-width: 180px;\n    margin-left: auto;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}