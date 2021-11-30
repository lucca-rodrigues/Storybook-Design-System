"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/Developer/Edesoft/storybook-float-button/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatButton = FloatButton;

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
  var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      apps = _useState4[0],
      setApps = _useState4[1]; // const menuPathname = window.location.pathname;
  // const userId = menuPathname.substring(menuPathname.lastIndexOf("/") + 1);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zsb2F0QnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJwYXBlciIsImJvcmRlciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiRmxvYXRCdXR0b24iLCJ1c2VySWQiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiYXBwcyIsInNldEFwcHMiLCJJbml0aWFsQXBwcyIsIm5hbWUiLCJpY29uIiwiRWR1enoiLCJ1cmwiLCJCbGlua2V0IiwiQ2hlY2tvdXRTdW4iLCJKb2J6eiIsIk9yYml0YSIsIk51dHJvciIsIk9yYml0UGFnZXMiLCJUZWxlc2NvcGUiLCJTYWZlVmlkZW8iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwibGVuZ3RoIiwiZSIsIkxvZ29FZHV6eiIsIkJvb2xlYW4iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJnYXAiLCJwYWRkaW5nIiwibWFwIiwid2luZG93Iiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFZQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLHdCQUFXO0FBQzVCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsTUFBTSxFQUFFO0FBREg7QUFEcUIsQ0FBWCxFQUloQixVQUFDQyxLQUFEO0FBQUEsc0JBQ0QsNkJBQUMsYUFBRDtBQUNFLElBQUEsU0FBUyxFQUFFLENBRGI7QUFFRSxJQUFBLGtCQUFrQixFQUFFLElBRnRCO0FBR0UsSUFBQSxZQUFZLEVBQUU7QUFDWkMsTUFBQUEsUUFBUSxFQUFFLEtBREU7QUFFWkMsTUFBQUEsVUFBVSxFQUFFO0FBRkEsS0FIaEI7QUFPRSxJQUFBLGVBQWUsRUFBRTtBQUNmRCxNQUFBQSxRQUFRLEVBQUUsUUFESztBQUVm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c0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBNZW51IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCI7XG5pbXBvcnQgeyBGaVggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQge1xuICBCbGlua2V0LFxuICBDaGVja291dFN1bixcbiAgRWR1enosXG4gIEpvYnp6LFxuICBOdXRyb3IsXG4gIE9yYml0YSxcbiAgT3JiaXRQYWdlcyxcbiAgU2FmZVZpZGVvLFxuICBUZWxlc2NvcGUsXG4gIExvZ29FZHV6eixcbn0gZnJvbSBcIi4uLy4uL2Fzc2V0c1wiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5jb25zdCBTdHlsZWRNZW51ID0gd2l0aFN0eWxlcyh7XG4gIHBhcGVyOiB7XG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDNkNGQ1XCIsXG4gIH0sXG59KSgocHJvcHMpID0+IChcbiAgPE1lbnVcbiAgICBlbGV2YXRpb249ezB9XG4gICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgdmVydGljYWw6IFwidG9wXCIsXG4gICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcbiAgICB9fVxuICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXG4gICAgICBob3Jpem9udGFsOiBcImNlbnRlclwiLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBGbG9hdEJ1dHRvbih1c2VySWQgPSAxKSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthcHBzLCBzZXRBcHBzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgbWVudVBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAvLyBjb25zdCB1c2VySWQgPSBtZW51UGF0aG5hbWUuc3Vic3RyaW5nKG1lbnVQYXRobmFtZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcblxuICBjb25zdCBJbml0aWFsQXBwcyA9IFtcbiAgICB7IG5hbWU6IFwiTG9qYSBkZSBBcHBzXCIsIGljb246IEVkdXp6LCB1cmw6IFwiaHR0cHM6Ly9zdG9yZS5lZHV6ei5jb21cIiB9LFxuICAgIHsgbmFtZTogXCJCbGlua2V0XCIsIGljb246IEJsaW5rZXQsIHVybDogXCJodHRwczovL2FwcC5ibGlua2V0LmNvbS5iclwiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDaGVja291dCBTdW5cIixcbiAgICAgIGljb246IENoZWNrb3V0U3VuLFxuICAgICAgdXJsOiBcImh0dHBzOi8vYWRtaW5zdW4uZWR1enouY29tL1wiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIkpvYnp6XCIsIGljb246IEpvYnp6LCB1cmw6IFwiaHR0cHM6Ly9hcHAuam9ienouY29tLmJyXCIgfSxcbiAgICB7IG5hbWU6IFwiT3JiaXRhXCIsIGljb246IE9yYml0YSwgdXJsOiBcImh0dHBzOi8vb3JiaXRhLmVkdXp6LmNvbS9cIiB9LFxuICAgIHsgbmFtZTogXCJOdXRyb3JcIiwgaWNvbjogTnV0cm9yLCB1cmw6IFwiaHR0cHM6Ly9teS5udXRyb3IuY29tL1wiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJPcmJpdCBQYWdlc1wiLFxuICAgICAgaWNvbjogT3JiaXRQYWdlcyxcbiAgICAgIHVybDogXCJodHRwczovL2FwcC5vcmJpdHBhZ2VzLmNvbS9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVGVsZXNjb3BlXCIsXG4gICAgICBpY29uOiBUZWxlc2NvcGUsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly90ZWxlc2NvcGUuZWR1enouY29tL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTYWZlIFbDrWRlb1wiLFxuICAgICAgaWNvbjogU2FmZVZpZGVvLFxuICAgICAgdXJsOiBcImh0dHBzOi8vYXBwLnNhZmV2aWRlby5jb20vXCIsXG4gICAgfSxcbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIHNldEFwcHMoSW5pdGlhbEFwcHMpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiZmxvYXQtYnV0dG9uXCI+XG4gICAgICB7YXBwcy5sZW5ndGggJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGFuY2hvckVsID09PSBudWxsID8gaGFuZGxlQ2xpY2soZSkgOiBoYW5kbGVDbG9zZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YW5jaG9yRWwgPyA8RmlYIC8+IDogPGltZyBzcmM9e0xvZ29FZHV6en0gYWx0PVwiZWR1enpcIiAvPn1cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPFN0eWxlZE1lbnVcbiAgICAgICAgICAgIGlkPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyXCIsXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogXCIxZnJcIixcbiAgICAgICAgICAgICAgICBnYXA6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaWQ9XCJkcm9wZG93bi1tZW51LWFwcHNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YXBwcy5tYXAoKHsgbmFtZSwgaWNvbiwgdXJsIH0pID0+IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e3VybH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1hcHBzXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpY29uICYmIDxpbWcgc3JjPXtpY29ufSBhbHQ9e25hbWV9IC8+fVxuXG4gICAgICAgICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TdHlsZWRNZW51PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=