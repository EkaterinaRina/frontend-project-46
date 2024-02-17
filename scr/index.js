import path from 'path';
import process from 'process';
import { readFileSync } from 'fs';

const getFileType = (filepath) => path.extname(filepath);
const getFilePath = (filepath) => path.resolve(process.cwd, filepath);
const readFile = (filepath) => readFileSync(filepath); //возсожно надо добавить getFilePath(filepath)
const dataParse = (filepath) => parse(filepath, ext);

const gendiff = (filepath1, filepath2, format = 'stylish') => {
    const ext1 = getFileType(filepath1);
    const path1 = getFilePath(filepath1);
    const data1 = readFile(path1);

    const ext2 = getFileType(filepath2);
    const path2 = getFilePath(filepath2);
    const data2 = readFile(path2);

    const parseData1 = dataParse(data1, ext1);
    const parseData2 = dataParse(data2, ext2);
    return parseData1, parseData2;
};

export default gendiff;