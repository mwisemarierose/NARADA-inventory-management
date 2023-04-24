"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyLogin = exports.checkAdmin = void 0;
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
exports.verifyLogin = verifyLogin;
var checkAdmin = function checkAdmin(req, res, next) {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(403).send('Access Denied');
  }
};
//
exports.checkAdmin = checkAdmin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfanNvbndlYnRva2VuIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJ2ZXJpZnlMb2dpbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsInZlcmlmeSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3BsaXQiLCJqd3QiLCJ1c2VyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnIiLCJzdG9wIiwiX3giLCJfeDIiLCJfeDMiLCJhcHBseSIsImFyZ3VtZW50cyIsImV4cG9ydHMiLCJjaGVja0FkbWluIiwicm9sZSIsInNlbmQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9wcm90ZWN0ZWRSb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5leHBvcnQgY29uc3QgdmVyaWZ5TG9naW4gPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICBjb25zdCB2ZXJpZnkgPSBqd3QudmVyaWZ5KHRva2VuLCAnYXBpJyk7XHJcblxyXG4gICAgICAgIGlmKHZlcmlmeSl7XHJcbiAgICAgICAgICAgIHJlcS51c2VyID0gdmVyaWZ5O1xyXG4gICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgbG9nIGluIHRvIG1ha2UgYW4gYWN0aW9uJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgICAgICAgc3RhdHVzOiA0MDEsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgbG9nIGluIHRvIG1ha2UgYW4gYWN0aW9uJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBZG1pbiA9IChyZXEsIHJlcywgbmV4dCkgID0+IHtcclxuICAgIGlmIChyZXEudXNlci5yb2xlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIG5leHQoKTsgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMykuc2VuZCgnQWNjZXNzIERlbmllZCcpOyBcclxuICAgIH1cclxufVxyXG4vLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBQUEsYUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBRU8sSUFBTUMsV0FBVztFQUFBLElBQUFDLElBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFHLFNBQUFDLFFBQU9DLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJO0lBQUEsSUFBQUMsS0FBQSxFQUFBQyxNQUFBO0lBQUEsT0FBQVAsWUFBQSxZQUFBUSxJQUFBLFVBQUFDLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUwsSUFBQTtRQUFBO1VBQzVDLElBQUc7WUFDT0MsS0FBSyxHQUFHSCxHQUFHLENBQUNTLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DUCxNQUFNLEdBQUdRLHdCQUFHLENBQUNSLE1BQU0sQ0FBQ0QsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUV2QyxJQUFHQyxNQUFNLEVBQUM7Y0FDTkosR0FBRyxDQUFDYSxJQUFJLEdBQUdULE1BQU07Y0FDakJGLElBQUksRUFBRTtZQUNWLENBQUMsTUFBTTtjQUNIRCxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUNuQkQsTUFBTSxFQUFFLEdBQUc7Z0JBQ1hFLE9BQU8sRUFBRTtjQUNYLENBQUMsQ0FBQztZQUNOO1VBQ0osQ0FBQyxDQUFDLE9BQU1DLEdBQUcsRUFBRTtZQUNUaEIsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztjQUNqQkQsTUFBTSxFQUFFLEdBQUc7Y0FDWEUsT0FBTyxFQUFFO1lBQ2IsQ0FBQyxDQUFDO1VBQ047UUFBQztRQUFBO1VBQUEsT0FBQVQsUUFBQSxDQUFBVyxJQUFBO01BQUE7SUFBQSxHQUFBbkIsT0FBQTtFQUFBLENBQ0o7RUFBQSxnQkFwQllMLFdBQVdBLENBQUF5QixFQUFBLEVBQUFDLEdBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUExQixJQUFBLENBQUEyQixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBb0J2QjtBQUFBQyxPQUFBLENBQUE5QixXQUFBLEdBQUFBLFdBQUE7QUFFTSxJQUFNK0IsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUl6QixHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFNO0VBQzNDLElBQUlGLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDYSxJQUFJLEtBQUssT0FBTyxFQUFFO0lBQzdCeEIsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxNQUFNO0lBQ0xELEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDYSxJQUFJLENBQUMsZUFBZSxDQUFDO0VBQ3ZDO0FBQ0osQ0FBQztBQUNEO0FBQUFILE9BQUEsQ0FBQUMsVUFBQSxHQUFBQSxVQUFBIn0=