// adapted from: https://github.com/kubowania/buzzfeed-clone-javascript

const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const recs = {
    'pop': ['post-teen pop', 'neo mellow', 'indie poptimism', 'dream pop', 'alt-z'],
    'country': ['country road', 'nl folk', 'mellow gold', 'redneck', 'red dirt'],
    'dance': ['brostep', 'destroy techno', 'bubble trance', 'drift phonk', 're:techno'],
    'indie': ['small room',  'lo-fi indie', 'shoegaze', 'neo-pagan', 'baroque pop'],
    'rap': ['conscious hip hop', 'experimental hip hop', 'crunk', 'drain', 'dark trap'],
    'rock': ['jangle pop', 'freakbeat', 'irish rebel song', 'anti-folk', 'souldies']
}

const playlists = {
    'post-teen pop': '10FCW9lj0NdeoYI5VVvVtY', 
    'neo mellow': '1u4LMI2YFyDRBtCJ00rbzm',
    'indie poptimism': '7nHgmv7uyIA1KHj6qTttjH', 
    'dream pop': '2A5zN7OTP4n64gEtsFEO2Z', 
    'alt-z': '6TySxsLwRVYqEh7LZ6fyq8',
    'country road': '4fj8PNbbwGXBWHKodGQhfD', 
    'nl folk': '3yP7LJ0wT19xpeIJxJ7GJF', 
    'mellow gold': '49vErWAk7BLsLccmRxngH3', 
    'redneck': '2KWsDttfIMjLq1rpyxTQX8', 
    'red dirt': '208eKWeHXifDir7qV5DQYB',
    'brostep': '6dvgLyeXG3HLGqtMa8wAX0', 
    'destroy techno': '6nv9bEOb9PlCvhHthMKfwo', 
    'bubble trance': '6LJOGOAWRYLxDPGirVxTO3', 
    'drift phonk': '19sgQqGAcGplazJZTXeLUG', 
    're:techno': '3EBxpq1yqXbPgYmmnLyJxg',
    'small room': '2rPwi4IFhoc2r1MMvY0ZI5',  
    'lo-fi indie': '6bLWoiHrkb8pP82YGCqCHi', 
    'shoegaze': '5ydNNBQbwQJuhmcxyo8K1f', 
    'neo-pagan': '0BKvOUdbAVUjMDmQtJ0bk8', 
    'baroque pop': '1e3sjciHZnhGYpaVYv6rO1',
    'conscious hip hop': '3IU0ZFCSvKNqASPNsWoPuj', 
    'experimental hip hop': '3bjbpsbl2mzaqFJcyQNGjE', 
    'crunk': '2bfQBLvjoloMK1VoWFDimL', 
    'drain': '1gdxF4FolxtfDph2f3jY12', 
    'dark trap': '1lEZC1rWlusGF0IC6JxR5V',
    'jangle pop': '31vdE2ocXKz1Zmd7jrUqWO', 
    'freakbeat': '4XvaxZIdz8XNZqbckxbfYV', 
    'irish rebel song': '4YTLyNGigTUxRK2VOKBGPM', 
    'anti-folk': '1SXOzFKlMx7ODmxI1jnxux', 
    'souldies': '0dOLyEu9HJ8tKGq70qVup9'
}

