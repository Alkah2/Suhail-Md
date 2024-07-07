const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="okellohrodgers@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254794316375";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_16_33_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDk1LFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQxLFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmV3R3Nis3OXNkRnEyUE0zbDI1WExWZkk4Tjgrd2tTVHF4RmgvdXl4ZW93PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5T052eG5oNVRGdWFMVUprWFhpeGdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImJjNjdjNWUwLTg2NjgtNGU0Ny04MzQxLWY4OWE0ODI1NTg5M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAxNjYsXG4gICAgICAxNTQsXG4gICAgICAxMzMsXG4gICAgICAxNTksXG4gICAgICA3MixcbiAgICAgIDEzMCxcbiAgICAgIDc5LFxuICAgICAgMTM2LFxuICAgICAgMjI3LFxuICAgICAgMTA3LFxuICAgICAgOTEsXG4gICAgICA4OCxcbiAgICAgIDE3NCxcbiAgICAgIDYsXG4gICAgICAyMDAsXG4gICAgICAxNzAsXG4gICAgICAxMjgsXG4gICAgICA3OSxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgMTM5LFxuICAgICAgMTYwLFxuICAgICAgODAsXG4gICAgICAxMTksXG4gICAgICAyMzUsXG4gICAgICAxMixcbiAgICAgIDc3LFxuICAgICAgMTMsXG4gICAgICAxNjYsXG4gICAgICA4NSxcbiAgICAgIDE4OSxcbiAgICAgIDE5MCxcbiAgICAgIDEwMSxcbiAgICAgIDExOSxcbiAgICAgIDMzLFxuICAgICAgMTIyLFxuICAgICAgMjA1LFxuICAgICAgNTksXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0ZOSkRZTkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NDMxNjM3NTo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk2OTY3NTg2MDg3MDk5Ojc1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IQ29jSUhFTjJHcTdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUEtUWnVLMVY4QWxCLy9GbGZoSlZOb3pJbjdaNzJVdzJJMlFsaUhZL1pHRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhSElqa1ZLdllEM0oxOWY5ZVlIaGYyYVRtSjF2R2JjaGIvbTJodndVNk82MG9nM3pTS3MvcVdYbFNQS01PYUNWQzFnWE15ckxQbkJsaGlvNGpIRjBEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4YmVhNk9vOUVUVTRIU0RnS09jWGJnN2YvNHdUWUw2UkpibHBZSXJYbXJ4YmRPSUxqMnJONHFXMDhVS2h3S1hQdXFXRzlFSUt6WXJmcGZaa0hTMmdBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTQzMTYzNzU6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzcwMDE4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUo2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJSjYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2aE1ZSzJHckdwWlYzZHlIL3hXQ0dnalNBNXhTUk9HNVpYbTV0UUZndW5JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTgwMDk0MDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1MzUzOTU0NzRcIn0iCn0=" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
