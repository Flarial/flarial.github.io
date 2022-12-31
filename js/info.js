info = {
  // F O N T S
  //only accepts font from google fonts
  fonts: ['<link rel="preconnect" href="https://fonts.googleapis.com">', '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'],

  // N A V    B A R
  navData: {
    leftPart: {
      logo: "/assets/logo.png", //Must be a Image
      text1: "Flarial",
      text2: "Client",
    },
    rightPart: {
      //Structure {<display text>: "<redirecrt link>"}  if <display text> has a space or . then use it like this: {"example TXT": "<redirect link>"}
      //DONT PUT FULL LINK LIKE "https://astralclient.net/discord" just put the part after the "/" like "/discord"
      Home: "/index.html",
      Download: "/download.html",
      Discord: "/discord.html",
      FAQ: "/faq.html",
    },
  },

  // F O O T E R
  footerData: {
    main: {
      logo: "/assets/logo.png", //Must be a Image
      text: "Flarial Client",
      copyright: "Copyright © Flarial",
    },

    //Structure {<display text>: "<redirecrt link>"}  if <display text> has a space or . then use it like this: {"example TXT": "<redirect link>"}
    //Both full link and pathname works here. Either "https://astralclient.net/home" or "/home"
    linksLeft: {
      Discord: "/discord.html",
      Download: "/download.html",
    },
    linksRight: {
      YouTube: "https://youtube.com/@Flarial",
      Twitter: "https://twitter.com/AstralClient",
    },
  },

  // H O M E . H T M L
  homeData: {
    main: {
      image: "/assets/display.png",
      texts: {
        txt1: "#1 CLIENT FOR MINECRAFT",
        txt2: "The Future of Bedrock Edition",
        txt3: "A Utility Mod for Minecraft: Windows 10 & 11 Edition",
      },
      keypoints: ["Multi-Version Support", "Utility Mods for PvP"],
      keypointsImg: "/assets/keypoints.png",
      button: {
        text: "Installation",
        link: "/download.html",
      },
      button1: {
        text: "Discord",
        link: "/discord.html",
      },
    },
    features: [
      {
        title: "Sleek UI",
        image: "/assets/ft1.png",
        description: "A minimal and clean user interface.",
      },
      {
        title: "Countless Mods",
        image: "/assets/ft2.png",
        description: "To help with survival and PvP needs.",
      },
      {
        title: "User Friendly",
        image: "/assets/ft3.png",
        description: "Improves user experience as much as possible.",
      },
    ],
  },

  // D O W N L O A D . H T M L
  downloadData: {
    downloadButton: "/assets/dbt.png",
    downloads: [
      {
        text: "Flarial Client - Minecraft v1.19.51",
        link: "https://discord.com/invite/UJ8xHU2jQy",
      },
    ],
  },

  // F A Q . H T M L
  faqData: {
    imgs: {
      open: "/assets/faqopen.png",
      close: "/assets/faqclose.png",
    },
    faqs: [
      {
        header: "What platforms are supported?",
        desc: "We only support the Windows 10 and 11 operating systems.",
      },
      {
        header: "Is Flarial Client a cheat?",
        desc: "No, Flarial Client is not and never will be a cheating software.",
      },
      {
        header: "Is Flarial Client free?",
        desc: "Yes, it is free however we will be releasing a monthly subscription to Flarial+ to those who want more advanced features but the free alternative will always exist.",
      },
      {
        header: "Can you use Flarial Client on servers?",
        desc: "Yes, you can use it on any server that supports your Minecraft version.",
      },
      {
        header: "Can you use your own resource packs?",
        desc: "Yes, you can use your own resource packs.",
      },
    ],
  },
};
