"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var paymentSchema = new _mongoose["default"].Schema({
  clientId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: "client"
  },
  Total: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now()
  },
  monthlyInstallment: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: "client"
  }]
});
var Payment = _mongoose["default"].model("Payment", paymentSchema);
var _default = Payment;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9uZ29vc2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsInBheW1lbnRTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImNsaWVudElkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZXF1aXJlZCIsInJlZiIsIlRvdGFsIiwiTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJtb250aGx5SW5zdGFsbG1lbnQiLCJQYXltZW50IiwibW9kZWwiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL3BheW1lbnRNb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBwYXltZW50U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgY2xpZW50SWQ6e1xyXG4gICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICByZWY6IFwiY2xpZW50XCIsXHJcbiAgfSxcclxuICBUb3RhbDoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgZGVmYXVsdDogRGF0ZS5ub3coKSxcclxuICB9LFxyXG4gIG1vbnRobHlJbnN0YWxsbWVudDpbIHtcclxuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgcmVmOiBcImNsaWVudFwiLFxyXG4gIH1dLFxyXG59KTtcclxuXHJcbmNvbnN0IFBheW1lbnQgPSBtb25nb29zZS5tb2RlbChcIlBheW1lbnRcIiwgcGF5bWVudFNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFNQyxhQUFhLEdBQUcsSUFBSUMsb0JBQVEsQ0FBQ0MsTUFBTSxDQUFDO0VBQ3hDQyxRQUFRLEVBQUM7SUFDUEMsSUFBSSxFQUFFSCxvQkFBUSxDQUFDQyxNQUFNLENBQUNHLEtBQUssQ0FBQ0MsUUFBUTtJQUNwQ0MsUUFBUSxFQUFFLElBQUk7SUFDZEMsR0FBRyxFQUFFO0VBQ1AsQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDTEwsSUFBSSxFQUFFTSxNQUFNO0lBQ1pILFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREksSUFBSSxFQUFFO0lBQ0pQLElBQUksRUFBRVEsSUFBSTtJQUNWLFdBQVNBLElBQUksQ0FBQ0MsR0FBRztFQUNuQixDQUFDO0VBQ0RDLGtCQUFrQixFQUFDLENBQUU7SUFDbkJWLElBQUksRUFBRUgsb0JBQVEsQ0FBQ0MsTUFBTSxDQUFDRyxLQUFLLENBQUNDLFFBQVE7SUFDcENDLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLEdBQUcsRUFBRTtFQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFNTyxPQUFPLEdBQUdkLG9CQUFRLENBQUNlLEtBQUssQ0FBQyxTQUFTLEVBQUVoQixhQUFhLENBQUM7QUFBQyxJQUFBaUIsUUFBQSxHQUUxQ0YsT0FBTztBQUFBRyxPQUFBLGNBQUFELFFBQUEifQ==