import { Node } from '@tiptap/core';

const Embed = Node.create({
    name: 'embed',
    group: 'block',
    draggable: true,
    content: 'inline*',
    parseHTML() {
        return [{ tag: 'iframe' }];
    },
    renderHTML({ HTMLAttributes }) {
        return ['iframe', HTMLAttributes];
    },
    addNodeView() {
        return ({ node, updateAttributes, deleteNode }) => {
            const iframe = document.createElement('iframe');
            iframe.src = node.attrs.src;
            iframe.onload = () => {
                iframe.contentWindow.document.open();
                iframe.contentWindow.document.write(node.attrs.content);
                iframe.contentWindow.document.close();
            };

            return {
                dom: iframe,
                contentDOM: iframe,
            };
        };
    },
});
export default Embed;
