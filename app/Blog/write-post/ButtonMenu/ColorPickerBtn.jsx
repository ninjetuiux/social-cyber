import { CgColorPicker } from "react-icons/cg";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { debounce } from "lodash";
function ColorPickerBtn({ editor }) {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState('#1a5f7a'); // Default color
    const buttonRef = useRef(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    const colors = useMemo(() => [
        { name: 'Burgundy', hex: '#800e13' },
        { name: 'Dark Purple', hex: '#4a0e4e' },
        { name: 'Rust Orange', hex: '#c84c09' },
        { name: 'Slate Gray', hex: '#4a4e69' },
        { name: 'Deep Teal', hex: '#006d77' },
        { name: 'Dark Sienna', hex: '#2b061e' },
        // ... other colors ...
    ], []);
    

    const debouncedColorChange = useMemo(
        () => debounce((newColor) => {
            editor.chain().focus().setColor(newColor).run();
        }, 300),
        [editor]
    );

    const handleColorChange = useCallback((newColor) => {
        setColor(newColor);
        debouncedColorChange(newColor);
        setIsOpen(false);
    }, [debouncedColorChange]);

    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
            });
        }
    }, [isOpen]);

    return (
        <div className="relative">
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="h-8 w-8 p-2 rounded-md flex items-center justify-center cursor-pointer bg-[#ededed]"
                style={{ color: color }}
            >
                <CgColorPicker />
            </button>
            {isOpen && createPortal(
                <div 
                    className="fixed z-[9999] bg-white border rounded-md shadow-md"
                    style={{
                        top: `${dropdownPosition.top}px`,
                        left: `${dropdownPosition.left}px`,
                    }}
                >
                    {colors.map((colorOption) => (
                        <button
                            key={colorOption.hex}
                            onClick={() => handleColorChange(colorOption.hex)}
                            className={`w-full text-left p-2 hover:bg-gray-200 flex items-center ${color === colorOption.hex ? 'font-bold' : ''}`}
                        >
                            <span className="w-4 h-4 mr-2 rounded-full" style={{ backgroundColor: colorOption.hex }}></span>
                            {colorOption.name}
                        </button>
                    ))}
                </div>,
                document.body
            )}
        </div>
    )
}
ColorPickerBtn.displayName = 'ColorPickerBtn';
export default ColorPickerBtn;