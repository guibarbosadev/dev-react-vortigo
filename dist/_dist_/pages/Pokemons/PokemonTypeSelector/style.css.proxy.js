// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".pokemonTypeSelector {\n    display: flex;\n    list-style-type: none;\n    overflow-x: auto;\n    padding: 0 20px 20px;\n}\n\n.pokemonTypeSelector li {\n    margin-right: 20px;\n}\n\n.pokemonTypeSelector li a {\n    display: grid;\n    align-items: center;\n    text-align: center;\n    text-decoration: none;\n    color: #000000;\n}\n\n.pokemonTypeSelector li img {\n    height: 75px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}