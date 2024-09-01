'use client';

import { useMemo, useState } from 'react';
import { MdOutlineOndemandVideo } from "react-icons/md";
export default function YoutubeBtn({ editor }) {
    const addYoutubeVideo = () => {
        const url = prompt('Enter YouTube URL')
        
        if (url.length > 0) {
            editor.commands.setYoutubeVideo({
                src: url,
                width: 640,
                height: 480,
            })
            editor.commands.createParagraphNear();
            editor.commands.enter();
        }
    }
    if (!editor) {
        return null
      }
    
  return (
    <div className="control-group">
      <div className="button-group">
        <button id="add" onClick={addYoutubeVideo} className='h-8 w-8 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]'><MdOutlineOndemandVideo /></button>
      </div>
    </div>
  );
}