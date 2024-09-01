
export default function BoldBtn({ editor }) {
    if (!editor) return null;
    return (
        <div>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 
                    'is-active p-2 rounded-md flex items-center justify-center cursor-pointer h-8 w-8 bg-[#ededed]' 
                    : 'h-8 w-8 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]'}
            >
                B
            </button>
        </div>
    )
}