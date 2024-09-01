import { useCallback } from "react"
import { FaLink, FaLinkSlash } from "react-icons/fa6";

export default function LinkBtn({ editor }) {
    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)
    
        if (url === null) {
          return
        }
    
        if (url === '') {
          editor.chain().focus().extendMarkRange('link').unsetLink().run()
          return
        }
    
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }, [editor])

    if (!editor) return null;

    return (
        <div className="button-group flex items-center gap-2">
            <button
                onClick={setLink}
                className={`p-2 rounded-md flex items-center justify-center cursor-pointer h-8 w-8 bg-[#ededed] ${editor.isActive('link') ? 'is-active' : ''}`}
            >
                {editor.isActive('link') ? <FaLinkSlash /> : <FaLink />}
            </button>
        </div>
    )
}