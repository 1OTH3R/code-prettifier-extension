import './prettier/standalone.js';
import './prettier/parser-babel.js';
import './prettier/parser-html.js';
import './prettier/parser-postcss.js';
import './prettier/parser-estree.js';

document.getElementById('prettifyBtn').addEventListener('click', async () => {
  const code = document.getElementById('codeInput').value;
  const lang = document.getElementById('language').value;

  const parserMap = {
    javascript: 'babel',
    html: 'html',
    css: 'css',
    json: 'json'
  };

  try {
    // Ensure you handle Prettier asynchronously if it's a Promise
    const formatted = await prettier.format(code, {
      parser: parserMap[lang] || 'babel',
      plugins: prettierPlugins,
    });

    document.getElementById('output').value = formatted;
  } catch (err) {
    document.getElementById('output').value = '❌ Error: ' + err.message;
  }
});
