import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// List of common languages
const COMMON_LANGUAGES = [
  "javascript",
  "python",
  "java",
  "c",
  "cpp",
  "html",
  "css",
  "php",
  "ruby",
  "swift",
  "go",
  "typescript",
  "sql",
  "bash",
  "r",
  "perl",
  "kotlin",
  "scala",
  "dart",
  "rust",
  "haskell",
  "objective-c",
  "lua",
  "clojure",
  "groovy",
  "shell",
  "yaml",
  "json",
  "xml",
  "markdown",
];
// Custom Dropdown Component
const CustomDropdown = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || "");

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div dir='ltr' className="relative">
      <button
        className="bg-gray-50 px-4 py-2 flex items-center justify-between max-w-[200px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || <p className="text-sm">Select a language</p>}
        <MdOutlineKeyboardArrowDown />
      </button>
      {isOpen && (
        <div className="absolute z-10 bg-white border border-gray-300 mt-1 w-[200px]">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option.value)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center text-gray-400 text-sm"
            >
              {option.icon && <span className="mr-2">{option.icon}</span>}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Assign the arrow function to a variable before exporting
const CodeBlockWithDropdown = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}) => {
  // Filter the languages to include only the common ones
  const languages = COMMON_LANGUAGES.filter((lang) =>
    extension.options.lowlight.listLanguages().includes(lang)
  ).map((lang) => ({
    value: lang,
    label: lang,
    icon: null, // Add icons if needed
  }));

  return (
    <NodeViewWrapper dir="ltr" className="code-block">
      <CustomDropdown
        options={[
          { value: "null", label: "auto" },
          { value: "disabled", label: "—", disabled: true },
          ...languages,
        ]}
        defaultValue={defaultLanguage}
        onChange={(value) => updateAttributes({ language: value })}
      />
      <pre>
        <NodeViewContent as="code" dir="ltr" />
      </pre>
    </NodeViewWrapper>
  );
};

export default CodeBlockWithDropdown;
