"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.signup = exports.signin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _userModel = _interopRequireDefault(require("../models/userModel.js"));
var _authentication = _interopRequireDefault(require("../helpers/authentication.js"));
var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, firstname, lastname, email, phone, password, deviceId, hashpassword, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, firstname = _req$body.firstname, lastname = _req$body.lastname, email = _req$body.email, phone = _req$body.phone, password = _req$body.password, deviceId = _req$body.deviceId;
          hashpassword = _authentication["default"].hashpassword(password);
          _context.next = 5;
          return _userModel["default"].create({
            firstname: firstname,
            lastname: lastname,
            deviceId: deviceId,
            email: email,
            phone: phone,
            password: hashpassword
          });
        case 5:
          user = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            message: "User created successfully",
            user: user
          }));
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.status(400).json({
            error: _context.t0.message
          }));
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function signup(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.signup = signup;
var signin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, deviceId, password, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, deviceId = _req$body2.deviceId, password = _req$body2.password;
          _context2.next = 4;
          return _userModel["default"].findOne({
            deviceId: deviceId
          });
        case 4:
          user = _context2.sent;
          if (user) {
            _context2.next = 7;
            break;
          }
          throw new Error("User not found");
        case 7:
          _authentication["default"].comparePassword(password, user.password);
          return _context2.abrupt("return", res.status(200).json({
            message: "you are logged in successfully",
            status: 200,
            token: _authentication["default"].generateToken(user)
          }));
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json(_context2.t0.message));
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function signin(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
exports.signin = signin;
var updateProfile = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var updatedProfile;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _userModel["default"].findByIdAndUpdate(req.params._id, {
            $set: req.body
          }, {
            "new": true
          });
        case 3:
          updatedProfile = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            message: "Profile updated successfully",
            updatedProfile: updatedProfile
          }));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            error: _context3.t0.message
          }));
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function updateProfile(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
exports.updateProfile = updateProfile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlck1vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXV0aGVudGljYXRpb24iLCJzaWdudXAiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX3JlZ2VuZXJhdG9yIiwibWFyayIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiX3JlcSRib2R5IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJlbWFpbCIsInBob25lIiwicGFzc3dvcmQiLCJkZXZpY2VJZCIsImhhc2hwYXNzd29yZCIsInVzZXIiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJib2R5IiwiY29tcGFyZSIsIlVzZXIiLCJjcmVhdGUiLCJzZW50IiwiYWJydXB0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0b3AiLCJfeCIsIl94MiIsIl94MyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZXhwb3J0cyIsInNpZ25pbiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfcmVxJGJvZHkyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZmluZE9uZSIsIkVycm9yIiwiY29tcGFyZVBhc3N3b3JkIiwidG9rZW4iLCJnZW5lcmF0ZVRva2VuIiwiX3g0IiwiX3g1IiwidXBkYXRlUHJvZmlsZSIsIl9yZWYzIiwiX2NhbGxlZTMiLCJ1cGRhdGVkUHJvZmlsZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZpbmRCeUlkQW5kVXBkYXRlIiwicGFyYW1zIiwiX2lkIiwiJHNldCIsIl94NiIsIl94NyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiLi4vbW9kZWxzL3VzZXJNb2RlbC5qc1wiO1xyXG5pbXBvcnQgY29tcGFyZSBmcm9tIFwiLi4vaGVscGVycy9hdXRoZW50aWNhdGlvbi5qc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXAgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICB0cnl7IFxyXG4gIGNvbnN0IHsgZmlyc3RuYW1lLGxhc3RuYW1lLCBlbWFpbCxwaG9uZSwgcGFzc3dvcmQgLGRldmljZUlkIH0gPSByZXEuYm9keTtcclxuICBjb25zdCBoYXNocGFzc3dvcmQgPSBjb21wYXJlLmhhc2hwYXNzd29yZChwYXNzd29yZCk7XHJcbiAgICAgXHJcbiAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcclxuICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZSxcclxuICAgICAgICBsYXN0bmFtZTpsYXN0bmFtZSxcclxuICAgICAgICAgZGV2aWNlSWQ6ZGV2aWNlSWQsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIHBob25lOnBob25lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBoYXNocGFzc3dvcmQsXHJcbiAgIH0pXHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTpcIlVzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIix1c2VyfSlcclxuXHJcbn1jYXRjaChlcnJvcil7XHJcbiAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcjplcnJvci5tZXNzYWdlfSlcclxufVxyXG59XHJcbmV4cG9ydCBjb25zdCBzaWduaW4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkZXZpY2VJZCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe2RldmljZUlkfSk7XHJcbiAgICBcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIGNvbXBhcmUuY29tcGFyZVBhc3N3b3JkKHBhc3N3b3JkLHVzZXIucGFzc3dvcmQpXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBtZXNzYWdlOiBcInlvdSBhcmUgbG9nZ2VkIGluIHN1Y2Nlc3NmdWxseVwiLFxyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgdG9rZW46IGNvbXBhcmUuZ2VuZXJhdGVUb2tlbih1c2VyKSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2ZpbGUgPSBhc3luYyAocmVxLHJlcykgPT57XHJcbiAgIHRyeSB7XHJcbiAgICAgICBjb25zdCB1cGRhdGVkUHJvZmlsZSA9IGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUoXHJcbiAgICAgICByZXEucGFyYW1zLl9pZCxcclxuICAgICAgIHtcclxuICAgICAgICAgICAkc2V0OiByZXEuYm9keSxcclxuICAgICAgIH0sXHJcbiAgICAgICB7IG5ldzp0cnVlfVxyXG4gICAgICAgKVxyXG4gICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOlwiUHJvZmlsZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLCB1cGRhdGVkUHJvZmlsZX0pXHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yOmVycm9yLm1lc3NhZ2V9KVxyXG4gICB9XHJcbiB9XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBQUEsVUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsZUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBR08sSUFBTUUsTUFBTTtFQUFBLElBQUFDLElBQUEsT0FBQUMsa0JBQUEs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