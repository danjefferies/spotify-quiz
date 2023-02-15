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
               text: "Drake",
               image: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
               alt:"Singer Drake",
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
                text: "Earl Sweatshirt",
                image: "https://i.scdn.co/image/ab6761610000e5eb5e93db92ca7864585fbe5f28",
                alt:"Singer Earl Sweatshirt",
                credit: "Spotify",
                genre: "rap"
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
                text: "Electric Light Orchestra",
                image: "https://i.scdn.co/image/ab6761610000e5eb3f289b61b4d965ce54e31841",
                alt:"The band Electric Light Orchestra's signature image of a UFO",
                credit: "Spotify",
                genre: "rock"
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
                credit: "Wikimedia Commons",
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
                text: "Come Over When You're Sober - Lil Peep",
                image: "https://i.scdn.co/image/ab67616d0000b27322278aa84691381f3015d534",
                alt:"Singer Lil Peep lying across a bed next to a pink sneaker and pink stuffed rabbit",
                credit: "Spotify",
                genre: "rap"
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
                image: "https://img.freepik.com/free-vector/esoteric-element-pack-concept_23-2148570862.jpg?w=996&t=st=1676340761~exp=1676341361~hmac=761ed028273c13d9bfa5b2adb56896436d47a414a081924afc681e09cc9f81b9",
                alt:"Cartoon drawing of a crowd at a concert from the perspective of the stage",
                credit: "Freepik",
                genre: "indie"
            },
            {
                text: "classic",
                image: "https://img.freepik.com/free-photo/rock-band-guitarist-performing-repetition-recording-studio_53876-133522.jpg?w=2000&t=st=1676343804~exp=1676344404~hmac=5e84028bcbedaa9dd1cde853934e3cf7618027c710abd16d36f63ddc2d4ce1af",
                alt:"Image by Freepik",
                credit: "rawpixel.com on Freepik",
                genre: "rock"
            },
            {
                text: "a headache",
                image: "https://img.freepik.com/free-photo/illustration-cosmic-background-with-orange-neon-laser-lights_181624-19567.jpg?w=2000&t=st=1676341923~exp=1676342523~hmac=af32c510f6b491c03fe3ee035575dbf93950ae2e4bcf5afef6f7a4d0bb70fc65",
                alt:"trees beside white house",
                credit: "wirestock on Freepik",
                genre: "edm"
            },
            {
                text: "basic",
                image: "https://img.freepik.com/free-photo/young-beautiful-stylish-hipster-woman-pink-leather-jacket_285396-3268.jpg?w=2000&t=st=1676342028~exp=1676342628~hmac=ff5f78df63a2caba7ddf0a4a0abeab474ad4600a86700ed6c93cbc822df3d5ea",
                alt:"brown wooden cabin infront of forest",
                credit: "marymarkevich on Freepik",
                genre: "pop"
            },
            {
                text: "valid",
                image: "https://img.freepik.com/free-photo/american-dollar-bills_1101-1.jpg?1&w=996&t=st=1676344512~exp=1676345112~hmac=dbf37a864da71af184a70410dea1ef50c5c9c2db9b55f3b83ee133433bc10e0f",
                alt:"",
                credit: "kstudio on Freepik",
                genre: "rap"
            },
            {
                text: "bad",
                image: "https://img.freepik.com/free-photo/beautiful-shot-cornfield-with-blue-sky_181624-20783.jpg?w=2000&t=st=1676342713~exp=1676343313~hmac=83690dad6411692ecba264096d07e90b84d4d4bcdb32505bcebc4a720c7aac02",
                alt:"brown wooden cabin infront of forest",
                credit: "wirestock on Freepik",
                genre: "country"
            }
        ]
    },
    {
        id: 4,
        text: "Wow... that was pretty brutal. Would hate to hear what your bestie has to say about your style. So we'll hear from you... what's you're go-to shoe?",
        answers: [
            {
                text: "Fila Disruptors",
                image: "https://live.staticflickr.com/1912/45007883392_016bce4aff_z.jpg",
                alt:"Cartoon drawing of a crowd at a concert from the perspective of the stage",
                credit: "Vision Invisible on Flickr",
                genre: "edm"
            },
            {
                text: "Uggs",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Uggs.jpg",
                alt:"low angle view of building",
                credit: "TexasDex on Wikimedia",
                genre: "pop"
            },
            {
                text: "Tevas",
                image: "https://live.staticflickr.com/65535/48764503631_aedd6b3b19_b.jpg",
                credit: "Marco Verch on Flickr",
                genre: "rock"
            },
            {
                text: "Cowboy boots",
                image: "https://img.freepik.com/free-photo/cowboy-inspiration-with-boots-chair_23-2149484732.jpg?w=740&t=st=1676343375~exp=1676343975~hmac=960c43d904989a8edd2030a666631ced636b481b69d55d950493a63bde80ee21",
                alt:"brown wooden cabin infront of forest",
                credit: "Freepik",
                genre: "country"
            },
            {
                text: "Air Force 1s",
                image: "https://img.freepik.com/free-photo/white-high-top-sneakers-unisex-footwear-fashion_53876-106036.jpg?w=2000&t=st=1676343007~exp=1676343607~hmac=9d5c185ba5c274a11f369326baf2dc750466b68d4689a19d622bb63d43513aab",
                alt:"trees beside white house",
                credit: "rawpixel.com on Freepik",
                genre: "rap"
            },
            {
                text: "Doc Martens",
                image: "https://images.unsplash.com/photo-1616610868156-fe7e276de965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
                alt:"a pair of Doc Martens combat boots",
                credit: "Aurelian Thomas on Unsplash",
                genre: "indie"
            }
        ]
    },
    {
        id: 5,
        text: "Interesting... and which phrase would you be caught saying?",
        answers: [
            {
                text: "Yee yee!",
                image: "https://img.freepik.com/free-vector/flat-design-cowboy-silhouette-illustration_23-2149480874.jpg?w=996&t=st=1676342407~exp=1676343007~hmac=631e737e12ce4eec5989bb9c1c3af65d4efd336a09f3b8eb204b03ff98a40994",
                alt:"Cartoon drawing of a crowd at a concert from the perspective of the stage",
                credit: "Freepik",
                genre: "country"
            },
            {
                text: "AH 😛",
                image: "https://img.freepik.com/free-photo/young-woman-with-dyed-hair-taking-selfie_23-2149488609.jpg?w=2000&t=st=1676343539~exp=1676344139~hmac=a129362a240ee9e90579f394b08f85ccfa08e6860b4e49313b31a550801a4950",
                alt:"brown wooden cabin infront of forest",
                credit: "Freepik",
                genre: "pop"
            },
            {
                text: "No cap",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1nincx4gs7xf5xD4Mya230Rmh7uW3inKRILuIJX6in3aEh6Cfeo0QAFP7_2SzgrrM-8&usqp=CAU",
                alt:"brown wooden cabin infront of forest",
                credit: "Wikimedia",
                genre: "rap"
            },
            {
                text: "When I was your age...",
                image: "https://live.staticflickr.com/4028/4216635647_dc8ae76959_b.jpg",
                alt:"trees beside white house",
                credit: "Jake Brewer on Flickr",
                genre: "rock"
            },
            {
                text: "Tame Impala is just one dude",
                image: "https://img.freepik.com/free-vector/psychedelic-optical-illusion-background_23-2148554961.jpg?w=2000&t=st=1676344271~exp=1676344871~hmac=73e4e207f20de924303aa5ec5e69ca9e7a303e401bac20bf25bbefdb746e8558",
                alt:"trees beside white house",
                credit: "Freepik",
                genre: "indie"
            },
            {
                text: "Can I get a piece of gum?",
                image: "https://img.freepik.com/free-photo/person-eating-sweet-candy-desert_23-2149675162.jpg?w=2000&t=st=1676344328~exp=1676344928~hmac=2b13713d8694f2bb6ded1f92937ffb4303d1bfbb771fd4bba06319d822324df4",
                alt:"low angle view of building",
                credit: "Freepik",
                genre: "edm"
            }
        ]
    },
    {
        id: 6,
        text: "We've just about got you down... last question. What's your meme of choice?",
        answers: [
            {
                text: "Anti-Brit",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bottle_of_Water_meme.png/640px-Bottle_of_Water_meme.png",
                alt:"Cartoon drawing of a crowd at a concert from the perspective of the stage",
                credit: "Wikimedia Commons",
                genre: "rock"
            },
            {
                text: "We met 20 minutes ago!",
                image: "https://live.staticflickr.com/8744/16909931731_9ac771e2ce_b.jpg",
                alt:"brown wooden cabin infront of forest",
                credit: "Thomas Hawk on Flickr",
                genre: "edm"
            },
            {
                text: "He gets me",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Farmer_meme_with_apostrophe.jpg/640px-Farmer_meme_with_apostrophe.jpg",
                alt:"trees beside white house",
                credit: "Wikimedia Commons",
                genre: "country"
            },
            {
                text: "Deep fried",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/WikiMeme_Dank.jpg/1278px-WikiMeme_Dank.jpg?20200928003901",
                alt:"trees beside white house",
                credit: "Wikimedia Commons",
                genre: "rap"
            },
            {
                text: "Wojak",
                image: "https://openclipart.org/download/239209/1-2016011842-2400px-outline-notext.svg",
                alt:"low angle view of building",
                credit: "rejon on openclipart",
                genre: "indie"
            },
            {
                text: "much wow",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Origin%C3%A1ln%C3%AD_V%C5%A0CHT_Stolen_Memes.png/640px-Origin%C3%A1ln%C3%AD_V%C5%A0CHT_Stolen_Memes.png",
                alt:"brown wooden cabin infront of forest",
                credit: "Wikimedia Commons",
                genre: "pop"
            }
        ]
    }
]

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
                answerBlock.addEventListener('click', () => handleClick(question.id, answer.genre, answer.text))

        // let answerImage = () => {
        //         if (questions.id == 2) 
        //         { document.createElement('h3');
        //      } else {
        //     document.createElement('img')
        // }

        //     }

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
            // sourceLink.textContent = 'Freepik'
            // sourceLink.setAttribute('src', 'https://www.freepik.com')
            // answerInfo.append(imageLink, ' by ', sourceLink)
            //     answerInfo.classList.add('by')

            answerBlock.append(answerImage, answerTitle, imageLink)
            // answerInfo

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)

    })
}
populateQuestions()

