import { BsBlockquoteLeft } from "react-icons/bs";

export default function BlockquoteBtn({ editor }) {
    if (!editor) return null;

    return (
        <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active bg-[#eee] p-2 rounded-md cursor-pointer' : 'bg-[#eee] p-2 rounded-md cursor-pointer'}
        >
            <BsBlockquoteLeft />
        </button>
    );
}