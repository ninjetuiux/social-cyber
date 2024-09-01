import { BsTypeH1 } from "react-icons/bs";


export default function Heading1Btn({ editor }) {
    
    const isActive = editor.isActive('heading', { level: 1 });
    console.log("Heading1 is active:", isActive);
    
    if (!editor) {
        console.log("Editor is null in Heading1Btn");
        return null;
    }
    return (
        <button
            onClick={() => {
                console.log("Heading1 button clicked");
                editor.chain().focus().toggleHeading({ level: 1 }).run();
                console.log("Heading1 toggled, new state:", editor.isActive('heading', { level: 1 }));
            }}
            className={`h-8 w-8 p-2 rounded-md flex items-center justify-center cursor-pointer ${
                isActive ? 'is-active bg-blue-500 text-white' : 'h-8 w-8 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]'
            }`}
        >
            <BsTypeH1 />
        </button>
    )
}