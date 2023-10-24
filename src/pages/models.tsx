import React from 'react';
import Editor from '../components/editor/editor';

const EditorPage: React.FC = () => {
  return (
    <div>
      <h1>Zetahub Editor</h1>
      <Editor width={800} height={600} dotSpacing={20} />
    </div>
  );
}

export default EditorPage;
