import { BsTypeH3 } from "react-icons/bs";
export default function Heading3Btn({ editor }) {
    if (!editor) return null;
    return (
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} 
        className={editor.isActive('heading', { level: 3 }) ? 'is-active h-8 w-8 p-2 underline rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]' : 'h-8 w-8 p-2 underline rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]'}>
            <BsTypeH3 />
        </button>
    )
}