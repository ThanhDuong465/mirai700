module.exports.config = {
	name: "hi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "ManhG",
	description: "",
	commandCategory: "Other",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["hi"] !== "undefined" && thread["hi"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;
const time = require("moment-timezone").tz("Asia/Ho_Chi_Minh");
  const gio = time.format("HH");
  
  if (gio >= 6) get = "buổi sáng"
  if (gio >= 12) get = "buổi trưa"
  if (gio >= 13) get = "buổi chiều"
  if (gio >= 18) get = "buổi tối"
  if (gio >= 23) get = "ban đêm"
 
	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
  	//trả lời
	var msg = {
		body: `Chào ${name}, chúc bạn một ${get} vui vẽ ❤️`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://api-jrt.j-jrt-official.repl.co/rem.php')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["hi", "hello", "lô", "hí lô", "chào", "2", "Hăi", "nhô"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "hi thành công",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "hi success!",
	}
}

module.exports.run = async function({
	api,
	event,
	Threads,
	getText
}) {
	const {
		threadID,
		messageID
	} = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}
