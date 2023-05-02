"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalAmountPaid = exports.getOnePayment = exports.addPayment = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _paymentModel = _interopRequireDefault(require("../models/paymentModel"));
var addPayment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, clientId, Total, monthlyInstallment, payment;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, clientId = _req$body.clientId, Total = _req$body.Total, monthlyInstallment = _req$body.monthlyInstallment;
          _context.next = 4;
          return _paymentModel["default"].create({
            clientId: clientId,
            Total: Total,
            monthlyInstallment: monthlyInstallment
          });
        case 4:
          payment = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            message: "Payment added successfully",
            payment: payment
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
  return function addPayment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.addPayment = addPayment;
var getOnePayment = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _Payment;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _Payment.findById(req.params._id);
        case 3:
          _Payment = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            message: "payment",
            Payment: _Payment
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
  return function getOnePayment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// function to calculate total amount paid by the user in one row
exports.getOnePayment = getOnePayment;
var totalAmountPaid = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var userId, payment, total;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          userId = req.params.userId;
          _context3.next = 4;
          return _paymentModel["default"].find({
            userId: userId
          }).populate("clientId", "username monthlyInstallment");
        case 4:
          payment = _context3.sent;
          total = 0;
          payment.forEach(function (payment) {
            total += payment.Total;
          });
          return _context3.abrupt("return", res.status(200).json({
            message: "Total amount paid",
            total: total
          }));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            error: _context3.t0.message
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function totalAmountPaid(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.totalAmountPaid = totalAmountPaid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGF5bWVudE1vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJhZGRQYXltZW50IiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwiX3JlcSRib2R5IiwiY2xpZW50SWQiLCJUb3RhbCIsIm1vbnRobHlJbnN0YWxsbWVudCIsInBheW1lbnQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiYm9keSIsIlBheW1lbnQiLCJjcmVhdGUiLCJzZW50IiwiYWJydXB0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0MCIsImVycm9yIiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJleHBvcnRzIiwiZ2V0T25lUGF5bWVudCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfUGF5bWVudCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImZpbmRCeUlkIiwicGFyYW1zIiwiX2lkIiwiX3gzIiwiX3g0IiwidG90YWxBbW91bnRQYWlkIiwiX3JlZjMiLCJfY2FsbGVlMyIsInVzZXJJZCIsInRvdGFsIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmluZCIsInBvcHVsYXRlIiwiZm9yRWFjaCIsIl94NSIsIl94NiJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9wYXltZW50Q29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGF5bWVudCBmcm9tIFwiLi4vbW9kZWxzL3BheW1lbnRNb2RlbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQYXltZW50ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgY2xpZW50SWQsIFRvdGFsLCBtb250aGx5SW5zdGFsbG1lbnQgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgcGF5bWVudCA9IGF3YWl0IFBheW1lbnQuY3JlYXRlKHtcclxuICAgICAgY2xpZW50SWQ6IGNsaWVudElkLFxyXG4gICAgICBUb3RhbDogVG90YWwsXHJcbiAgICAgIG1vbnRobHlJbnN0YWxsbWVudDogbW9udGhseUluc3RhbGxtZW50LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc1xyXG4gICAgICAuc3RhdHVzKDIwMClcclxuICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIlBheW1lbnQgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIsIHBheW1lbnQgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T25lUGF5bWVudCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBQYXltZW50ID0gYXdhaXQgUGF5bWVudC5maW5kQnlJZChyZXEucGFyYW1zLl9pZCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcInBheW1lbnRcIiwgUGF5bWVudCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRvdGFsIGFtb3VudCBwYWlkIGJ5IHRoZSB1c2VyIGluIG9uZSByb3dcclxuZXhwb3J0IGNvbnN0IHRvdGFsQW1vdW50UGFpZCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHVzZXJJZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCBQYXltZW50LmZpbmQoeyB1c2VySWQgfSkucG9wdWxhdGUoXHJcbiAgICAgIFwiY2xpZW50SWRcIixcclxuICAgICAgXCJ1c2VybmFtZSBtb250aGx5SW5zdGFsbG1lbnRcIlxyXG4gICAgKTtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICBwYXltZW50LmZvckVhY2goKHBheW1lbnQpID0+IHtcclxuICAgICAgdG90YWwgKz0gcGF5bWVudC5Ub3RhbDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJUb3RhbCBhbW91bnQgcGFpZFwiLCB0b3RhbCAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBQSxhQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFHTyxJQUFNQyxVQUFVO0VBQUEsSUFBQUMsSUFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQUcsU0FBQUMsUUFBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQUEsSUFBQUMsU0FBQSxFQUFBQyxRQUFBLEVBQUFDLEtBQUEsRUFBQUMsa0JBQUEsRUFBQUMsT0FBQTtJQUFBLE9BQUFULFlBQUEsWUFBQVUsSUFBQSxVQUFBQyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQVIsU0FBQSxHQUVXRixHQUFHLENBQUNZLElBQUksRUFBaERULFFBQVEsR0FBQUQsU0FBQSxDQUFSQyxRQUFRLEVBQUVDLEtBQUssR0FBQUYsU0FBQSxDQUFMRSxLQUFLLEVBQUVDLGtCQUFrQixHQUFBSCxTQUFBLENBQWxCRyxrQkFBa0I7VUFBQUksUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FDckJFLHdCQUFPLENBQUNDLE1BQU0sQ0FBQztZQUNu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