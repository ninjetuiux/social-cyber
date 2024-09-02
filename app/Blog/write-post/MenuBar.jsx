'use client';


import React, { lazy, Suspense, useMemo, useState } from 'react';
import ErrorBoundary from "./ButtonMenu/ErrorBoundary";
import BoldBtn from './ButtonMenu/BoldBtn';
import ItalicBtn from './ButtonMenu/ItalicBtn';
import StrikethroughBtn from './ButtonMenu/StrikethroughBtn';
import CodeBlockBtn from './ButtonMenu/CodeBlockBtn';
import LinkBtn from './ButtonMenu/LinkBtn';
import HorizontalRuleBtn from './ButtonMenu/HorizontalRuleBtn';
import BulletListBtn from './ButtonMenu/BulletListBtn';
import OrderedListBtn from './ButtonMenu/OrderedListBtn';
import HardBreakBtn from './ButtonMenu/HardBreakBtn';
import Heading1Btn from './ButtonMenu/Headings/Heading1Btn';
import Heading2Btn from './ButtonMenu/Headings/Heading2Btn';
import Heading3Btn from './ButtonMenu/Headings/Heading3Btn';
import UnderlineBtn from './ButtonMenu/UnderlineBtn';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// import ColorPickerBtn from './ButtonMenu/ColorPickerBtn';
import LazyButton from './ButtonMenu/LazyButton';
import UndoBtn from './ButtonMenu/UndoBtn';
import RedoBtn from './ButtonMenu/RedoBtn';
import YoutubeBtn from './ButtonMenu/YoutubeBtn';
import BlockquoteBtn from './ButtonMenu/BlockquoteBtn';
const buttonConfig = [
  // { name: 'Heading1', component: lazy(() => import('./ButtonMenu/Headings/Heading1Btn'), { ssr: false }) },
  // { name: 'Heading2', component: lazy(() => import('./ButtonMenu/Headings/Heading2Btn'), { ssr: false }) },
  // { name: 'Heading3', component: lazy(() => import('./ButtonMenu/Headings/Heading3Btn'), { ssr: false }) },
  // { name: 'Heading4', component: lazy(() => import('./ButtonMenu/Headings/Heading4Btn'), { ssr: false }) },
  // { name: 'Heading5', component: lazy(() => import('./ButtonMenu/Headings/Heading5Btn'), { ssr: false }) },
  { name: 'ImageBtn', component: lazy(() => import('./ButtonMenu/ImageBtn'), { ssr: false }) },
  { name: 'ColorPickerBtn', component: lazy(() => import('./ButtonMenu/ColorPickerBtn'), { ssr: false }) },
];

const buttonComponents = [
  BoldBtn, ItalicBtn, UnderlineBtn, StrikethroughBtn, LinkBtn, BlockquoteBtn,
  HorizontalRuleBtn, BulletListBtn, OrderedListBtn, CodeBlockBtn,
  Heading1Btn, Heading2Btn, Heading3Btn, HardBreakBtn, 
  UndoBtn, RedoBtn, YoutubeBtn,
];

export default function MenuBar({ editor }) {
  // expanded is used to toggle the visibility of the menu bar
    // to prevent the menu bar and the entire editor 
    // to re-render lazy-loaded components on every change
    const [expanded, setExpanded] = useState(false);

// memoizedButtons is used to prevent the editor 
// from passing down editor instance on every render/change
  const memoizedButtons = useMemo(() => 
    buttonComponents.map((Button, index) => (
      <Button key={index} editor={editor} />
    )),
    [editor]
  );

    if (!editor) return null;

    return (
        <div className="flex items-center justify-center w-full overflow-x-auto overflow-y-hidden sm:p-5 sm:m-5 shadow-md">
            <div className='flex items-center gap-2 w-full justify-center overflow-y-hidden'>
              {/* <ImageBtn editor={editor} /> */}
              {memoizedButtons}
                <div className='flex items-center justify-center gap-2 p-0 m-0'>
                  <div className='flex items-center justify-center gap-2'>
                    <button className='h-8 w-8 bg-gray-200 rounded-md p-0 m-0' 
                    onClick={() => setExpanded(!expanded)}>
                      {expanded ? <MdNavigateNext className='flex items-center justify-center h-8 w-8' /> : <GrFormPrevious className='flex items-center justify-center h-8 w-8' />}
                    </button>
                       { expanded && <div className='flex gap-2'>
                          {/* lazy Loading Elements */}
                          {buttonConfig.map((button, index) => (
                            <LazyButton key={index} name={button.name} editor={editor} />
                          ))}
                        </div>  }
                    </div>
                  </div>
                </div>
        </div>
    );
}
