// Generated by CoffeeScript 2.6.1
(function() {
  var HID;

  HID = require('node-hid');

  //console.log(HID)
  HID.devices().forEach(function(info) {
    var device;
    device = new HID.HID(info.path);
    return device.on("data", function(data) {
      return console.log(JSON.stringify({
        timestamp: Date.now() / 1000,
        hrtime: process.hrtime(),
        device: info,
        data: data
      }));
    });
  });

}).call(this);
