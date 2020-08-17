
const code = "\nh3[data-v-bd121d6a] {\n\tmargin: 40px 0 0;\n}\nul[data-v-bd121d6a] {\n\tlist-style-type: none;\n\tpadding: 0;\n}\nli[data-v-bd121d6a] {\n\tdisplay: inline-block;\n\tmargin: 0 10px;\n}\na[data-v-bd121d6a] {\n\tcolor: #42b983;\n}\n";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);