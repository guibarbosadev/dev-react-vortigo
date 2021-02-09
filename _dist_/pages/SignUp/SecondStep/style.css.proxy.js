// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".secondStepWrapper {\n    align-items: center;\n    color: #ffffff;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    padding: 10px 20px;\n}\n\n.secondStepWrapper .title {\n    font-weight: normal;\n    transform: translateY(4rem);\n}\n\n.secondStepWrapper label {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.secondStepWrapper label select {\n    width: 100%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}