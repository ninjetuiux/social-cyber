import { CiRedo } from "react-icons/ci";

export default function RedoBtn({ editor }) {
    if (!editor) return null;
    return (
        <div>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                className="h-8 w-12 gap-1 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]"
            >
                <CiRedo /><span className="text-sm">R</span>
            </button>
        </div>  )
}