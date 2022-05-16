module.exports.config = {
    name:"\n",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team\nMod By HĐGN-api mod by Kaneki",
    description: "Random ảnh theo api - uptime",
    commandCategory: "noprefix",
    cooldowns: 3
};
module.exports.run = async ({ api, event, args, Users, Threads }) => {
  const { threadID, messageID } = event;
  let name = await Users.getNameUser(event.senderID);
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
    var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
    var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");    
    var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    const res = await axios.get(`https://jrt-api.jrt-official.repl.co/bancobiet`);
  var poem = res.data.data;
  var hi = ["Admin bot rất đẹp trai","Admin đang kiếm người yêu","Bạn sẽ bị ban nếu spam bot"];
  var know = hi[Math.floor(Math.random() * hi.length)];
    var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
    var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
    var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    var d = new Date();
    var day = d.getDay()
if (day == 0) var day = "Chủ nhật"
else if (day == 1) var day = "Thứ hai"
else if (day == 2) var day = "Thứ ba"
else if (day == 3) var day = "Thứ tư"
else if (day == 4) var day = "Thứ năm"
else if (day == 5) var day = "Thứ sáu"
else if (day == 6) var day = "Thứ 7"
else if (day == 7) var day = "Chủ nhật"
else return console.log(day)
    axios.get('https://apikanna.change-itit.repl.co').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
body: `[Bạn có biết?]\n${poem}`,
attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
})
}
