export class FileContents {
  private camelCase(input: string): string {
    return input.replace(/-([a-z])/gi, function(all, letter) {
      return letter.toUpperCase();
    });
  }

  public vueContent(inputName: string): string {
    var inputUpperCase: string;
    inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    inputUpperCase = this.camelCase(inputUpperCase);

    var vueContent: string =
`<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->
                <Label textWrap="true" text="Play with NativeScript!" class="h2 description-label" />
                <Label textWrap="true" text="Write code in the editor or drag and drop components to build a NativeScript mobile application." class="h2 description-label" />
                <Label textWrap="true" text="Scan the QR code with your mobile device and watch the changes sync live while you play with the code." class="h2 description-label" />
                <!--在这里添加页面内容-->
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    data () {
        return {
          
        };
    },
    mounted() {

    },
    methods:{

    }
}
</script>

<style scoped lang="scss">
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>

`;
    return vueContent;
  }  

  public componentContent(inputName: string): string {
    var inputUpperCase: string;
    inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    inputUpperCase = this.camelCase(inputUpperCase);

    var componentContent: string =
      "import { Component, OnInit } from '@angular/core';\n" +
      '\n' +
      '@Component({\n' +
      '\tmoduleId: module.id,\n' +
      "\tselector: '" +
      inputName +
      "',\n" +
      "\ttemplateUrl: './" +
      inputName +
      ".component.html',\n" +
      "\tstyleUrls: ['./" +
      inputName +
      ".component.css']\n" +
      '})\n' +
      '\n' +
      'export class ' +
      inputUpperCase +
      'Component implements OnInit {\n' +
      '\n' +
      '\tconstructor() { }\n' +
      '\n' +
      '\tngOnInit() { }\n' +
      '}';
    return componentContent;
  }

  public templateContent(inputName: string): string {
    var inputUpperCase: string;
    inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    inputUpperCase = this.camelCase(inputUpperCase);
    var templateContent: string = `<Label class="${inputName}" text="Hello ${inputUpperCase}Component!"></Label>`;
    return templateContent;
  }

  public cssContent(inputName: string): string {
    var inputUpperCase: string =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);
    var cssContent: string = `.${inputName} {\n\n}`;
    return cssContent;
  }

  public specContent(inputName: string): string {
    var inputUpperCase: string;
    inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    inputUpperCase = this.camelCase(inputUpperCase);

    var specContent: string =
      "import { TestBed, inject } from '@angular/core/testing';\n\n" +
      'import { ' +
      inputUpperCase +
      "Component } from './" +
      inputName +
      ".component';\n" +
      '\n' +
      "describe('a " +
      inputName +
      " component', () => {\n" +
      '\tlet component: ' +
      inputUpperCase +
      'Component;\n' +
      '\n' +
      '\t// register all needed dependencies\n' +
      '\tbeforeEach(() => {\n' +
      '\t\tTestBed.configureTestingModule({\n' +
      '\t\t\tproviders: [\n' +
      '\t\t\t\t' +
      inputUpperCase +
      'Component\n' +
      '\t\t\t]\n' +
      '\t\t});\n' +
      '\t});\n' +
      '\n' +
      '\t// instantiation through framework injection\n' +
      '\tbeforeEach(inject([' +
      inputUpperCase +
      'Component], (' +
      inputUpperCase +
      'Component) => {\n' +
      '\t\tcomponent = ' +
      inputUpperCase +
      'Component;\n' +
      '\t}));\n' +
      '\n' +
      "\tit('should have an instance', () => {\n" +
      '\t\texpect(component).toBeDefined();\n' +
      '\t});\n' +
      '});';
    return specContent;
  }
}
