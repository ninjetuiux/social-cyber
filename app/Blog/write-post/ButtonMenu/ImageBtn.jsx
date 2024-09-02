import { useCallback } from "react";
import { CiImageOn } from "react-icons/ci";
import uploadImage from "@/app/utils/firebaseImageUpload";
import { useSession } from "next-auth/react";

export default function ImageBtn({ editor }) {
    const { data: session } = useSession();

    const addImage = useCallback(async () => {
        if (!session?.user?.email) {
            alert("You must be logged in to upload images.");
            return;
        }

        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async (event) => {
            const file = event.target.files[0];
            if (file) {
                try {
                    const downloadURL = await uploadImage(file, session?.user?.email);
                    console.log("Image uploaded successfully. URL:", downloadURL);
                    
                    if (!editor) {
                        console.error("Editor is not available");
                        return;
                    }

                    editor?.chain()?.focus()?.setImage({ 
                        src: downloadURL, 
                        alt: file.name,
                        class: 'max-h-500'
                    })?.run();
                    editor?.commands?.createParagraphNear();
                    editor?.commands?.enter();

                } catch (error) {
                    console.error('Error uploading image:', error);
                    alert('Failed to upload image. Please try again.');
                }
            }
        };
        input.click();
    }, [editor, session]);

    if (!editor) {
        return null;
    }

    return (
        <button
            onClick={addImage}
            className={editor.isActive('image') ? 'is-active p-2 rounded-md flex items-center justify-center cursor-pointer h-8 w-8' : 'h-8 w-8 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]'}
        >
            <CiImageOn className="w-8 h-8"/>
        </button>
    );
}