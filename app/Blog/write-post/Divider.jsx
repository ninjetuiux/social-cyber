import { Node, mergeAttributes } from "@tiptap/core";

const Divider = Node.create({
  name: "divider",
  group: "block",
  parseHTML() {
    return [
      {
        tag: "hr",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["hr", mergeAttributes(HTMLAttributes)];
  },

  addCommands() {
    return {
      setDivider:
        () =>
        ({ commands }) => {
          return commands.insertContent("<hr /><p></p>");
        },
    };
  },
});
export default Divider;
