import NEZUKO from '@NEZUKO/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
}

handler.help = ['instagram *<link ig>*']
handler.tags = ['downloader']
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i
//handler.limit = 1
handler.register = true

export default handler