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
  // Check if user has an admin role
  if (req.user.role === 'admin') {
    next(); // User is an admin, so continue to the next middleware or route handler
  } else {
    res.status(403).send('Access Denied'); // User is not an admin, so send a 403 Forbidden response
  }
};
exports.checkAdmin = checkAdmin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfanNvbndlYnRva2VuIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJ2ZXJpZnlMb2dpbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsInZlcmlmeSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3BsaXQiLCJqd3QiLCJ1c2VyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnIiLCJzdG9wIiwiX3giLCJfeDIiLCJfeDMiLCJhcHBseSIsImFyZ3VtZW50cyIsImV4cG9ydHMiLCJjaGVja0FkbWluIiwicm9sZSIsInNlbmQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9wcm90ZWN0ZWRSb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5leHBvcnQgY29uc3QgdmVyaWZ5TG9naW4gPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICBjb25zdCB2ZXJpZnkgPSBqd3QudmVyaWZ5KHRva2VuLCAnYXBpJyk7XHJcblxyXG4gICAgICAgIGlmKHZlcmlmeSl7XHJcbiAgICAgICAgICAgIHJlcS51c2VyID0gdmVyaWZ5O1xyXG4gICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgbG9nIGluIHRvIG1ha2UgYW4gYWN0aW9uJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgICAgICAgc3RhdHVzOiA0MDEsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgbG9nIGluIHRvIG1ha2UgYW4gYWN0aW9uJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBZG1pbiA9IChyZXEsIHJlcywgbmV4dCkgID0+IHtcclxuICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIGFuIGFkbWluIHJvbGVcclxuICAgIGlmIChyZXEudXNlci5yb2xlID09PSAnYWRtaW4nKSB7XHJcbiAgICAgIG5leHQoKTsgLy8gVXNlciBpcyBhbiBhZG1pbiwgc28gY29udGludWUgdG8gdGhlIG5leHQgbWlkZGxld2FyZSBvciByb3V0ZSBoYW5kbGVyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMykuc2VuZCgnQWNjZXNzIERlbmllZCcpOyAvLyBVc2VyIGlzIG5vdCBhbiBhZG1pbiwgc28gc2VuZCBhIDQwMyBGb3JiaWRkZW4gcmVzcG9uc2VcclxuICAgIH1cclxuICB9Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBQSxhQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFFTyxJQUFNQyxXQUFXO0VBQUEsSUFBQUMsSUFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQUcsU0FBQUMsUUFBT0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUk7SUFBQSxJQUFBQyxLQUFBLEVBQUFDLE1BQUE7SUFBQSxPQUFBUCxZQUFBLFlBQUFRLElBQUEsVUFBQUMsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBTCxJQUFBO1FBQUE7VUFDNUMsSUFBRztZQUNPQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ1MsT0FBTyxDQUFDQyxhQUFhLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0NQLE1BQU0sR0FBR1Esd0JBQUcsQ0FBQ1IsTUFBTSxDQUFDRCxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBRXZDLElBQUdDLE1BQU0sRUFBQztjQUNOSixHQUFHLENBQUNhLElBQUksR0FBR1QsTUFBTTtjQUNqQkYsSUFBSSxFQUFFO1lBQ1YsQ0FBQyxNQUFNO2NBQ0hELEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQ25CRCxNQUFNLEVBQUUsR0FBRztnQkFDWEUsT0FBTyxFQUFFO2NBQ1gsQ0FBQyxDQUFDO1lBQ047VUFDSixDQUFDLENBQUMsT0FBTUMsR0FBRyxFQUFFO1lBQ1RoQixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2NBQ2pCRCxNQUFNLEVBQUUsR0FBRztjQUNYRSxPQUFPLEVBQUU7WUFDYixDQUFDLENBQUM7VUFDTjtRQUFDO1FBQUE7VUFBQSxPQUFBVCxRQUFBLENBQUFXLElBQUE7TUFBQTtJQUFBLEdBQUFuQixPQUFBO0VBQUEsQ0FDSjtFQUFBLGdCQXBCWUwsV0FBV0EsQ0FBQXlCLEVBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBO0lBQUEsT0FBQTFCLElBQUEsQ0FBQTJCLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FvQnZCO0FBQUFDLE9BQUEsQ0FBQTlCLFdBQUEsR0FBQUEsV0FBQTtBQUVNLElBQU0rQixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSXpCLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQU07RUFDM0M7RUFDQSxJQUFJRixHQUFHLENBQUNhLElBQUksQ0FBQ2EsSUFBSSxLQUFLLE9BQU8sRUFBRTtJQUM3QnhCLElBQUksRUFBRSxDQUFDLENBQUM7RUFDVixDQUFDLE1BQU07SUFDTEQsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNhLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0VBQ3pDO0FBQ0YsQ0FBQztBQUFBSCxPQUFBLENBQUFDLFVBQUEsR0FBQUEsVUFBQSJ9