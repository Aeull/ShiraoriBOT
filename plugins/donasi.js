let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ https://saweria.co/ilmanhdyt
├ Telkomsel:081351047727
└────
`.trim(), '© SHIRAORI', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