const handleClick = (questionId, chosenAnswer, chosenAnswerText) => {
    if (unansweredQuestions.includes(questionId)) {
        chosenAnswers.push(chosenAnswer)
    }
    else {
        chosenAnswers.splice(questionId, 1, chosenAnswer)
    }
    const itemToRemove = unansweredQuestions.indexOf(questionId)
    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }

    disableQuestionBlock(questionId, chosenAnswerText)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)
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

    const answerIntro = document.createElement('h5')
    answerIntro.textContent = 'The results are in! The super-cool ultra-niche Spotify genre you NEED to add to your playlists is...'
    const answerTitle = document.createElement('h4')
    answerTitle.textContent = result.genre
    const answerApology = document.createElement('h6')
    answerApology.textContent = '(sorry)'
    const moreInfo = document.createElement('h6')
    const playlistEmbed = document.createElement('div')
    let playlistUrl = `https://open.spotify.com/embed/playlist/${result.playlist}?utm_source=generator`
    let everyNoiseUrl = `https://everynoise.com/engenremap-${result.genre.replaceAll(/\W/g, '')}.html`
    playlistEmbed.innerHTML = '<iframe style="border-radius:12px" src=' + playlistUrl + 'width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>'
    moreInfo.innerHTML = `Click <a href=${everyNoiseUrl} target=none>here</a> to learn more about ` + result.genre + "."
    
    const remixText = document.createElement('h6')
    remixText.innerHTML = "<br/><br/>Don't like your rec? (The truth can be hard to hear). Hit remix to see another genre we think you'll like."
    console.log('answerTitle', answerTitle.textContent)



    const handleButtonClick =  () => {
        result.genre = remixResult(maxKey, result.genre)
        result.playlist = playlists[result.genre]
        playlistUrl = `https://open.spotify.com/embed/playlist/${result.playlist}?utm_source=generator`
        everyNoiseUrl = `https://everynoise.com/engenremap-${result.genre.replaceAll(/\W/g, '')}.html`
        playlistEmbed.innerHTML = '<iframe style="border-radius:12px" src=' + playlistUrl + 'width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>'
        moreInfo.innerHTML = `Click <a href=${everyNoiseUrl} target=none>here</a> to learn more about ` + result.genre + "."
        answerTitle.textContent = result.genre
    }
    remixButton.addEventListener('click', handleButtonClick)


    const reloadButton = document.createElement('button')
    reloadButton.classList.add('reload-button')
    reloadButton.textContent = 'Start over'

    const startOver = () => {
        window.onclick = function() {
            document.location = "";
        }
    }
    reloadButton.addEventListener('click', startOver)


    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerIntro, answerTitle, answerApology, playlistEmbed, moreInfo, remixText, remixButton, reloadButton)

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
        if (block.children.item(1).innerText === chosenAnswer) {
            block.style.opacity = "100%"
        }
    })
}
