/**
 * @Desc: index 在线编辑
 * @Author: wu xingtgao
 * @Date: 2020/12/9
 */
import * as React from 'react';
import { UnControlled as CodeMirror } from "react-codemirror2";

// 引入javascript依赖（因为我是javascript语言 大家可以自行引入java c++等 参考官网）
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
// 引入codemirror核心css,js文件（必须）
import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.js';
// 引入solarized.css主题和clike代码模式的文件（可选择引入喜欢的主题和模式）
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/clike/clike';

import fs_utils from '../../modules/filterText';

const beautify = require('js-beautify').html;
const path = require('path');

interface EditorProps {

}

interface EditorState {
  cursor: string;
  value: string
}

class CodeEditor extends React.Component<EditorProps, EditorState> {
  constructor(props: EditorProps) {
    super(props);
    this.state = {
      cursor: 'auto',
      value: '<script> function (s,e){ for(var i=0; i < 1; i++) test("test();a=1");} </script>\n' +
        '<script>function test(c){  for (var i = 0; i < 10; i++){\t          process("a.b();c = null;", 300);}}\n' +
        '</script>\n' +
        '<table><tr><td>test 1</td></tr><tr><td>test 2</td></tr></table>\n' +
        '<script> function test() { return 1;} </script>\n' +
        '<style> .test { font-size: medium; font-family: monospace; }</style>\n'
    };
  }

  componentDidMount() {
    // fs_utils.readFromFile(path.join(__dirname, '../../assets/files/main.jsx'), (data: any) => {
    //   this.setState({
    //     value: data
    //   });
    // });
    this.formatterData()
  }

  /**
   * 格式化数据
   */
  formatterData(){
    const value = beautify(this.state.value, {indent_size: 2, space_in_empty_paren: true});
    this.setState({
      value:value
    })
  }
  // @ts-ignore
  handleChange = (editor, data, value) => {
    console.log(editor, data, value);
  };

  onCursorChange = () => {

  };

  render() {
    const {value} = this.state;
    return (
      <div>
        <span>CodeEdit content</span>
        <CodeMirror
          value={value}
          options={{
            mode: 'text/javascript',
            theme: 'monokai',
            lineNumbers: true,
            styleActiveLine: true,
            lineWrapping: true,
            indentUnit: 2,
          }}
          onChange={this.handleChange}
          onCursor={this.onCursorChange}
        >
        </CodeMirror>
      </div>
    );
  }

}

export default CodeEditor;
