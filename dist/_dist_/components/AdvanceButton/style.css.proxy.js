// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".advanceButton {\n    background-color: transparent;\n    background-image: -webkit-image-set(url('./images/next.png') 1x, url('./images/nextg@2x.png') 2x, url('./images/next@3x.png') 3x);\n    background-image: image-set(url('./images/next.png') 1x, url('./images/nextg@2x.png') 2x, url('./images/next@3x.png') 3x);\n    background-image: url('./images/next.png');\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: none;\n    cursor: pointer;\n    transition-duration: 0.2s;\n    transition-property: opacity;\n    height: 50px;\n    width: 50px;\n}\n\n.advanceButton:hover,\n.advanceButton:focus,\n.advanceButton:active {\n    opacity: 0.75;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}