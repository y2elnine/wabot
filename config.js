const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
  zenz: 'http://api.zahwazein.xyz',
  didin: 'https://api-didinbotz.herokuapp.com',
  lann : 'https://api.lannn.me'
};

// Apikey Website Api
global.APIKeys = {
  'http://api.zahwazein.xyz': 'a82716863f',
  'https://api.lannn.me': 'Lann'
};

// Other
global.owner = ['6283154756590', '6283151573179'];
global.ownernomer = '6283151573179';
global.premium = ['6283151573179'];
global.packname = 'YNINE';
global.author = 'Levi Setiadi';
global.sessionName = 'ynine log';
global.prefa = ['', '!', '.', '#', '&'];
global.namebotmu = 'Y2';
global.tutorial = 'https://www.instagram.com/y2el.nine/';
global.sp = '';
global.mess = {
  success: 'Done',
  admin: 'Fitur Khusus Admin Group!',
  botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
  premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
  verify: 'Daftar Dulu Kak, Cara Daftar nya Ketik .menu',
  owner: 'Fitur Khusus Owner Bot',
  api: 'Mungkin Api Nya Error cok?',
  group: 'Fitur Digunakan Hanya Untuk Group!',
  private: 'Fitur Digunakan Hanya Untuk Private Chat!',
  bot: 'Fitur Khusus Pengguna Nomor Bot',
  wait: '[❗] SABAR MASBRO LAGI DI PROSES',
  endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
};

global.limitawal = {
  premium: 'Infinity',
  free: 4,
  monayawal: 100,
};
global.rpg = {
  darahawal: 100,
  besiawal: 15,
  goldawal: 10,
  emeraldawal: 5,
  umpanawal: 5,
  potionawal: 1,
};

global.limitAwal = {
  prem: 'Unlimited',
  free: 4,
};
global.thumb = fs.readFileSync('./DidinMedia/didin.png');
global.didinbc = fs.readFileSync('./DidinMedia/didinbc.png');
global.rules = fs.readFileSync('./DidinMedia/rules.jpg');
global.xc = fs.readFileSync('DidinMedia/didinxc.jpg');
global.mygit = 'https://github.com/y2elnine';
global.myyt = 'https://www.instagram.com/y2el.nine/';
global.myytv = 'https://www.instagram.com/y2el.nine/';
global.botname = 'Y2';
global.akulaku = 'ynine';
global.ytname = '@y2el.nine';
global.emot = {
  role: '🏆',
  level: '🎚️',
  limit: '📊',
  health: '❤️',
  exp: '💫',
  money: '💵',
  potion: '🥤',
  diamond: '💎',
  common: '📦',
  uncommon: '🎁',
  mythic: '🗳️',
  legendary: '🗃️',
  pet: '🎁',
  trash: '🗑',
  armor: '👕',
  sword: '⚔️',
  wood: '🪵',
  batu: '🪨',
  string: '🕸️',
  horse: '🐎',
  cat: '🐈',
  dog: '🐕',
  fox: '🦊',
  petFood: '🍖',
  iron: '⛓️',
  gold: '👑',
  emerald: '💚',
  budak: '🏃',
  busur: '🏹',
  panah: '💘',
  kapak: '🪓',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