const questions = [
    {
       id: 0,
       text: "Time to pledge your loyalties. Who are you taking Ticketmaster to court for?",
       answers: [
           {
               text: "Taylor Swift",
               image: "https://i.scdn.co/image/ab6761610000e5eb5a00969a4698c3132a15fbb0",
               alt: "Singer Taylor Swift",
               credit: "Spotify",
               genre: "pop"
           },
           {
               text: "Kendrick Lamar",
               image: "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022",
               alt:"Singer Kendrick Lamar",
               credit: "Spotify",
               genre: "rap"
           },
           {
               text: "Rüfüs Du Sol",
               image: "https://i.scdn.co/image/ab6761610000e5eba5d83556275bb22511f57624",
               alt:"The band Rüfüs Du Sol",
               credit: "Spotify",
               genre: "edm"
           },
           {
               text: "Luke Combs",
               image: "https://i.scdn.co/image/ab6761610000e5eb3bf3adbf8f93255293523355",
               alt:"Singer Luke Combs",
               credit: "Spotify",
               genre: "country"
           },
           {
                text: "Del Water Gap",
                image: "https://i.scdn.co/image/ab6761610000e5eb8de628a55c6537a096e028e6",
                alt:"Singer Del Water Gap",
                credit: "Spotify",
                genre: "indie"
            },
            {
                text: "Fleetwood Mac",
                image: "https://i.scdn.co/image/ab6761610000e5eb249d55f2d68a44637905c57e",
                alt:"Gothic font in red reads, 'Fleetwood Mac' against white background",
                credit: "Spotify",
                genre: "rock"
            }
       ]
    },
    {
        id: 1,
        text: "Ok, but who have you actually listened to? (name five songs right now)",
        answers: [
            {
                text: "Electric Light Orchestra",
                image: "https://i.scdn.co/image/ab6761610000e5eb3f289b61b4d965ce54e31841",
                alt:"The band Electric Light Orchestra's signature image of a UFO",
                credit: "Spotify",
                genre: "rock"
            },
            {
                text: "Dustin Lynch",
                image: "https://i.scdn.co/image/ab6761610000e5eb81cd620ab4e2adb53d83c5f9",
                alt:"Singer Dustin Lynch",
                credit: "Spotify",
                genre: "country"
            },
            {
                text: "GRiZ",
                image: "https://i.scdn.co/image/ab6761610000e5eb70fa7f3e6cb3df4c100fd43a",
                alt:"Singer GRiZ",
                credit: "Spotify",
                genre: "edm"
            },
            {
                text: "Earl Sweatshirt",
                image: "https://i.scdn.co/image/ab6761610000e5eb5e93db92ca7864585fbe5f28",
                alt:"Singer Earl Sweatshirt",
                credit: "Spotify",
                genre: "rap"
            },
            {
                text: "Japanese Breakfast",
                image: "https://i.scdn.co/image/ab6761610000e5eb3a3fed0c7aa2276bedccc7fe",
                alt:"Singer Japanese Breakfast",
                credit: "Spotify",
                genre: "indie"
            },
            {
                text: "I don't know any of these",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Emblem-question-yellow.svg/240px-Emblem-question-yellow.svg.png",
                alt:"A white question mark inside of a yellow circle with a dropshadow",
                credit: "Creative Commons",
                genre: "pop"
            }
        ]
    },
    {
        id: 2,
        text: "Alright, your music taste seems... ok. But here's the real question: what's your cry-in-the-car album?",
        answers: [
            {
                text: "Ascend - Illenium",
                image: "https://i.scdn.co/image/ab67616d0000b273529c6fa82d23f65076c1579b",
                alt:"Computer-genrated image of a flaming angel against a black background",
                credit: "Spotify",
                genre: "edm"
            },
            {
                text: "Come Over When You're Sober - Lil Peep",
                image: "https://i.scdn.co/image/ab67616d0000b27322278aa84691381f3015d534",
                alt:"Singer Lil Peep lying across a bed next to a pink sneaker and pink stuffed rabbit",
                credit: "Spotify",
                genre: "rap"
            },
            {
                text: "SOUR - Olivia Rodrigo",
                image: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
                alt:"Singer Olivia Rodrigo sticking her tongue out with stickers all over her face",
                credit: "Spotify",
                genre: "pop"
            },
            {
                text: "The Smiths - The Smiths",
                image: "https://i.scdn.co/image/ab67616d0000b273a09b231129ab1cb1a6efc57f",
                alt:"Purple filter over a black and white torso-up shot of a shirtless man looking down",
                credit: "Spotify",
                genre: "rock"
            },
            {
                text: "American Heartbreak - Zach Bryan",
                image: "https://i.scdn.co/image/ab67616d0000b273ba30859a1ca79c5a372d177a",
                alt:"A blurred man runs across a field at sunset",
                credit: "Spotify",
                genre: "country"
            },
            {
                text: "Cigarettes After Sex - Cigarettes After Sex",
                image: "https://i.scdn.co/image/ab67616d0000b2736b701428ed4c6e053902174a",
                alt:"Cigarettes after sex written in all caps in white font against black background",
                credit: "Spotify",
                genre: "indie"
            }
        ]
    },
    {
        id: 3,
        text: "Let's do some crowdsourcing. How would your best friend describe your music taste?",
        answers: [
            {
                text: "~alternative~",
                image: "https://cdn.theatlantic.com/thumbor/eiecJzSaSSwQQPK0ygvlLCB1YSM=/0x396:2450x2846/1080x1080/media/img/2015/05/BOB_Cohen/original.jpg",
                alt:"Cartoon drawing of a crowd at a concert from the perspective of the stage",
                credit: "The Atlantic",
                genre: "indie"
            },
            {
                text: "classic",
                image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"low angle view of building",
                credit: "Brandon Giggs",
                genre: "rock"
            },
            {
                text: "headache-inducing",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing",
                genre: "edm"
            },
            {
                text: "basic",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta",
                genre: "pop"
            },
            {
                text: "valid",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing",
                genre: "rap"
            },
            {
                text: "bad",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta",
                genre: "country"
            }
        ]
    },
    {
        id: 4,
        text: "Wow... that was pretty brutal. Would hate to hear what your bestie has to say about your style. So we'll hear from you... what's you're go-to shoe?",
        answers: [
            {
                text: "fila disruptors",
                image: "https://cdn.theatlantic.com/thumbor/eiecJzSaSSwQQPK0ygvlLCB1YSM=/0x396:2450x2846/1080x1080/media/img/2015/05/BOB_Cohen/original.jpg",
                alt:"Cartoon drawing of a crowd at a concert from the perspective of the stage",
                credit: "The Atlantic",
                genre: "edm"
            },
            {
                text: "vejas",
                image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"low angle view of building",
                credit: "Brandon Giggs",
                genre: "pop"
            },
            {
                text: "af1",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing",
                genre: "rap"
            },
            {
                text: "tevas",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta",
                genre: "rock"
            },
            {
                text: "doc martens",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing",
                genre: "indie"
            },
            {
                text: "cowboy boots",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta",
                genre: "country"
            }
        ]
    },
    {
        id: 5,
        text: "Interesting... and which phrase would you be caught saying?",
        answers: [
            {
                text: "Yeehaw!",
                image: "https://cdn.theatlantic.com/thumbor/eiecJzSaSSwQQPK0ygvlLCB1YSM=/0x396:2450x2846/1080x1080/media/img/2015/05/BOB_Cohen/original.jpg",
                alt:"Cartoon drawing of a crowd at a concert from the perspective of the stage",
                credit: "The Atlantic",
                genre: "country"
            },
            {
                text: "Have you met my friend Molly?",
                image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"low angle view of building",
                credit: "Brandon Giggs",
                genre: "edm"
            },
            {
                text: "Bro did you know Tame Impala is just one guy?",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing",
                genre: "indie"
            },
            {
                text: "I heard it on TikTok first.",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta",
                genre: "pop"
            },
            {
                text: "Are you old enough to remember landlines?",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing",
                genre: "rock"
            },
            {
                text: "No cap",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta",
                genre: "rap"
            }
        ]
    },
    {
        id: 6,
        text: "We've just about got you down... last question. Who are your bestie goals?",
        answers: [
            {
                text: "Mick Jagger and David Bowie",
                image: "https://cdn.theatlantic.com/thumbor/eiecJzSaSSwQQPK0ygvlLCB1YSM=/0x396:2450x2846/1080x1080/media/img/2015/05/BOB_Cohen/original.jpg",
                alt:"Cartoon drawing of a crowd at a concert from the perspective of the stage",
                credit: "The Atlantic",
                genre: "rock"
            },
            {
                text: "Phoebe Bridgers, Lucy Dacus and Julien Baker",
                image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"low angle view of building",
                credit: "Brandon Giggs",
                genre: "indie"
            },
            {
                text: "Dolly Parton and Kenny Rogers",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing",
                genre: "country"
            },
            {
                text: "Two random girls who just met at a festival",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta",
                genre: "edm"
            },
            {
                text: "Bladee and Yung Lean",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing",
                genre: "rap"
            },
            {
                text: "Doja Cat and Saweetie",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"brown wooden cabin infront of forest",
                credit: "eulauretta",
                genre: "pop"
            }
        ]
    }
]

