import { createPluginFactory } from "@udecode/plate-common";

export const ELEMENT_DESMOS = 'desmos';

export const createDesmosPlugin = createPluginFactory({
    isElement: true,
    isVoid: true,
    key: ELEMENT_DESMOS,
});