import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor as EditorComponent } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Header } from '../components';
// import { EditorData } from '../data/dummy';

const Editor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  return (
    //! El editor da problemas cuando en el index esta con React.StrictMode
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 h-auto bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <div className="h-auto">
        <EditorComponent
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />
      </div>
    </div>
  );
};
export default Editor;
