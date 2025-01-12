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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_37_01_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcxLFxuICAgICAgICA5NixcbiAgICAgICAgMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRibVR2VmFWTEFpZllPcXZ1cUpsa3E4MmI2RkQyNEduVE1oaEdyc1c2aUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4NjYzNjcxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkQ2RkNEMUY2NTQzNDE2M0JBMUZEMjAzNkU2QTExNDVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM2NzE0MjMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi13bnJkXy11Ul8yNlB2alY4WDBFVlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWQ1MWJjZTctODBkNS00Njk1LThlYjEtMzE2OWViYTQ2NWIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDEzOCxcbiAgICAgIDIyOCxcbiAgICAgIDE1NixcbiAgICAgIDYxLFxuICAgICAgMTk4LFxuICAgICAgMTc3LFxuICAgICAgNTEsXG4gICAgICA4NixcbiAgICAgIDE2NCxcbiAgICAgIDIxMyxcbiAgICAgIDEyOSxcbiAgICAgIDksXG4gICAgICAxNDQsXG4gICAgICAxMDksXG4gICAgICAxMDMsXG4gICAgICAxNzEsXG4gICAgICAxNjAsXG4gICAgICAyMixcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAyMSxcbiAgICAgIDIwMyxcbiAgICAgIDE0NCxcbiAgICAgIDE4MyxcbiAgICAgIDE5LFxuICAgICAgMTQzLFxuICAgICAgMjYsXG4gICAgICAyNTQsXG4gICAgICAxODIsXG4gICAgICA1NSxcbiAgICAgIDE2OSxcbiAgICAgIDg3LFxuICAgICAgMjUxLFxuICAgICAgMTk0LFxuICAgICAgMjAxLFxuICAgICAgMzksXG4gICAgICAyMDgsXG4gICAgICAxODQsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjJTNzc5SjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODY2MzY3MTg6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmK8J2Zp/CdmZrwnZmkIF7igKLvu4zigKJeXCIsXG4gICAgXCJsaWRcIjogXCIyNDIxMjQ4ODkwMTgzNzA6ODRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkhINkpzRkVPM1BrTHdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPRU1pWVJ4NGRoTzdoWStHODZRRy8xOENjRWhic1E2bWpjV2RwUXgzOEFNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFBTS9Va3pIeGdCWDdnS0tlMjZJaGJIYU1RZEJsNnJUNmlqT1R2ZDBPc2RIeUw5N3hqdTFHK3pVSURHNlBZdERSZk14N3NuL2FiVlpTU1JnRUdtT0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjI4TFVlVllFTWFrek1XRTBOdFVNL2M4c2FlZXNSUTMyN2dEZ3dqdGxhR0lXZXpSb0VZYlBtVGhURkpKZlVzd2t3Z25zK3J5YWIydnFPL2J2VDdWVkJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODY2MzY3MTg6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM2NzE0MjI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSS9tXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJL20uanNvbiI6IHt9Cn0=="  // PUT your SESSION_ID 


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
