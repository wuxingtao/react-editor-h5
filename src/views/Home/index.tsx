/**
 * @Desc: index
 * @Author: wu xingtgao
 * @Date: 2020/12/9
 */
import * as React from 'react';
import { UnControlled as CodeMirror } from "react-codemirror2";


// 引入javascript依赖（因为我是javascript语言 大家可以自行引入java c++等 参考官网）
import 'codemirror/mode/javascript/javascript'
// 引入codemirror核心css,js文件（必须）
import 'codemirror/lib/codemirror.css'
import 'codemirror/lib/codemirror.js'
// 引入solarized.css主题和clike代码模式的文件（可选择引入喜欢的主题和模式）
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/clike/clike'

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

interface EditorProps{

}
interface EditorState{
  cursor:string
}

class CodeEditor extends React.Component<EditorProps,EditorState> {
  constructor(props:EditorProps) {
    super(props);
    this.state = {
      cursor: 'auto'
    };
  }
  handleChange(){

  }

  onCursorChange(){

  }

  render() {
    return (
      <div>
        <span>CodeEdit content</span>
        <CodeMirror
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
            onChange={this.handleChange}
            onCursor={this.onCursorChange}
        >

        </CodeMirror>
        {/*<CodeMirror*/}
        {/*  options={{*/}
        {/*    mode: 'xml',*/}
        {/*    theme: 'material',*/}
        {/*    lineNumbers: true*/}
        {/*  }}*/}
        {/*  onChange={this.handleChange}*/}
        {/*  cursor={this.state.cursor}*/}
        {/*  onCursor={this.onCursorChange}*/}
        {/*>*/}

        {/*</CodeMirror>*/}
      </div>
    );
  }
}

export default CodeEditor;
