import { CiUndo } from "react-icons/ci";
export default function UndoBtn({ editor }) {
    if (!editor) return null;
    return (
        <div>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                className="h-8 w-12 gap-1 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]"
            >
                <CiUndo /><span className="text-sm">U</span>
            </button>
        </div>  
    )
}