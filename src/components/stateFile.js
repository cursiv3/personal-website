module.exports = {
    currentDisplay: 'Landing',
    navBar: 'navEntry',
    about: {
        media: require('../../public/coreyPort.jpg'),
        text: [
             
        `My name is Corey Lewis.  I graduated from Portland State University in 2014 with a B.S. in Biological Science. I have spent the past six months completing an
        internship with a Portland, OR start-up.  This was an amazing experience (as up to this point I had only worked solo and never on an actual project).  Technologies utilized
        were JavaScript, jQuery, bootstrap, node, express/koa, mongoDB, and most recently we began using ReactJS, which I have been enjoying (and I used to build this site).`,

        `I started learning programming in January of 2016 as my search for employment in the field of Biology was not yielding results. A friend recommended "Learn Python the 
        Hard Way" by Zed. A. Shaw.  I began to complete coding challenges on sites like HackerRank.com to gain experience using Python, and I ended up dipping my toes in the
        waters of C++, C#, Java, SQL. I will admit I didn't believe I could ever get work as a programmer without a C.S. degree, but I enjoyed working with the languages so much
        that I simply kept at it, and in October of 2016 I landed a web dev internship with only a few months exposure to JavaScript.`,

        `I am also a soccer coach, a certified USSF Soccer referee, guitarist of 17 years and counting, and a video game enthusiast.`,
                ],

    },
    portfolio: [
            { 
                link: 'http://codepen.io/cursiv3/pen/qqMMpv/',
                img: require('../../public/twitch.png'),
                text: `In this challenge I learned to query the Twitch.tv 
                API, show if a channel is online, and if so what they're 
                streaming, or a placeholder if the user has closed their 
                account or it doesn't exist.`,
            },
            { 
                link: 'http://codepen.io/cursiv3/pen/PbKPEv',
                img: require('../../public/wiki.png'),
                text: `In this challenge  with this I simply needed to query 
                the wikipedia API based on the string typed into the search 
                bar and display matches. I say "simply" but their API is not 
                very intuitive.`,
            },
            { 
                link: 'http://codepen.io/cursiv3/pen/ozdrzG',
                img: require('../../public/weather.png'),
                text: `In this challenge I learned how to grab geolocation data
                using an IP address, then get weather data from a weather API.`,
            },
            { 
                link: 'http://codepen.io/cursiv3/pen/qaVQqv',
                img: require('../../public/quote.png'),
                text: `This was my first time working with an API. It's a simple 
                random quote generator with a button to share the quote to twitter.`,
            },
            { 
                link: 'http://codepen.io/cursiv3/pen/NRGZPV',
                img: require('../../public/personalsite.png'),
                text: `This was my first time working with bootstrap. The 
                challenge was to build a very simple personal website.`,
            },
            { 
                link: 'http://codepen.io/cursiv3/pen/pEJmL',
                img: require('../../public/curie.png'),
                text: `This was the first front end challege presented by 
                freecodecamp.com.  This was also the first front end page I ever
                put together.`,
            },
        ],
    music: {
        media: '',
        text: [],   
    },
    contact: {
        media: '',
        text: [],
    }
}