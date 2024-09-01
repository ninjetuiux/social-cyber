import { BsTypeH2 } from "react-icons/bs";
export default function Heading2Btn({ editor }) {
    if (!editor) return null;
    return (
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
        className={editor.isActive('heading', { level: 2 }) ? 'is-active h-8 w-8 p-2 underline rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]' : 'h-8 w-8 p-2 underline rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]'}>
            <BsTypeH2 />
        </button>
    )
}