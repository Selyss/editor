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
