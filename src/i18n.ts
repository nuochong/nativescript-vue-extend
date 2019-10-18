import { env } from 'vscode';
import { i18n } from '../typings/i18n';
import { readFile } from 'fs';
import { join } from 'path';
const contentZhCn = '../../i18n/content.zh-cn.json';
const content = '../../i18n/content.json';
const language = env.language; //zh-cn
const newLanguage = language == 'zh-cn' ? contentZhCn : content;
console.log('language :', newLanguage);
const file = join(__dirname, newLanguage);
console.log('file :', file);

export class I18n {
  public async getContent(): Promise<i18n> {
    let res = new Promise<i18n>(function(resolve, reject) {
      readFile(file, (err, data) => {
        if (err) {
          console.log('This is not a nativescript project');
          reject(err);
        } else {
          const newData = JSON.parse(data.toString());
          resolve(newData);
        }
      });
    });
    return await res;
  }
}
