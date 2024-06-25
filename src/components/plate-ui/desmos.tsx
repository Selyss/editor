import { createPluginFactory } from "@udecode/plate-common";

const ELEMENT_DESMOS = 'desmos';

/** Enables support for desmos within a Slate document */
const createDesmosPlugin = createPluginFactory({
    isElement: true,
    isVoid: true,
    key: ELEMENT_DESMOS,
})