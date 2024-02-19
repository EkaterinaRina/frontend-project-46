import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { readFileSync } from "fs";
import gendiff from "../scr/index";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getString = (data) => String(data).trim();

const getFilePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getFilePath(filepath), 'utf-8');

//  const files = [file.json, file2.json];

test('gendiff', () => {
  const file1 = 'file1.json';
  const file2 = 'file2.json';
  const filepath1 = getFilePath(file1);
  const filepath2 = getFilePath(file2);
  const result = readFile('result.txt')
  expect(gendiff(filepath1, filepath2)).toEqual(getString(result));
});