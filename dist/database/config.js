"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
_mongoose["default"].set('strictQuery', true);
var connectDB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var conn;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mongoose["default"].connect(process.env.MONGODB_KEY, {
            useNewUrlParser: true
          });
        case 3:
          conn = _context.sent;
          console.log("db connected successfully! ");
          _context.next = 11;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("Error: ".concat(_context.t0, " "));
          process.exit(1);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();
var _default = connectDB;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm1vbmdvb3NlIiwic2V0IiwiY29ubmVjdERCIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwiY29ubiIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfS0VZIiwidXNlTmV3VXJsUGFyc2VyIiwic2VudCIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsImVycm9yIiwiY29uY2F0IiwiZXhpdCIsInN0b3AiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbm1vbmdvb3NlLnNldCgnc3RyaWN0UXVlcnknLCB0cnVlKTtcclxuY29uc3QgY29ubmVjdERCID0gIGFzeW5jICgpPT57XHJcbiAgICBcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjb25uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX0tFWSx7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coYGRiIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHkhIGApXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiAke2Vycm9yfSBgKVxyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFFQUMsb0JBQVEsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7QUFDakMsSUFBTUMsU0FBUztFQUFBLElBQUFDLElBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFJLFNBQUFDLFFBQUE7SUFBQSxJQUFBQyxJQUFBO0lBQUEsT0FBQUgsWUFBQSxZQUFBSSxJQUFBLFVBQUFDLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUdRYixvQkFBUSxDQUFDYyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUM7WUFFeERDLGVBQWUsRUFBRTtVQUVyQixDQUFDLENBQUM7UUFBQTtVQUpJVixJQUFJLEdBQUFHLFFBQUEsQ0FBQVEsSUFBQTtVQU1WQyxPQUFPLENBQUNDLEdBQUcsK0JBQStCO1VBQUFWLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQVcsRUFBQSxHQUFBWCxRQUFBO1VBRTFDUyxPQUFPLENBQUNHLEtBQUssV0FBQUMsTUFBQSxDQUFBYixRQUFBLENBQUFXLEVBQUEsT0FBb0I7VUFDakNQLE9BQU8sQ0FBQ1UsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBZCxRQUFBLENBQUFlLElBQUE7TUFBQTtJQUFBLEdBQUFuQixPQUFBO0VBQUEsQ0FHdEI7RUFBQSxnQkFmS0wsU0FBU0EsQ0FBQTtJQUFBLE9BQUFDLElBQUEsQ0FBQXdCLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FlZDtBQUFBLElBQUFDLFFBQUEsR0FFYzNCLFNBQVM7QUFBQTRCLE9BQUEsY0FBQUQsUUFBQSJ9