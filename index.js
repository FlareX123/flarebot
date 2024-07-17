<<<<<<< HEAD
ECHO is on.
const { Client, Intents, MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const TOKEN = 'MTI2MjA3NjA5NTM0ODYwNTEwMA.GHHyxU.06RDotuF_CpXBslFQYR8NorTICdLXJXLZ8zHec';
const CHANNEL_ID = '1254457237347373067'; // Replace with your specific channel ID

// Event: When the bot is ready
client.once('ready', () => {
    const border = '+'.padEnd(52, '-') + '+';
    const message = `\x1b[35m${border}\n|  Bot Online: ${client.user.tag}  |\n${border}\x1b[0m`;
    console.log(message);
});

// Command: /get
client.on('messageCreate', async (message) => {
    if (message.channel.id === CHANNEL_ID && message.content.toLowerCase() === '/get' && !message.author.bot) {
        const embed = new MessageEmbed()
            .setTitle('Select an Option')
            .setDescription('Choose one of the following options:')
            .setColor('#5865F2');

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select_option')
                    .setPlaceholder('Select an option')
                    .addOptions([
                        {
                            label: 'Option A',
                            description: 'Description for option A',
                            value: 'option_a',
                        },
                        {
                            label: 'Option B',
                            description: 'Description for option B',
                            value: 'option_b',
                        },
                        {
                            label: 'Option C',
                            description: 'Description for option C',
                            value: 'option_c',
                        },
                        {
                            label: 'Option D',
                            description: 'Description for option D',
                            value: 'option_d',
                        },
                    ])
            );

        const messageOptions = { embeds: [embed], components: [row] };
        const reply = await message.channel.send(messageOptions);

        // Automatically delete the command message
        message.delete().catch(console.error);

        const filter = (interaction) => {
            return interaction.user.id === message.author.id && interaction.customId === 'select_option';
        };

        const collector = reply.createMessageComponentCollector({ filter, time: 60000, max: 1 });

        collector.on('collect', (interaction) => {
            let response;
            let imageUrl;
            switch (interaction.values[0]) {
                case 'option_a':
                    response = 'You selected option A!';
                    imageUrl = 'https://cdn.discordapp.com/attachments/1253022355928907776/1258879589372002405/sef.png?ex=6689a67a&is=668854fa&hm=bd85f2581583783c5e2059c1e62efd0eb1dd55f4d596138894ad965d81856bb9';
                    break;
                case 'option_b':
                    response = 'You selected option B!';
                    imageUrl = 'https://cdn.discordapp.com/attachments/1253022355928907776/1258879589372002405/sef.png?ex=6689a67a&is=668854fa&hm=bd85f2581583783c5e2059c1e62efd0eb1dd55f4d596138894ad965d81856bb9';
                    break;
                case 'option_c':
                    response = 'You selected option C!';
                    imageUrl = 'https://cdn.discordapp.com/attachments/1253022355928907776/1258879589372002405/sef.png?ex=6689a67a&is=668854fa&hm=bd85f2581583783c5e2059c1e62efd0eb1dd55f4d596138894ad965d81856bb9';
                    break;
                case 'option_d':
                    response = 'You selected option D!';
                    imageUrl = 'https://cdn.discordapp.com/attachments/1253022355928907776/1258879589372002405/sef.png?ex=6689a67a&is=668854fa&hm=bd85f2581583783c5e2059c1e62efd0eb1dd55f4d596138894ad965d81856bb9';
                    break;
                default:
                    response = 'Invalid option!';
                    break;
            }

            const embedResponse = new MessageEmbed()
                .setTitle('Your Selection')
                .setDescription(response)
                .setColor('#5865F2');

            if (imageUrl) {
                embedResponse.setImage(imageUrl);
            }

            interaction.reply({ embeds: [embedResponse], ephemeral: true });

            // Delete the bot's message with options
            reply.delete().catch(console.error);
        });

        collector.on('end', () => {
            // If collector ends (max interactions reached), delete the bot's message with options
            reply.delete().catch(console.error);
        });
    }

    // Command: /pay
    if (message.channel.id === CHANNEL_ID && message.content.toLowerCase() === '/pay' && !message.author.bot) {
        // Check if there is an attachment
        if (message.attachments.size === 0) {
            return message.reply('Please attach a file to the command.');
        }

        // Respond with "Hello"
        message.reply('Hello');
        
        // Do not delete the command message or attachment
    }
});

