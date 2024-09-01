import { PiListBullets } from "react-icons/pi";
export default function BulletListBtn({ editor }) {
    if (!editor) return null;

    return (
        <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`bg-[#eee] p-2 rounded-md cursor-pointer ${editor.isActive('bulletList') ? 'is-active' : ''}`}
        >
            <PiListBullets />
        </button>
    );
}           