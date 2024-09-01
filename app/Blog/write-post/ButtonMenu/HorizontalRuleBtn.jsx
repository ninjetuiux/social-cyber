import { VscHorizontalRule } from "react-icons/vsc";

export default function HorizontalRuleBtn({ editor }) {
    return (
        <div>
            <button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className="h-8 w-8 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]"
            >
                <VscHorizontalRule className="h-8 w-8"/>
            </button>
        </div>
    )
}