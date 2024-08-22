import React, { useEffect, useRef, useState } from "react";
import { CiCirclePlus, CiImageOn } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { EmbedButton, CodeBlockButton, DividerButton } from "./Buttons";
import uploadImage from "@/app/utils/firebaseImageUpload";
import { useSession } from 'next-auth/react';
const CustomButton = ({ editor }) => {
  const [position, setPosition] = useState({ top: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  // post content states
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [file, setFile] = useState(null);
  // user instance
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  
  const editorRef = useRef(editor); // Store the editor in a ref
  useEffect(() => {
    editorRef.current = editor; // Update the ref whenever editor changes
  }, [editor]);


  const GetImageUrl = async (image, userEmail) => {

    console.log('this is my user email: ', userEmail)
    try {
      if (!image) return console.log('no image accepted!'); // Handle the case where no image is provided
      if(!userEmail) return console.log('No user logged in!'); // Handle the case where no user is
      const imageUrl = await uploadImage(image, userEmail);
      if (imageUrl && userEmail) {
        setImage(imageUrl)
        console.log('imageUrl for file:', imageUrl);
        // You might want to update your state or do something else with the imageUrl here
      }
      editorRef.current
      .chain()
      .focus() // Ensure the editor is focused
      .setImage({ src: imageUrl, alt: imageUrl.name }) // Insert the image at the current position
      .createParagraphNear('paragraph', {content: 'כתוב תיאור לתמונה ..'}) 
      .run();

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  useEffect(() => {
    if (!editor) return;

    const updateVisibilityAndPosition = () => {
      const { doc, selection } = editor.state;
      const { from } = selection;
      const { top } = editor.view.coordsAtPos(from);

      // Ensure the editor container exists
      const editorContainer = document.querySelector(".editor-container");
      if (editorContainer) {
        const editorRect = editorContainer.getBoundingClientRect();
        setPosition({
          top: top - editorRect.top + editorContainer.scrollTop, // Adjust position within the editor
        });
      }

      // Get current line's start and end positions
      const lineStartPos = doc.resolve(from).start();
      const lineEndPos = doc.resolve(from).end();
      const lineText = doc.textBetween(lineStartPos, lineEndPos);

      // Check if the current line is empty
      setIsVisible(lineText.trim() === "");
    };

    // Listen to relevant editor events
    editor.on("update", updateVisibilityAndPosition);
    editor.on("selectionUpdate", updateVisibilityAndPosition);
    editor.on("transaction", updateVisibilityAndPosition);

    // Initial visibility and position check
    updateVisibilityAndPosition();

    // Cleanup event listeners on component unmount
    return () => {
      editor.off("update", updateVisibilityAndPosition);
      editor.off("selectionUpdate", updateVisibilityAndPosition);
      editor.off("transaction", updateVisibilityAndPosition);
    };
  }, [editor]);

  const buttonClicked = () => {
    setOpen(!open);
  };
  const handleFileChange = async (e, id) => {
    const Recivedfile = e.target.files[0];
    console.log(Recivedfile, id);
    if (id === "upload-image") {
      const receivedFile = e.target.files[0];
      setImage(receivedFile); 
      await GetImageUrl(receivedFile, userEmail) 
      .catch(error => {
        console.error('Error uploading image:', error);
        // Handle the error, e.g., show an error message to the user
      });
    }
    if (id === "upload-video") setVideo(Recivedfile) && console.log('image state: ', video);
    if (id === "upload-file") setFile(Recivedfile) && console.log('image state: ', file);
  };

  return (
    isVisible && (
      <div className="relative flex">
        <button
          className="plus-button"
          style={{ top: position.top }} // Adjust as needed
          onClick={() => buttonClicked()}
        >
          <CiCirclePlus className="h-[48px] w-[48px]" />
        </button>
        {open && (
          <div
            className="absolute z-20 flex bg-gray-50 h-12 right-0 gap-2"
            style={{ top: position.top }}
          >
            <button className="cursor-pointer">
              <label htmlFor="upload-image" className="cursor-pointer">
                <CiImageOn className="h-8 w-8 " />
                <input
                  type="file"
                  id="upload-image"
                  name="image"
                  onChange={(e) => {
                    const id = "upload-image";
                    handleFileChange(e, id);
                  }}
                  className="hidden"
                />
              </label>
            </button>
            <button>
              <label htmlFor="upload-file">
                <MdOutlineFileUpload className="h-8 w-8 " />
                <input
                  type="file"
                  id="upload-file"
                  name="file"
                  onChange={(e) => {
                    const id = "upload-file";
                    handleFileChange(e, id);
                  }}
                  className="hidden"
                />
              </label>
            </button>
            <button>
              <label htmlFor="">
                <MdOutlineOndemandVideo className="h-8 w-8 " />
                <input
                  type="file"
                  id="upload-video"
                  name="video"
                  onChange={(e) => {
                    const id = "upload-video";
                    handleFileChange(e, id);
                  }}
                  className="hidden"
                />
              </label>
            </button>
            <EmbedButton editor={editor} />
            <CodeBlockButton editor={editor} />
            <DividerButton editor={editor} />
          </div>
        )}
      </div>
    )
  );
};

export default CustomButton;
