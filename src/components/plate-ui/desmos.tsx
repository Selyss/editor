import { Desmos } from 'desmos'
import { useEffect, useRef } from 'react';
import { createPluginFactory } from '@udecode/plate-common';

export const ELEMENT_DESMOS = 'desmos';

// Declare Desmos on the window object to avoid TypeScript errors
declare global {
  interface Window {
    Desmos: any;
  }
}

const DesmosElement = () => {
  const desmosRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6';
    script.async = true;
    script.onload = () => {
      if (desmosRef.current && window.Desmos) {
        const calculator = window.Desmos.GraphingCalculator(desmosRef.current);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div ref={desmosRef} style={{ width: '600px', height: '400px' }} />;
};

export const createDesmosPlugin = createPluginFactory({
  isElement: true,
  isVoid: true,
  key: ELEMENT_DESMOS,
  component: DesmosElement,
});
