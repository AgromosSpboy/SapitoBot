const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/messi")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, url, "*Messi*", 'π΄πΊπππππ ππ-π΅ππ', 'β½ SIGUIENTE β½', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(messi)$/i
module.exports = handler
