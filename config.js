const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`Hail Amy you sluts`" 


global.devs = "2347025836462" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348086636718";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2347040694847";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347040694847";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040694847,2347040694847";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_37_01_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzLFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk4LFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICA3NyxcbiAgICAgICAgODUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDk1LFxuICAgICAgICA2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNixcbiAgICAgICAgMTczLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDczLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWSlljNlo3L3ZnMnByK1RrTFUyZmk5YUtrcUJQZ1pCbE4zWGFlbHVVU2swPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpOHhQc1VPblJGR2J5R3d1MWpPaW9RXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyNzkwOWVkLWNhNzYtNGI3NC1iY2VjLTBiZGRjYWVhY2NhMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAxNDksXG4gICAgICAxNzAsXG4gICAgICA0NCxcbiAgICAgIDM1LFxuICAgICAgMTQ1LFxuICAgICAgODQsXG4gICAgICA1OCxcbiAgICAgIDE3MSxcbiAgICAgIDE1NSxcbiAgICAgIDk0LFxuICAgICAgMTM4LFxuICAgICAgMTcxLFxuICAgICAgMjMxLFxuICAgICAgMjQwLFxuICAgICAgMjA1LFxuICAgICAgMjksXG4gICAgICA3MixcbiAgICAgIDc2LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDIwNCxcbiAgICAgIDQ5LFxuICAgICAgMTA1LFxuICAgICAgMjMzLFxuICAgICAgMTQ0LFxuICAgICAgMzcsXG4gICAgICA1MyxcbiAgICAgIDE3LFxuICAgICAgNjQsXG4gICAgICAxOTQsXG4gICAgICAxNjksXG4gICAgICAzLFxuICAgICAgMjA2LFxuICAgICAgMTAzLFxuICAgICAgMTM5LFxuICAgICAgMTIzLFxuICAgICAgMTExLFxuICAgICAgODUsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlNHMjlEQkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODY2MzY3MTg6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPcmVvIOKAouKAouKAolwiLFxuICAgIFwibGlkXCI6IFwiMjQyMTI0ODg5MDE4MzcwOjgwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMSGhhNERFSUtCNzdzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMjZiNXB2dnI0c21hZG0yQ3Z4bXpZNkdrSXVDMzYxemtLR0tRa3NtcWF4UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNNDY1YVdMTUNUZ3dMaWZNdGJXajIyWmZQYjVkNGxxVDkzRmVzeW5ETHF3Z0xRWHZ1dWE0V2dET21hcy80ZVRpczdMaXU0eUlLR0NWUzhIZUlyZnRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3NEg5STA5SmJOd25lakJ1dTNRbFBVM2VmZWZHZmZkN01MbUVBU3pjQm1kZlltbER2UmRvT0NrMm5EUXljZE5VWW8zR05FWkVYdE5BNXlkSFB6RW1BQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg2NjM2NzE4OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzYxNjM0NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPd0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU93RS5qc29uIjogIntcImtleURhdGFcIjpcInZBaTAvc3NZc2ZTb2c0Rmh3eXNYN1cxeTBoZkw3MU1OWlBmYVFzUXRYcEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTAxODY2NDE1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • BLESSED TECH』*\n youtube.com/hailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "٭*AMY𖤐",
  packname: process.env.PACK_NAME || "HAIL AMY SLUTS",
  botname : process.env.BOT_NAME  || "`HAIL AMY SLUTS`",
  ownername:process.env.OWNER_NAME|| "`KARA MAT`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLESSED"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
