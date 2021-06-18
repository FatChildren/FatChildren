const cherio = require('cherio');
const request = require('request');
const ora = require('ora');
const chalk = require('chalk')
const { prompt } = require('enquirer');
const white = chalk.hex('#FFFFFF');
const red = chalk.hex('#DC143C');
const Spinner = ora({ color: 'red' });



let originalConsoleLog = console.log;
porn = function() {
        args = [];
        let date = new Date();

        let hours = date.getUTCHours().toString().padStart(2, '0');
        let minutes = date.getUTCMinutes().toString().padStart(2, '0');
        let seconds = date.getUTCSeconds().toString().padStart(2, '0');
        args.push(`${white(`[${red(`${hours}:${minutes}:${seconds}`)}]`)}`);
    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    originalConsoleLog.apply(console, args);
}

const logo = (`
${chalk.hex('#FFFFFF')("                                     ╔═╗╦═╗ ╦╔╦╗╦ ╦  ╔═╗╦═╗ ╦")}
${chalk.hex('#8D8C8C')("                                     ╚═╗║╔╩╦╝ ║ ╚╦╝  ╚═╗║╔╩╦╝")}
${chalk.hex('#DC143C')("                                     ╚═╝╩╩ ╚═ ╩  ╩   ╚═╝╩╩ ╚═")}
${chalk.hex('#5A5656')("                                     |IG:yuqybtc|YT: 66 Yuqy| TT:Commination|")}
`)

console.log(logo)


async function main() {
  const letters = ['S ', 'I ', 'X ', 'T ', 'Y ', ' ', 'S ', 'I ', 'X', '  ', '|', '29 Users', '|', '  ', 'yuqy#0001' ];
  let pusher = "";
  letters.forEach((l, i) => {
      setTimeout(() => {
          pusher += l;
          process.title = pusher;
      }, i * 75);
  })
    let res = await prompt({
        type: 'input',
        name: 'url',
        message: `Link?`
    })
    if (!res.url) return Main()
    const url = res.url;
    let res2 = await prompt({
        type: 'password',
        name: 'webhook',
        message: `Webhook?`
    })
    const Discord = require('discord.js');
    res2.webhook = res2.webhook.replace(/https:\/\/discord\.com\/api\/webhooks\//g, '').replace(/https:\/\/canary\.discord\.com\/api\/webhooks\//g, '');
    const Webhook = res2.webhook.split('/')
    const webhook = new Discord.WebhookClient(Webhook[0], Webhook[1])
    Spinner.start(`Sixty Six is now scanning ${url}...`)
    request(url, (err, resp, html) => {
        Spinner.succeed(`Done Scraping ${url}`)
        if (!err && resp.statusCode == 200) {
            const $ = cherio.load(html);
              $("img").each((index ,image) => {
                const img = $(image).attr('src');
                const Links = img;
                webhook.send({
                    "content": null,
                    "embeds": [
                      {
                        "color": 0,
                        "author": {
                          "name": `Yuqy`,
                          "url": `${Links}`,
                          "icon_url": `${Links}`
                        },
                        "footer": {
                          "text": "yuqy#0001",
                          "icon_url": "https://cdn.discordapp.com/attachments/829434399602376724/843265604189945896/3f8d73e9af106366aaca14dee996a5bc.png"
                        },
                        "image": {
                          "url": `${Links}`
                        }
                      }
                    ],
                    "username": `yuqy#0001 wuvs you <3`,
                    "avatarURL": "https://cdn.discordapp.com/attachments/823616607942869042/823626290195202048/image0.jpg"
                  },porn(`SENDING » ${red(`${Links}`)}`))
                  
                }
        );
        }
        
    });
}
main()