const answers = [
    {
        combination: ["New York", "Pizza", "Traditional"],
        text: "Blue Cheese",
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&w=400&h=400&fit=fillmax",
        alt: "Blue cheese"
    },
    {
        combination: ["Austin", "Pasta", "Modern"],
        text: "Cheddar",
        image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Cheddar cheese"
    },
    {
        combination: ["Portland", "Sandwich", "Mountains"],
        text: "Feta",
        image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Feta cheese"
    },
    {
        combination: ["New Orleans", "Hamburger", "House"],
        text: "Halloumi",
        image: "https://images.unsplash.com/photo-1505281036624-fac2862357b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        alt: "Halloumi"
    }
]
// need to have a default answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.genre))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.image)
            imageLink.textContent = answer.credit
            // const sourceLink = document.createElement('a')
            // sourceLink.textContent = 'Unsplash'
            // sourceLink.setAttribute('src', 'https://www.unsplash.com')
            // answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)

    })
}
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
    }
}

const remixResult = (genre, currentResult) => {
    let newResult = currentResult
    while(newResult === currentResult) {
        newResult = recs[genre][Math.floor(Math.random()*recs[genre].length)];
    }
    console.log(newResult)
    return newResult
}

const showAnswer = () => {
    let result;
    
    const answerCounts = {
        'pop': 0,
        'country': 0,
        'dance': 0,
        'indie': 0,
        'rap': 0,
        'rock': 0
    };
    
    chosenAnswers.forEach(chosenAnswer => {
        answerCounts[chosenAnswer] += 1;
    })

    let maxKey, maxValue = 0;

    for(const [key, value] of Object.entries(answerCounts)) {
        if(value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }

    resultGenre = recs[maxKey][Math.floor(Math.random()*recs[maxKey].length)]
    result = {
        'genre': resultGenre,
        'playlist': playlists[resultGenre]
    };

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const remixButton = document.createElement('button')
    remixButton.classList.add('remix-button')
    remixButton.textContent = 'Remix'

    const answerIntro = document.createElement('h2')
    answerIntro.textContent = 'The results are in! The super-cool ultra-niche Spotify genre you NEED to add to your playlists is...'
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.genre
    const answerApology = document.createElement('h4')
    answerApology.textContent = '(sorry)'
    const moreInfo = document.createElement('h5')
    moreInfo.innerHTML = "Click here to learn more about " + result.genre + "."
    const playlistEmbed = document.createElement('div')
    let playlistUrl = `https://open.spotify.com/embed/playlist/${result.playlist}?utm_source=generator`
    //const playlistEmbed = document.write('<iframe style="border-radius:12px" src={`https://open.spotify.com/embed/playlist/${result.playlist}?utm_source=generator`} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>')
    playlistEmbed.innerHTML = '<iframe style="border-radius:12px" src=' + playlistUrl + 'width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>'
    const remixText = document.createElement('h5')
    console.log(`https://open.spotify.com/embed/playlist/${result.playlist}?utm_source=generator`)
    remixText.textContent = "Don't like your rec? (The truth can be hard to hear) Hit remix to see another genre we think you'll like"
    // answerTitle.textContent = result.text
    console.log('answerTitle', answerTitle.textContent)
    // const answerImage = document.createElement('img')

    const handleButtonClick =  () => {
        result.genre = remixResult(maxKey, result.genre)
        result.playlist = playlists[result.genre]
        playlistUrl = `https://open.spotify.com/embed/playlist/${result.playlist}?utm_source=generator`
        playlistEmbed.innerHTML = '<iframe style="border-radius:12px" src=' + playlistUrl + 'width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>'
        moreInfo.innerHTML = "Click here to learn more about " + result.genre + "."
        answerTitle.textContent = result.genre
    }
    remixButton.addEventListener('click', handleButtonClick)
    /*
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)
    */

    answerBlock.append(answerIntro, answerTitle, answerApology, playlistEmbed, moreInfo, remixText, remixButton)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}
