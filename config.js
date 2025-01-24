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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_59_01_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMjE3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDksXG4gICAgICAgIDUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNSxcbiAgICAgICAgNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICA1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx0eS9NaW4wOVhYb1BWWDNoTUNWa2M4MEt3dzFwZUl3eStGNUxiOHpsRjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4NjYzNjcxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUYzMEMzQjlBRjlBQkNDQzYwNkY0NzZFM0MxQTA0MTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM3NzM0MzY3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImgxa3Z3RmhEVDlpQ1dWWDFjdnluM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Q5NjU0OWQtN2NmNy00ZDVkLThjYTktMTIxMTZhMjY5OWExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgOTcsXG4gICAgICA0OCxcbiAgICAgIDE3MyxcbiAgICAgIDkxLFxuICAgICAgMjE5LFxuICAgICAgMTU5LFxuICAgICAgODksXG4gICAgICAyNyxcbiAgICAgIDEzNSxcbiAgICAgIDExNixcbiAgICAgIDI1NCxcbiAgICAgIDY2LFxuICAgICAgMTY0LFxuICAgICAgMjI5LFxuICAgICAgMjM1LFxuICAgICAgMTI2LFxuICAgICAgMTk4LFxuICAgICAgNSxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAzMixcbiAgICAgIDE2MCxcbiAgICAgIDEwMSxcbiAgICAgIDE4NixcbiAgICAgIDEwNSxcbiAgICAgIDE4NCxcbiAgICAgIDE0NCxcbiAgICAgIDEwMCxcbiAgICAgIDk0LFxuICAgICAgNTksXG4gICAgICAxMDEsXG4gICAgICAxMjUsXG4gICAgICA2MSxcbiAgICAgIDEzMixcbiAgICAgIDE5NyxcbiAgICAgIDIzNCxcbiAgICAgIDI1MixcbiAgICAgIDIzOCxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTMkE0S0NURVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4NjYzNjcxODo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuG1j+G1g8qz4bWD4bWQ4bWD4bWX8J2QjvCdkJHwnZCE8J2QjiDYiOKAosyAXCIsXG4gICAgXCJsaWRcIjogXCIyNDIxMjQ4ODkwMTgzNzA6ODlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXlPczRFREVOanh6cndHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIb080UHNhdEMwdGZtcVNsbFo5MERBaEFwK1A3a3U2R0hqT2EweXlUZ0dVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImN4ZS90VktLM25rMUVHNUpySHZQN0t1QThubTgycEU3WlJCM0V6SlZwellkR2RvQ0xuZ1hrNzRPcUdaYy9RbDlkTTNvZTljN1Q1bFZLenVPaXovUkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldnQk9DZys4R0JucjFKL21UNTZrNlA1L0hSWVQ1UFpJbEZ1Y2hRK3dXQ2txcHdPN043ZmNqTjU1enhnVzZ4SUpMTVhFcTJKTjVMNmF4c0dTWk9aQkFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODY2MzY3MTg6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mzc3MzQzNjVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
