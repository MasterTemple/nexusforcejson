const fs = require(`fs`)
const scripts = fs.readdirSync('./scripts').filter(file => file.endsWith('.js'));

for (const file of scripts) {
    const command = require(`./scripts/${file}`);
    command.execute(fs)
}

