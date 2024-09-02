'use client';
import React, { useCallback, useMemo } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { Color } from '@tiptap/extension-color'
import Heading from '@tiptap/extension-heading';
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import TitleNode from "./TitleNode";
import DocumentWithTitle from "./DocumentWithTitle";
import MenuBar from "./MenuBar";
import TextStyle from '@tiptap/extension-text-style';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';

// import Text from "@tiptap/extension-text";
// import Paragraph from "@tiptap/extension-paragraph";

// USER SESSION IMPORT
import { useSession } from 'next-auth/react';
import ListItem from '@tiptap/extension-list-item';

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, '');    // Remove leading and trailing hyphens
};


const Tiptap = ({ initialContent, onSave }) => {
  const { data: session } = useSession();
  const extensions = useMemo(() => {
    const exts = [
      StarterKit.configure({
        // bulletList: false,
        // listItem: false, 
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'custom-bullet-list',
          },
        },
        ListItem: {
          HTMLAttributes: {
            class: 'custom-list-item',
          },
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'custom-ordered-list',
          },
        },
        Heading: {
          levels: [1, 2, 3],
        },
        blockquote: {
          inline: true,
          HTMLAttributes: {
            class: 'custom-blockquote',
          },
        },
        Color: false,
      }),
      Underline,
      TextStyle,
      // ListItem.configure({
      //   HTMLAttributes: {
      //     class: 'custom-list-item',
      //   },
      // }),
      Link,
      Youtube.configure({
        width: 640,
        height: 480,
        autoplay: false,
        allowFullscreen: true,
        ccLanguage: 'he',
        loop: false,
        enableIFrameApi: true,
        inline: true,
        controls: false,
        nocookie: true,
        HTMLAttributes: {
          class: 'youtube-video',
        },
      }),

      Color.configure({ types: [TextStyle.name] }),
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: 'max-h-500',
        },
      }),
      Placeholder.configure({
        placeholder: 'Write something...',
      }),
      // TitleNode,
      // DocumentWithTitle,
    ];
    console.log('Extensions:', exts);
    return exts;
  }, []); 
  const editor = useEditor({
    extensions,
    content: initialContent || '<h1></h1><p></p>',
    editorProps: {
      attributes: {
        dir: "rtl",
        class: "focus:outline-none text-right pointer-events-auto",
      },
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      console.log('Editor updated');
      console.log('Current content:', editor.getHTML());
      console.log('Is bullet list active:', editor.isActive('bulletList'));
    },
  });


  const handleSave = useCallback( async() => {
    console.log('session instance: ', session);
    if (editor && session?.user) {
      const title = editor.getHTML().match(/<h1>(.*?)<\/h1>/)?.[1] || '';
      const content = editor.getJSON();
      const desc = editor.getHTML();
      // onSave(content);
      const response = await fetch('/api/create-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
          desc,
          slug: generateSlug(title), // Implement this function
          views: 0, 
          userEmail: session?.user?.email,
          authorName: session?.user?.name,
        }),
      });
      if (response.ok) {
        console.log('Post saved successfully');
        onSave && onSave();
      } else {
        console.error('Failed to save post');
      }
    }
  }, [editor, session, onSave]);


  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col'>
        <div className='min-w-[1000px] w-full h-32 flex overflow-y-hidden mb-4 pb-4'>
          <MenuBar editor={editor} />
        </div>
        {editor ? (
          <>
          <div className='w-full py-4'>
            <EditorContent editor={editor} className="w-full h-full tiptap-editor" />
          </div>
          <div>
            <button 
            onClick={handleSave} 
            className="bg-gradient-to-l from-[#f89a2a] to-[#fb5a57] text-white py-2 px-4 rounded">
              שלח פוסט
            </button>
          </div>
          </>
        ) : (
          <div>Loading editor...</div>
        )}
      </div>
    </div>
  );
};

export default Tiptap;