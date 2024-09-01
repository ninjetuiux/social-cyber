import { Node } from '@tiptap/core';

const TitleNode = Node.create({
  name: 'title',
  group: 'block',
  content: 'inline*',
  parseHTML() {
    return [{ tag: 'h1' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ['h1', HTMLAttributes, 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        if (editor.state.selection.$anchor.parent.type.name === 'title') {
          editor.commands.insertContentAt(editor.state.doc.content.size, { type: 'paragraph' });
          editor.commands.focus('end');
          return true;
        }
        return false;
      },
    };
  },
});

export default TitleNode;