const config = require("@root/config");

module.exports = {
  ADMIN: {
    name: "Admin",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fgoogle%2Fnoto-emoji-objects%2F1024%2F62971-gear-icon.png&f=1&nofb=1&ipt=03ddc4641d852bbd139a7ec78d084c6ec1686dd1e8adf4454a1ccbbf27736204&ipo=images",
    emoji: "⚙️",
  },
  AUTOMOD: {
    name: "Automod",
    enabled: config.AUTOMOD.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdiscord.bots.gg%2Fimg%2Flogo_transparent_coloured.png&f=1&nofb=1&ipt=2367e2e2052e75b6871450b5bae04343a1291d92deb0cd60c5c216ca6140b32a&ipo=images",
    emoji: "🤖",
  },
  ANIME: {
    name: "Anime",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F474x%2Fbb%2F0b%2Fd0%2Fbb0bd0e0477fadc41393c7f64571e321.jpg&f=1&nofb=1&ipt=b4e6774134bfd0336d3a10d7ad1ec3969bf9f4ba984ba03aff626d2df4228aac&ipo=images",
    emoji: "🎨",
  },
  ECONOMY: {
    name: "Economy",
    enabled: config.ECONOMY.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwhatemoji.org%2Fwp-content%2Fuploads%2F2020%2F07%2FMilky-Way-Emoji.png&f=1&nofb=1&ipt=446405ce9e8bbdc8fc601f4a191c4ad241ce5cf1bc171d756527d7cd72b1f0e9&ipo=images",
    emoji: "🌌",
  },
  FUN: {
    name: "Fun",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.whatemoji.org%2Fwp-content%2Fuploads%2F2020%2F07%2FPool-8-Ball-Emoji.png&f=1&nofb=1&ipt=535bf533344395d030ad2b3fb147357e409f63635ea8de246986e476d1fea4fd&ipo=images",
    emoji: "😂",
  },
  GIVEAWAY: {
    name: "Giveaway",
    enabled: config.GIVEAWAYS.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwhatemoji.org%2Fwp-content%2Fuploads%2F2020%2F07%2FParty-Popper-Emoji.png&f=1&nofb=1&ipt=77759b5ed3093ffbee01edd6e8f207f4327ad3c0b500b878c770e504d6e50c93&ipo=images",
    emoji: "🎉",
  },
  IMAGE: {
    name: "Image",
    enabled: config.IMAGE.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwhatemoji.org%2Fwp-content%2Fuploads%2F2020%2F07%2FFramed-Picture-Emoji.png&f=1&nofb=1&ipt=1957dba0f9bd03237937d5e6aaae88c8fda8f48df005b8ae838b16f79992b3bd&ipo=images",
    emoji: "🖼️",
  },
  INVITE: {
    name: "Invite",
    enabled: config.INVITE.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwhatemoji.org%2Fwp-content%2Fuploads%2F2020%2F07%2FIncoming-Envelope-Emoji-1080x1080.png&f=1&nofb=1&ipt=c487722cee19d264750a476b25d61097c1d7a4e2d91692b09523facbfff03968&ipo=images",
    emoji: "📨",
  },
  INFORMATION: {
    name: "Information",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-00.iconduck.com%2Fassets.00%2Fplacard-emoji-402x512-9f5t7844.png&f=1&nofb=1&ipt=966bd99c7d9baaa91896e7b4cc42058db7adb139ac2ab5550a674695d7bcb9f2&ipo=images",
    emoji: "🪧",
  },
  MODERATION: {
    name: "Moderation",
    enabled: config.MODERATION.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwhatemoji.org%2Fwp-content%2Fuploads%2F2020%2F07%2FHammer-Emoji-768x768.png&f=1&nofb=1&ipt=e4481cd0eae4c48e2f1ab14d0aa810c8948866d6a552cb4e0d4676f16a6988d3&ipo=images",
    emoji: "🔨",
  },
  MUSIC: {
    name: "Music",
    enabled: config.MUSIC.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.emojiterra.com%2Fopenmoji%2Fv12.2%2F512px%2F1f3b9.png&f=1&nofb=1&ipt=1565f5d7ca301c661257181d6db0482a80c48654cee184240f1ad170f5ccad74&ipo=images",
    emoji: "🎵",
  },
  OWNER: {
    name: "Owner",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwhatemoji.org%2Fwp-content%2Fuploads%2F2020%2F07%2FLocked-With-Key-Emoji.png&f=1&nofb=1&ipt=26f52b597295b4c5e0485c33b8bf64b299699134cb6c4e3ac1dd3112bacb1ee7&ipo=images",
    emoji: "🤴",
  },
  SOCIAL: {
    name: "Social",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.whatemoji.org%2Fwp-content%2Fuploads%2F2020%2F07%2FBusts-In-Silhouette-Emoji.png&f=1&nofb=1&ipt=4c22e64e612edd9223b1f3a99553dbb99bd27de1e50276748dc28cf7be1c1169&ipo=images",
    emoji: "🫂",
  },
  STATS: {
    name: "Statistics",
    enabled: config.STATS.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.emoji.co.uk%2Ffiles%2Fphantom-open-emojis%2Fobjects-phantom%2F12884-chart-with-upwards-trend.png&f=1&nofb=1&ipt=0dd55158c0060abbe14bd69959c6d8ed0f03c2ed7f6105959b86a013784b36a5&ipo=images",
    emoji: "📈",
  },
  SUGGESTION: {
    name: "Suggestion",
    enabled: config.SUGGESTIONS.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.emojiterra.com%2Fgoogle%2Fandroid-11%2F512px%2F1f4dd.png&f=1&nofb=1&ipt=f2fdf77143052c771d862c5b83cb478b5b8c21042450eb01c274a4b30a5424bb&ipo=images",
    emoji: "📝",
  },
  TICKET: {
    name: "Ticket",
    enabled: config.TICKET.ENABLED,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwhatemoji.org%2Fwp-content%2Fuploads%2F2020%2F07%2FTicket-Emoji.png&f=1&nofb=1&ipt=6357c1cb7dab4be575423d79c71a74e924d4aed44b9e37c15c1dc0f7c31c16cd&ipo=images",
    emoji: "🎫",
  },
  UTILITY: {
    name: "Utility",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F54336%2Fhammer-and-wrench-emoji-clipart-md.png&f=1&nofb=1&ipt=25aab52b8e20c87b06283bf1014ad1d1bcfa397b0b26c237394fcba038152d0d&ipo=images",
    emoji: "🛠",
  },
};
