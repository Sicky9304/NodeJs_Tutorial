const path = require ("path");
console.log(__filename);
console.log(__dirname);

const filepath =path.join ('folder','students','data.txt');
console.log(filepath);

const parseData = path.parse(filepath);
const resolvePath = path.resolve(filepath);
const extName = path.extname(filepath);
const baseName = path.basename(filepath);
const dirName = path.dirname(filepath);

console.log({parseData,resolvePath,extName,baseName,dirName,separator:path.sep});