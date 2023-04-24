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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlck1vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYXV0aGVudGljYXRpb24iLCJzaWdudXAiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IyIiwiX3JlZ2VuZXJhdG9yIiwibWFyayIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiX3JlcSRib2R5IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJlbWFpbCIsInBob25lIiwicGFzc3dvcmQiLCJkZXZpY2VJZCIsImhhc2hwYXNzd29yZCIsInVzZXIiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJib2R5IiwiY29tcGFyZSIsIlVzZXIiLCJjcmVhdGUiLCJzZW50IiwiYWJydXB0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0b3AiLCJfeCIsIl94MiIsIl94MyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZXhwb3J0cyIsInNpZ25pbiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfcmVxJGJvZHkyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZmluZE9uZSIsIkVycm9yIiwiY29tcGFyZVBhc3N3b3JkIiwidG9rZW4iLCJnZW5lcmF0ZVRva2VuIiwiX3g0IiwiX3g1IiwidXBkYXRlUHJvZmlsZSIsIl9yZWYzIiwiX2NhbGxlZTMiLCJ1cGRhdGVkUHJvZmlsZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZpbmRCeUlkQW5kVXBkYXRlIiwicGFyYW1zIiwiX2lkIiwiJHNldCIsIl94NiIsIl94NyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiLi4vbW9kZWxzL3VzZXJNb2RlbC5qc1wiO1xyXG5pbXBvcnQgY29tcGFyZSBmcm9tIFwiLi4vaGVscGVycy9hdXRoZW50aWNhdGlvbi5qc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXAgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICB0cnl7IFxyXG4gIGNvbnN0IHsgZmlyc3RuYW1lLGxhc3RuYW1lLCBlbWFpbCxwaG9uZSwgcGFzc3dvcmQgLGRldmljZUlkIH0gPSByZXEuYm9keTtcclxuICBjb25zdCBoYXNocGFzc3dvcmQgPSBjb21wYXJlLmhhc2hwYXNzd29yZChwYXNzd29yZCk7XHJcbiAgICAgXHJcbiAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHtcclxuICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZSxcclxuICAgICAgICBsYXN0bmFtZTpsYXN0bmFtZSxcclxuICAgICAgICAgZGV2aWNlSWQ6ZGV2aWNlSWQsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIHBob25lOnBob25lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBoYXNocGFzc3dvcmQsXHJcbiAgIH0pXHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTpcIlVzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIix1c2VyfSlcclxuXHJcbn1jYXRjaChlcnJvcil7XHJcbiAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcjplcnJvci5tZXNzYWdlfSlcclxufVxyXG59XHJcbiBcclxuZXhwb3J0IGNvbnN0IHNpZ25pbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRldmljZUlkLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZGV2aWNlSWR9KTtcclxuICAgIFxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgY29tcGFyZS5jb21wYXJlUGFzc3dvcmQocGFzc3dvcmQsdXNlci5wYXNzd29yZClcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIG1lc3NhZ2U6IFwieW91IGFyZSBsb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5XCIsXHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICB0b2tlbjogY29tcGFyZS5nZW5lcmF0ZVRva2VuKHVzZXIpLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZmlsZSA9IGFzeW5jIChyZXEscmVzKSA9PntcclxuICAgdHJ5IHtcclxuICAgICAgIGNvbnN0IHVwZGF0ZWRQcm9maWxlID0gYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZShcclxuICAgICAgIHJlcS5wYXJhbXMuX2lkLFxyXG4gICAgICAge1xyXG4gICAgICAgICAgICRzZXQ6IHJlcS5ib2R5LFxyXG4gICAgICAgfSxcclxuICAgICAgIHsgbmV3OnRydWV9XHJcbiAgICAgICApXHJcbiAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe21lc3NhZ2U6XCJQcm9maWxlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHVwZGF0ZWRQcm9maWxlfSlcclxuICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6ZXJyb3IubWVzc2FnZX0pXHJcbiAgIH1cclxuIH1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBQSxVQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxlQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFHTyxJQUFNRSxNQUFNO0VBQUEsSUFBQUMsSUFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQUcsU0FBQUMsUUFBT0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUk7SUFBQSxJQUFBQyxTQUFBLEVBQUFDLFNBQUEsRUFBQUMsUUFBQSxFQUFBQyxLQUFBLEVBQUFDLEtBQUEsRUFBQUMsUUFBQSxFQUFBQyxRQUFBLEVBQUFDLFlBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFkLFlBQUEsWUFBQWUsSUFBQSxVQUFBQyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFaLElBQUE7UUFBQTtVQUFBWSxRQUFBLENBQUFDLElBQUE7VUFBQVosU0FBQSxHQUV1QkgsR0FBRyxDQUFDZ0IsSUFBSSxFQUFoRVosU0FBUyxHQUFBRCxTQUFBLENBQVRDLFNBQVMsRUFBQ0MsUUFBUSxHQUFBRixTQUFBLENBQVJFLFFBQVEsRUFBRUMsS0FBSyxHQUFBSCxTQUFBLENBQUxHLEtBQUssRUFBQ0MsS0FBSyxHQUFBSixTQUFBLENBQUxJLEtBQUssRUFBRUMsUUFBUSxHQUFBTCxTQUFBLENBQVJLLFFBQVEsRUFBRUMsUUFBUSxHQUFBTixTQUFBLENBQVJNLFFBQVE7VUFDckRDLFlBQVksR0FBR08sMEJBQU8sQ0FBQ1AsWUFBWSxDQUFDRixRQUFRLENBQUM7VUFBQU0sUUFBQSxDQUFBWixJQUFBO1VBQUEsT0FFN0JnQixxQkFBSSxDQUFDQyxNQUFNLENBQUM7WUFDNUJmLFNBQVMsRUFBRUEsU0FBUztZQUNwQkMsUUFBUSxFQUFDQSxRQUFRO1lBQ2hCSSxRQUFRLEVBQUNBLFFBQVE7WUFDbEJILEtBQUssRUFBRUEsS0FBSztZQUNaQyxLQUFLLEVBQUNBLEtBQUs7WUFDWEMsUUFBUSxFQUFFRTtVQUNmLENBQUMsQ0FBQztRQUFBO1VBUE1DLElBQUksR0FBQUcsUUFBQSxDQUFBTSxJQUFBO1VBQUEsT0FBQU4sUUFBQSxDQUFBTyxNQUFBLFdBU05wQixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUMsMkJBQTJCO1lBQUNiLElBQUksRUFBSkE7VUFBSSxDQUFDLENBQUM7UUFBQTtVQUFBRyxRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBVyxFQUFBLEdBQUFYLFFBQUE7VUFHdEVZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBYixRQUFBLENBQUFXLEVBQUEsQ0FBTztVQUFDLE9BQUFYLFFBQUEsQ0FBQU8sTUFBQSxXQUNacEIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0ssS0FBSyxFQUFDZCxRQUFBLENBQUFXLEVBQUEsQ0FBTUQ7VUFBTyxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQVYsUUFBQSxDQUFBZSxJQUFBO01BQUE7SUFBQSxHQUFBOUIsT0FBQTtFQUFBLENBRXBEO0VBQUEsZ0JBcEJZTCxNQUFNQSxDQUFBb0MsRUFBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBckMsSUFBQSxDQUFBc0MsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQW9CbEI7QUFBQUMsT0FBQSxDQUFBekMsTUFBQSxHQUFBQSxNQUFBO0FBRU0sSUFBTTBDLE1BQU07RUFBQSxJQUFBQyxLQUFBLE9BQUF6QyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQUcsU0FBQXdDLFNBQU90QyxHQUFHLEVBQUVDLEdBQUc7SUFBQSxJQUFBc0MsVUFBQSxFQUFBOUIsUUFBQSxFQUFBRCxRQUFBLEVBQUFHLElBQUE7SUFBQSxPQUFBZCxZQUFBLFlBQUFlLElBQUEsVUFBQTRCLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBMUIsSUFBQSxHQUFBMEIsU0FBQSxDQUFBdkMsSUFBQTtRQUFBO1VBQUF1QyxTQUFBLENBQUExQixJQUFBO1VBQUF3QixVQUFBLEdBRUZ2QyxHQUFHLENBQUNnQixJQUFJLEVBQS9CUCxRQUFRLEdBQUE4QixVQUFBLENBQVI5QixRQUFRLEVBQUVELFFBQVEsR0FBQStCLFVBQUEsQ0FBUi9CLFFBQVE7VUFBQWlDLFNBQUEsQ0FBQXZDLElBQUE7VUFBQSxPQUVQZ0IscUJBQUksQ0FBQ3dCLE9BQU8sQ0FBQztZQUFDakMsUUFBUSxFQUFSQTtVQUFRLENBQUMsQ0FBQztRQUFBO1VBQXJDRSxJQUFJLEdBQUE4QixTQUFBLENBQUFyQixJQUFBO1VBQUEsSUFFTFQsSUFBSTtZQUFBOEIsU0FBQSxDQUFBdkMsSUFBQTtZQUFBO1VBQUE7VUFBQSxNQUNELElBQUl5QyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFBQTtVQUVuQzFCLDBCQUFPLENBQUMyQixlQUFlLENBQUNwQyxRQUFRLEVBQUNHLElBQUksQ0FBQ0gsUUFBUSxDQUFDO1VBQUEsT0FBQWlDLFNBQUEsQ0FBQXBCLE1BQUEsV0FDeENwQixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQkMsT0FBTyxFQUFFLGdDQUFnQztZQUN6Q0YsTUFBTSxFQUFFLEdBQUc7WUFDWHVCLEtBQUssRUFBRTVCLDBCQUFPLENBQUM2QixhQUFhLENBQUNuQyxJQUFJO1VBQ25DLENBQUMsQ0FBQztRQUFBO1VBQUE4QixTQUFBLENBQUExQixJQUFBO1VBQUEwQixTQUFBLENBQUFoQixFQUFBLEdBQUFnQixTQUFBO1VBQUEsT0FBQUEsU0FBQSxDQUFBcEIsTUFBQSxXQUVLcEIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNrQixTQUFBLENBQUFoQixFQUFBLENBQU1ELE9BQU8sQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBaUIsU0FBQSxDQUFBWixJQUFBO01BQUE7SUFBQSxHQUFBUyxRQUFBO0VBQUEsQ0FFN0M7RUFBQSxnQkFsQllGLE1BQU1BLENBQUFXLEdBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFYLEtBQUEsQ0FBQUosS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQWtCbEI7QUFBQ0MsT0FBQSxDQUFBQyxNQUFBLEdBQUFBLE1BQUE7QUFFSyxJQUFNYSxhQUFhO0VBQUEsSUFBQUMsS0FBQSxPQUFBdEQsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFHLFNBQUFxRCxTQUFPbkQsR0FBRyxFQUFDQyxHQUFHO0lBQUEsSUFBQW1ELGNBQUE7SUFBQSxPQUFBdkQsWUFBQSxZQUFBZSxJQUFBLFVBQUF5QyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXZDLElBQUEsR0FBQXVDLFNBQUEsQ0FBQXBELElBQUE7UUFBQTtVQUFBb0QsU0FBQSxDQUFBdkMsSUFBQTtVQUFBdUMsU0FBQSxDQUFBcEQsSUFBQTtVQUFBLE9BRVBnQixxQkFBSSxDQUFDcUMsaUJBQWlCLENBQ25EdkQsR0FBRyxDQUFDd0QsTUFBTSxDQUFDQyxHQUFHLEVBQ2Q7WUFDSUMsSUFBSSxFQUFFMUQsR0FBRyxDQUFDZ0I7VUFDZCxDQUFDLEVBQ0Q7WUFBRSxPQUFJO1VBQUksQ0FBQyxDQUNWO1FBQUE7VUFOS29DLGNBQWMsR0FBQUUsU0FBQSxDQUFBbEMsSUFBQTtVQUFBLE9BQUFrQyxTQUFBLENBQUFqQyxNQUFBLFdBT2JwQixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUMsOEJBQThCO1lBQUU0QixjQUFjLEVBQWRBO1VBQWMsQ0FBQyxDQUFDO1FBQUE7VUFBQUUsU0FBQSxDQUFBdkMsSUFBQTtVQUFBdUMsU0FBQSxDQUFBN0IsRUFBQSxHQUFBNkIsU0FBQTtVQUFBLE9BQUFBLFNBQUEsQ0FBQWpDLE1BQUEsV0FFOUVwQixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDSyxLQUFLLEVBQUMwQixTQUFBLENBQUE3QixFQUFBLENBQU1EO1VBQU8sQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUE4QixTQUFBLENBQUF6QixJQUFBO01BQUE7SUFBQSxHQUFBc0IsUUFBQTtFQUFBLENBRXZEO0VBQUEsZ0JBYldGLGFBQWFBLENBQUFVLEdBQUEsRUFBQUMsR0FBQTtJQUFBLE9BQUFWLEtBQUEsQ0FBQWpCLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FheEI7QUFBQUMsT0FBQSxDQUFBYyxhQUFBLEdBQUFBLGFBQUEifQ==