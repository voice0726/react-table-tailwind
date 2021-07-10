module.exports = {
  '**/*.ts?(x)': () => 'npm run type-check', // Run type-check on changes to TypeScript files.
  '**/*.{css,less,sass,scss}': (filenames) =>
    `npm run lint:style:fix ${filenames.join(' ')}`,
  '**/*.(ts|js)?(x)': (filenames) =>
    `npm run lint:es:fix ${filenames.join(' ')}`, // Run ESLint on changes to JavaScript/TypeScript files.
};
