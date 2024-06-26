// import React from 'react';
// import { withRef } from '@udecode/cn';
// import { PlateElement } from '@udecode/plate-common';
// import { useDesmosElement } from '';

// export const DesmosElement = withRef<typeof PlateElement>(
//   ({ nodeProps, ...props }, ref) => {
//     const { children, element } = props;

//     const { Desmos, desmosProps } = useDesmosElement({
//       element,
//     });

//     return (
//       <PlateElement ref={ref} {...props}>
//         <div contentEditable={false}>
//           <div className="h-[600px]">
//             {Desmos && (
//               <Desmos {...nodeProps} {...(desmosProps as any)} />
//             )}
//           </div>
//         </div>
//         {children}
//       </PlateElement>
//     );
//   }
// )

export const ELEMENT_DESMOS = 'desmos';


import { createPluginFactory } from '@udecode/plate-common';
import React, { useEffect, useRef } from 'react';
import { useSelected, useSlateStatic } from 'slate-react';
import { ReactEditor } from 'slate-react';

const DesmosElement = ({ attributes, children, element }) => {
  const selected = useSelected();
  const editor = useSlateStatic();
  const desmosRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
    script.async = true;
    script.onload = () => {
      if (desmosRef.current && window.Desmos) {
        const calculator = window.Desmos.GraphingCalculator(desmosRef.current);
        // Additional setup for the calculator can go here
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Ensure the element is registered as a void node in Slate's model
    if (!editor.isVoid(element)) {
      editor.registerVoid(element);
    }
  }, [editor, element]);

  return (
    <div {...attributes} contentEditable={false} style={{ position: 'relative' }}>
      <div ref={desmosRef} style={{ width: '600px', height: '400px' }} />
      {selected && (
        <div
          contentEditable={false}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}
          onMouseDown={(e) => {
            // Prevent Slate from losing focus when interacting with the Desmos calculator
            e.preventDefault();
            ReactEditor.focus(editor);
          }}
        ></div>
      )}
      {children}
    </div>
  );
};

export const createDesmosPlugin = createPluginFactory({
  isElement: true,
  isVoid: true,
  key: ELEMENT_DESMOS,
  component: DesmosElement,
});
