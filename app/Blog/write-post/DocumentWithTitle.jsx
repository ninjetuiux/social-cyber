import { Node } from '@tiptap/core';

const DocumentWithTitle = Node.create({
  name: 'doc',
  topNode: true,
  content: 'title paragraph+',

  addKeyboardShortcuts() {
    return {
      Backspace: ({ editor }) => {
        const { selection } = editor.state;
        const { $anchor } = selection;

        // Prevent deletion of title
        if ($anchor.pos === 2 && $anchor.nodeBefore && $anchor.nodeBefore.type.name === 'title') {
          return true;
        }

        return false;
      },
    };
  },
});

export default DocumentWithTitle;