"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaymentReport = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _paymentModel = _interopRequireDefault(require("../models/paymentModel"));
var getPaymentReport = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var payments, report;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _paymentModel["default"].findById(clientId).populate("clientId", "username monthlyInstallment");
        case 3:
          payments = _context.sent;
          // if (!payments) {
          //   return res.status(404).json({ message: "No payments found for this client." });
          // }
          report = payments.map(function (payment) {
            return {
              clientName: payment.clientId.username,
              monthlyInstallment: payment.clientId.monthlyInstallment,
              Total: payment.Total,
              month: payment.date
            };
          });
          return _context.abrupt("return", res.status(200).json({
            report: report
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
  return function getPaymentReport(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getPaymentReport = getPaymentReport;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGF5bWVudE1vZGVsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJnZXRQYXltZW50UmVwb3J0IiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9yZWdlbmVyYXRvciIsIm1hcmsiLCJfY2FsbGVlIiwicmVxIiwicmVzIiwicGF5bWVudHMiLCJyZXBvcnQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiUGF5bWVudCIsImZpbmRCeUlkIiwiY2xpZW50SWQiLCJwb3B1bGF0ZSIsInNlbnQiLCJtYXAiLCJwYXltZW50IiwiY2xpZW50TmFtZSIsInVzZXJuYW1lIiwibW9udGhseUluc3RhbGxtZW50IiwiVG90YWwiLCJtb250aCIsImRhdGUiLCJhYnJ1cHQiLCJzdGF0dXMiLCJqc29uIiwidDAiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJfeDIiLCJhcHBseSIsImFyZ3VtZW50cyIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvcmVwb3J0aW5nQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGF5bWVudCBmcm9tIFwiLi4vbW9kZWxzL3BheW1lbnRNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBheW1lbnRSZXBvcnQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgUGF5bWVudC5maW5kQnlJZCggY2xpZW50SWQpLnBvcHVsYXRlKFxyXG4gICAgICBcImNsaWVudElkXCIsXHJcbiAgICAgIFwidXNlcm5hbWUgbW9udGhseUluc3RhbGxtZW50XCJcclxuICAgICk7XHJcbiAgICAvLyBpZiAoIXBheW1lbnRzKSB7XHJcbiAgICAvLyAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiTm8gcGF5bWVudHMgZm91bmQgZm9yIHRoaXMgY2xpZW50LlwiIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IHJlcG9ydCA9IHBheW1lbnRzLm1hcCgocGF5bWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsaWVudE5hbWU6IHBheW1lbnQuY2xpZW50SWQudXNlcm5hbWUsXHJcbiAgICAgICAgbW9udGhseUluc3RhbGxtZW50OiBwYXltZW50LmNsaWVudElkLm1vbnRobHlJbnN0YWxsbWVudCxcclxuICAgICAgICBUb3RhbDogcGF5bWVudC5Ub3RhbCxcclxuICAgICAgICBtb250aDogcGF5bWVudC5kYXRlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVwb3J0IH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBQUEsYUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBRU8sSUFBTUMsZ0JBQWdCO0VBQUEsSUFBQUMsSUFBQSxPQUFBQyxrQkFBQSwyQkFBQUMsWUFBQSxZQUFBQyxJQUFBLENBQUcsU0FBQUMsUUFBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQUEsSUFBQUMsUUFBQSxFQUFBQyxNQUFBO0lBQUEsT0FBQU4sWUFBQSxZQUFBTyxJQUFBLFVBQUFDLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUdwQkMsd0JBQU8sQ0FBQ0MsUUFBUSxDQUFFQyxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUN6RCxVQUFVLEVBQ1YsNkJBQTZCLENBQzlCO1FBQUE7VUFIS1YsUUFBUSxHQUFBSSxRQUFBLENBQUFPLElBQUE7VUFJZDtVQUNBO1VBQ0E7VUFFTVYsTUFBTSxHQUFHRCxRQUFRLENBQUNZLEdBQUcsQ0FBQyxVQUFDQyxPQUFPLEVBQUs7WUFDdkMsT0FBTztjQUNMQyxVQUFVLEVBQUVELE9BQU8sQ0FBQ0osUUFBUSxDQUFDTSxRQUFRO2NBQ3JDQyxrQkFBa0IsRUFBRUgsT0FBTyxDQUFDSixRQUFRLENBQUNPLGtCQUFrQjtjQUN2REMsS0FBSyxFQUFFSixPQUFPLENBQUNJLEtBQUs7Y0FDcEJDLEtBQUssRUFBRUwsT0FBTyxDQUFDTTtZQUNqQixDQUFDO1VBQ0gsQ0FBQyxDQUFDO1VBQUEsT0FBQWYsUUFBQSxDQUFBZ0IsTUFBQSxXQUVLckIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRXJCLE1BQU0sRUFBTkE7VUFBTyxDQUFDLENBQUM7UUFBQTtVQUFBRyxRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBbUIsRUFBQSxHQUFBbkIsUUFBQTtVQUFBLE9BQUFBLFFBQUEsQ0FBQWdCLE1BQUEsV0FFaENyQixHQUFHLENBQUNzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxLQUFLLEVBQUVwQixRQUFBLENBQUFtQixFQUFBLENBQU1FO1VBQVEsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFyQixRQUFBLENBQUFzQixJQUFBO01BQUE7SUFBQSxHQUFBN0IsT0FBQTtFQUFBLENBRXhEO0VBQUEsZ0JBeEJZTCxnQkFBZ0JBLENBQUFtQyxFQUFBLEVBQUFDLEdBQUE7SUFBQSxPQUFBbkMsSUFBQSxDQUFBb0MsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQXdCNUI7QUFBQ0MsT0FBQSxDQUFBdkMsZ0JBQUEsR0FBQUEsZ0JBQUEifQ==