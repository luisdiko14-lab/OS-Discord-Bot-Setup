// ===============================
//  Discord OS Setup Bot
// ===============================

const os = require("os");
const process = require("process");
require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  PermissionsBitField
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent
  ]
});

// ======================================
// Bot Ready Log
// ======================================
client.on("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

// ======================================
// Command Handler
// ======================================
client.on("messageCreate", async (msg) => {
  if (!msg.content.startsWith("!")) return;

  const args = msg.content.trim().split(" ");
  const cmd = args.shift().toLowerCase();

  // ===============================
  // COMMAND: !setupOS
  // Creates category, channels, roles
  // ===============================
  if (cmd === "!setupos") {
    const guild = msg.guild;

    // Create main role Os-Users if missing
    let osUsersRole = guild.roles.cache.find(r => r.name === "Os-Users");
    if (!osUsersRole) {
      osUsersRole = await guild.roles.create({
        name: "Os-Users",
        color: "Blue",
        reason: "Role for OS members"
      });
    }

    // Create Os-Designer role
    if (!guild.roles.cache.find(r => r.name === "Os-Designer")) {
      await guild.roles.create({
        name: "Os-Designer",
        color: "Purple"
      });
    }

    // Create Admin role
    if (!guild.roles.cache.find(r => r.name === "Os-Admin")) {
      await guild.roles.create({
        name: "Os-Admin",
        color: "Red"
      });
    }

    // Create category
    let category = guild.channels.cache.find(
      c => c.name === "OS" && c.type === 4
    );

    if (!category) {
      category = await guild.channels.create({
        name: "OS",
        type: 4, // Category
      });
    }

    // Channels to create
    const channels = [
      "os-general",
      "os-dev",
      "os-showcase",
      "os-support"
    ];

    for (const ch of channels) {
      if (!guild.channels.cache.find(c => c.name === ch)) {
        await guild.channels.create({
          name: ch,
          type: 0,
          parent: category.id
        });
      }
    }

    msg.reply("✅ OS Setup complete!");
  }

  // ===============================
  // COMMAND: !categoryPerms
  // Locks category so only Os-Users can view
  // ===============================
  if (cmd === "!categoryperms") {
    const categoryName = args[0];
    if (!categoryName)
      return msg.reply("❌ Usage: `!categoryPerms OS`");

    const guild = msg.guild;

    // Find category
    const category = guild.channels.cache.find(
      c => c.type === 4 && c.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (!category)
      return msg.reply(`❌ Category **${categoryName}** not found.`);

    // Create or find Os-Users role
    let osUsers = guild.roles.cache.find(r => r.name === "Os-Users");
    if (!osUsers) {
      osUsers = await guild.roles.create({
        name: "Os-Users",
        color: "Blue"
      });
    }

    try {
      // Set perms
      await category.permissionOverwrites.set([
        {
          id: guild.roles.everyone.id,
          deny: [PermissionsBitField.Flags.ViewChannel]
        },
        {
          id: osUsers.id,
          allow: [PermissionsBitField.Flags.ViewChannel]
        }
      ]);

      msg.reply(`🔒 Category **${category.name}** locked.\nOnly **Os-Users** can view.`);
    } catch (err) {
      console.error(err);
      msg.reply("❌ Failed to modify permissions. Check bot perms.");
    }
  }

  // ===============================
  // COMMAND: !checkCPUMemoryUsage
  // Shows CPU & RAM usage for bot
  // ===============================
  if (cmd === "!checkcpumemoryusage") {

    const memoryUsed = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
    const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2);
    const freeMem = (os.freemem() / 1024 / 1024).toFixed(2);
    const cpuCount = os.cpus().length;

    msg.reply(
      `📊 **Bot System Usage**\n` +
      `🧠 RAM Used: **${memoryUsed} MB**\n` +
      `💾 Total System RAM: **${totalMem} MB**\n` +
      `🪫 Free RAM: **${freeMem} MB**\n` +
      `⚙️ CPU Cores: **${cpuCount}**`
    );
  }
});

// ======================================
client.login(process.env.BOT_TOKEN);
