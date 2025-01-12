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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_31_01_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NSxcbiAgICAgICAgNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY2xiRFNpQVE4UTFiVXVmR2dmUmhtcnZaL1hIWDJoZ3Z1V3l6TUIvVVMvYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMVpyLTVwallUemlQQmZjei1pM21KQVwiLFxuICBcInBob25lSWRcIjogXCJmMTZkNjg3ZC1iNjI2LTRjMWYtYTliNy04NTU1MDdlZTdmMDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMTM3LFxuICAgICAgMTc1LFxuICAgICAgMSxcbiAgICAgIDEzNCxcbiAgICAgIDkyLFxuICAgICAgNzgsXG4gICAgICAxMjAsXG4gICAgICAyMzUsXG4gICAgICA2NCxcbiAgICAgIDQwLFxuICAgICAgMTUxLFxuICAgICAgMjgsXG4gICAgICAzOSxcbiAgICAgIDQzLFxuICAgICAgMTA2LFxuICAgICAgMjE2LFxuICAgICAgMTEyLFxuICAgICAgMTgzLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDcyLFxuICAgICAgMTEzLFxuICAgICAgMjM3LFxuICAgICAgMTcyLFxuICAgICAgMTkwLFxuICAgICAgNDIsXG4gICAgICAxNDcsXG4gICAgICAyMTAsXG4gICAgICA5OSxcbiAgICAgIDE2OSxcbiAgICAgIDY4LFxuICAgICAgMTc0LFxuICAgICAgMjI5LFxuICAgICAgNzMsXG4gICAgICAyMCxcbiAgICAgIDc1LFxuICAgICAgNzEsXG4gICAgICA4NCxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZLNUNKVFlTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg2NjM2NzE4OjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZivCdmafwnZma8J2ZpCBe4oCi77uM4oCiXlwiLFxuICAgIFwibGlkXCI6IFwiMjQyMTI0ODg5MDE4MzcwOjgyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ESDZKc0ZFUEdVa0x3R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT0VNaVlSeDRkaE83aFkrRzg2UUcvMThDY0VoYnNRNm1qY1dkcFF4MzhBTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLZko1M2lVYStMbmx1WjBYdWhja0MvSklwaXNxSkQvOG8vb0lWOHowV3Z1OUN5MjJRU0RjVG9YanZGdnNXNDVMbG8zSmNPTWYrN0haQlplU0hmVkNBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0RXVkUGRvOXRrMmRoNTh2NFdKa2VSUVNibmNseFZ4M0RRcU14QUF3VmNPODJQYlZBbGdxZFM5Q1k2cXZIUnhzVTl2UTZhamIrVlBJYTMvTGx1TFFEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg2NjM2NzE4OjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNjcwNjY3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkvalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSS9qLmpzb24iOiB7fQp9="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • BLESSED TECH』*\n youtube.com/hailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "٭*AMY𖤐",
  packname: process.env.PACK_NAME || "HAIL OREO SLUTS",
  botname : process.env.BOT_NAME  || "`OREO SLUTS`",
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
