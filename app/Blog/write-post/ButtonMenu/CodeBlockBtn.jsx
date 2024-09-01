import { PiCodeBlock } from "react-icons/pi";
export default function CodeBlockBtn({ editor }) {
    if (!editor) return null;
    return (
        <div>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active p-2 rounded-md flex items-center justify-center cursor-pointer h-8 w-8' : 'h-8 w-8 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]'}
            >
                <PiCodeBlock />
            </button>
        </div>
    )
}