import Image from '@tiptap/extension-image'

export const CustomImageExt = Image.extend({
  renderHTML({ HTMLAttributes }) {
    return ['div', { class: 'image-container' }, ['img', HTMLAttributes]]
  },
})