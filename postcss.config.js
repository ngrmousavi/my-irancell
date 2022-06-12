// const tailwindcss = require('tailwindcss');
// module.exports = {
//     plugins: [
//         tailwindcss('./tailwind.config.js'),
//         require('autoprefixer'),
//     ],
// };
import tailwindcss from 'tailwindcss';
export const plugins = [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
];
