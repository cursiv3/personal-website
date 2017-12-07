module.exports = {
  about: {
    coreyPortrait: require("../public/coreyPortraitPNG2.png"),
    coreySoccerImg: require("../public/coreysoccer.jpg"),
    coreyChewieImg: require("../public/coreychewie.jpg"),
    coreyMascotImg: require("../public/corey2.jpg")
  },
  portfolioIntro: `I began to work through the curriculum at freecodecamp.com 
  in July of 2016. Each section was instruction and algorithm challenges 
  to get you thinking about complex tasks using the different tools available 
  in JavaScript. These challenges were the culmination of each section.  I've 
  linked these to show more where I came from. The
  code for this site is `,
  portfolio: [
    {
      id: 9,
      link: "https://codepen.io/cursiv3/pen/OjQOKx?editors=0010",
      img: require("../public/weatherApp.jpg"),
      text: `A weather app built in react that queries a geolocation API using the user's IP, then uses that data to query the Open Weather API.`
    },
    {
      id: 8,
      link: "http://develop.skillsai.com",
      img: require("../public/skillsAi.jpg"),
      text: `I designed and styled the entire new site for SkillsAI.`
    },
    {
      id: 7,
      link: "https://codepen.io/cursiv3/pen/KXBPXz",
      img: require("../public/leaderBoard.jpg"),
      text: `Leaderboard mock up for a game.`
    },
    {
      id: 6,
      link: "https://codepen.io/cursiv3/pen/xLKJje",
      img: require("../public/modernPage.jpg"),
      text: `I built this in a few hours as a simple portfolio addition.`
    },
    {
      id: 5,
      link: "https://codepen.io/cursiv3/pen/GERqGP",
      img: require("../public/calc.png"),
      text: `This was a freecodecamp.com front end challenge.`
    },
    {
      id: 4,
      link: "https://codepen.io/cursiv3/pen/dWGqYE",
      img: require("../public/locationPage.jpg"),
      text: `This was a solo project I was given at the end of my
                    internship with Transflection.`
    },
    {
      id: 3,
      link: "http://codepen.io/cursiv3/pen/qqMMpv/",
      img: require("../public/twitch.jpg"),
      text: `In this challenge I learned to query the Twitch.tv 
                    API, show if a channel is online, and if so what they're 
                    streaming.`
    },
    {
      id: 2,
      link: "http://codepen.io/cursiv3/pen/PbKPEv",
      img: require("../public/wiki.jpg"),
      text: `In this challenge I simply needed to query 
                    the wikipedia API based on the string typed into the search 
                    bar and display matches. Their API is not 
                    very intuitive.`
    },
    {
      id: 1,
      link: "http://codepen.io/cursiv3/pen/qaVQqv",
      img: require("../public/quote.jpg"),
      text: `This was my first time working with an API. It's a simple 
                    random quote generator with a button to share the quote to twitter.`
    }
  ],
  resume: {
    resume: require("../public/coreyResume.jpg"),
    resumeLink: "https://drive.google.com/open?id=0Bw92SM4ozWAJbWxzcHFVZ0JvVFE"
  }
};
