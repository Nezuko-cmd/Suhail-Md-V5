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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_57_01_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM1LFxuICAgICAgICA3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICA4MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRUUzNU5Senl2R2dBU0w0WmFmU1JFL0FoVEY4cXVxRFFpbDZ5akx6Z01Icz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDg2NjM2NzE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3N0I2RDUwOTZEQThFQzVFMzdCOTA0M0YwRjIxRUI2RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mzc3NjMwMzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDg2NjM2NzE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMEQ3N0ExMDYxRjE0MTQyOTBEMkZGMDMxNUY4NDQ2Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mzc3NjMwMzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic0V1VGJWX2ZUbjJkZWFranZhZ0ZZQVwiLFxuICBcInBob25lSWRcIjogXCIyMTkzNGMxZi1hMTRkLTRkZTMtOGI4Zi1lNWU3NjhjNzg2YzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgOTgsXG4gICAgICAzOCxcbiAgICAgIDEwOSxcbiAgICAgIDE4OSxcbiAgICAgIDE5NyxcbiAgICAgIDE1MixcbiAgICAgIDM1LFxuICAgICAgMTU1LFxuICAgICAgMTQ5LFxuICAgICAgOTAsXG4gICAgICAxNjAsXG4gICAgICAxMDgsXG4gICAgICA5LFxuICAgICAgMjA0LFxuICAgICAgMTg0LFxuICAgICAgNDgsXG4gICAgICAyMzYsXG4gICAgICAzLFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMjMzLFxuICAgICAgMTk2LFxuICAgICAgMTM4LFxuICAgICAgMTMyLFxuICAgICAgMTc5LFxuICAgICAgNzcsXG4gICAgICAyMjUsXG4gICAgICAxNDAsXG4gICAgICAxNjgsXG4gICAgICAxNDYsXG4gICAgICAxOTcsXG4gICAgICAyMDIsXG4gICAgICAyMTEsXG4gICAgICAxMzUsXG4gICAgICA1NixcbiAgICAgIDE0NyxcbiAgICAgIDExMCxcbiAgICAgIDgzLFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1NMUVCUVJLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg2NjM2NzE4OjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT+GWh0/hl7ThkqrhkYzhl6/hl6kgICAgXuKAou+7jOKAol5cIixcbiAgICBcImxpZFwiOiBcIjI0MjEyNDg4OTAxODM3MDo5MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNkoyWXNHRU5IUjBMd0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZMbElVbkkyYjBtMUNhUzQ3eVpETVRvMlQybDBtR2VES0JhK0tpZkphSG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiME9SRnFlSFNsZjFaNzc5MTNHRGJraWJyS29lTkh6L0doZTJ1SXZTRVRwQlVwc1d0a0NVb1lsdE1PTStQY1pRekpnTlNtTitkL2IxeFEvdUIrWHhKQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHlJK1V2MjBHVS83Vzk5aXVIL1FhYnJCQTFGdFhFT0hQcDJLbVBJa05tZlVGQ0Y3bW5wY1B4cUVwL250dW5VTy9hL2t5K2VFVitOb3k2TG5HQk5vaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4NjYzNjcxODo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM3NzYzMDI4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
