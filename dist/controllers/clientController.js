"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _clientModel = _interopRequireDefault(require("../models/clientModel"));
var createClient = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, deviceId, sensor, battery, installationDate, paymentDate, naradaTel, phone, price, district, sector, cell, nearby, coordinates, client;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, username = _req$body.username, deviceId = _req$body.deviceId, sensor = _req$body.sensor, battery = _req$body.battery, installationDate = _req$body.installationDate, paymentDate = _req$body.paymentDate, naradaTel = _req$body.naradaTel, phone = _req$body.phone, price = _req$body.price, district = _req$body.district, sector = _req$body.sector, cell = _req$body.cell, nearby = _req$body.nearby, coordinates = _req$body.coordinates;
          _context.next = 4;
          return _clientModel["default"].create({
            username: username,
            deviceId: deviceId,
            sensor: sensor,
            battery: battery,
            installationDate: installationDate,
            paymentDate: paymentDate,
            naradaTel: naradaTel,
            price: price,
            phone: phone,
            district: district,
            sector: sector,
            cell: cell,
            nearby: nearby,
            coordinates: coordinates
          });
        case 4:
          client = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            message: "Client created successfully",
            client: client
          }));
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            error: _context.t0.message
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function createClient(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createClient = createClient;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xpZW50TW9kZWwiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIl9yZXEkYm9keSIsInVzZXJuYW1lIiwiZGV2aWNlSWQiLCJzZW5zb3IiLCJiYXR0ZXJ5IiwiaW5zdGFsbGF0aW9uRGF0ZSIsInBheW1lbnREYXRlIiwibmFyYWRhVGVsIiwicGhvbmUiLCJwcmljZSIsImRpc3RyaWN0Iiwic2VjdG9yIiwiY2VsbCIsIm5lYXJieSIsImNvb3JkaW5hdGVzIiwiY2xpZW50Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImJvZHkiLCJDbGllbnQiLCJjcmVhdGUiLCJzZW50IiwiYWJydXB0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0MCIsImVycm9yIiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2NsaWVudENvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsaWVudCBmcm9tIFwiLi4vbW9kZWxzL2NsaWVudE1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2xpZW50ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGRldmljZUlkLFxyXG4gICAgICBzZW5zb3IsXHJcbiAgICAgIGJhdHRlcnksXHJcbiAgICAgIGluc3RhbGxhdGlvbkRhdGUsXHJcbiAgICAgIHBheW1lbnREYXRlLFxyXG4gICAgICBuYXJhZGFUZWwsXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgZGlzdHJpY3QsXHJcbiAgICAgIHNlY3RvcixcclxuICAgICAgY2VsbCxcclxuICAgICAgbmVhcmJ5LFxyXG4gICAgICBjb29yZGluYXRlcyxcclxuICAgIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5jcmVhdGUoe1xyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGRldmljZUlkOiBkZXZpY2VJZCxcclxuICAgICAgc2Vuc29yOiBzZW5zb3IsXHJcbiAgICAgIGJhdHRlcnk6IGJhdHRlcnksXHJcbiAgICAgIGluc3RhbGxhdGlvbkRhdGU6IGluc3RhbGxhdGlvbkRhdGUsXHJcbiAgICAgIHBheW1lbnREYXRlOiBwYXltZW50RGF0ZSxcclxuICAgICAgbmFyYWRhVGVsOiBuYXJhZGFUZWwsXHJcbiAgICAgIHByaWNlIDogcHJpY2UsXHJcbiAgICAgIHBob25lOiBwaG9uZSxcclxuICAgICAgZGlzdHJpY3Q6IGRpc3RyaWN0LFxyXG4gICAgICBzZWN0b3I6IHNlY3RvcixcclxuICAgICAgY2VsbDogY2VsbCxcclxuICAgICAgbmVhcmJ5OiBuZWFyYnksXHJcbiAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQ2xpZW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsY2xpZW50IH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBQUEsWUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBRU8sSUFBTUMsWUFBWTtFQUFBLElBQUFDLElBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFHLFNBQUFDLFFBQU9DLEdBQUcsRUFB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