/// <reference path="../typings/tsd.d.ts" />
import { window, workspace, TextEditor } from 'vscode';
import { FileContents } from './file-contents-vue';
import { i18n } from '../typings/i18n';
import { IFiles } from './file';
import * as fs from 'fs';
import * as path from 'path';
import * as Q from 'q';
import { I18n } from './i18n';

export class AddFilesVue {
  public content: i18n;
  // 显示文件夹名称的输入提示
  // imput还用于创建在Angular2样式指南中定义的具有各自名称的文件 [https://angular.io/docs/ts/latest/guide/style-guide.html]

  // constructor() {
  //   this.redContent();
  // }
  public showFileNameDialog(args): Q.Promise<string> {
    const deferred: Q.Deferred<string> = Q.defer<string>();
    var clickedFolderPath: string;
    if (args) {
      clickedFolderPath = args.fsPath;
    } else {
      if (!window.activeTextEditor) {
        // deferred.reject('Please open a file first.. or just right-click on a file/folder and use the context menu!');
        // deferred.reject('请先打开一个文件。或者右键单击一个文件/文件夹，使用上下文菜单!');
        deferred.reject(this.content.please_open_a_file_first);
        return deferred.promise;
      } else {
        clickedFolderPath = path.dirname(window.activeTextEditor.document.fileName);
      }
    }
    var newFolderPath: string = fs.lstatSync(clickedFolderPath).isDirectory() ? clickedFolderPath : path.dirname(clickedFolderPath);

    if (workspace.rootPath === undefined) {
      // deferred.reject('Please open a project first. Thanks! :-)');
      // deferred.reject('请先打开一个项目。谢谢!:-)');
      deferred.reject(this.content.please_open_a_project_first);
    } else {
      window
        .showInputBox({
          // prompt: 'What\'s the name of the new folder?',
          // prompt: '新文件夹的名字是什么?',
          prompt: this.content.whats_the_name_of_the_new_folder,
          value: 'folder'
        })
        .then(
          fileName => {
            if (!fileName || /[~`!#$%\^&*+=\[\]\\';,/{}|\\":<>\?\s]/g.test(fileName)) {
              // deferred.reject('That\'s not a valid name! (no whitespaces or special characters)');
              // deferred.reject('那不是一个有效的名字!(没有空格或特殊字符)');
              deferred.reject(this.content.thats_not_a_valid_name);
            } else {
              deferred.resolve(path.join(newFolderPath, fileName));
            }
          },
          error => console.error(error)
        );
    }
    return deferred.promise;
  }

  // 创建新文件夹
  public createFolder(folderName): Q.Promise<string> {
    const deferred: Q.Deferred<string> = Q.defer<string>();

    fs.exists(folderName, exists => {
      if (!exists) {
        fs.mkdirSync(folderName);
        deferred.resolve(folderName);
      } else {
        // deferred.reject('Folder already exists');
        // deferred.reject('文件夹已经存在');
        deferred.reject(this.content.folder_already_exists);
      }
    });
    return deferred.promise;
  }

  // 获取文件内容并在文件夹中创建新文件
  public createFiles(folderName: string): Q.Promise<string> {
    const deferred: Q.Deferred<string> = Q.defer<string>();
    // var inputName: string = path.parse(folderName).name;
    var pathParse = path.parse(folderName);
    var pathDir: string = pathParse.dir;
    var inputName: string = pathParse.name;
    const fc: FileContents = new FileContents();
    const af: AddFilesVue = new AddFilesVue();
    console.log('path :', path.parse(folderName));
    // 创建一个包含文件名和内容的IFiles数组
    var files: IFiles[] = [
      {
        name: path.join(pathDir, `${inputName}.vue`),
        content: fc.vueContent(inputName)
      }
      // {
      //   name: path.join(folderName, `${inputName}.component.ts`),
      //   content: fc.componentContent(inputName)
      // },
      // {
      //   name: path.join(folderName, `${inputName}.component.html`),
      //   content: fc.templateContent(inputName)
      // },
      // {
      //   name: path.join(folderName, `${inputName}.component.css`),
      //   content: fc.cssContent(inputName)
      // },
      // {
      //   name: path.join(folderName, `${inputName}.component.spec.ts`),
      //   content: fc.specContent(inputName)
      // }
    ];

    // 写入文件
    af.writeFiles(files).then(errors => {
      if (errors.length > 0) {
        // window.showErrorMessage(`${errors.length} file(s) could not be created. I'm sorry :-(`);
        // window.showErrorMessage(`${errors.length} 无法创建文件。我很抱歉:- (`);
        window.showErrorMessage(`${errors.length} ` + this.content.file_could_not_be_created);
      } else {
        deferred.resolve(folderName);
      }
    });

    return deferred.promise;
  }

  public writeFiles(files: IFiles[]): Q.Promise<string[]> {
    const deferred: Q.Deferred<string[]> = Q.defer<string[]>();
    var errors: string[] = [];
    files.forEach(file => {
      fs.writeFile(file.name, file.content, err => {
        if (err) {
          errors.push(err.message);
        }
        deferred.resolve(errors);
      });
    });
    return deferred.promise;
  }

  // 在编辑器中打开创建的组件
  public openFileInEditor(folderName): Q.Promise<TextEditor> {
    const deferred: Q.Deferred<TextEditor> = Q.defer<TextEditor>();
    // var inputName: string = path.parse(folderName).name;;
    var pathParse = path.parse(folderName);
    var pathDir: string = pathParse.dir;
    var inputName: string = pathParse.name;
    // var fullFilePath: string = path.join(folderName, `${inputName}.component.ts`);
    var fullFilePath: string = path.join(pathDir, `${inputName}.vue`);

    workspace.openTextDocument(fullFilePath).then(textDocument => {
      if (!textDocument) {
        return;
      }
      window.showTextDocument(textDocument).then(editor => {
        if (!editor) {
          return;
        }
        deferred.resolve(editor);
      });
    });

    return deferred.promise;
  }

  //读取语言配置文件
  public async redContent(callback): Promise<i18n> {
    const i18n = new I18n();
    this.content = await i18n.getContent();
    console.log('I18n.getContent() :', this.content);
    return callback(this.content);
  }
}
