import { GoStrikethrough } from "react-icons/go";

export default function StrikethroughBtn({ editor }) {
    if (!editor) return null;

    return (
        <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active bg-[#eee] p-2 rounded-md cursor-pointer' : 'bg-[#eee] p-2 rounded-md cursor-pointer'}
        >
            <GoStrikethrough />
        </button>
    );
}