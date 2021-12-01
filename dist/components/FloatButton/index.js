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
    icon: "",
    url: "https://store.eduzz.com"
  }, {
    name: "App2",
    icon: "",
    url: "https://app.blinket.com.br"
  }, {
    name: "App3",
    icon: "",
    url: "https://adminsun.eduzz.com/"
  }, {
    name: "App4",
    icon: "",
    url: "https://app.jobzz.com.br"
  }, {
    name: "App5",
    icon: "",
    url: "https://orbita.eduzz.com/"
  }, {
    name: "App6",
    icon: "",
    url: "https://my.nutror.com/"
  }, {
    name: "App7",
    icon: "",
    url: "https://app.orbitpages.com/"
  }, {
    name: "App8",
    icon: "",
    url: "https://telescope.eduzz.com/"
  }, {
    name: "App9",
    icon: "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zsb2F0QnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJwYXBlciIsImJvcmRlciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiRmxvYXRCdXR0b24iLCJ1c2VySWQiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiYXBwcyIsInNldEFwcHMiLCJJbml0aWFsQXBwcyIsIm5hbWUiLCJpY29uIiwidXJsIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImxlbmd0aCIsImUiLCJMb2dvRWR1enoiLCJCb29sZWFuIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ2FwIiwicGFkZGluZyIsIm1hcCIsIndpbmRvdyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyx3QkFBVztBQUM1QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE1BQU0sRUFBRTtBQURIO0FBRHFCLENBQVgsRUFJaEIsVUFBQ0MsS0FBRDtBQUFBLHNCQUNELDZCQUFDLGFBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRSxDQURiO0FBRUUsSUFBQSxrQkFBa0IsRUFBRSxJQUZ0QjtBQUdFLElBQUEsWUFBWSxFQUFFO0FBQ1pDLE1BQUFBLFFBQVEsRUFBRSxLQURFO0FBRVpDLE1BQUFBLFVBQVUsRUFBRTtBQUZBLEtBSGhCO0FBT0UsSUFBQSxlQUFlLEVBQUU7QUFDZkQsTUFBQUEsUUFBUSxFQUFFLFFBREs7QUFFZkMsTUFBQUEsVUFBVSxFQUFFO0FBRkc7QUFQbkIsS0FXTUYsS0FYTixFQURDO0FBQUEsQ0FKZ0IsQ0FBbkI7O0FBb0JPLFNBQVNHLFdBQVQsR0FBaUM7QUFBQSxNQUFa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QUFFLEVBQUMsaUJBREw7QUFFRSxJQUFBLFFBQVEsRUFBRWQsUUFGWjtBQUdFLElBQUEsV0FBVyxNQUhiO0FBSUUsSUFBQSxJQUFJLEVBQUVlLE9BQU8sQ0FBQ2YsUUFBRCxDQUpmO0FBS0UsSUFBQSxPQUFPLEVBQUVXO0FBTFgsa0JBT0U7QUFDRSxJQUFBLEtBQUssRUFBRTtBQUNMSyxNQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMQyxNQUFBQSxtQkFBbUIsRUFBRSxhQUZoQjtBQUdMQyxNQUFBQSxnQkFBZ0IsRUFBRSxLQUhiO0FBSUxDLE1BQUFBLEdBQUcsRUFBRSxLQUpBO0FBS0xDLE1BQUFBLE9BQU8sRUFBRTtBQUxKLEtBRFQ7QUFRRSxJQUFBLEVBQUUsRUFBQztBQVJMLEtBVUdsQixJQUFJLENBQUNtQixHQUFMLENBQVM7QUFBQSxRQUFHaEIsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsUUFBZUMsR0FBZixRQUFlQSxHQUFmO0FBQUEsd0JBQ1IsNkJBQUMsZUFBRDtBQUNFLE1BQUEsR0FBRyxFQUFFQSxHQURQO0FBRUUsTUFBQSxTQUFTLEVBQUMsVUFGWjtBQUdFLE1BQUEsSUFBSSxFQUFDLE9BSFA7QUFJRSxNQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiZSxRQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWWhCLEdBQVo7QUFDQUksUUFBQUEsV0FBVztBQUNaO0FBUEgsb0JBV0Usd0NBQUlOLElBQUosQ0FYRixDQURRO0FBQUEsR0FBVCxDQVZILENBUEYsQ0FiRixDQUZKLENBREY7QUFzREQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIjtcbmltcG9ydCB7IEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7IExvZ29FZHV6eiB9IGZyb20gXCIuLi8uLi9hc3NldHNcIjtcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2QzZDRkNVwiLFxuICB9LFxufSkoKHByb3BzKSA9PiAoXG4gIDxNZW51XG4gICAgZWxldmF0aW9uPXswfVxuICAgIGdldENvbnRlbnRBbmNob3JFbD17bnVsbH1cbiAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxuICAgICAgaG9yaXpvbnRhbDogXCJsZWZ0XCIsXG4gICAgfX1cbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiLFxuICAgICAgaG9yaXpvbnRhbDogXCJjZW50ZXJcIixcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuXG5leHBvcnQgZnVuY3Rpb24gRmxvYXRCdXR0b24odXNlcklkID0gMSkge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYXBwcywgc2V0QXBwc10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IG1lbnVQYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgLy8gY29uc3QgdXNlcklkID0gbWVudVBhdGhuYW1lLnN1YnN0cmluZyhtZW51UGF0aG5hbWUubGFzdEluZGV4T2YoXCIvXCIpICsgMSk7XG5cbiAgY29uc3QgSW5pdGlhbEFwcHMgPSBbXG4gICAgeyBuYW1lOiBcIkFwcDFcIiwgaWNvbjogXCJcIiwgdXJsOiBcImh0dHBzOi8vc3RvcmUuZWR1enouY29tXCIgfSxcbiAgICB7IG5hbWU6IFwiQXBwMlwiLCBpY29uOiBcIlwiLCB1cmw6IFwiaHR0cHM6Ly9hcHAuYmxpbmtldC5jb20uYnJcIiB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwM1wiLFxuICAgICAgaWNvbjogXCJcIixcbiAgICAgIHVybDogXCJodHRwczovL2FkbWluc3VuLmVkdXp6LmNvbS9cIixcbiAgICB9LFxuICAgIHsgbmFtZTogXCJBcHA0XCIsIGljb246IFwiXCIsIHVybDogXCJodHRwczovL2FwcC5qb2J6ei5jb20uYnJcIiB9LFxuICAgIHsgbmFtZTogXCJBcHA1XCIsIGljb246IFwiXCIsIHVybDogXCJodHRwczovL29yYml0YS5lZHV6ei5jb20vXCIgfSxcbiAgICB7IG5hbWU6IFwiQXBwNlwiLCBpY29uOiBcIlwiLCB1cmw6IFwiaHR0cHM6Ly9teS5udXRyb3IuY29tL1wiIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBcHA3XCIsXG4gICAgICBpY29uOiBcIlwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vYXBwLm9yYml0cGFnZXMuY29tL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBcHA4XCIsXG4gICAgICBpY29uOiBcIlwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vdGVsZXNjb3BlLmVkdXp6LmNvbS9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwOVwiLFxuICAgICAgaWNvbjogXCJcIixcbiAgICAgIHVybDogXCJodHRwczovL2FwcC5zYWZldmlkZW8uY29tL1wiLFxuICAgIH0sXG4gIF07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICBzZXRBcHBzKEluaXRpYWxBcHBzKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImZsb2F0LWJ1dHRvblwiPlxuICAgICAge2FwcHMubGVuZ3RoICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImN1c3RvbWl6ZWQtbWVudVwiXG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBhbmNob3JFbCA9PT0gbnVsbCA/IGhhbmRsZUNsaWNrKGUpIDogaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluLWJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FuY2hvckVsID8gPEZpWCAvPiA6IDxpbWcgc3JjPXtMb2dvRWR1enp9IGFsdD1cImVkdXp6XCIgLz59XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxTdHlsZWRNZW51XG4gICAgICAgICAgICBpZD1cImN1c3RvbWl6ZWQtbWVudVwiXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyIDFmclwiLFxuICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IFwiMWZyXCIsXG4gICAgICAgICAgICAgICAgZ2FwOiBcIjhweFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlkPVwiZHJvcGRvd24tbWVudS1hcHBzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2FwcHMubWFwKCh7IG5hbWUsIGljb24sIHVybCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXt1cmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tYXBwc1wiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Lyoge2ljb24gJiYgPGltZyBzcmM9e2ljb259IGFsdD17bmFtZX0gLz59ICovfVxuXG4gICAgICAgICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TdHlsZWRNZW51PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=