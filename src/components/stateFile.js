module.exports = {
    currentDisplay: 'landing',
    navBar: 'navEntry',
    about: {
        media: require('../../public/coreyPort.jpg'),
        media2: require('../../public/coreysoccer.jpg'),
        media3: require('../../public/coreychewie.jpg'),
        media4: require('../../public/corey2.jpg'),
    },
    navBtn: [
        'navBtn navHov',
        'navBtn navHov',
        'navBtn navHov',
        'navBtn navHov',
        'navBtn navHov',
    ],
    portfolio: [
        {
                id: 7, 
                link: 'https://codepen.io/cursiv3/pen/dWGqYE',
                img: require('../../public/locationPage.png'),
                text: `This was a solo project I was given at the end of my
                internship with Transflection. It was a mock up for a detail
                view that could be used for the different client locations.`,
            },
            {
                id: 6, 
                link: 'http://codepen.io/cursiv3/pen/qqMMpv/',
                img: require('../../public/twitch.png'),
                text: `In this challenge I learned to query the Twitch.tv 
                API, show if a channel is online, and if so what they're 
                streaming, or a placeholder if the user has closed their 
                account or it doesn't exist.`,
            },
            { 
                id: 5,
                link: 'http://codepen.io/cursiv3/pen/PbKPEv',
                img: require('../../public/wiki.png'),
                text: `In this challenge I simply needed to query 
                the wikipedia API based on the string typed into the search 
                bar and display matches. Their API is not 
                very intuitive.`,
            },
            { 
                id: 4,
                link: 'http://codepen.io/cursiv3/pen/ozdrzG',
                img: require('../../public/weather.png'),
                text: `In this challenge I learned how to grab geolocation data
                using an IP address, then get weather data from a weather API.`,
            },
            { 
                id: 3,
                link: 'http://codepen.io/cursiv3/pen/qaVQqv',
                img: require('../../public/quote.png'),
                text: `This was my first time working with an API. It's a simple 
                random quote generator with a button to share the quote to twitter.`,
            },
            { 
                id: 2,
                link: 'http://codepen.io/cursiv3/pen/NRGZPV',
                img: require('../../public/personalsite.png'),
                text: `This was my first time working with bootstrap. The 
                challenge was to build a very simple personal website.`,
            },
            { 
                id: 1,
                link: 'http://codepen.io/cursiv3/pen/pEJmLK',
                img: require('../../public/curie.png'),
                text: `This was the first front end challege presented by 
                freecodecamp.com.  This was also the first front end page I ever
                put together.`,
            },
        ],
    portfolioIntro: `I began to work through the curriculum at freecodecamp.com 
                in July of 2016. Each section was instruction and algorithm challenges 
                to get you thinking about complex tasks using the different tools available 
                in JavaScript. These challenges were the culmination of each section.  I've 
                linked these to show more where I came from rather than what I can do. The
                code for this site is `,
    music: [],
    contact: {
        media: '',
        text: [],
    },
    resume: '../../public/coreyResumeIcons.jpg',
}