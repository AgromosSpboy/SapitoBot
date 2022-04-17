function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '595983186566 ', 'Sapito OFICIAL', m)}
handler.command = /^(contacto|sapito |creator|creador|propietario|dueño)$/i
module.exports = handler
