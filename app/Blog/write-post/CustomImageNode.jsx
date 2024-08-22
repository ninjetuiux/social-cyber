import { Image as TiptapImage } from '@tiptap/extension-image';

const CustomImage = TiptapImage.extend({
  addNodeView() {
    return ({ node, HTMLAttributes }) => {
      const image = document.createElement('img');
      Object.entries(HTMLAttributes).forEach(([key, value]) => {
        image.setAttribute(key, value);
      });

      // Create a container div and apply your unique class
      const container = document.createElement('div');
      container.classList.add('custom-image-container');
      
      // Apply your unique class to the image
      image.classList.add('custom-image');
      
      container.appendChild(image);
      
      // Add the caption element if it exists
      if (node.attrs.caption) {
          const figcaption = document.createElement('figcaption');
          figcaption.classList.add('custom-image-figcaption');
          figcaption.contentEditable = true;
          figcaption.textContent = node.attrs.caption;
        container.appendChild(figcaption); 
      }

      return { 
        dom: container, 
        contentDOM: node.attrs.caption ? container.querySelector('figcaption') : null,
        selectable: true,
    };
    };
  },

  // Add a caption attribute
  addAttributes() {
    return {
      ...this.parent?.(),
      caption: {
        default: null, 
      },
    };
  },

  // Update the command to include caption
  addCommands() {
    return {
      ...this.parent?.(),
      setImage: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        });
      },
    };
  },

});

export default CustomImage;