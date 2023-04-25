"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClient = exports.getOneClient = exports.getAllClients = exports.deleteClient = exports.createClient = void 0;
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
var getAllClients = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var clients;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _clientModel["default"].find();
        case 3:
          clients = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            message: "All clients",
            clients: clients
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            error: _context2.t0.message
          }));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllClients(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllClients = getAllClients;
var getOneClient = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var client;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _clientModel["default"].findById(req.params._id);
        case 3:
          client = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            message: "Client",
            client: client
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
  return function getOneClient(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getOneClient = getOneClient;
var updateClient = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updatedClient;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _clientModel["default"].findByIdAndUpdate(req.params._id, {
            $set: req.body
          }, {
            "new": true
          });
        case 3:
          updatedClient = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            message: "Client updated successfully",
            updatedClient: updatedClient
          }));
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            error: _context4.t0.message
          }));
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function updateClient(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateClient = updateClient;
var deleteClient = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _clientModel["default"].findByIdAndDelete(req.params._id);
        case 3:
          return _context5.abrupt("return", res.status(200).json({
            message: "Client deleted successfully"
          }));
        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            error: _context5.t0.message
          }));
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 6]]);
  }));
  return function deleteClient(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteClient = deleteClient;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xpZW50TW9kZWwiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIl9yZXEkYm9keSIsInVzZXJuYW1lIiwiZGV2aWNlSWQiLCJzZW5zb3IiLCJiYXR0ZXJ5IiwiaW5zdGFsbGF0aW9uRGF0ZSIsInBheW1lbnREYXRlIiwibmFyYWRhVGVsIiwicGhvbmUiLCJwcmljZSIsImRpc3RyaWN0Iiwic2VjdG9yIiwiY2VsbCIsIm5lYXJieSIsImNvb3JkaW5hdGVzIiwiY2xpZW50Iiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImJvZHkiLCJDbGllbnQiLCJjcmVhdGUiLCJzZW50IiwiYWJydXB0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0MCIsImVycm9yIiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJleHBvcnRzIiwiZ2V0QWxsQ2xpZW50cyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJjbGllbnRzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZmluZCIsIl94MyIsIl94NCIsImdldE9uZUNsaWVudCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJmaW5kQnlJZCIsInBhcmFtcyIsIl9pZCIsIl94NSIsIl94NiIsInVwZGF0ZUNsaWVudCIsIl9yZWY0IiwiX2NhbGxlZTQiLCJ1cGRhdGVkQ2xpZW50IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZmluZEJ5SWRBbmRVcGRhdGUiLCIkc2V0IiwiX3g3IiwiX3g4IiwiZGVsZXRlQ2xpZW50IiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImZpbmRCeUlkQW5kRGVsZXRlIiwiX3g5IiwiX3gxMCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9jbGllbnRDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGllbnQgZnJvbSBcIi4uL21vZGVscy9jbGllbnRNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsaWVudCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBkZXZpY2VJZCxcclxuICAgICAgc2Vuc29yLFxyXG4gICAgICBiYXR0ZXJ5LFxyXG4gICAgICBpbnN0YWxsYXRpb25EYXRlLFxyXG4gICAgICBwYXltZW50RGF0ZSxcclxuICAgICAgbmFyYWRhVGVsLFxyXG4gICAgICBwaG9uZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIGRpc3RyaWN0LFxyXG4gICAgICBzZWN0b3IsXHJcbiAgICAgIGNlbGwsXHJcbiAgICAgIG5lYXJieSxcclxuICAgICAgY29vcmRpbmF0ZXMsXHJcbiAgICB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuY3JlYXRlKHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICBkZXZpY2VJZDogZGV2aWNlSWQsXHJcbiAgICAgIHNlbnNvcjogc2Vuc29yLFxyXG4gICAgICBiYXR0ZXJ5OiBiYXR0ZXJ5LFxyXG4gICAgICBpbnN0YWxsYXRpb25EYXRlOiBpbnN0YWxsYXRpb25EYXRlLFxyXG4gICAgICBwYXltZW50RGF0ZTogcGF5bWVudERhdGUsXHJcbiAgICAgIG5hcmFkYVRlbDogbmFyYWRhVGVsLFxyXG4gICAgICBwcmljZSA6IHByaWNlLFxyXG4gICAgICBwaG9uZTogcGhvbmUsXHJcbiAgICAgIGRpc3RyaWN0OiBkaXN0cmljdCxcclxuICAgICAgc2VjdG9yOiBzZWN0b3IsXHJcbiAgICAgIGNlbGw6IGNlbGwsXHJcbiAgICAgIG5lYXJieTogbmVhcmJ5LFxyXG4gICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkNsaWVudCBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLGNsaWVudCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbENsaWVudHMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudHMgPSBhd2FpdCBDbGllbnQuZmluZCgpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJBbGwgY2xpZW50c1wiLCBjbGllbnRzIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPbmVDbGllbnQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmZpbmRCeUlkKHJlcS5wYXJhbXMuX2lkKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQ2xpZW50XCIsIGNsaWVudCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xpZW50ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdXBkYXRlZENsaWVudCA9IGF3YWl0IENsaWVudC5maW5kQnlJZEFuZFVwZGF0ZShcclxuICAgICAgcmVxLnBhcmFtcy5faWQsXHJcbiAgICAgIHtcclxuICAgICAgICAkc2V0OiByZXEuYm9keSxcclxuICAgICAgfSxcclxuICAgICAgeyBuZXc6IHRydWUgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXNcclxuICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJDbGllbnQgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIiwgdXBkYXRlZENsaWVudCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNsaWVudCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBDbGllbnQuZmluZEJ5SWRBbmREZWxldGUocmVxLnBhcmFtcy5faWQpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJDbGllbnQgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBQSxZQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFFTyxJQUFNQyxZQUFZO0VBQUEsSUFBQUMsSUFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQUcsU0FBQUMsUUFBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQUEsSUFBQUMsU0FBQSxFQUFBQyxRQUFBLEVBQUFDLFFBQUEsRUFBQUMsTUFBQSxFQUFBQyxPQUFB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