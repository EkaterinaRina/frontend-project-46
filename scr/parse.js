import YAML from 'yaml';

const parsing = {
  json: JSON.parse,
  yaml: YAML.parse,
  yml: YAML.parse,
};

const parse = (filepath, ext) => {
  try {
    return parsing[ext](filepath);
  } catch (error) {
    throw new Error(`Неизвестный формат ${ext}!`);
  }
};

export default parse;
