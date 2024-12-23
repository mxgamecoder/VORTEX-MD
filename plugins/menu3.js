let handler = async function (m, { conn, text, usedPrefix }) {
  let m2 = `≡ Use these commands without the prefix, *idiot*, I repeat, use the command without the prefix, *loser*: *${usedPrefix}*

┌─⊷ *🎄 CHRISTMAS AUDIOS* 🎅  
▢ *Bot* - You really need to hear this, don't you?  

▢ *Good morning* - Not that you deserve a good morning, but whatever.  

▢ *Good afternoon* - It’s still a waste of your day, but here you go.  

▢ *Good evening* - Yeah, your evening is as miserable as your morning.  

▢ *Fine gentlemen* - If you can even *pretend* to be one.  

▢ *Don't be Sad* - But who am I kidding? You'll be sad no matter what.  
└──────────────  
`;
  
  let pp = './assets/A.jpg';

  // Send a button message
  await conn.sendButton(m.chat, m2, 'VORTEX-MD', pp, [
    ['⏍ Info', `${usedPrefix}botinfo`],
    ['⌬ Group', `${usedPrefix}grp`]
  ], m, { quoted: m });

  // Send an image file
  await conn.sendFile(m.chat, pp, 'menu.jpg', m2, m);
}

handler.help = ['md'];
handler.tags = ['main'];
handler.command = ['md', 'audios'];

export default handler;
