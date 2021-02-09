// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".button {\n    background-color: #f81769;\n    padding: 8px 20px;\n    width: 100%;\n    border: none;\n    cursor: pointer;\n    color: #ffffff;\n    font-size: 1.5rem;\n    border-radius: 10px;\n}\n\n.button:focus,\n.button:active,\n.button:hover {\n    background-color: #e01b63;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}