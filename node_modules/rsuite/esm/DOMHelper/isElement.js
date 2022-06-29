var isElement = function isElement(node) {
  return (node === null || node === void 0 ? void 0 : node.nodeType) === 1 && typeof (node === null || node === void 0 ? void 0 : node.nodeName) === 'string';
};

export default isElement;