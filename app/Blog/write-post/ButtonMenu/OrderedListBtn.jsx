import { GoListOrdered } from "react-icons/go";

export default function OrderedListBtn({ editor }) {
    if (!editor) {
        return null;
    }

    const handleClick = () => {
        editor.chain().focus().toggleOrderedList().run();
    };

    return (
        <button
            onClick={handleClick}
            className={`bg-[#eee] p-2 rounded-md cursor-pointer ${editor.isActive('orderedList') ? 'is-active custom-ordered-list' : ''}`}
        >
            <GoListOrdered />
        </button>
    );
}