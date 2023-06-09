"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userRoute = _interopRequireDefault(require("./userRoute.js"));
var _clientRoute = _interopRequireDefault(require("./clientRoute.js"));
var _paymentRoute = _interopRequireDefault(require("./paymentRoute.js"));
var _reportRouter = _interopRequireDefault(require("./reportRouter.js"));
var router = _express["default"].Router();
router.use('/user', _userRoute["default"]);
router.use('/client', _clientRoute["default"]);
router.use('/payment', _paymentRoute["default"]);
router.use('/report', _reportRouter["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3VzZXJSb3V0ZSIsIl9jbGllbnRSb3V0ZSIsIl9wYXltZW50Um91dGUiLCJfcmVwb3J0Um91dGVyIiwicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsInVzZSIsInVzZXJSb3V0ZXIiLCJjbGllbnRSb3V0ZXIiLCJwYXltZW50Um91dGVyIiwicmVwb3J0Um91dGVyIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHVzZXJSb3V0ZXIgZnJvbSBcIi4vdXNlclJvdXRlLmpzXCJcclxuaW1wb3J0IGNsaWVudFJvdXRlciBmcm9tIFwiLi9jbGllbnRSb3V0ZS5qc1wiXHJcbmltcG9ydCBwYXltZW50Um91dGVyIGZyb20gXCIuL3BheW1lbnRSb3V0ZS5qc1wiXHJcbmltcG9ydCByZXBvcnRSb3V0ZXIgZnJvbSBcIi4vcmVwb3J0Um91dGVyLmpzXCI7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5yb3V0ZXIudXNlKCcvdXNlcicsIHVzZXJSb3V0ZXIpXHJcbnJvdXRlci51c2UoJy9jbGllbnQnLCBjbGllbnRSb3V0ZXIpXHJcbnJvdXRlci51c2UoJy9wYXltZW50JywgcGF5bWVudFJvdXRlcilcclxucm91dGVyLnVzZSgnL3JlcG9ydCcsIHJlcG9ydFJvdXRlcilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFFBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFVBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFlBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFHLGFBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLGFBQUEsR0FBQUwsc0JBQUEsQ0FBQUMsT0FBQTtBQUVBLElBQU1LLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQ0MsTUFBTSxFQUFFO0FBRS9CRixNQUFNLENBQUNHLEdBQUcsQ0FBQyxPQUFPLEVBQUVDLHFCQUFVLENBQUM7QUFDL0JKLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLFNBQVMsRUFBRUUsdUJBQVksQ0FBQztBQUNuQ0wsTUFBTSxDQUFDRyxHQUFHLENBQUMsVUFBVSxFQUFFRyx3QkFBYSxDQUFDO0FBQ3JDTixNQUFNLENBQUNHLEdBQUcsQ0FBQyxTQUFTLEVBQUVJLHdCQUFZLENBQUM7QUFBQSxJQUFBQyxRQUFBLEdBRXBCUixNQUFNO0FBQUFTLE9BQUEsY0FBQUQsUUFBQSJ9