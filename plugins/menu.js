import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Karachi').format('HH')
let wib = moment.tz('Asia/Karachi').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './assets/A.mp4'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
🙄🎄 *Hey loser, ${name} ${greeting}! We're going on a trip, don't get too excited, it's not like you'll be useful.* 🎅

📋✨ *_Quote of the day: ${quote}_* ✨

『 *VORTEX-MD*』

🎄✨✨✨✨✨✨✨✨✨🎄  
    🌟 **USER INFO** 🌟  
🎄✨✨✨✨✨✨✨✨✨🎄  

🎅 🪪 *Name:* ${name}  
🎁 🏆 *Rank:* ${role}  
❄️ 🎮 *XP:* ${exp}  
═════════════════════  

🎄✨✨✨✨✨✨✨✨✨🎄  
    📅 **DATE & TIME** ⏰  
🎄✨✨✨✨✨✨✨✨✨🎄  

⛄ 📆 *Date:* ${date}  
🎀 ⏰ *Time:* ${wib}  
═════════════════════  

🎄✨✨✨✨✨✨✨✨✨🎄  
    🤖 **BOT STATUS** ⚙️  
🎄✨✨✨✨✨✨✨✨✨🎄  

🛷 🎩 *Bot Name:* ${botname}  
🎄 📣 *Prefix:* ${usedPrefix}  
🔔 🕓 *Uptime:* ${uptime}  
═════════════════════  

🎅🎁 **Happy Christmas, you miserable excuse for a person!** 🎄❄️  
"Let this season wrap you in *utter disappointment*,  
fill your heart with *regret*, and gift you endless *failures*!" 🌟✨  
═════════════════════  


🎄◈┏━⟪ *HO HO HO, MENU TIME* ⟫━━⦿🎅

🎄◈┃• *groupmenu*  
   Probably the only group where you’re not completely useless, huh?  

🎁◈┃• *animemenu*  
   You need anime to escape the mess of your life, don’t you?  

🎄◈┃• *autoreact*  
   Like you’re capable of reacting to anything on your own, loser  

🎅◈┃• *infoanime*  
   You’re probably too dumb to get this info, but let’s try anyway  

🎁◈┃• *makermenu*  
   Yeah, like you’re ever going to create something *useful*  

🎄◈┃• *ownermenu*  
   Because you can’t even manage your own crap, right?  

🎅◈┃• *stickermenu*  
   For when your brain is as empty as a Christmas tree after the holidays, dumbass  

🎁◈┃• *toolsmenu*  
   Tools to fix your mess... though it’ll probably stay broken, just like you  

🎄◈┃• *gamesmenu*  
   For when you’re so bored, even a Christmas miracle won’t save you  

🎅◈┃• *logomenu*  
   You won’t even know how to use it, just admit it, idiot  

🎄◈┃• *listplugin*  
   You’ll never get this, so just give up already  

🎁◈┃• *economy*  
   Nice try, but you’re never gonna be *rich*—not in this lifetime  

🎄◈┃• *reactions*  
   As if you know how to react to anything *worthwhile*, loser  

🎅◈┃• *funmenu*  
   Good luck having fun without me, you're hopeless  

🎁◈┃• *nsfwmenu*  
   We all know you’ll click this, perv—Christmas won’t save you  

🎄◈┃• *randompic*  
   For when you need distractions to forget how *miserable* your life is  

🎅◈┃• *randomvid*  
   Bet you won’t even finish this, you’ll be too *bored*  

🎄◈┃• *setprivacy*  
   Like you even care about privacy... you’ve got *nothing* to hide, idiot  

🎁◈┃• *botmenu*  
   I’m the bot you didn’t want, but guess what? Too bad!  

🎄◈┃• *listmenu*  
   Too lazy to figure things out? Here’s a list, loser  

🎅◈┃• *dlmenu*  
   Downloading more stuff you’ll never use… typical idiot  

🎁◈┃• *enable*  
   Go ahead, enable whatever—won’t fix your stupidity  

🎄◈┃• *aimenu*  
   Hoping for *direction*? You’re hopeless without me  

🎅◈┃• *aeditor*  
   You need *help* editing, huh? It’s too hard for you, isn’t it?  

🎁◈┃• *imagen*  
   Yeah, like your imagination is even worth anything  

🎄◈┃• *vortex*  
   Enjoy it, though you’ll probably mess it up anyway, idiot  

🎁◈┃• *audios/md*  
   I’m just giving you more to screw up, dumbass  

🎄◈┃• *vortexmd*  
   More options for you to continue making bad decisions  

🎅◈┃• *fancy*  
   For the fancy person who can’t even keep their life together, loser  

🎁◈┃• *fancy2*  
   Here’s *more*, because clearly, you need it  

🎄◈┗━♪♪━★━☆━⦿🎅

© MX-GΔMΞCØDΞR

> 🎄💥 *_Remember, when you mess up again, use ${usedPrefix}list or ${usedPrefix}help, because clearly, you're too clueless to figure it out on your own, you merry mess._* 💥🎄 


`

    

       // await conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: estilo })
    


   conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, canal)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['vortex', 'help'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Karachi').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
      }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
    const quotes = [
      "I'm not lazy, I'm just on my energy saving mode.",
      "Life is short, smile while you still have teeth.",
      "I may be a bad influence, but darn I am fun!",
      "I'm on a whiskey diet. I've lost three days already.",
      "Why don't some couples go to the gym? Because some relationships don't work out.",
      "I told my wife she should embrace her mistakes... She gave me a hug.",
      "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
      "You know you're getting old when you stoop to tie your shoelaces and wonder what else you could do while you're down there.",
      "I'm so good at sleeping, I can do it with my eyes closed.",
      "If you think nobody cares if you’re alive, try missing a couple of payments.",
      "I used to think I was indecisive, but now I'm not so sure.",
      "If you can't convince them, confuse them.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "I'm not clumsy, I'm just on a mission to test gravity.",
      "I told my wife she should do more push-ups. She said, 'I could do a hundred!' So I counted to ten and stopped.",
      "Life is like a box of chocolates; it doesn't last long if you're hungry.",
      "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "Why do they call it beauty sleep when you wake up looking like a troll?",
      "I don't always lose my phone, but when I do, it's always on silent.",
      "My bed is a magical place where I suddenly remember everything I was supposed to do.",
      "I love the sound you make when you shut up.",
      "I'm not arguing, I'm just explaining why I'm right.",
      "I'm not a complete idiot, some parts are missing.",
      "When life gives you lemons, squirt someone in the eye.",
      "I don't need anger management. You just need to stop making me angry.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
      "The early bird can have the worm because worms are gross and mornings are stupid.",
      "If life gives you lemons, make lemonade. Then find someone whose life has given them vodka and have a party!",
      "The road to success is always under construction.",
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
      "Some people just need a high-five. In the face. With a chair.",
      "I'm not saying I'm perfect, but I'm pretty close.",
      "A day without sunshine is like, you know, night.",
      "The best way to predict the future is to create it.",
      "If you can't be a good example, then you'll just have to be a horrible warning.",
      "I don't know why I keep hitting the escape button. I'm just trying to get out of here.",
      "I'm not lazy. I'm on energy-saving mode.",
      "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
      "I don't have a bad handwriting, I have my own font.",
      "I'm not clumsy. It's just the floor hates me, the table and chairs are bullies, and the walls get in my way.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Wonder Woman. I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together."
      ];
        
