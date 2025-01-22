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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null2348086636718";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347040694847";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040694847,2347040694847";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_46_01_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJldFoyVm54bGNPRVZJMjYrR2lTVUJRZzFPK1o0OGNiYmtUQVJ1alR3cTg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwODY2MzY3MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA3NjA3QjgzNUVDREUxMkYzNUYzQkE3MzIwQUQ1MDc4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNzUyMTIxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5TUZFTzNsRVRzMkNZSFM1Z1BLSjJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImIzZTc3N2FjLTdhMzgtNGI1YS05ZWU5LWQ1MWM2OGU4MDFmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDM5LFxuICAgICAgMTIxLFxuICAgICAgMCxcbiAgICAgIDY1LFxuICAgICAgMTQ2LFxuICAgICAgMzcsXG4gICAgICAyNixcbiAgICAgIDM3LFxuICAgICAgMjEyLFxuICAgICAgMjA5LFxuICAgICAgNzEsXG4gICAgICA4NixcbiAgICAgIDEwNyxcbiAgICAgIDYzLFxuICAgICAgNDcsXG4gICAgICA1NCxcbiAgICAgIDUsXG4gICAgICAyMTcsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAyMjgsXG4gICAgICAyNDQsXG4gICAgICAxMzQsXG4gICAgICAxOTEsXG4gICAgICA5LFxuICAgICAgMTkzLFxuICAgICAgNDEsXG4gICAgICAyMjYsXG4gICAgICAxNjMsXG4gICAgICAyMjAsXG4gICAgICA3NixcbiAgICAgIDE0NyxcbiAgICAgIDI0LFxuICAgICAgNTEsXG4gICAgICAyMjYsXG4gICAgICA5OSxcbiAgICAgIDI0OSxcbiAgICAgIDM4LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE1TEdBSFMyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg2NjM2NzE4Ojg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZivCdmafwnZma8J2ZpCBe4oCi77uM4oCiXlwiLFxuICAgIFwibGlkXCI6IFwiMjQyMTI0ODg5MDE4MzcwOjg4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ISDZKc0ZFTFh3d2J3R0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT0VNaVlSeDRkaE83aFkrRzg2UUcvMThDY0VoYnNRNm1qY1dkcFF4MzhBTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpdmd0eXpqUWNac2pHbVBpNEtUUHlhM3JHRVRKV3l6NFhzMjFHS2g5cE9CWEhLK3VHZnUzT3hLWVVXdDlIRmlxT2dIQ1lzQzUxaHRXV0FrU1owbkdEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0eVkxTlM0OW5rUUZacmpWNHhSTDQ3aTZLTWVseStjTGZ1Zno2VTZiWU5oWUZkbWpPQzdBbHBqTnhTZ0N2TkVFSTNwWnpZWTdoWUh1bGwwdC9sc3RDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg2NjM2NzE4Ojg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNzUyMTIxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkvblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSS9uLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/gojo.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
