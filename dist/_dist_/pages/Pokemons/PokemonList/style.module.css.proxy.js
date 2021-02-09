
export let code = "._wrapper_wekyj_1 {\n  display: grid;\n}\n._wrapper_wekyj_1 ._header_wekyj_4 {\n  display: flex;\n  justify-content: space-between;\n}\n._wrapper_wekyj_1 ul._pokemonList_wekyj_8 {\n  list-style-type: none;\n}\n._wrapper_wekyj_1 ul._pokemonList_wekyj_8 li {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  column-gap: 20px;\n  align-items: center;\n}\n._wrapper_wekyj_1 ul._pokemonList_wekyj_8 img {\n  height: 50px;\n}";
let json = {"wrapper":"_wrapper_wekyj_1","header":"_header_wekyj_4","pokemonList":"_pokemonList_wekyj_8"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}