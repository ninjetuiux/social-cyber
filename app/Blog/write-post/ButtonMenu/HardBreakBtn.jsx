import { MdFormatLineSpacing } from "react-icons/md";
export default function HardBreakBtn({ editor }) {
    return (
        <div>
        <button
        className="h-8 w-8 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]"
        onClick={() => editor.chain().focus().setHardBreak().run()}>
          <MdFormatLineSpacing /> 
        </button>
        </div>
    )
}