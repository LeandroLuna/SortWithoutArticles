const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];

function strip(bandName) {
    return bandName.replace(/ˆ(a |the |an )/i, '').trim(); // Substitui os artigos por um espaço vazio (maiúsculo ou minúsculo), e logo em seguida verifica e remove o espaço posterior ao artigo.
}
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1)); // Ordem alfabética desconsiderando os artigos de acordo com a função preescrita acima.

document.querySelector('#bands').innerHTML = sortedBands
    .map((band) => `<li>${band}</li>`)
    .join(''); // O objeto innerHTML transforma qualquer valor passado para ele em um string, e separa por uma virgula. Para remover a virgura, é necessario criar uma longa string com o método Join