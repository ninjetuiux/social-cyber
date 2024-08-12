// app/blog/layout.js

import AuthProvider from "../providers/AuthProvider";

export default function BlogLayout({ children }) {
    return (
      <div>
        <AuthProvider>
          {children}
        </AuthProvider>
      </div>
    );
  }
  