import Document from "@tiptap/extension-document";
import Title from './TitleNode';
const DocumentWithTitle = Document.extend({
    name: "custom-title",
    content: "title block+",
    class: 'custom-title',
    addAttributes() {
        return {
          contenteditable: { default: false }, 
        };
      },
    
      addTransactionHandler() {
        return ({ transaction, editor }) => {
          // Prevent deletion of the mainHeading
          if (transaction.steps.some(step => 
            step.toJSON().stepType === "delete" && 
            transaction.doc.resolve(step.from).node()?.type.name === "title"
          )) {
            return false; 
          }
    
          // Prevent insertion at the beginning of the document
          if (transaction.steps.some(step => step.toJSON().stepType === "insert" && step.to === 0)) {
            return false;
          }
    
          // Ensure the mainHeading is always present
          if (!editor.state.doc.firstChild || editor.state.doc.firstChild.type.name !== "title") {
            const Title = editor.state.schema.nodes.Title.create();
            transaction.insert(0, Title);
            return false; 
          }
    
          return true; 
        };
      },
  });
  export default DocumentWithTitle;