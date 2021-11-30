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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zsb2F0QnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJwYXBlciIsImJvcmRlciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiRmxvYXRCdXR0b24iLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiYXBwcyIsInNldEFwcHMiLCJtZW51UGF0aG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXNlcklkIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJJbml0aWFsQXBwcyIsIm5hbWUiLCJpY29uIiwiRWR1enoiLCJ1cmwiLCJCbGlua2V0IiwiQ2hlY2tvdXRTdW4iLCJKb2J6eiIsIk9yYml0YSIsIk51dHJvciIsIk9yYml0UGFnZXMiLCJUZWxlc2NvcGUiLCJTYWZlVmlkZW8iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwibGVuZ3RoIiwiZSIsIkxvZ29FZHV6eiIsIkJvb2xlYW4iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJnYXAiLCJwYWRkaW5nIiwibWFwIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFZQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLHdCQUFXO0FBQzVCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsTUFBTSxFQUFFO0FBREg7QUFEcUIsQ0FBWCxFQUloQixVQUFDQyxLQUFEO0FBQUEsc0JBQ0QsNkJBQUMsYUFBRDtBQUNFLElBQUEsU0FBUyxFQUFFLENBRGI7QUFFRSxJQUFBLGtCQUFrQixFQUFFLElBRnRCO0FBR0UsSUFBQSxZQUFZLEVBQUU7QUFDWkMsTUFBQUEsUUFBUSxFQUFFLEtBREU7QUFFWkMsTUFBQUEsVUFBVSxFQUFF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QUFQSCxPQVNHZCxJQUFJLGlCQUFJO0FBQUssTUFBQSxHQUFHLEVBQUVBLElBQVY7QUFBZ0IsTUFBQSxHQUFHLEVBQUVEO0FBQXJCLE1BVFgsZUFXRSx3Q0FBSUEsSUFBSixDQVhGLENBRFE7QUFBQSxHQUFULENBVkgsQ0FQRixDQWJGLENBRkosQ0FERjtBQXNERCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiO1xuaW1wb3J0IHsgRmlYIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IHtcbiAgQmxpbmtldCxcbiAgQ2hlY2tvdXRTdW4sXG4gIEVkdXp6LFxuICBKb2J6eixcbiAgTnV0cm9yLFxuICBPcmJpdGEsXG4gIE9yYml0UGFnZXMsXG4gIFNhZmVWaWRlbyxcbiAgVGVsZXNjb3BlLFxuICBMb2dvRWR1enosXG59IGZyb20gXCIuLi8uLi9hc3NldHNcIjtcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2QzZDRkNVwiLFxuICB9LFxufSkoKHByb3BzKSA9PiAoXG4gIDxNZW51XG4gICAgZWxldmF0aW9uPXswfVxuICAgIGdldENvbnRlbnRBbmNob3JFbD17bnVsbH1cbiAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxuICAgICAgaG9yaXpvbnRhbDogXCJsZWZ0XCIsXG4gICAgfX1cbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiLFxuICAgICAgaG9yaXpvbnRhbDogXCJjZW50ZXJcIixcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuXG5leHBvcnQgZnVuY3Rpb24gRmxvYXRCdXR0b24oKSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthcHBzLCBzZXRBcHBzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgbWVudVBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICBjb25zdCB1c2VySWQgPSBtZW51UGF0aG5hbWUuc3Vic3RyaW5nKG1lbnVQYXRobmFtZS5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcblxuICBjb25zdCBJbml0aWFsQXBwcyA9IFtcbiAgICB7IG5hbWU6IFwiTG9qYSBkZSBBcHBzXCIsIGljb246IEVkdXp6LCB1cmw6IFwiaHR0cHM6Ly9zdG9yZS5lZHV6ei5jb21cIiB9LFxuICAgIHsgbmFtZTogXCJCbGlua2V0XCIsIGljb246IEJsaW5rZXQsIHVybDogXCJodHRwczovL2FwcC5ibGlua2V0LmNvbS5iclwiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDaGVja291dCBTdW5cIixcbiAgICAgIGljb246IENoZWNrb3V0U3VuLFxuICAgICAgdXJsOiBcImh0dHBzOi8vYWRtaW5zdW4uZWR1enouY29tL1wiLFxuICAgIH0sXG4gICAgeyBuYW1lOiBcIkpvYnp6XCIsIGljb246IEpvYnp6LCB1cmw6IFwiaHR0cHM6Ly9hcHAuam9ienouY29tLmJyXCIgfSxcbiAgICB7IG5hbWU6IFwiT3JiaXRhXCIsIGljb246IE9yYml0YSwgdXJsOiBcImh0dHBzOi8vb3JiaXRhLmVkdXp6LmNvbS9cIiB9LFxuICAgIHsgbmFtZTogXCJOdXRyb3JcIiwgaWNvbjogTnV0cm9yLCB1cmw6IFwiaHR0cHM6Ly9teS5udXRyb3IuY29tL1wiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJPcmJpdCBQYWdlc1wiLFxuICAgICAgaWNvbjogT3JiaXRQYWdlcyxcbiAgICAgIHVybDogXCJodHRwczovL2FwcC5vcmJpdHBhZ2VzLmNvbS9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVGVsZXNjb3BlXCIsXG4gICAgICBpY29uOiBUZWxlc2NvcGUsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly90ZWxlc2NvcGUuZWR1enouY29tL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTYWZlIFbDrWRlb1wiLFxuICAgICAgaWNvbjogU2FmZVZpZGVvLFxuICAgICAgdXJsOiBcImh0dHBzOi8vYXBwLnNhZmV2aWRlby5jb20vXCIsXG4gICAgfSxcbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIHNldEFwcHMoSW5pdGlhbEFwcHMpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiZmxvYXQtYnV0dG9uXCI+XG4gICAgICB7YXBwcy5sZW5ndGggJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGFuY2hvckVsID09PSBudWxsID8gaGFuZGxlQ2xpY2soZSkgOiBoYW5kbGVDbG9zZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW4tYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YW5jaG9yRWwgPyA8RmlYIC8+IDogPGltZyBzcmM9e0xvZ29FZHV6en0gYWx0PVwiZWR1enpcIiAvPn1cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPFN0eWxlZE1lbnVcbiAgICAgICAgICAgIGlkPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyXCIsXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogXCIxZnJcIixcbiAgICAgICAgICAgICAgICBnYXA6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaWQ9XCJkcm9wZG93bi1tZW51LWFwcHNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YXBwcy5tYXAoKHsgbmFtZSwgaWNvbiwgdXJsIH0pID0+IChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e3VybH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1hcHBzXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpY29uICYmIDxpbWcgc3JjPXtpY29ufSBhbHQ9e25hbWV9IC8+fVxuXG4gICAgICAgICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TdHlsZWRNZW51PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=