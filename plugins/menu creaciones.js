//7W7 PORFAVOR  DEJAME CREDITOS NO SEAS MALO XD
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/creaciones-bot.mp3'
let menu =`
╭━〘 💚⚡️💚⚡️💚⚡️💚⚡️💚 〙━╮
 ‖    ⚡ _*Sapito bot_* ⚡
 ‖ 💚*¡𝗛ola! ${username}* 💚
 ‖
 ‖ Ⓜ️ *_MENÚ CREACIONES* Ⓜ️
 ┏━━━━━━━━━━━━━┓
┃ *<GESTION DE CREACIONES/>* 
┃≡≡≡≡≡≡≡≡≡
┃ *<CREADORES/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ➱📑 _${usedPrefix}s_
┣ ➱📑 _${usedPrefix}sticker_
┣ ➱📑 _${usedPrefix}semoji_
┣ ➱📑 _${usedPrefix}wasted_
┣ ➱📑 _${usedPrefix}stonks_
┣ ➱📑 _${usedPrefix}trash_
┣ ➱📑 _${usedPrefix}rainbow_
┣ ➱📑 _${usedPrefix}circle_
┣ ➱📑 _${usedPrefix}trigger_
┣ ➱📑 _${usedPrefix}stickermaker_
┣ ➱📑 _${usedPrefix}attp *texto*_
┣ ➱📑 _${usedPrefix}style *texto*_
┣ ➱📑 _${usedPrefix}attp2 *texto*_
┣ ➱📑 _${usedPrefix}stickerfilter_
┣ ➱📑 _${usedPrefix}trigger *@tag*_
┣ ➱📑 _${usedPrefix}mp3 *responde a un video*_
┣ ➱📑 _${usedPrefix}img *responde a un sticker*_
┣ ➱📑 _${usedPrefix}blur *responde a una imagen*_
┣ ➱📑 _${usedPrefix}swm *link de imagen de google*_
┣ ➱📑 _${usedPrefix}gif *responde a un sticker/video*_
┣ ➱📑 _${usedPrefix}tovideo *responde a una nota de vos_

┃ *< CREACION DE LOGOS PERSONALIZADOS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ➱🎨 _${usedPrefix}logos_ (lista)
┣ ➱🎨 _${usedPrefix}lolice_
┣ ➱🎨 _${usedPrefix}simpcard_
┣ ➱🎨 _${usedPrefix}hornycard_ 
┣ ➱🎨 _${usedPrefix}lblackpink_
┣ ➱🎨 _${usedPrefix}coffe *texto*_
┣ ➱🎨 _${usedPrefix}tahta *texto*_
┣ ➱🎨 _${usedPrefix}nulis *texto*_
┣ ➱🎨 _${usedPrefix}nulis2 *texto*_
┣ ➱🎨 _${usedPrefix}lolice *@tag*_
┣ ➱🎨 _${usedPrefix}simpcard *@tag*_
┣ ➱🎨 _${usedPrefix}logotaza *texto*_ 
┣ ➱🎨 _${usedPrefix}logocesped *texto*_ 
┣ ➱🎨 _${usedPrefix}logotaza2 *texto*_ 
┣ ➱🎨 _${usedPrefix}flaming *texto*_ 
┣ ➱🎨 _${usedPrefix}logofire *texto*_
┣ ➱🎨 _${usedPrefix}logosky *texto*_
┣ ➱🎨 _${usedPrefix}logocorazon *texto*_
┣ ➱🎨 _${usedPrefix}logorandom *texto*_
┣ ➱🎨 _${usedPrefix}neonfire *texto*_ 
┣ ➱🎨 _${usedPrefix}technology *texto*_ 
┣ ➱🎨 _${usedPrefix}playa *texto*_ 
┣ ➱🎨 _${usedPrefix}lovemessages *texto*_
┣ ➱🎨 _${usedPrefix}cementerio *texto*_
┣ ➱🎨 _${usedPrefix}romanticdouble *texto*_
┣ ➱🎨 _${usedPrefix}romanticmessages *texto*_
┗━━━━━━━━━━━━━┛
━〘 💚⚡💚⚡💚⚡💚⚡💚 〙━`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'Sapito bott', '𝙼𝙴𝙽𝚄 RAMDOM', `#menuramdom`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'creaciones-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menucreaciones)$/i
handler.fail = null
module.exports = handler
