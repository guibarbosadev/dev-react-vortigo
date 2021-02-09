// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".firstStepWrapper {\n    color: #ffffff;\n    padding: 10px 20px;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.firstStepWrapper .title {\n    font-weight: normal;\n    transform: translateY(4rem);\n}\n\n.firstStepWrapper input {\n    border: none;\n    border-bottom: 2px solid #ffffff;\n    background-color: transparent;\n    padding: 15px 0;\n    color: #ffffff;\n}\n\n.firstStepWrapper input:focus {\n    outline: none;\n}\n\n.firstStepWrapper label {\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}