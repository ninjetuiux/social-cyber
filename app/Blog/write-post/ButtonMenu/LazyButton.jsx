import React, { Suspense } from 'react';

const LazyButton = ({ name, editor }) => {
  const Button = React.lazy(() => 
    import(`./${name}`).catch(() => ({
      default: () => <button>{name}</button>
    }))
  );
  if (!editor) return null;
  return (
    <Suspense fallback={<div className="w-8 h-8 bg-gray-200 rounded-md"></div>}>
      <Button editor={editor} />
    </Suspense>
  );
};

LazyButton.displayName = 'LazyButton';

export default LazyButton;
