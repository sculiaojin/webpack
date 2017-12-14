set -e

vue init . test

cd test
npm install
npm run lint
npm test
npm run build