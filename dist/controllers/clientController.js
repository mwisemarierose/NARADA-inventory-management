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
    var _req$body, username, deviceId, sensor, battery, installationDate, paymentDate, naradaTel, phone, monthlyInstallment, district, sector, cell, nearby, coordinates, client;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, username = _req$body.username, deviceId = _req$body.deviceId, sensor = _req$body.sensor, battery = _req$body.battery, installationDate = _req$body.installationDate, paymentDate = _req$body.paymentDate, naradaTel = _req$body.naradaTel, phone = _req$body.phone, monthlyInstallment = _req$body.monthlyInstallment, district = _req$body.district, sector = _req$body.sector, cell = _req$body.cell, nearby = _req$body.nearby, coordinates = _req$body.coordinates;
          _context.next = 4;
          return _clientModel["default"].create({
            username: username,
            deviceId: deviceId,
            sensor: sensor,
            battery: battery,
            installationDate: installationDate,
            paymentDate: paymentDate,
            naradaTel: naradaTel,
            monthlyInstallment: monthlyInstallment,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xpZW50TW9kZWwiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImNyZWF0ZUNsaWVudCIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvcjIiLCJfcmVnZW5lcmF0b3IiLCJtYXJrIiwiX2NhbGxlZSIsInJlcSIsInJlcyIsIl9yZXEkYm9keSIsInVzZXJuYW1lIiwiZGV2aWNlSWQiLCJzZW5zb3IiLCJiYXR0ZXJ5IiwiaW5zdGFsbGF0aW9uRGF0ZSIsInBheW1lbnREYXRlIiwibmFyYWRhVGVsIiwicGhvbmUiLCJtb250aGx5SW5zdGFsbG1lbnQiLCJkaXN0cmljdCIsInNlY3RvciIsImNlbGwiLCJuZWFyYnkiLCJjb29yZGluYXRlcyIsImNsaWVudCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJib2R5IiwiQ2xpZW50IiwiY3JlYXRlIiwic2VudCIsImFicnVwdCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidDAiLCJlcnJvciIsInN0b3AiLCJfeCIsIl94MiIsImFwcGx5IiwiYXJndW1lbnRzIiwiZXhwb3J0cyIsImdldEFsbENsaWVudHMiLCJfcmVmMiIsIl9jYWxsZWUyIiwiY2xpZW50cyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImZpbmQiLCJfeDMiLCJfeDQiLCJnZXRPbmVDbGllbnQiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmluZEJ5SWQiLCJwYXJhbXMiLCJfaWQiLCJfeDUiLCJfeDYiLCJ1cGRhdGVDbGllbnQiLCJfcmVmNCIsIl9jYWxsZWU0IiwidXBkYXRlZENsaWVudCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImZpbmRCeUlkQW5kVXBkYXRlIiwiJHNldCIsIl94NyIsIl94OCIsImRlbGV0ZUNsaWVudCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJmaW5kQnlJZEFuZERlbGV0ZSIsIl94OSIsIl94MTAiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvY2xpZW50Q29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50IGZyb20gXCIuLi9tb2RlbHMvY2xpZW50TW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDbGllbnQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZGV2aWNlSWQsXHJcbiAgICAgIHNlbnNvcixcclxuICAgICAgYmF0dGVyeSxcclxuICAgICAgaW5zdGFsbGF0aW9uRGF0ZSxcclxuICAgICAgcGF5bWVudERhdGUsXHJcbiAgICAgIG5hcmFkYVRlbCxcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIG1vbnRobHlJbnN0YWxsbWVudCxcclxuICAgICAgZGlzdHJpY3QsXHJcbiAgICAgIHNlY3RvcixcclxuICAgICAgY2VsbCxcclxuICAgICAgbmVhcmJ5LFxyXG4gICAgICBjb29yZGluYXRlcyxcclxuICAgIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5jcmVhdGUoe1xyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIGRldmljZUlkOiBkZXZpY2VJZCxcclxuICAgICAgc2Vuc29yOiBzZW5zb3IsXHJcbiAgICAgIGJhdHRlcnk6IGJhdHRlcnksXHJcbiAgICAgIGluc3RhbGxhdGlvbkRhdGU6IGluc3RhbGxhdGlvbkRhdGUsXHJcbiAgICAgIHBheW1lbnREYXRlOiBwYXltZW50RGF0ZSxcclxuICAgICAgbmFyYWRhVGVsOiBuYXJhZGFUZWwsXHJcbiAgICAgIG1vbnRobHlJbnN0YWxsbWVudCA6IG1vbnRobHlJbnN0YWxsbWVudCxcclxuICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICBkaXN0cmljdDogZGlzdHJpY3QsXHJcbiAgICAgIHNlY3Rvcjogc2VjdG9yLFxyXG4gICAgICBjZWxsOiBjZWxsLFxyXG4gICAgICBuZWFyYnk6IG5lYXJieSxcclxuICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJDbGllbnQgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixjbGllbnQgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxDbGllbnRzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnRzID0gYXdhaXQgQ2xpZW50LmZpbmQoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQWxsIGNsaWVudHNcIiwgY2xpZW50cyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T25lQ2xpZW50ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5maW5kQnlJZChyZXEucGFyYW1zLl9pZCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkNsaWVudFwiLCBjbGllbnQgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNsaWVudCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRDbGllbnQgPSBhd2FpdCBDbGllbnQuZmluZEJ5SWRBbmRVcGRhdGUoXHJcbiAgICAgIHJlcS5wYXJhbXMuX2lkLFxyXG4gICAgICB7XHJcbiAgICAgICAgJHNldDogcmVxLmJvZHksXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgbmV3OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5zdGF0dXMoMjAwKVxyXG4gICAgICAuanNvbih7IG1lc3NhZ2U6IFwiQ2xpZW50IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHVwZGF0ZWRDbGllbnQgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDbGllbnQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQ2xpZW50LmZpbmRCeUlkQW5kRGVsZXRlKHJlcS5wYXJhbXMuX2lkKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQ2xpZW50IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBQUEsWUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBRU8sSUFBTUMsWUFBWTtFQUFBLElBQUFDLElBQUEsT0FBQUMsa0JBQUEsMkJBQUFDLFlBQUEsWUFBQUMsSUFBQSxDQUFHLFNBQUFDLFFBQU9DLEdBQUcsRUFBRUMsR0FBRztJQUFBLElB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