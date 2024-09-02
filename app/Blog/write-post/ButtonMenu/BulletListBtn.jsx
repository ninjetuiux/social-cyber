import { PiListBullets } from "react-icons/pi";

export default function BulletListBtn({ editor }) {
    if (!editor) return null;

    const isBulletListActive = editor.isActive('bulletList');

    return (
        <button
            onClick={() => {
                editor.chain().focus().toggleBulletList().run();
                setTimeout(() => {
                    console.log('Is bullet list active (after timeout):', editor.isActive('bulletList'));
                }, 0);
            }}
            className={`p-2 ${isBulletListActive ? 'bg-gray-200 text-black rounded-md' : 'bg-gray-200 text-black rounded-md'}`}
        >
            <PiListBullets />
        </button>
    );
}