export const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

export const footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/muhammad-muneeb-33660a143/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/muneeb_20.01/",
          icon: "/static/icons/instagram.svg",
          leavesWebsite: true,
        },
        {
          name: "+923314588024",
          link: "https://wa.me/923314588024",
          icon: "/static/icons/phone.svg",
          leavesWebsite: true,
        },
        {
          name: "info-muneeb@proton.me",
          link: "",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "braydenw",
    paypal: "braydentw",
    message: "I appreciate your support very much! 💙",
  },
};
