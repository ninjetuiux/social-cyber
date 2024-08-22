import Heading from "@tiptap/extension-heading";
import { mergeAttributes } from '@tiptap/core';

const Title = Heading.extend({
    name: "title",
    group: "title",
    isolating: true,
    defining: true,
    
    parseHTML() {
      return [{ tag: 'h1:first-child' }]; // You might want to add a specific class here if needed for parsing
    },
    renderHTML({ HTMLAttributes }) {
      return ['h1', mergeAttributes(HTMLAttributes, { class: 'custom-title' }), 0]; // Apply the class here
    },
  }).configure({ levels: [1] });

  export default Title;