import ToastContainer from './ToastContainer';
var defaultContainerId = 'default';
var containers = new Map();
/**
 * Create a container by Id.
 * @param containerId
 * @param options
 */

function createContainer(containerId, props) {
  var _ToastContainer$getIn = ToastContainer.getInstance(props),
      container = _ToastContainer$getIn[0];

  containers.set(containerId || defaultContainerId, container);
  return container;
}
/**
 * Get the container by ID. Use default ID when ID is not available.
 * @param containerId
 */


function getContainer(containerId) {
  if (containers.size == 0) {
    return null;
  }

  return containers.get(containerId || defaultContainerId);
}

var toaster = function toaster(message) {
  return toaster.push(message);
};

toaster.push = function (message, options) {
  var _container$current;

  if (options === void 0) {
    options = {};
  }

  var container = getContainer(options.placement);

  if (!container) {
    var _options$placement;

    container = createContainer((_options$placement = options.placement) !== null && _options$placement !== void 0 ? _options$placement : '', options);
  }

  return (_container$current = container.current) === null || _container$current === void 0 ? void 0 : _container$current.push(message);
};

toaster.remove = function (key) {
  containers.forEach(function (c) {
    var _c$current;

    return (_c$current = c.current) === null || _c$current === void 0 ? void 0 : _c$current.remove(key);
  });
};

toaster.clear = function () {
  containers.forEach(function (c) {
    var _c$current2;

    return (_c$current2 = c.current) === null || _c$current2 === void 0 ? void 0 : _c$current2.clear();
  });
};

export default toaster;