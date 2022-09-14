const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
let hitbot = JSON.parse(fs.readFileSync('./database/dashboard/userhit.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

exports.menuall = (sender, prefix, pushname, ucapanWaktu, tanggal, jam, isOwner) => {
return `*OTHERS MENU*
• ${prefix}simi
• ${prefix}getpp
• ${prefix}rules
• ${prefix}stats
• ${prefix}listgc
• ${prefix}listpc
• ${prefix}owner
• ${prefix}script
• ${prefix}server
• ${prefix}runtime
• ${prefix}dashboard

*ENCRYPT MENU*
• ${prefix}enc
• ${prefix}obfus
• ${prefix}encrypt
• ${prefix}obfuscator

*STORE MENU*
• ${prefix}list
• ${prefix}addlist
• ${prefix}dellist
• ${prefix}update

*KALKULATOR*
• ${prefix}kali
• ${prefix}bagi
• ${prefix}kurang
• ${prefix}tambah

*TOPUP OTOMATIS*
• ${prefix}ovo
• ${prefix}dana
• ${prefix}gopay
• ${prefix}shoope
• ${prefix}topupff
• ${prefix}topupml

*PROSES/DONE*
• proses < reply chat >
• done < reply chat >
• ${prefix}setproses
• ${prefix}changeproses
• ${prefix}delsetproses
• ${prefix}setdone
• ${prefix}changedone
• ${prefix}delsetdone

*WELCOME/LEFT*
• ${prefix}getleft
• ${prefix}setleft
• ${prefix}delleft
• ${prefix}changeleft
• ${prefix}setwelcome
• ${prefix}delwelcome
• ${prefix}getwelcome
• ${prefix}changewelcome

*OPEN/CLOSE*
• ${prefix}setclose
• ${prefix}setopen
• ${prefix}delclose
• ${prefix}delopen
• ${prefix}getopen
• ${prefix}getclose

*SEWA ADD/DEL*
• ${prefix}delsewa
• ${prefix}addsewa
• ${prefix}listsewa

*GROUP SETTING*
• ${prefix}left on
• ${prefix}left off
• ${prefix}antilink on
• ${prefix}antilink off
• ${prefix}antiwame on
• ${prefix}antiwame off
• ${prefix}welcome on
• ${prefix}welcome off

*GROUP MENU*
• ${prefix}add
• ${prefix}kick
• ${prefix}linkgc
• ${prefix}infogrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}hidetag
• ${prefix}tagall
• ${prefix}open
• ${prefix}close
• ${prefix}ceksewa
• ${prefix}setppgc
• ${prefix}setppgc 'panjang'
• ${prefix}setnamegc
• ${prefix}setdesc
• ${prefix}revoke

*OWNER MENU*
• ${prefix}bc
• ${prefix}join
• ${prefix}left
• ${prefix}self
• ${prefix}public
• ${prefix}resetlist
• ${prefix}sendsesi
• ${prefix}creategc
• ${prefix}setppbot
• ${prefix}setthumb
• ${prefix}broadcast
• ${prefix}block 628xxx
• ${prefix}unblock 628xxx
• ${prefix}setppbot 'panjang'

*CONVERT/TOOLS*
• ${prefix}tts
• ${prefix}ttp
• ${prefix}attp
• ${prefix}font
• ${prefix}font2
• ${prefix}isgd
• ${prefix}tourl
• ${prefix}cuttly
• ${prefix}tinyurl
• ${prefix}nulis
• ${prefix}ssweb
• ${prefix}shorturl
• ${prefix}sticker
• ${prefix}toimg
• ${prefix}emojimix
• ${prefix}emojimix2
• ${prefix}base32
• ${prefix}base64
• ${prefix}debase32
• ${prefix}debase64

*DOWNLOADER*
• ${prefix}play
• ${prefix}musik
• ${prefix}tiktok
• ${prefix}ytmp3
• ${prefix}ytmp4
• ${prefix}gitclone
• ${prefix}mediafire
• ${prefix}sosmed
• ${prefix}facebook
• ${prefix}soundcloud
 
*SEARCHING*
• ${prefix}nickff
• ${prefix}nickml
• ${prefix}stalkgithub
• ${prefix}nicksupersus

*INFORMATION*
• ${prefix}lirik
• ${prefix}cerpen
• ${prefix}google
• ${prefix}gimage
• ${prefix}styletext
• ${prefix}pinterest
• ${prefix}wikimedia
• ${prefix}infogempa

*ANONYMOUS*
• ${prefix}start
• ${prefix}stop
• ${prefix}next
• ${prefix}sendprofil
• ${prefix}anonymous

*IMAGE EDITOR*
• ${prefix}tourl
• ${prefix}hitler
• ${prefix}yasin
• ${prefix}putin
• ${prefix}resize
• ${prefix}police
• ${prefix}smeme
• ${prefix}petimati
• ${prefix}discordblue
• ${prefix}discordblack

*EXECUTE*
• $
• >
• x`
}

exports.textprem  = (sender, prefix) => {
return `Jika kamu ingin menjadi Member Premium, kamu cukup membayar 
Rp5.000 untuk 1 Minggu
Rp20.000 untuk 1 Bulan 
Jika berminat silahkan chat Owner Bot, ketik ${prefix}owner

*Payment :* 
Dana/Gopa`
}

exports.textdonasi = (sender, prefix) => {
return `*DONASI BOT*

*E-walet Monay :*
➭ Dana : 0813-3299-5497
➭ Gopay : 0813-3299-5497
➭ Pulsa : 0813-3299-5497`
}
