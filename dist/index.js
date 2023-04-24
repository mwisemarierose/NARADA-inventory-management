"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _config = _interopRequireDefault(require("./database/config.js"));
var _userRoute = _interopRequireDefault(require("./routers/userRoute.js"));
var _clientRoute = _interopRequireDefault(require("./routers/clientRoute.js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var port = 3000;
var app = (0, _express["default"])();
(0, _config["default"])();
app.use(_bodyParser["default"].json({
  limit: '10mb',
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '10mb',
  extended: true
}));
app.use("/user", _userRoute["default"]);
app.use("/client", _clientRoute["default"]);
app.get('/', function (req, res) {
  res.status(200).json({
    message: "let's get started ",
    status: 200
  });
});
app.use(function (req, res) {
  res.status(404).json({
    message: "endpoint not found",
    status: 404
  });
});
app.listen(port, console.log("server is running on http:/localhost:".concat(port)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2JvZHlQYXJzZXIiLCJfY29uZmlnIiwiX3VzZXJSb3V0ZSIsIl9jbGllbnRSb3V0ZSIsIl9kb3RlbnYiLCJkb3RlbnYiLCJjb25maWciLCJwb3J0IiwiYXBwIiwiZXhwcmVzcyIsIm1vbmdvQ29ubmVjdCIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwibGltaXQiLCJleHRlbmRlZCIsInVybGVuY29kZWQiLCJ1c2VyUm91dGVyIiwiY2xpZW50Um91dGVyIiwiZ2V0IiwicmVxIiwicmVzIiwic3RhdHVzIiwibWVzc2FnZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiXSwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCBtb25nb0Nvbm5lY3QgZnJvbSAnLi9kYXRhYmFzZS9jb25maWcuanMnXHJcbmltcG9ydCB1c2VyUm91dGVyIGZyb20gXCIuL3JvdXRlcnMvdXNlclJvdXRlLmpzXCI7XHJcbmltcG9ydCBjbGllbnRSb3V0ZXIgZnJvbSBcIi4vcm91dGVycy9jbGllbnRSb3V0ZS5qc1wiO1xyXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcclxuZG90ZW52LmNvbmZpZygpXHJcblxyXG5jb25zdCBwb3J0PSAzMDAwIDtcclxuXHJcblxyXG5jb25zdCBhcHA9IGV4cHJlc3MoKTtcclxubW9uZ29Db25uZWN0KCk7XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbih7bGltaXQ6ICcxMG1iJywgZXh0ZW5kZWQ6IHRydWV9KSlcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2xpbWl0OiAnMTBtYicsIGV4dGVuZGVkOiB0cnVlfSkpXHJcblxyXG5hcHAudXNlKFwiL3VzZXJcIiwgdXNlclJvdXRlcik7XHJcbmFwcC51c2UoXCIvY2xpZW50XCIsIGNsaWVudFJvdXRlcik7XHJcblxyXG5hcHAuZ2V0KCcvJywocmVxLHJlcykgPT57XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgbWVzc2FnZSA6XCJsZXQncyBnZXQgc3RhcnRlZCBcIixcclxuICAgICAgICBzdGF0dXM6MjAwXHJcbiAgICB9KVxyXG59KTtcclxuXHJcbmFwcC51c2UoKHJlcSxyZXMpID0+e1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xyXG4gICAgICAgIG1lc3NhZ2U6XCJlbmRwb2ludCBub3QgZm91bmRcIixcclxuICAgICAgICBzdGF0dXM6NDA0XHJcbiAgICB9KVxyXG59KVxyXG5cclxuYXBwLmxpc3Rlbihwb3J0LGNvbnNvbGUubG9nKGBzZXJ2ZXIgaXMgcnVubmluZyBvbiBodHRwOi9sb2NhbGhvc3Q6JHtwb3J0fWApKSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBQUEsUUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsV0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsT0FBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUcsVUFBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUksWUFBQSxHQUFBTCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUssT0FBQSxHQUFBTixzQkFBQSxDQUFBQyxPQUFBO0FBQ0FNLGtCQUFNLENBQUNDLE1BQU0sRUFBRTtBQUVmLElBQU1DLElBQUksR0FBRSxJQUFJO0FBR2hCLElBQU1DLEdBQUcsR0FBRSxJQUFBQyxtQkFBTyxHQUFFO0FBQ3BCLElBQUFDLGtCQUFZLEdBQUU7QUFFZEYsR0FBRyxDQUFDRyxHQUFHLENBQUNDLHNCQUFVLENBQUNDLElBQUksQ0FBQztFQUFDQyxLQUFLLEVBQUUsTUFBTTtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6RFAsR0FBRyxDQUFDRyxHQUFHLENBQUNDLHNCQUFVLENBQUNJLFVBQVUsQ0FBQztFQUFDRixLQUFLLEVBQUUsTUFBTTtFQUFFQyxRQUFRLEVBQUU7QUFBSSxDQUFDLENBQUMsQ0FBQztBQUUvRFAsR0FBRyxDQUFDRyxHQUFHLENBQUMsT0FBTyxFQUFFTSxxQkFBVSxDQUFDO0FBQzVCVCxHQUFHLENBQUNHLEdBQUcsQ0FBQyxTQUFTLEVBQUVPLHVCQUFZLENBQUM7QUFFaENWLEdBQUcsQ0FBQ1csR0FBRyxDQUFDLEdBQUcsRUFBQyxVQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBSTtFQUNwQkEsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNULElBQUksQ0FBQztJQUNqQlUsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QkQsTUFBTSxFQUFDO0VBQ1gsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUZkLEdBQUcsQ0FBQ0csR0FBRyxDQUFDLFVBQUNTLEdBQUcsRUFBQ0MsR0FBRyxFQUFJO0VBQ2hCQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1QsSUFBSSxDQUFDO0lBQ2pCVSxPQUFPLEVBQUMsb0JBQW9CO0lBQzVCRCxNQUFNLEVBQUM7RUFDWCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRmQsR0FBRyxDQUFDZ0IsTUFBTSxDQUFDakIsSUFBSSxFQUFDa0IsT0FBTyxDQUFDQyxHQUFHLHlDQUFBQyxNQUFBLENBQXlDcEIsSUFBSSxFQUFHLENBQUMifQ==