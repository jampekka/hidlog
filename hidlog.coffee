HID = require('node-hid')

#console.log(HID)

HID.devices().forEach (info) ->
	device = new HID.HID info.path
	device.on "data", (data) ->
		console.log JSON.stringify
			timestamp: Date.now()/1000
			hrtime: process.hrtime()
			device: info
			data: data

