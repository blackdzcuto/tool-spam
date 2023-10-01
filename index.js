const nhatcoder = require('nhatcoder-fb-api');
const config = require('./config.json');
const fs = require('fs');
/*nhatcoder({
  appState: JSON.parse(fs.readFileSync('appstate.json', 'utf-8'))
}, (err, api) => {
  if (err) return console.log(err);
  api.setOptions({
    listenEvents: true
  });

})*/
const count = config.acc + 1;
for (let i = 1; i < count; i++) {
  nhatcoder({
    appState: JSON.parse(fs.readFileSync('appstate-'+i+'.json', 'utf-8'))
  }, (err, api) => {
    if (err) return console.log(err);
    api.setOptions({
      listenEvents: true
    });

    const content = fs.readFileSync('./str.txt');
    //console.log(content.toString())
    setInterval(() => {
      api.sendMessage(content.toString(),config.thread_id);
    },2000);
  })
}