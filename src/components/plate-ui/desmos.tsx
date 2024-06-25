import { Desmos } from 'desmos'
import { useEffect, useRef } from 'react';
import { createPluginFactory } from '@udecode/plate-common';

export const ELEMENT_DESMOS = 'desmos';

const DesmosElement = () => {
  const desmosRef = useRef(null);

  useEffect(() => {
    if (desmosRef.current) {
        const calculator = Desmos.GraphingCalculator(desmosRef.current);
        calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });
    }
  }, []);
  return <div ref={desmosRef} style={{ width: '600px', height: '400px' }} />;
};

export const createDesmosPlugin = createPluginFactory({
  isElement: true,
  isVoid: true,
  key: ELEMENT_DESMOS,
  component: DesmosElement,
});
