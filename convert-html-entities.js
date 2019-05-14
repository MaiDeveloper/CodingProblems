/**
 * Intermediate Algorithm Scripting: Convert HTML Entities
 *
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  };
  return str.split('').map(s => entities[s] || s).join('');
}

convertHTML("Dolce & Gabbana");