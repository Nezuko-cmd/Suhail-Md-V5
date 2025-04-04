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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348055174790";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040694847,2348055174790";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_38_04_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY0LFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMixcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1eEthOXk1OWhzV0tJUGhyM2RJTXRGUHhGNGZZQ3R5bVA5NG92UTRoM3BJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNTUxNzQ3OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY0QTBBOTEwRTYwNTZCODdCNEUwMzJCNDUyMDJBNThCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MzcxMjY4NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNTUxNzQ3OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ0NzE5NEM1Njk3ODUwRjYxQTE4MzFCQjZCQjU4NDY0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MzcxMjY4NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnbldjbG5TbFJwbXRUMHRWVzEwak9RXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjMDY0NDhiLWNjZWYtNDVhNi1hNzNmLWVhMmJkMWZkZDNkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxNzIsXG4gICAgICAzMyxcbiAgICAgIDI3LFxuICAgICAgMTM2LFxuICAgICAgNzcsXG4gICAgICAxOTQsXG4gICAgICAxMzAsXG4gICAgICAxODMsXG4gICAgICAxNzksXG4gICAgICAxMjEsXG4gICAgICAyNDAsXG4gICAgICAxMTYsXG4gICAgICAxNjMsXG4gICAgICAyMTIsXG4gICAgICA2MSxcbiAgICAgIDE4MCxcbiAgICAgIDE0MyxcbiAgICAgIDE3OCxcbiAgICAgIDEwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDMzLFxuICAgICAgMjAzLFxuICAgICAgNCxcbiAgICAgIDUyLFxuICAgICAgNzEsXG4gICAgICAxODIsXG4gICAgICAyMTUsXG4gICAgICAzNCxcbiAgICAgIDEwMCxcbiAgICAgIDE0MyxcbiAgICAgIDEzNixcbiAgICAgIDExNyxcbiAgICAgIDgwLFxuICAgICAgMTQ4LFxuICAgICAgMjE1LFxuICAgICAgMTY1LFxuICAgICAgMjIwLFxuICAgICAgOTQsXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkVHQ0ROU0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNTUxNzQ3OTA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODU3NjY3Mzg4MTcyNjg6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6amXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTitOd1lnSEVLYmp1NzhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvb0lnWTJ2ZkFJKzhrZlZzUTloaHRFSlMzdTlwUUI1VXF1VjdOWm43OTBJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjMxTVNLU2hQUTdIbVVRNmQ5NWd1enRRRS9RdlI3eUt0ZmI5QXgzM0ZCelBmOXhwYVB1K2hVUm9oVEExSVZXRTZJZERlUEd4dS9pakcrR1p4NTM3ZUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxrMXdHemo1VkZmN1pLbUJRcGcvVHRIMWlvWGhTR3ZOM282RE5BMXNWOEN2SHdhTmJhaEZGbzJhRkxQUktGY0h4alYxMEgxMXl1V2pMNG5uYkcxbmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNTUxNzQ3OTA6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzNzEyNjgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUEvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFQS8uanNvbiI6IHt9Cn0==+GWh0/hl7ThkqrhkYzhl6/hl6kgICAgXuKAou+7jOKAol5cIixcbiAgICBcImxpZFwiOiBcIjI0MjEyNDg4OTAxODM3MDo5MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNkoyWXNHRU5IUjBMd0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZMbElVbkkyYjBtMUNhUzQ3eVpETVRvMlQybDBtR2VES0JhK0tpZkphSG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiME9SRnFlSFNsZjFaNzc5MTNHRGJraWJyS29lTkh6L0doZTJ1SXZTRVRwQlVwc1d0a0NVb1lsdE1PTStQY1pRekpnTlNtTitkL2IxeFEvdUIrWHhKQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHlJK1V2MjBHVS83Vzk5aXVIL1FhYnJCQTFGdFhFT0hQcDJLbVBJa05tZlVGQ0Y3bW5wY1B4cUVwL250dW5VTy9hL2t5K2VFVitOb3k2TG5HQk5vaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4NjYzNjcxODo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM3NzYzMDI4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • BLESSED TECH』*\n youtube.com/hailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "٭*AMY𖤐",
  packname: process.env.PACK_NAME || "HAIL OREO SLUTS",
  botname : process.env.BOT_NAME  || "`OREO SLUTS`",
  ownername:process.env.OWNER_NAME|| "`KARA MAT MD`",


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
