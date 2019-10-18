import { ExtensionContext, commands, window, workspace, env } from 'vscode';
import { readFile } from 'fs';
import { join } from 'path';
const contentZhCn = '../../i18n/content.zh-cn.json';
const content = '../../i18n/content.json';
const language = env.language;//zh-cn
console.log('language :', language == 'zh-cn' ? contentZhCn : content); 
const file = join(__dirname, contentZhCn);
console.log('file :', file);
import { i18n } from '../typings/i18n';

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
