import React from "react";
import { ImEmbed } from "react-icons/im";
import { VscJson } from "react-icons/vsc";
import { RxSection } from "react-icons/rx";

export const EmbedButton = ({ editor }) => {
  const handleClick = () => {
    const url = prompt("Enter the URL to embed:");
    if (url) {
      editor.chain().focus().setEmbed({ src: url }).run();
    }
  };

  return (
    <button onClick={handleClick}>
      <ImEmbed className="h-8 w-8 " />
    </button>
  );
};

export const CodeBlockButton = ({ editor }) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      className={editor.isActive("codeBlock") ? "is-active" : ""}
    >
      <VscJson />
    </button>
  );
};

export const DividerButton = ({ editor }) => {
  const handleClick = () => {
    if (!editor) {
      console.log("Couldnt use divider button no editor found");
    }
    editor.chain().focus().setDivider().run();
  };

  return (
    <button onClick={handleClick}>
      <RxSection className="h-8 w-8 " />
    </button>
  );
};
