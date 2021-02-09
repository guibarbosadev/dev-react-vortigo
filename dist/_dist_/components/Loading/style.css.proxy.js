// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#loading {\n    width: 150px;\n    height: 150px;\n    border: 10px solid transparent;\n    border-top: 10px solid #ffffff;\n    border-right: 10px solid #ffffff;\n    border-radius: 50%;\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}