info = {
  // F O N T S
  //only accepts font from google fonts
  fonts: ['<link rel="preconnect" href="https://fonts.googleapis.com">', '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'],

  // N A V    B A R
  navData: {
    leftPart: {
      logo: "/assets/logo.png", //Must be a Image
      text1: "ASTRAL",
      text2: "CLIENT",
    },
    rightPart: {
      //Structure {<display text>: "<redirecrt link>"}  if <display text> has a space or . then use it like this: {"example TXT": "<redirect link>"}
      //DONT PUT FULL LINK LIKE "https://astralclient.net/discord" just put the part after the "/" like "/discord"
      Home: "/index.html",
      Download: "/download.html",
      Discord: "/discord.html",
      FAQ: "/faq.html",
      Donate: "/donate.html",
    },
  },

  // F O O T E R
  footerData: {
    main: {
      logo: "/assets/logo.png", //Must be a Image
      text: "Astral Client",
      copyright: "Copyright @ Astral Client",
    },

    //Structure {<display text>: "<redirecrt link>"}  if <display text> has a space or . then use it like this: {"example TXT": "<redirect link>"}
    //Both full link and pathname works here. Either "https://astralclient.net/home" or "/home"
    linksLeft: {
      Discord: "/discord.html",
      Download: "/download.html",
      Applications: "https://docs.google.com/forms/d/e/1FAIpQLSfjYz531HX8C3WDW6Sn8CB9Q7lYnCcIDZADOjW9keHhnPr8_w/viewform?pli=1",
      Donate: "/donate.html",
    },
    linksRight: {
      "Privacy Policy": "/privacy.html",
      Youtube: "https://www.youtube.com/AstralClient",
      Twitter: "https://twitter.com/AstralClient",
    },
  },

  // H O M E . H T M L
  homeData: {
    main: {
      image: "/assets/display.png",
      texts: {
        txt1: "#1 CLIENT FOR BEDROCK",
        txt2: "The future of Bedrock Edition",
        txt3: "An all-in-one optimization client-resourcepack for MC:BE.",
      },
      keypoints: ["Multi-platform support", "Created for pvp"],
      keypointsImg: "/assets/keypoints.png",
      button: {
        text: "Downloads",
        link: "/download.html",
      },
      button1: {
        text: "Join Discord",
        link: "/discord.html",
      },
    },
    features: [
      {
        title: "Sleek UI",
        image: "/assets/ft1.png",
        description: "The best UI you can get from a bedrock client.",
      },
      {
        title: "Countless Mods",
        image: "/assets/ft2.png",
        description: "To help with pvp needs and survival needs.",
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
        text: "Download V7 Demo 4 (AD)",
        link: "https://link-center.net/472790/astral-client-v7-demo-4",
      },
      {
        text: "Download V7 Demo 4 (Discord)",
        link: "https://astralclient.net/discord",
      },
      {
        text: "Download V7 Demo 3 (AD)",
        link: "https://direct-link.net/472790/astral-client-v7-demo-3",
      },
      {
        text: "Download V7 Demo 3 (Discord)",
        link: "https://astralclient.net/discord",
      },
    ],
    tutorial: {
      icon: "/assets/tutorial.png",
      text: "Tutorial",
      redirect: "https://youtu.be/2nI49cQnuI8",
    },
  },

  // F A Q . H T M L
  faqData: {
    imgs: {
      open: "/assets/faqopen.png",
      close: "/assets/faqclose.png",
    },
    faqs: [
      {
        header: "What are the current supported platforms?",
        desc: "We support Android, iOS and Windows 10. Unfortunately for V4 and above, consoles are not yet supported as the Java UI will break their game.",
      },
      {
        header: "Is Astral Client a hack?",
        desc: "No, Astral Client is not a hack client and will never be one.",
      },
      {
        header: "Can I use Astral Client on any server?",
        desc: "Yes, of course!",
      },
      {
        header: "What versions of MC:BE does Astral support?",
        desc: "We support versions 1.16 and above of Minecraft Bedrock Edition.",
      },
      {
        header: "Is it free?",
        desc: "Yes, Astral Client is free and will always be free.",
      },
      {
        header: "Can I use my own texture packs?",
        desc: "Yes, you can use your own texture/resource pack. If you wish to use Astral's GUI textures, then put your texture/resource pack below Astral and if you wish not to use Astral's GUI textures and use yours, then put your texture/resource pack above Astral.",
      },
    ],
  },
};
