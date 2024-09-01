export default function UnderlineBtn({ editor }) {
    if (!editor) return null;
    return (
        <div>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={editor.isActive('underline') ?
                'is-active underline p-2 rounded-md flex items-center justify-center cursor-pointer h-8 w-8 bg-[#ededed]' : 'h-8 w-8 p-2 underline rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]'}
            >
                U
            </button>
        </div>
    )
}