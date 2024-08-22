"use client";

import {
  BubbleMenu,
  EditorContent,
  useEditor,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import TextAlign from "@tiptap/extension-text-align";
import Embed from "./Embed";
import Divider from "./Divider";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Document from "@tiptap/extension-document";
import DocumentWithTitle from "./DocumentWithTitle";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import CustomImage from './CustomImageNode';
import Text from "@tiptap/extension-text";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
// load all languages with "all" or common languages with "common"
import { all, createLowlight } from "lowlight";
// eslint-disable-next-line
import CodeBlockWithDropdown from "./CodeBlockWithDropdown";
import TitleNode from "./TitleNode";

import Placeholder from '@tiptap/extension-placeholder';
// create a lowlight instance
const lowlight = createLowlight(all);

// you can also register individual languages
lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);




const MyEditorComponent = () => {


  const editor = useEditor({
    autofocus: true,
    exitOnArrowDown: true,
    extensions: [
      Heading,
      Embed,
      Divider,
      DocumentWithTitle,
      TitleNode,
      Document,
      Paragraph,
      Text,
      CustomImage,
      Placeholder.configure({
        showOnlyCurrent: false,
        placeholder: ({ node }) => {
          console.log("placeholder node type :", node.type.name)
          if (node.type.name === "title") {
            return "יש לך כותרת חדשה ומעניינת ?";
          }
      
          return "ספר לנו את הסיפור שלך ..";
        },
      }),
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlockWithDropdown);
        },
      }).configure({
        lowlight,
        // Ensure this is set
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "right",
    }),
    ],
    content: '<h1></h1><p></p>',
    editorProps: {
      attributes: {
        dir: "rtl",
        class: "focus:outline-none text-right pointer-events-auto",
      },
    },
		onCreate({ editor }) {

		},
    onUpdate({ editor }) {
      (editor.getHTML());
    },
    immediatelyRender: false,
  });


  useEffect(() => {
    if (editor) {
      editor.on("focus", () => {
        editor.commands.focus();
      });
    }
  }, [editor]);

  const [showButton, setShowButton] = useState(false);

  const updateButtonVisibility = (editor) => {
    const { from, to } = editor.state.selection;
    const lineStartPos = editor.state.doc.resolve(from).start();
    const lineEndPos = editor.state.doc.resolve(from).end();
    const lineText = editor.state.doc.textBetween(lineStartPos, lineEndPos);

    // Show button if the cursor is at the start of a new line
    setShowButton(lineText.trim() === "" || from === lineStartPos);
  };

  useEffect(() => {
    if (editor) {
      editor.on("transaction", () => updateButtonVisibility(editor));
    }
  }, [editor]);

  useEffect(() => {
    if (editor) {
      const handleClick = () => {
        const { state, dispatch } = editor.view;
        const { $head } = state.selection;

        const isAtEndOfCodeBlock =
          $head.parent.type.name === "codeBlock" && $head.pos === $head.end();

        if (isAtEndOfCodeBlock) {
          // Insert a new paragraph after the code block and move cursor
          const { tr } = state;
          const paragraphNode = state.schema.nodes.paragraph.create();
          tr.insert($head.after(), paragraphNode);
          dispatch(tr);
          editor.commands.focus();
        }
      };

      editor.view.dom.addEventListener("click", handleClick);

      // Cleanup the event listener on unmount
      return () => {
        editor.view.dom.removeEventListener("click", handleClick);
      };
    }
  }, [editor]);

  return (
    <>
      {editor && (
        <BubbleMenu
          className="bubble-menu bg-gray-700 rounded-xl text-white"
          editor={editor}
          tippyOptions={{ duration: 100 }}
        >
          <div className="bubble-menu flex gap-5 nth-child:hover:bg-gray-600">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={
                editor.isActive("bold") ? "is-active hover:bg-gray-600" : ""
              }
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={
                editor.isActive("italic")
                  ? "is-active hover:bg-gray-600"
                  : "hover:bg-gray-600"
              }
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={
                editor.isActive("strike") ? "is-active hover:bg-gray-600" : ""
              }
            >
              Strike
            </button>
          </div>
        </BubbleMenu>
      )}
      <div dir="rtl" className="relative editor-container">
        {showButton && <CustomButton editor={editor} />}
				<div className=" mx-auto">
          <EditorContent editor={editor} />
        </div>
      </div>
    </>
  );
};


export default MyEditorComponent;

// UI ELEMENTS TO DO
// Title component
// image component
// video component
// embed component
// file component
// bubble menu

// gather page information to a state
// validation
// save it to the db
// save a user draft and restore it

// store it as a production post 
// adding an edit/delete user related posts 
// posting as a blog post to the blog 