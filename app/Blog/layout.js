// app/blog/layout.js

import { ImageProvider } from "../context/ImageContext";
import AuthProvider from "../providers/AuthProvider";
// import ImageProvider from '../context/ImageContext';
export default function BlogLayout({ children }) {
    return (
      <div>
        <AuthProvider>
          <ImageProvider>
            {children}
          </ImageProvider>
        </AuthProvider>
      </div>
    );
  }
  