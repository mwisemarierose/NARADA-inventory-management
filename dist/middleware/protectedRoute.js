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
            if (verify.id.role === 'admin') {
              next();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfanNvbndlYnRva2VuIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJ2ZXJpZnlMb2dpbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsInZlcmlmeSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3BsaXQiLCJqd3QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVyciIsInN0b3AiLCJfeCIsIl94MiIsIl94MyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZXhwb3J0cyIsInZlcmlmeUFkbWluIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImlkIiwicm9sZSIsIl94NCIsIl94NSIsIl94NiJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL3Byb3RlY3RlZFJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmV4cG9ydCBjb25zdCB2ZXJpZnlMb2dpbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgIGNvbnN0IHZlcmlmeSA9IGp3dC52ZXJpZnkodG9rZW4sICdhcGknKTtcclxuXHJcbiAgICAgICAgaWYodmVyaWZ5KXtcclxuICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcclxuICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGxvZyBpbiB0byBtYWtlIGFuIGFjdGlvbidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGxvZyBpbiB0byBtYWtlIGFuIGFjdGlvbidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gdG8gdmVyaWZ5IGxvZ2luIGFuZCBjaGVjayB0aGUgY2xpcm50IHJvbGUgaWYgaXQgaXMgYWRtaW5cclxuZXhwb3J0IGNvbnN0IHZlcmlmeUFkbWluID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgY29uc3QgdmVyaWZ5ID0gand0LnZlcmlmeSh0b2tlbiwgJ2FwaScpO1xyXG4gICAgICAgIGlmKHZlcmlmeS5pZC5yb2xlID09PSdhZG1pbicpe1xyXG4gICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBtYWtlIHRoaXMgYWN0aW9uJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBQSxhQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFFTyxJQUFNQyxXQUFXO0VBQUEsSUFBQUMsSUFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFB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