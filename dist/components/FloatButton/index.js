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
    name: "App1",
    icon: _assets.Eduzz,
    url: "https://store.eduzz.com"
  }, {
    name: "App2",
    icon: _assets.Blinket,
    url: "https://app.blinket.com.br"
  }, {
    name: "App3",
    icon: _assets.CheckoutSun,
    url: "https://adminsun.eduzz.com/"
  }, {
    name: "App4",
    icon: _assets.Jobzz,
    url: "https://app.jobzz.com.br"
  }, {
    name: "App5",
    icon: _assets.Orbita,
    url: "https://orbita.eduzz.com/"
  }, {
    name: "App6",
    icon: _assets.Nutror,
    url: "https://my.nutror.com/"
  }, {
    name: "App7",
    icon: _assets.OrbitPages,
    url: "https://app.orbitpages.com/"
  }, {
    name: "App8",
    icon: _assets.Telescope,
    url: "https://telescope.eduzz.com/"
  }, {
    name: "App9",
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
    }, /*#__PURE__*/_react.default.createElement("p", null, name));
  })))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zsb2F0QnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJwYXBlciIsImJvcmRlciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiRmxvYXRCdXR0b24iLCJ1c2VySWQiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiYXBwcyIsInNldEFwcHMiLCJJbml0aWFsQXBwcyIsIm5hbWUiLCJpY29uIiwiRWR1enoiLCJ1cmwiLCJCbGlua2V0IiwiQ2hlY2tvdXRTdW4iLCJKb2J6eiIsIk9yYml0YSIsIk51dHJvciIsIk9yYml0UGFnZXMiLCJUZWxlc2NvcGUiLCJTYWZlVmlkZW8iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwibGVuZ3RoIiwiZSIsIkxvZ29FZHV6eiIsIkJvb2xlYW4iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJnYXAiLCJwYWRkaW5nIiwibWFwIiwid2luZG93Iiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFZQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLHdCQUFXO0FBQzVCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsTUFBTSxFQUFFO0FBREg7QUFEcUIsQ0FBWCxFQUloQixVQUFDQyxLQUFEO0FBQUEsc0JBQ0QsNkJBQUMsYUFBRDtBQUNFLElBQUEsU0FBUyxFQUFFLENBRGI7QUFFRSxJQUFBLGtCQUFrQixFQUFFLElBRnRCO0FBR0UsSUFBQSxZQUFZLEVBQUU7QUFDWkMsTUFBQUEsUUFBUSxFQUFFLEtBREU7QUFFWkMsTUFBQUEsVUFBVSxFQUFFO0FBRkEsS0FIaEI7QUFPRSxJQUFBLGVBQWUsRUFBRTtBQUNmRCxNQUFBQSxRQUFRLEVBQUUsUUFESztBQUVm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LDZCQUFDLE9BQUQsT0FBSCxnQkFBYTtBQUFLLElBQUEsR0FBRyxFQUFFdUIsaUJBQVY7QUFBcUIsSUFBQSxHQUFHLEVBQUM7QUFBekIsSUFWeEIsQ0FERixlQWFFLDZCQUFDLFVBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxpQkFETDtBQUVFLElBQUEsUUFBUSxFQUFFdkIsUUFGWjtBQUdFLElBQUEsV0FBVyxNQUhiO0FBSUUsSUFBQSxJQUFJLEVBQUV3QixPQUFPLENBQUN4QixRQUFELENBSmY7QUFLRSxJQUFBLE9BQU8sRUFBRW9CO0FBTFgsa0JBT0U7QUFDRSxJQUFBLEtBQUssRUFBRTtBQUNMSyxNQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMQyxNQUFBQSxtQkFBbUIsRUFBRSxhQUZoQjtBQUdMQyxNQUFBQSxnQkFBZ0IsRUFBRSxLQUhiO0FBSUxDLE1BQUFBLEdBQUcsRUFBRSxLQUpBO0FBS0xDLE1BQUFBLE9BQU8sRUFBRTtBQUxKLEtBRFQ7QUFRRSxJQUFBLEVBQUUsRUFBQztBQVJMLEtBVUczQixJQUFJLENBQUM0QixHQUFMLENBQVM7QUFBQSxRQUFHekIsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsUUFBZUUsR0FBZixRQUFlQSxHQUFmO0FBQUEsd0JBQ1IsNkJBQUMsZUFBRDtBQUNFLE1BQUEsR0FBRyxFQUFFQSxHQURQO0FBRUUsTUFBQSxTQUFTLEVBQUMsVUFGWjtBQUdFLE1BQUEsSUFBSSxFQUFDLE9BSFA7QUFJRSxNQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNidUIsUUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVl4QixHQUFaO0FBQ0FZLFFBQUFBLFdBQVc7QUFDWjtBQVBILG9CQVdFLHdDQUFJZixJQUFKLENBWEYsQ0FEUTtBQUFBLEdBQVQsQ0FWSCxDQVBGLENBYkYsQ0FGSixDQURGO0FBc0REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBNZW51IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCI7XG5pbXBvcnQgeyBGaVggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQge1xuICBCbGlua2V0LFxuICBDaGVja291dFN1bixcbiAgRWR1enosXG4gIEpvYnp6LFxuICBOdXRyb3IsXG4gIE9yYml0YSxcbiAgT3JiaXRQYWdlcyxcbiAgU2FmZVZpZGVvLFxuICBUZWxlc2NvcGUsXG4gIExvZ29FZHV6eixcbn0gZnJvbSBcIi4uLy4uL2Fzc2V0c1wiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5jb25zdCBTdHlsZWRNZW51ID0gd2l0aFN0eWxlcyh7XG4gIHBhcGVyOiB7XG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZDNkNGQ1XCIsXG4gIH0sXG59KSgocHJvcHMpID0+IChcbiAgPE1lbnVcbiAgICBlbGV2YXRpb249ezB9XG4gICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgdmVydGljYWw6IFwidG9wXCIsXG4gICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcbiAgICB9fVxuICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXG4gICAgICBob3Jpem9udGFsOiBcImNlbnRlclwiLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBGbG9hdEJ1dHRvbih1c2VySWQgPSAxKSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthcHBzLCBzZXRBcHBzXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgbWVudVBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAvLyBjb25zdCB1c2VySWQgPSBtZW51UGF0aG5hbWUuc3Vic3RyaW5nKG1lbnVQYXRobmFtZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcblxuICBjb25zdCBJbml0aWFsQXBwcyA9IFtcbiAgICB7IG5hbWU6IFwiQXBwMVwiLCBpY29uOiBFZHV6eiwgdXJsOiBcImh0dHBzOi8vc3RvcmUuZWR1enouY29tXCIgfSxcbiAgICB7IG5hbWU6IFwiQXBwMlwiLCBpY29uOiBCbGlua2V0LCB1cmw6IFwiaHR0cHM6Ly9hcHAuYmxpbmtldC5jb20uYnJcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwM1wiLFxuICAgICAgaWNvbjogQ2hlY2tvdXRTdW4sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hZG1pbnN1bi5lZHV6ei5jb20vXCIsXG4gICAgfSxcbiAgICB7IG5hbWU6IFwiQXBwNFwiLCBpY29uOiBKb2J6eiwgdXJsOiBcImh0dHBzOi8vYXBwLmpvYnp6LmNvbS5iclwiIH0sXG4gICAgeyBuYW1lOiBcIkFwcDVcIiwgaWNvbjogT3JiaXRhLCB1cmw6IFwiaHR0cHM6Ly9vcmJpdGEuZWR1enouY29tL1wiIH0sXG4gICAgeyBuYW1lOiBcIkFwcDZcIiwgaWNvbjogTnV0cm9yLCB1cmw6IFwiaHR0cHM6Ly9teS5udXRyb3IuY29tL1wiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBcHA3XCIsXG4gICAgICBpY29uOiBPcmJpdFBhZ2VzLFxuICAgICAgdXJsOiBcImh0dHBzOi8vYXBwLm9yYml0cGFnZXMuY29tL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBcHA4XCIsXG4gICAgICBpY29uOiBUZWxlc2NvcGUsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly90ZWxlc2NvcGUuZWR1enouY29tL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBcHA5XCIsXG4gICAgICBpY29uOiBTYWZlVmlkZW8sXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hcHAuc2FmZXZpZGVvLmNvbS9cIixcbiAgICB9LFxuICBdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgc2V0QXBwcyhJbml0aWFsQXBwcyk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJmbG9hdC1idXR0b25cIj5cbiAgICAgIHthcHBzLmxlbmd0aCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgYW5jaG9yRWwgPT09IG51bGwgPyBoYW5kbGVDbGljayhlKSA6IGhhbmRsZUNsb3NlKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbi1idXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbmNob3JFbCA/IDxGaVggLz4gOiA8aW1nIHNyYz17TG9nb0VkdXp6fSBhbHQ9XCJlZHV6elwiIC8+fVxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8U3R5bGVkTWVudVxuICAgICAgICAgICAgaWQ9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnJcIixcbiAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiBcIjFmclwiLFxuICAgICAgICAgICAgICAgIGdhcDogXCI4cHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpZD1cImRyb3Bkb3duLW1lbnUtYXBwc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthcHBzLm1hcCgoeyBuYW1lLCBpY29uLCB1cmwgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17dXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWFwcHNcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgey8qIHtpY29uICYmIDxpbWcgc3JjPXtpY29ufSBhbHQ9e25hbWV9IC8+fSAqL31cblxuICAgICAgICAgICAgICAgICAgPHA+e25hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3R5bGVkTWVudT5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl19