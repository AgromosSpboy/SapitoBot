let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de SAITO - Bot*

*➤ Grupo oficial del Bot:*
                                                     
                                                     
                                                     
                                         PRONTO...             
                                                     
                                                     
`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 SAPITO BOT 🔥*', 'status@broadcast')}
handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
