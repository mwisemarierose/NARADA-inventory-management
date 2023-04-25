"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyLogin = exports.verifyAdmin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var verifyLogin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, verify;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            token = req.headers.authorization.split(' ')[1];
            verify = _jsonwebtoken["default"].verify(token, 'api');
            if (verify) {
              req.user = verify;
              next();
            } else {
              res.status(401).json({
                status: 401,
                message: 'Please log in to make an action'
              });
            }
          } catch (err) {
            res.status(401).json({
              status: 401,
              message: 'Please log in to make an action'
            });
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function verifyLogin(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// function to verify login and check the clirnt role if it is admin
exports.verifyLogin = verifyLogin;
var verifyAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var token, verify;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          try {
            token = req.headers.authorization.split(' ')[1];
            verify = _jsonwebtoken["default"].verify(token, 'api');
            if (verify && verify.role === 'admin') {
              req.user = verify;
              next();
            } else {
              res.status(401).json({
                status: 401,
                message: 'You are not authorized to make this action'
              });
            }
          } catch (err) {
            res.status(401).json({
              status: 401,
              message: 'You are not authorized to make this action'
            });
          }
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function verifyAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.verifyAdmin = verifyAdmin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfanNvbndlYnRva2VuIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJ2ZXJpZnlMb2dpbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsInZlcmlmeSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3BsaXQiLCJqd3QiLCJ1c2VyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnIiLCJzdG9wIiwiX3giLCJfeDIiLCJfeDMiLCJhcHBseSIsImFyZ3VtZW50cyIsImV4cG9ydHMiLCJ2ZXJpZnlBZG1pbiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJyb2xlIiwiX3g0IiwiX3g1IiwiX3g2Il0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvcHJvdGVjdGVkUm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZlcmlmeUxvZ2luID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgY29uc3QgdmVyaWZ5ID0gand0LnZlcmlmeSh0b2tlbiwgJ2FwaScpO1xyXG5cclxuICAgICAgICBpZih2ZXJpZnkpe1xyXG4gICAgICAgICAgICByZXEudXNlciA9IHZlcmlmeTtcclxuICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGxvZyBpbiB0byBtYWtlIGFuIGFjdGlvbidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGxvZyBpbiB0byBtYWtlIGFuIGFjdGlvbidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gdmVyaWZ5IGxvZ2luIGFuZCBjaGVjayB0aGUgY2xpcm50IHJvbGUgaWYgaXQgaXMgYWRtaW5cclxuZXhwb3J0IGNvbnN0IHZlcmlmeUFkbWluID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgY29uc3QgdmVyaWZ5ID0gand0LnZlcmlmeSh0b2tlbiwgJ2FwaScpO1xyXG5cclxuICAgICAgICBpZih2ZXJpZnkgJiYgdmVyaWZ5LnJvbGUgPT09ICdhZG1pbicpe1xyXG4gICAgICAgICAgICByZXEudXNlciA9IHZlcmlmeTtcclxuICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBtYWtlIHRoaXMgYWN0aW9uJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgICAgICAgc3RhdHVzOiA0MDEsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdZb3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIG1ha2UgdGhpcyBhY3Rpb24nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQUFBLGFBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUVPLElBQU1DLFdBQVc7RUFBQSxJQUFBQyxJQUFBLE9BQUFDLGtCQUFBLDJCQUFBQyxZQUFBLFlBQUFDLElBQUEsQ0FBRyxTQUFBQyxRQUFPQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLElBQUFDLEtBQUEsRUFBQUMsTUFBQTtJQUFBLE9BQUFQLFlBQUEsWUFBQVEsSUFBQSxVQUFBQyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFMLElBQUE7UUFBQTtVQUM1QyxJQUFHO1lBQ09DLEtBQUssR0FBR0gsR0FBRyxDQUFDUyxPQUFPLENBQUNDLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQ1AsTUFBTSxHQUFHUSx3QkFBRyxDQUFDUixNQUFNLENBQUNELEtBQUssRUFBRSxLQUFLLENBQUM7WUFFdkMsSUFBR0MsTUFBTSxFQUFDO2NBQ05KLEdBQUcsQ0FBQ2EsSUFBSSxHQUFHVCxNQUFNO2NBQ2pCRixJQUFJLEVBQUU7WUFDVixDQUFDLE1BQU07Y0FDSEQsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDbkJELE1BQU0sRUFBRSxHQUFHO2dCQUNYRSxPQUFPLEVBQUU7Y0FDWCxDQUFDLENBQUM7WUFDTjtVQUNKLENBQUMsQ0FBQyxPQUFNQyxHQUFHLEVBQUU7WUFDVGhCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Y0FDakJELE1BQU0sRUFBRSxHQUFHO2NBQ1hFLE9BQU8sRUFBRTtZQUNiLENBQUMsQ0FBQztVQUNOO1FBQUM7UUFBQTtVQUFBLE9BQUFULFFBQUEsQ0FBQVcsSUFBQTtNQUFBO0lBQUEsR0FBQW5CLE9BQUE7RUFBQSxDQUNKO0VBQUEsZ0JBcEJZTCxXQUFXQSxDQUFBeUIsRUFBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBMUIsSUFBQSxDQUFBMkIsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQW9CdkI7O0FBRUQ7QUFBQUMsT0FBQSxDQUFBOUIsV0FBQSxHQUFBQSxXQUFBO0FBQ08sSUFBTStCLFdBQVc7RUFBQSxJQUFBQyxLQUFBLE9BQUE5QixrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQUcsU0FBQTZCLFNBQU8zQixHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSTtJQUFBLElBQUFDLEtBQUEsRUFBQUMsTUFBQTtJQUFBLE9BQUFQLFlBQUEsWUFBQVEsSUFBQSxVQUFBdUIsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFyQixJQUFBLEdBQUFxQixTQUFBLENBQUEzQixJQUFBO1FBQUE7VUFDNUMsSUFBRztZQUNPQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ1MsT0FBTyxDQUFDQyxhQUFhLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0NQLE1BQU0sR0FBR1Esd0JBQUcsQ0FBQ1IsTUFBTSxDQUFDRCxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBRXZDLElBQUdDLE1BQU0sSUFBSUEsTUFBTSxDQUFDMEIsSUFBSSxLQUFLLE9BQU8sRUFBQztjQUNqQzlCLEdBQUcsQ0FBQ2EsSUFBSSxHQUFHVCxNQUFNO2NBQ2pCRixJQUFJLEVBQUU7WUFDVixDQUFDLE1BQU07Y0FDSEQsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDbkJELE1BQU0sRUFBRSxHQUFHO2dCQUNYRSxPQUFPLEVBQUU7Y0FDWCxDQUFDLENBQUM7WUFDTjtVQUNKLENBQUMsQ0FBQyxPQUFNQyxHQUFHLEVBQUU7WUFDVGhCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Y0FDakJELE1BQU0sRUFBRSxHQUFHO2NBQ1hFLE9BQU8sRUFBRTtZQUNiLENBQUMsQ0FBQztVQUNOO1FBQUM7UUFBQTtVQUFBLE9BQUFhLFNBQUEsQ0FBQVgsSUFBQTtNQUFBO0lBQUEsR0FBQVMsUUFBQTtFQUFBLENBQ0o7RUFBQSxnQkFwQllGLFdBQVdBLENBQUFNLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBO0lBQUEsT0FBQVAsS0FBQSxDQUFBSixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBb0J2QjtBQUFBQyxPQUFBLENBQUFDLFdBQUEsR0FBQUEsV0FBQSJ9