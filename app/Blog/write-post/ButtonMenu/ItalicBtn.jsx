export default function ItalicBtn({ editor }) {
    if (!editor) return null;
    return (
        <div>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active italic p-2 rounded-md flex items-center justify-center cursor-pointer h-8 w-8 bg-[#ededed]' : 'h-8 w-8 p-2 italic rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]'}
            >
                I
            </button>
        </div>
    )
}