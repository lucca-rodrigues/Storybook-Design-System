"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/Developer/Edesoft/storybook-float-button/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("/Users/admin/Documents/Developer/Edesoft/storybook-float-button/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _fi = require("react-icons/fi");

require("./styles.css");

var _assets = require("../../assets");

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledMenu = (0, _styles.withStyles)({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(function (props) {
  return /*#__PURE__*/_react.default.createElement(_Menu.default, Object.assign({
    elevation: 0,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center"
    }
  }, props));
});

function FloatButton() {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      apps = _useState4[0],
      setApps = _useState4[1];

  var menuPathname = window.location.pathname;
  var userId = menuPathname.substring(menuPathname.lastIndexOf("/") + 1);
  var InitialApps = [{
    name: "Loja de Apps",
    icon: _assets.Eduzz,
    url: "https://store.eduzz.com"
  }, {
    name: "Blinket",
    icon: _assets.Blinket,
    url: "https://app.blinket.com.br"
  }, {
    name: "Checkout Sun",
    icon: _assets.CheckoutSun,
    url: "https://adminsun.eduzz.com/"
  }, {
    name: "Jobzz",
    icon: _assets.Jobzz,
    url: "https://app.jobzz.com.br"
  }, {
    name: "Orbita",
    icon: _assets.Orbita,
    url: "https://orbita.eduzz.com/"
  }, {
    name: "Nutror",
    icon: _assets.Nutror,
    url: "https://my.nutror.com/"
  }, {
    name: "Orbit Pages",
    icon: _assets.OrbitPages,
    url: "https://app.orbitpages.com/"
  }, {
    name: "Telescope",
    icon: _assets.Telescope,
    url: "https://telescope.eduzz.com/"
  }, {
    name: "Safe Vídeo",
    icon: _assets.SafeVideo,
    url: "https://app.safevideo.com/"
  }];
  (0, _react.useEffect)(function () {
    if (userId) {
      setApps(InitialApps);
    } // eslint-disable-next-line

  }, []);

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "float-button"
  }, apps.length && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "aria-controls": "customized-menu",
    "aria-haspopup": "true",
    variant: "contained",
    color: "primary",
    onClick: function onClick(e) {
      anchorEl === null ? handleClick(e) : handleClose();
    },
    className: "main-button"
  }, anchorEl ? /*#__PURE__*/_react.default.createElement(_fi.FiX, null) : /*#__PURE__*/_react.default.createElement("img", {
    src: _assets.LogoEduzz,
    alt: "eduzz"
  })), /*#__PURE__*/_react.default.createElement(StyledMenu, {
    id: "customized-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr",
      gap: "8px",
      padding: "8px"
    },
    id: "dropdown-menu-apps"
  }, apps.map(function (_ref) {
    var name = _ref.name,
        icon = _ref.icon,
        url = _ref.url;
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      key: url,
      className: "btn-apps",
      size: "small",
      onClick: function onClick() {
        window.open(url);
        handleClose();
      }
    }, icon && /*#__PURE__*/_react.default.createElement("img", {
      src: icon,
      alt: name
    }), /*#__PURE__*/_react.default.createElement("p", null, name));
  })))));
}

var _default = FloatButton;
exports.default = _default;