// Login to Discord with your app's token
client.login(TOKEN);
=======
ECHO is on.
const { Client, Intents, MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const TOKEN = 'YOUR_BOT_TOKEN';
const CHANNEL_ID = '1254457237347373067'; // Replace with your specific channel ID

// Event: When the bot is ready
client.once('ready', () => {
    const border = '+'.padEnd(52, '-') + '+';
    const message = `\x1b[35m${border}\n|  Bot Online: ${client.user.tag}  |\n${border}\x1b[0m`;
    console.log(message);
});

// Command: /get
client.on('messageCreate', async (message) => {
    if (message.channel.id === CHANNEL_ID && message.content.toLowerCase() === '/get' && !message.author.bot) {
        const embed = new MessageEmbed()
            .setTitle('Select an Option')
            .setDescription('Choose one of the following options:')
            .setColor('#5865F2');

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select_option')
                    .setPlaceholder('Select an option')
                    .addOptions([
                        {
                            label: 'Option A',
                            description: 'Description for option A',
                            value: 'option_a',
                        },
                        {
                            label: 'Option B',
                            description: 'Description for option B',
                            value: 'option_b',
                        },
                        {
                            label: 'Option C',
                            description: 'Description for option C',
                            value: 'option_c',
                        },
                        {
                            label: 'Option D',
                            description: 'Description for option D',
                            value: 'option_d',
                        },
                    ])
            );

        const messageOptions = { embeds: [embed], components: [row] };
        const reply = await message.channel.send(messageOptions);

        // Automatically delete the command message
        message.delete().catch(console.error);

        const filter = (interaction) => {
            return interaction.user.id === message.author.id && interaction.customId === 'select_option';
        };

        const collector = reply.createMessageComponentCollector({ filter, time: 60000, max: 1 });

        collector.on('collect', (interaction) => {
            let response;
            let imageUrl;
            switch (interaction.values[0]) {
                case 'option_a':
                    response = 'You selected option A!';
                    imageUrl = 'https://cdn.discordapp.com/attachments/1253022355928907776/1258879589372002405/sef.png?ex=6689a67a&is=668854fa&hm=bd85f2581583783c5e2059c1e62efd0eb1dd55f4d596138894ad965d81856bb9';
                    break;
                case 'option_b':
                    response = 'You selected option B!';
                    imageUrl = 'https://cdn.discordapp.com/attachments/1253022355928907776/1258879589372002405/sef.png?ex=6689a67a&is=668854fa&hm=bd85f2581583783c5e2059c1e62efd0eb1dd55f4d596138894ad965d81856bb9';
                    break;
                case 'option_c':
                    response = 'You selected option C!';
                    imageUrl = 'https://cdn.discordapp.com/attachments/1253022355928907776/1258879589372002405/sef.png?ex=6689a67a&is=668854fa&hm=bd85f2581583783c5e2059c1e62efd0eb1dd55f4d596138894ad965d81856bb9';
                    break;
                case 'option_d':
                    response = 'You selected option D!';
                    imageUrl = 'https://cdn.discordapp.com/attachments/1253022355928907776/1258879589372002405/sef.png?ex=6689a67a&is=668854fa&hm=bd85f2581583783c5e2059c1e62efd0eb1dd55f4d596138894ad965d81856bb9';
                    break;
                default:
                    response = 'Invalid option!';
                    break;
            }

            const embedResponse = new MessageEmbed()
                .setTitle('Your Selection')
                .setDescription(response)
                .setColor('#5865F2');

            if (imageUrl) {
                embedResponse.setImage(imageUrl);
            }

            interaction.reply({ embeds: [embedResponse], ephemeral: true });

            // Delete the bot's message with options
            reply.delete().catch(console.error);
        });

        collector.on('end', () => {
            // If collector ends (max interactions reached), delete the bot's message with options
            reply.delete().catch(console.error);
        });
    }

    // Command: /pay
    if (message.channel.id === CHANNEL_ID && message.content.toLowerCase() === '/pay' && !message.author.bot) {
        // Check if there is an attachment
        if (message.attachments.size === 0) {
            return message.reply('Please attach a file to the command.');
        }

        // Respond with "Hello"
        message.reply('Hello');
        
        // Do not delete the command message or attachment
    }
});

// Login to Discord with your app's token
client.login(TOKEN);
>>>>>>> 79f134b (Initial commit)
