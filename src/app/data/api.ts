import fsPromises from 'fs/promises';
import path from 'path';

export async function getLocalData() {
  const filePath = path.join(process.cwd(), 'src/app/data/data.json');

  const jsonData = await fsPromises.readFile(filePath, 'utf-8');

  const objectData = JSON.parse(jsonData);

  return objectData;
}
