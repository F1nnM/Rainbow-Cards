import { arrayUnique, customSort, shuffleArrayInplace } from "./utils"

export const blackSets: any = {
  "Base Game (US)": {
    "mark": "US",
    "cards": [
      {
        "text": "Here is the church Here is the steeple Open the doors And there is [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "As the mom of five rambunctious boys, I'm no stranger to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "When I am a billionaire, I shall erect a 50-foot statue to commemorate [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Next on ESPN2: The World Series of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Dear Abby, I'm having some trouble with [[BLANK]] and would like your advice.",
        "blanks": 1
      },
      {
        "text": "Lifetime&reg; presents \"[[BLANK]]: the Story of [[BLANK]].\"",
        "blanks": 2
      },
      {
        "text": "Hey guys, welcome to Chili's! Would you like to start the night off right with [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "Old Macdonald had [[BLANK]]. E-I-E-I-O.",
        "blanks": 1
      },
      {
        "text": "Men's Wearhouse. You're gonna like [[BLANK]]. I guarantee it.",
        "blanks": 1
      },
      {
        "text": "The Chevy Tahoe. With the power and space to take [[BLANK]] everywhere you go.",
        "blanks": 1
      },
      {
        "text": "Click here for [[BLANK]]!!!",
        "blanks": 1
      },
      {
        "text": "TSA guidelines now prohibit [[BLANK]] on airplanes.",
        "blanks": 1
      },
      {
        "text": "What is Batman's guilty pleasure.",
        "blanks": 1
      },
      {
        "text": "After eight years in the White House, how is Obama finally letting loose?",
        "blanks": 1
      },
      {
        "text": "This season at Steppenwolf, Samuel Beckett's classic existential play: Waiting for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "A recent laboratory study shows that undergraduates have 50% less sex after being exposed to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Maybe she's born with it. Maybe it's [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Arby's: We Have [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "When I am President, I will create the Department of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What's Teach For America using to inspire inner city students to succeed?",
        "blanks": 1
      },
      {
        "text": "Brought to you by Bud Light&reg;, the official Beer of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I'm no doctor, but I'm pretty sure what you're suffering from is called \"[[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "Bravo's new reality show features eight washed-up celebrities living with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "In the Disney Channel Original Movie, Hannah Montana struggles with [[BLANK]] for the first time.",
        "blanks": 1
      }
    ]
  },
  "Base Game (Canada)": {
    "mark": "CA",
    "cards": [
      {
        "text": "My fellow Americans: Before this decade is out, we <i>will</i> have [[BLANK]] on the moon!",
        "blanks": 1
      },
      {
        "text": "Introducing X-treme Baseball! It's like baseball, but with [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "IF you like [[BLANK]], YOU MIGHT BE A REDNECK.",
        "blanks": 1
      },
      {
        "text": "Today on <i>Maury</i> : \"Help! My son is [[BLANK]]!\"",
        "blanks": 1
      },
      {
        "text": "While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "As the mom of five rambunctious boys, I'm no stranger to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "CBC presents \"[[BLANK]]: the Story of [[BLANK]].\"",
        "blanks": 2
      },
      {
        "text": "Just once I'd like to hear you say \"Thanks, Mom. Thanks for [[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "Bravo's new reality show feature eight washed-up celebrities living with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Air Canada guidelines now prohibit [[BLANK]] on airplanes.",
        "blanks": 1
      },
      {
        "text": "When I am Prime Minister of Canada, I will create the Ministry of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Coming to Broadway this season, [[BLANK]]; The Musical.",
        "blanks": 1
      },
      {
        "text": "This season at the Princess of Wales Theatre, Samuel Beckett's classic existential play: <i>Waiting for [[BLANK]].</i>",
        "blanks": 1
      },
      {
        "text": "Penalty! [[BLANK]]: that's 5 minutes in the box!",
        "blanks": 1
      },
      {
        "text": "Hey guys, welcome to Boston Pizza! Would you like to start the night off right with [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "I know when that hotline bling, that can only mean one thing: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Dude, <i>do not</i> go in that washroom. There's [[BLANK]] in there.",
        "blanks": 1
      },
      {
        "text": "Brought to you by Molson Canadian, the Official Beer of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Next on TSN: The World Series of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "O Canada, we stand on guard for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Dear Abby, I'm having some trouble [[BLANK]] and would like your advice.",
        "blanks": 1
      },
      {
        "text": "Skidamarink a dink a dink, skidamarink a doo, I love [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "The new Chevy Tahoe. With the power and space to take [[BLANK]] everywhere you go.",
        "blanks": 1
      }
    ]
  },
  "Base Game (UK)": {
    "mark": "UK",
    "cards": [
      {
        "text": "Life for American Indians was forever changed when the White Man introduced them to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "&#x2605;&#x2606;&#x2606;&#x2606;&#x2606; Do NOT go here! Found [[BLANK]] in my Kung Pao chicken!",
        "blanks": 1
      },
      {
        "text": "A romantic, candlelit dinner would be incomplete without  [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Airport security guidelines now prohibit [[BLANK]] on airplanes.",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]? Jim'll fix it!",
        "blanks": 1
      },
      {
        "text": "Today on <i>The Jeremy Kyle Show:</i> \"Help! My son is [[BLANK]]!\"",
        "blanks": 1
      },
      {
        "text": "What did I bring back from Amsterdam?",
        "blanks": 1
      },
      {
        "text": "Mate, <i>do not go</i> in that bathroom. There's [[BLANK]] in there.",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]. Once you pop, the fun don't stop!",
        "blanks": 1
      },
      {
        "text": "When I am Prime Minister of the United Kingdom, I will create the Ministry of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Instead of coal, Father Christmas now gives the bad children [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "UKIP: Putting [[BLANK]] First!",
        "blanks": 1
      },
      {
        "text": "And the BAFTA for [[BLANK]] goes to [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "TFL apologizes for the delay in train service due to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Nobody expects the Spanish Inquisition. Our chief weapons are fear, surprise, and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "The school trip was completely ruined by [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Next on Sky Sports: The World Champion of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What's the next Happy Meal&reg; toy?",
        "blanks": 1
      },
      {
        "text": "Next up on Channel 4: Ramsay's [[BLANK]] Nightmares.",
        "blanks": 1
      },
      {
        "text": "In Belmarsh Prison, word is you can trade 200 cigarettes for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Now at the Natural History Museum: an interactive exhibit on [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Hey guys, welcome to TGIF! Would you like to start the night off right with [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "Coming to the West End this year, [[BLANK]]: The Musical.",
        "blanks": 1
      },
      {
        "text": "This season at the Old Vic, Samuel Beckett's classic existential play: Waiting for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Channel 5's new reality show feature eight washed-up celebrities living with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]. That's what mums go to Iceland.",
        "blanks": 1
      },
      {
        "text": "Channel 4 presents \"[[BLANK]]: the Story of [[BLANK]].\"",
        "blanks": 2
      },
      {
        "text": "Dear Agony Aunt, I'm having some trouble with [[BLANK]] and would like your advice.",
        "blanks": 1
      }
    ]
  },
  "Base Game (Australia)": {
    "mark": "AU",
    "cards": [
      {
        "text": "50% of all marriages end in [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "This is the way the world ends This is the way the world ends Not with a bang but with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "After four platinum albums and three Grammys, it's time to get back to my roots, to what inspired me to make music in the first place: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "When Pharaoh remained unmoved, Moses called down a Plague of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]. High five, bro.",
        "blanks": 1
      },
      {
        "text": "Step 1: [[BLANK]]. Step 2: [[BLANK]]. Step 3: Profit.",
        "blanks": 2
      },
      {
        "text": "If you can't be with the one you love, love [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I'm LeBron James, and when I'm not slamming dunks, I love [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Alternative medicine is now embracing the curative powers of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "That's right, I killed [[BLANK]]. How, you ask? [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "How did I lose my virginity?",
        "blanks": 1
      },
      {
        "text": "I'm going on a cleanse this week. Nothing but kale juice and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]. That was so metal.",
        "blanks": 1
      },
      {
        "text": "Kids, I don't need drugs to get high. I'm high on [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "When I was tripping on acid, [[BLANK]] turned into [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "[[BLANK]]. Betcha can't have just one!",
        "blanks": 1
      },
      {
        "text": "Instead of coal, Santa now gives the bad children [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Introducing the amazing superhero/sidekick duo! It's [[BLANK]] and [[BLANK]]!",
        "blanks": 2
      },
      {
        "text": "They said we were crazy. They said we couldn't put [[BLANK]] inside of [[BLANK]]. They were wrong.",
        "blanks": 2
      },
      {
        "text": "[[BLANK]] + [[BLANK]] = [[BLANK]].",
        "blanks": 3
      },
      {
        "text": "In M. Night Shyamalan's new movie, Bruce Willis discovers that [[BLANK]] had really been [[BLANK]] all along.",
        "blanks": 2
      },
      {
        "text": "Military historians remember Alexander the Great for his brilliant use of [[BLANK]] against the Persians.",
        "blanks": 1
      },
      {
        "text": "Check me out, yo! I call this dance move \"[[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "White people like [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]: kid-tested, mother-approved.",
        "blanks": 1
      },
      {
        "text": "[[BLANK]] is a slippery slope that leads to [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "What is George W. Bush thinking about right now?",
        "blanks": 1
      },
      {
        "text": "I get by with a little help from [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Here is church Here is the steeple Open the doors And there is [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Just saw this upsetting video! Please retweet!! #stop [[BLANK]]",
        "blanks": 1
      },
      {
        "text": "Maybe she's born with it. Maybe it's [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Old MacDonald has [[BLANK]]. E-I-E-I-O.",
        "blanks": 1
      },
      {
        "text": "A recent laboratory study shows that undergraduates have 50% less sex after being exposed to: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "In the new Disney Channel Original Movie, Hannah Montana struggles with [[BLANK]] for the first time.",
        "blanks": 1
      },
      {
        "text": "But before I kill you, Mr. Bond, I must show you.",
        "blanks": 1
      },
      {
        "text": "When I am a billionaire, I shall erect a 20-metre statue to commemorate [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Daddy, why is mummy crying?",
        "blanks": 1
      },
      {
        "text": "Just once I'd like to hear you say \"Thanks, Mum. Thanks for [[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "How am I maintaining my relationship status?",
        "blanks": 1
      },
      {
        "text": "As the mum of five rambunctious boys, I'm no stranger to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I'm sorry, Sir, but I couldn't complete my homework because of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Oi! Show us [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "What did I bring back from Bali?",
        "blanks": 1
      },
      {
        "text": "MTV's new reality show features eight washed-up celebrities living with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "&#x2605;&#x2606;&#x2606;&#x2606;&#x2606; Do NOT go here! Found [[BLANK]] in my Mongolian chicken!",
        "blanks": 1
      },
      {
        "text": "What broke up the original Wiggles?",
        "blanks": 1
      },
      {
        "text": "Today on <i>Jerry Springer:</i> \"Help! My son is [[BLANK]]!\"",
        "blanks": 1
      },
      {
        "text": "This season at the Sydney Opera House, Samuel Beckett's classic existential play: <i>Waiting for [[BLANK]].</i>",
        "blanks": 1
      },
      {
        "text": "Crikey! I've never seen [[BLANK]] like this before! Let's get a bit closer.",
        "blanks": 1
      },
      {
        "text": "What's there a tonne of in heaven?",
        "blanks": 1
      },
      {
        "text": "What makes me a true blue Aussie?",
        "blanks": 1
      },
      {
        "text": "The school excursion was completely ruined by [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Channel 9 is pleased to present its new variety show, \"Hey Hey It's [[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "Qantas now prohibits [[BLANK]] on airplanes.",
        "blanks": 1
      },
      {
        "text": "ABC presents \"[[BLANK]]: the Story of [[BLANK]].\"",
        "blanks": 2
      },
      {
        "text": "Next on Nine's Wide World of Sports: The World Series of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Are you thinking what I'm thinking, B1? I think I am, B2: it's [[BLANK]] time!",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]? Yeah, nah.",
        "blanks": 1
      },
      {
        "text": "Life for Aboriginal people was forever changed when the white man introduced them to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Hey guys, welcome to Sizzler! Would you like to start the night off right with [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "Brought to you by XXXX Gold, the Official Beer of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Mate, <i>do not</i> go in that toilet. There's [[BLANK]] in there.",
        "blanks": 1
      },
      {
        "text": "In Australia, [[BLANK]] is twice as big and twice as deadly.",
        "blanks": 1
      },
      {
        "text": "When I am Prime Minister, I will create the Department of [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "Base Game (International)": {
    "mark": "INT",
    "cards": [
      {
        "text": "Next from J.K. Rowling: <i>Harry Potter and the Chamber of [[BLANK]].</i>",
        "blanks": 1
      },
      {
        "text": "What's there a ton of in heaven?",
        "blanks": 1
      },
      {
        "text": "It's a pity that kids these days are all getting involved with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What's a girl's best friend?",
        "blanks": 1
      },
      {
        "text": "Make a haiku.",
        "blanks": 3
      },
      {
        "text": "The class field trip was completely ruined by [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Uh, hey guys, I know this was my idea, but I'm having serious doubts about [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I never truly understood [[BLANK]] until I encountered [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "I'm sorry, Professor, but I couldn't complete my homework because of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I drink to forget [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Hey Reddit! I'm [[BLANK]]. Ask me anything.",
        "blanks": 1
      },
      {
        "text": "I got 99 problems but [[BLANK]] ain't one.",
        "blanks": 1
      },
      {
        "text": "Why can't I sleep at night?",
        "blanks": 1
      },
      {
        "text": "Dude, <i>do not</i> go in that bathroom. There's [[BLANK]] in there.",
        "blanks": 1
      },
      {
        "text": "Just once, I'd like to hear you say \"Thanks, Mom. Thanks for [[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "What made my first kiss so awkward?",
        "blanks": 1
      },
      {
        "text": "Just saw this upsetting video! Please retweet!! #stop[[BLANK]]",
        "blanks": 1
      },
      {
        "text": "What never fails to liven up the party?",
        "blanks": 1
      },
      {
        "text": "What would grandma find disturbing, yet oddly charming?",
        "blanks": 1
      },
      {
        "text": "What's that sound?",
        "blanks": 1
      },
      {
        "text": "What will always get you laid?",
        "blanks": 1
      },
      {
        "text": "What ended my last relationship?",
        "blanks": 1
      },
      {
        "text": "Why do I hurt all over?",
        "blanks": 1
      },
      {
        "text": "But before I kill you, Mr. Bond, I must show you [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "War! What is it good for?",
        "blanks": 1
      },
      {
        "text": "A romantic, candlelit dinner would be incomplete without [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Coming to Broadway this season, [[BLANK]]: The Musical.",
        "blanks": 1
      },
      {
        "text": "And the Academy Award for [[BLANK]] goes to [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Fun tip! When your man asks you to go down on him, try surprising him with [[BLANK]] instead.",
        "blanks": 1
      },
      {
        "text": "What gives me uncontrollable gas?",
        "blanks": 1
      },
      {
        "text": "For my next trick, I will pull [[BLANK]] out of [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "What's that smell?",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]. It's a trap!",
        "blanks": 1
      },
      {
        "text": "Well if you'll excuse me, gentlemen, I have a date with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Why am I sticky?",
        "blanks": 1
      },
      {
        "text": "What makes life worth living?",
        "blanks": 1
      },
      {
        "text": "What's my secret power?",
        "blanks": 1
      },
      {
        "text": "What are my parents hiding from me?",
        "blanks": 1
      },
      {
        "text": "Daddy, why is mommy crying?",
        "blanks": 1
      },
      {
        "text": "During sex, I like to think about [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Mr. and Mrs. Diaz, we called you in because we're concerned about Cynthia. Are you aware that your daughter is [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "I'm no doctor, but I'm pretty sure what you're suffering from is called \"[[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "Click Here for [[BLANK]]!!!",
        "blanks": 1
      },
      {
        "text": "What is Batman's guilty pleasure?",
        "blanks": 1
      },
      {
        "text": "The theme for next year's Eurovision Song Contest is \"We are [[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "In a world ravaged by [[BLANK]], our only solace is [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Your persistence is admirable, my dear Prince. But you cannot win my heart with [[BLANK]] alone.",
        "blanks": 1
      },
      {
        "text": "The blind date was going horrible until we discovered our shared interest in [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Tonight's top story: What you don't know about [[BLANK]] could kill you.",
        "blanks": 1
      },
      {
        "text": "Coming this season, Samuel Beckett's classic existential play: <i>Waiting for [[BLANK]].</i>",
        "blanks": 1
      },
      {
        "text": "When I am a billionaire, I shall erect a 20-meter statue to commemorate [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Next on Eurosport: The World Championship of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "When I am Prime Minister, I will create the Ministry of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Dear Sir or Madam, We regret to inform you that the Office of [[BLANK]] has denied your request for [[BLANK]].",
        "blanks": 2
      }
    ]
  },
  "Red Box Expansion": {
    "mark": "RED",
    "cards": [
      {
        "text": "What brought the orgy to a grinding halt?",
        "blanks": 1
      },
      {
        "text": "Lovin' you is easy 'cause you're [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Science will never explain [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "The Five Stages of Grief: denial, anger, bargaining, [[BLANK]], acceptance.",
        "blanks": 1
      },
      {
        "text": "What has been making life difficult at the nudist colony?",
        "blanks": 1
      },
      {
        "text": "Charades was ruined for me forever when my mom had to act out [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Money can't buy me love, but it can buy me [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "During his midlife crisis, my dad got really into [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "When you get right down to it, [[BLANK]] is just [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "This is your captain speaking. Fasten your seatbelts and prepare for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Future historians will agree that [[BLANK]] marked the beginning of America's decline.",
        "blanks": 1
      },
      {
        "text": "When I pooped, what came out of my butt?",
        "blanks": 1
      },
      {
        "text": "A successful job interview begins with a firm handshake and ends with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Finally! A service that delivers [[BLANK]] right to your door.",
        "blanks": 1
      },
      {
        "text": "And what did <i>you</i> bring for show and tell?",
        "blanks": 1
      },
      {
        "text": "When all else fails, I can always masturbate to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I spent my whole life working toward [[BLANK]], only to have it ruined by [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "[[BLANK]] would be woefully incomplete without [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "In his new self-produced album, Kanye West raps over the sounds of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "In Rome, there are whisperings that the Vatican has a secret room devoted to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Having problems with [[BLANK]]? Try [[BLANK]]!",
        "blanks": 2
      },
      {
        "text": "The secret to a lasting marriage is communication, communication, and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "My mom freaked out when she looked at my browser history and found [[BLANK]].com/[[BLANK]].",
        "blanks": 2
      },
      {
        "text": "In the seventh circle of Hell, sinners must endure [[BLANK]] for all eternity.",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]. Awesome in theory, kind of a mess in practice.",
        "blanks": 1
      },
      {
        "text": "My plan for world domination begins with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I learned the hard way that you can't cheer up a grieving friend with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "A remarkable new study shows that chimps have evolved their own primitive version of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "After months of practice with [[BLANK]], I think I'm finally ready for [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Turns out that [[BLANK]]-Man was neither the hero we needed nor wanted.",
        "blanks": 1
      },
      {
        "text": "With enough time and pressure, [[BLANK]] will turn into [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "What left this stain on my couch?",
        "blanks": 1
      },
      {
        "text": "I'm not like the rest of you. I'm too rich and busy for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "The healing process began when I joined a support group for victims of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Doctor, you've gone too far! The human body wasn't meant to withstand that amount of [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "Only two things in life are certain: death and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "This month's Cosmo: \"Spice up your sex life by bringing [[BLANK]] into the bedroom.\"",
        "blanks": 1
      },
      {
        "text": "Next time on Dr. Phil: How to talk to your child about [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Tonight on 20/20: What you don't know about [[BLANK]] could kill you.",
        "blanks": 1
      },
      {
        "text": "My new favorite porn star is Joey \"[[BLANK]]\" McGee.",
        "blanks": 1
      },
      {
        "text": "Michael Bay's new three-hour action epic pits [[BLANK]] against [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Before [[BLANK]], all we had was [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "I went from [[BLANK]] to [[BLANK]] all thanks to [[BLANK]].",
        "blanks": 3
      },
      {
        "text": "Aww, sick! I just saw this skater do a 720 kickflip into [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "What's harshing my mellow, man?",
        "blanks": 1
      },
      {
        "text": "I love being a mom. But it's tough when my kids come home filthy from [[BLANK]]. That's why there's Tide&reg;.",
        "blanks": 1
      },
      {
        "text": "As part of his daily regimen, Anderson Cooper sets aside 15 minutes for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Welcome to Se&ntilde;or Frog's! Would you like to try our signature cocktail, \"[[BLANK]] on the Beach\"?",
        "blanks": 1
      },
      {
        "text": "Hey baby, come back to my place and I'll show you [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "You haven't truly lived until you've experienced [[BLANK]] and [[BLANK]] at the same time.",
        "blanks": 2
      },
      {
        "text": "Your persistence is admirable, my dear Prince, But you cannot win my heart with [[BLANK]] alone.",
        "blanks": 1
      },
      {
        "text": "In a pinch, [[BLANK]] can be a suitable substitute for [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "During high school, I never really fit in until I found [[BLANK]] club.",
        "blanks": 1
      },
      {
        "text": "Little Miss Muffet<br>Sat on a tuffet,<br>Eating her curds<br>and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "My gym teacher got fired for adding [[BLANK]] to the obstacle course.",
        "blanks": 1
      },
      {
        "text": "The blind date was going horribly until we discovered our shared interest in [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "My country, 'tis of thee, sweet land of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Call the law offices of Goldstein &amp; Goldstein, because no one should have to tolerate [[BLANK]] in the workplace.",
        "blanks": 1
      },
      {
        "text": "Members of New York's social elite are paying thousands of dollars just to experience [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "In his newest and most difficult stunt, David Blaine must escape from [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Dear Sir or Madam, <br>We regret to inform you that the Office of [[BLANK]] has denied your request for [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "[[BLANK]]: Hours of fun. Easy to use. Perfect for [[BLANK]]!",
        "blanks": 2
      },
      {
        "text": "Listen, son. If you want to get involved with [[BLANK]], I won't stop you. Just steer clear of [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Next week on the Discovery Channel, one man must survive in the depths of the Amazon with only [[BLANK]] and his wits.",
        "blanks": 1
      },
      {
        "text": "If God didn't want us to enjoy [[BLANK]], he wouldn't have given us [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "My life is ruined by a vicious cycle of [[BLANK]] and [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "And I would have gotten away with it, too, if it hadn't been for [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "Legend has it Prince wouldn't perform without [[BLANK]] in his dressing room.",
        "blanks": 1
      }
    ]
  },
  "Blue Box Expansion": {
    "mark": "BLUE",
    "cards": [
      {
        "text": "Dear Leader Kim Jong-un, our village praises your infinite wisdom with a humble offering of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "We never did find [[BLANK]], but along the way we sure learned a lot about [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Do <i>not</i> fuck with me! I am literally [[BLANK]] right now.",
        "blanks": 1
      },
      {
        "text": "And would you like those buffalo wings mild, hot, or [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "What's fun until it gets weird?",
        "blanks": 1
      },
      {
        "text": "And today's soup is Cream of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Come to Dubai, where you can relax in our world-famous spas, experience the nightlife, or simply enjoy [[BLANK]] by the poolside.",
        "blanks": 1
      },
      {
        "text": "She's up all night for good fun. I'm up all night for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Hi MTV! My name is Kendra, I live in Malibu, I'm into [[BLANK]], and I love to have a good time.",
        "blanks": 1
      },
      {
        "text": "I am become [[BLANK]], destroyer of [[BLANK]]!",
        "blanks": 2
      },
      {
        "text": "[[BLANK]] may pass, but [[BLANK]] will last forever.",
        "blanks": 2
      },
      {
        "text": "In the beginning, there was [[BLANK]]. And the Lord said, \"Let there be [[BLANK]].\"",
        "blanks": 2
      },
      {
        "text": "You guys, I saw this crazy movie last night. It opens on [[BLANK]], and then there's some stuff about [[BLANK]], and then it ends with [[BLANK]].",
        "blanks": 3
      },
      {
        "text": "This year's hottest album is \"[[BLANK]]\" by [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "\"This is madness!\"<br><br>\" <i>No.</i> THIS IS [[BLANK]]!\"",
        "blanks": 1
      },
      {
        "text": "It lurks in the night. It hungers for flesh. This summer, no one is safe from [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[[BLANK]] will never be the same after [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "I don't mean to brag, but they call me the Michael Jordan of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Don't forget! Beginning this week, Casual Friday will officially become \"[[BLANK]] Friday.\"",
        "blanks": 1
      },
      {
        "text": "Having the worst day EVER. #[[BLANK]]",
        "blanks": 1
      },
      {
        "text": "Why am I broke?",
        "blanks": 1
      },
      {
        "text": "Wes Anderson's new film tells the story of a precocious child coming to terms with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Adventure. Romance. [[BLANK]]. From Paramount Pictures, \"[[BLANK]].\"",
        "blanks": 2
      },
      {
        "text": "Patient presents with [[BLANK]]. Likely a result of [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Yo' mama so fat she [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "Now in bookstores: \"The Audacity of [[BLANK]],\" by Barack Obama.",
        "blanks": 1
      },
      {
        "text": "In his new action comedy, Jackie Chan must fend off ninjas while also dealing with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Armani suit: $1,000. Dinner for two at that swanky restaurant: $300. The look on her face when you surprise her with [[BLANK]]: priceless.",
        "blanks": 1
      },
      {
        "text": "Behind every powerful man is [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Life's pretty tough in the fast lane. That's why I never leave the house without [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "You are not alone. Millions of Americans struggle with [[BLANK]] every day.",
        "blanks": 1
      },
      {
        "text": "My grandfather worked his way up from nothing. When he came to this country, all he had was the shoes on his feet and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "If you can't handle [[BLANK]], you'd better stay away from [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Man, this is bullshit. Fuck [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "In return for my soul, the Devil promised me [[BLANK]], but all I got was [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "The Japanese have developed a smaller, more efficient version of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Do you lack energy? Does it sometimes feel like the whole world is [[BLANK]]? Ask your doctor about Zoloft&reg;.",
        "blanks": 1
      },
      {
        "text": "I work my ass off all day for this family, and this is what I come home to? [[BLANK]]!?",
        "blanks": 1
      },
      {
        "text": "This is America. If you don't work hard, you don't succeed. I don't care if you're black, white, purple, or [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Dammit, Gary. You can't just solve every problem with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "James is a lonely boy. But when he discovers a secret door in his attic, he meets a magical new friend: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "This is the prime of my life. I'm young, hot, and full of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Every step towards [[BLANK]] gets me a little bit closer to [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Well if [[BLANK]] is good enough for [[BLANK]], it's good enough for me.",
        "blanks": 2
      },
      {
        "text": "WHOOO! God <i>damn</i> I love [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "You Won't Believe These 15 Hilarious [[BLANK]] Bloopers!",
        "blanks": 1
      },
      {
        "text": "You've seen the bearded lady! You've seen the ring of fire! Now, ladies and gentlemen, feast your eyes upon [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "When I was a kid, we used to play Cowboys and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Do the Dew&reg; with our most extreme flavor yet! Get ready for Mountain Dew [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "Honey, I have a new role-play I want to try tonight! You can be [[BLANK]], and I'll be [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Forget everything you know about [[BLANK]], because now we've supercharged it with [[BLANK]]!",
        "blanks": 2
      },
      {
        "text": "What's making things awkward in the sauna?",
        "blanks": 1
      },
      {
        "text": "Listen, Gary, I like you. But if you want that corner office, you're going to have to show me [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Help me doctor, I've got [[BLANK]] in my butt.",
        "blanks": 1
      },
      {
        "text": "Oprah's book of the month is \"[[BLANK]] For [[BLANK]]: A Story of Hope.\"",
        "blanks": 2
      },
      {
        "text": "You know, once you get past [[BLANK]], [[BLANK]] ain't so bad.",
        "blanks": 2
      },
      {
        "text": "In his farewell address, George Washington famously warned Americans about the dangers of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Well what do you have to say for yourself, Casey? This is the third time you've been sent to the principal's office for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Here at the Academy for Gifted Children, we allow students to explore [[BLANK]] at their own pace.",
        "blanks": 1
      },
      {
        "text": "Get ready for the movie of the summer! One cop plays by the book. The other's only interested in one thing: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Heed my voice, mortals! I am the god of [[BLANK]], and I will not tolerate [[BLANK]]!",
        "blanks": 2
      },
      {
        "text": "As king, how will I keep the peasants in line?",
        "blanks": 1
      },
      {
        "text": "I'm sorry, sir, but we don't allow [[BLANK]] at the country club.",
        "blanks": 1
      },
      {
        "text": "2 AM in the city that never sleeps. The door swings open and <i>she</i> walks in, legs up to here. Something in her eyes tells me she's looking for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I have a strict policy. First date, dinner. Second date, kiss. Third date, [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What killed my boner?",
        "blanks": 1
      },
      {
        "text": "Hi, this is Jim from accounting. We noticed a $1,200 charge labeled \"[[BLANK]].\" Can you explain?",
        "blanks": 1
      },
      {
        "text": "I'm pretty sure I'm high right now, because I'm absolutely mesmerized by [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Don't worry, kid. It gets better. I've been living with [[BLANK]] for 20 years.",
        "blanks": 1
      },
      {
        "text": "How am I compensating for my tiny penis?",
        "blanks": 1
      }
    ]
  },
  "Green Box Expansion": {
    "mark": "GREEN",
    "cards": [
      {
        "text": "Ooo, daddy like [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What's about to take this dance floor to the next level?",
        "blanks": 1
      },
      {
        "text": "What are all those whales singing about?",
        "blanks": 1
      },
      {
        "text": "I've got rhythm, I've got music, I've got [[BLANK]]. Who could ask for anything more?",
        "blanks": 1
      },
      {
        "text": "Then the princess kissed the frog, and all of a sudden the frog was [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "What turned me into a Republican?",
        "blanks": 1
      },
      {
        "text": "If at first you don't succeed, try [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Poor Brandon, still living in his parents' basement. I hear he never got over [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Coming to Red Lobster&reg; this month, [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Most Americans would not vote for a candidate who is openly [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "This Friday at the Liquid Lounge, it's [[BLANK]] Night! Ladies drink free.",
        "blanks": 1
      },
      {
        "text": "Well, shit. My eyes ain't so good, but I'll eat my own boot if that ain't [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "CNN breaking news! Scientists discover [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "She's a lady in the streets, [[BLANK]] in the sheets.",
        "blanks": 1
      },
      {
        "text": "There is no God. It's just [[BLANK]] and then you die.",
        "blanks": 1
      },
      {
        "text": "Best you go back where you came from, now. We don't take too kindly to [[BLANK]] in these parts.",
        "blanks": 1
      },
      {
        "text": "I've had a horrible vision, father. I saw mountains crumbling, stars falling from the sky. I saw [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Oh no! Siri, how do I fix [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "Girls just wanna have [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What's the gayest?",
        "blanks": 1
      },
      {
        "text": "Son, take it from someone who's been around the block a few times. Nothin' puts her in the mood like [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Mom's to-do list:<br><br>Buy groceries<br>Clean up [[BLANK]]<br>Soccer practice",
        "blanks": 1
      },
      {
        "text": "What will end racism once and for all?",
        "blanks": 1
      },
      {
        "text": "No, no, no, no, no, NO! I will NOT let [[BLANK]] ruin this wedding.",
        "blanks": 1
      },
      {
        "text": "Summer lovin', had me a blast. [[BLANK]], happened so fast.",
        "blanks": 1
      },
      {
        "text": "I'm sorry, sir, but your insurance plan doesn't cover injuries caused by [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What sucks balls?",
        "blanks": 1
      },
      {
        "text": "Errbody in the club [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I'll take the BBQ bacon burger with a fried egg and fuck it how about [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "You won't believe what's in my pussy. It's [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "The top Google auto-complete results for \"Barack Obama\": <br>Barack Obama height.<br>Barack Obama net worth.<br>Barack Obama [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I may not be much to look at, but I fuck like [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "LSD + [[BLANK]] = really bad time.",
        "blanks": 1
      },
      {
        "text": "Feeling so grateful! #amazing #mylife #[[BLANK]]",
        "blanks": 1
      },
      {
        "text": "Art isn't just a painting in a stuffy museum. Art is alive. Art is [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Why am I laughing and crying and taking off my clothes?",
        "blanks": 1
      },
      {
        "text": "Google Calendar alert: [[BLANK]] in 10 minutes.",
        "blanks": 1
      },
      {
        "text": "One more thing. Watch out for Big Mike. They say he killed a man with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Dance like there's nobody watching, love like you'll never be hurt, and live like you're [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[[BLANK]]: Brought to you by [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "In the 1950s, psychologists prescribed [[BLANK]] as a cure for homosexuality.",
        "blanks": 1
      },
      {
        "text": "Well if [[BLANK]] is a crime, then lock me up!",
        "blanks": 1
      },
      {
        "text": "Run, run, as fast as you can! You can't catch me, I'm [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "What's the most problematic?",
        "blanks": 1
      },
      {
        "text": "With a one-time gift of just $10, you can save this child from [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[[BLANK]] be all like [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "You know who else liked [[BLANK]]? Hitler.",
        "blanks": 1
      },
      {
        "text": "What totally destroyed my asshole?",
        "blanks": 1
      },
      {
        "text": "I don't believe in God. I believe in [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "She's just one of the guys, you know? She likes beer, and football, and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Congratulations! You have been selected for our summer internship program. While we are unable to offer a salary, we <i>can</i> offer you [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I tell you, it was a non-stop fuckfest. When it was over, my asshole looked like [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "We do not shake with our left hands in this country. That is the hand we use for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "As Teddy Roosevelt said, the four manly virtues are honor, temperance, industry, and [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "90s Nostalgia Pack": {
    "mark": "90s",
    "cards": [
      {
        "text": "How did Stella get her groove back?",
        "blanks": 1
      },
      {
        "text": "Siskel and Ebert have panned [[BLANK]] as \"poorly conceived\" and \"sloppily executed.\"",
        "blanks": 1
      },
      {
        "text": "Up next on Nickelodeon: \"Clarissa Explains [[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "It's Morphin' Time! Mastodon! Pterodactyl! Triceratops! Sabertooth Tiger! [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "Believe it or not, Jim Carrey can do a dead-on impression of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I'm a bitch, I'm a lover, I'm a child, I'm [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Tonight on SNICK: \"Are You Afraid of [[BLANK]]?\"",
        "blanks": 1
      }
    ]
  },
  "Holiday Pack 2012": {
    "mark": "❄2012",
    "cards": [
      {
        "text": "After blacking out during New Year's Eve, I was awoken by [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What keeps me warm during the cold, cold winter?",
        "blanks": 1
      },
      {
        "text": "Wake up, America. Christmas is under attack by secular liberals and their [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Every Christmas, my uncle gets drunk and tells the story about [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "On the third day of Christmas, my true love gave to me: three French hens, two turtle doves, and [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "Vote for Hillary Pack": {
    "mark": "V4HIL",
    "cards": [
      {
        "text": "As reparations for slavery, all African Americans will receive [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "When you go to the polls on Tuesday, remember: a vote for me is a vote for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Senator, I trust you enjoyed [[BLANK]] last night. Now, can I count on your vote?",
        "blanks": 1
      }
    ]
  },
  "Vote for Trump Pack": {
    "mark": "V4TR",
    "cards": [
      {
        "text": "Trump's great! Trump's got [[BLANK]]. I love that.",
        "blanks": 1
      },
      {
        "text": "It's 3 AM. The red phone rings. It's [[BLANK]]. Who do you want answering?",
        "blanks": 1
      },
      {
        "text": "According to Arizona's stand-your-ground law, you're allowed to shoot someone if they're [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "House of Cards Pack": {
    "mark": "HCARD",
    "cards": [
      {
        "text": "I can't believe Netflix is using [[BLANK]] to promote <i>House of Cards.</i>",
        "blanks": 1
      },
      {
        "text": "A wise man said, \"Everything is about sex. Except sex. Sex is about [[BLANK]].\"",
        "blanks": 1
      },
      {
        "text": "I'm not going to lie. I despise [[BLANK]]. There, I said it.",
        "blanks": 1
      },
      {
        "text": "Corruption. Betrayal. [[BLANK]]. Coming soon to Netflix, \"House of [[BLANK]].\"",
        "blanks": 2
      },
      {
        "text": "We're not like other news organizations. Here at Slugline, we welcome [[BLANK]] in the office.",
        "blanks": 1
      },
      {
        "text": "Because you enjoyed [[BLANK]], we thought you'd like [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Cancel all my meetings. We've got a situation with [[BLANK]] that requires my immediate attention.",
        "blanks": 1
      },
      {
        "text": "Our relationship is strictly professional. Let's not complicate things with [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "College Pack": {
    "mark": "COLEG",
    "cards": [
      {
        "text": "My memory of last night is pretty hazy. I remember [[BLANK]] and that's pretty much it.",
        "blanks": 1
      },
      {
        "text": "Pledges! Time to prove you're Delta Phi material. Chug this beer, take off your shirts, and get ready for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "All classes today are canceled due to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Did you know? Our college was recently named the #1 school for [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "The Department of Psychology is looking for paid research volunteers. Are you 18-25 and suffering from [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "In this paper, I will explore [[BLANK]] from a feminist perspective.",
        "blanks": 1
      }
    ]
  },
  "Holiday Pack 2013": {
    "mark": "❄2013",
    "cards": [
      {
        "text": "Because they are forbidden from masturbating, Mormons channel their repressed sexual energy into [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Revealed: Why He Really Resigned! Pope Benedict's Secret Struggle with [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "Kids these days with their iPods and their internet. In my day, we all needed to pass the time was [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "GREETINGS<br>HUMANS<br><br>I AM [[BLANK]] BOT<br><br>EXECUTING PROGRAM",
        "blanks": 1
      },
      {
        "text": "But wait, there's more! If you order [[BLANK]] in the next 15 minutes, we'll throw in [[BLANK]] absolutely free!",
        "blanks": 2
      },
      {
        "text": "I really hope my grandma doesn't ask me to explain [[BLANK]] again.",
        "blanks": 1
      }
    ]
  },
  "Fantasy Pack": {
    "mark": "FNTSY",
    "cards": [
      {
        "text": "Critics are raving about HBO's new <i>Game of Thrones</i> spin-off, \"[[BLANK]] of [[BLANK]].\"",
        "blanks": 2
      },
      {
        "text": "Your father was a powerful wizard, Harry. Before he died, he left you something very precious: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Having tired of poetry and music, the immortal elves now fill their days with [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "And in the end, the dragon was not evil; he just wanted [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Who blasphemes and bubbles at the center of all infinity, whose name no lips dare speak aloud, and who gnaws hungrily in inconceivable, unlighted chambers beyond time?",
        "blanks": 1
      },
      {
        "text": "Legend tells of a princess who has been asleep for a thousand years and can only be awoken by [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "Mass Effect Pack": {
    "mark": "MSFX",
    "cards": [
      {
        "text": "Coming this spring from BioWare, <i>Mass Effect: [[BLANK]].</i>",
        "blanks": 1
      },
      {
        "text": "I'm Commander Shepard, and this is my favorite place for [[BLANK]] on the Citadel.",
        "blanks": 1
      },
      {
        "text": "It turns out The Reapers didn't want to destroy the galaxy. They just wanted [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "We were the best hand-to-hand combatants on the ship. I had reach, but she had [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "Holiday Pack 2014": {
    "mark": "❄2014",
    "cards": [
      {
        "text": "Behold the Four Horsemen of the Apocalypse! War, Famine, Death, and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Honey, Mommy and Daddy love you very much.But apparently Mommy loves [[BLANK]] more than she loves Daddy.",
        "blanks": 1
      },
      {
        "text": "A curse upon thee! Many years from now, just when you think you're safe, [[BLANK]] shall turn into [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Dear Mom and Dad, Camp is fun. I like capture the flag. Yesterday, one of the older kids taught me about [[BLANK]]. I love you, Casey",
        "blanks": 1
      },
      {
        "text": "Today on Buzzfeed: 10 Pictures of [[BLANK]] That Look Like [[BLANK]]!",
        "blanks": 2
      },
      {
        "text": "Why am I so tired?",
        "blanks": 1
      }
    ]
  },
  "NASA Pack": {
    "mark": "NASA",
    "cards": [
      {
        "text": "Curiosity was put into safe mode after its hazcams detected [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "NASA will spend 15 billion dollars on an unprecedented mission: [[BLANK]] in space.",
        "blanks": 1
      }
    ]
  },
  "Food Pack": {
    "mark": "FOOD",
    "cards": [
      {
        "text": "It's not delivery. It's [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Don't miss Rachel Ray's hit new show, <i>Cooking with [[BLANK]].</i>",
        "blanks": 1
      },
      {
        "text": "I'm Bobby Flay, and if you can't stand [[BLANK]], get out of the kitchen!",
        "blanks": 1
      },
      {
        "text": "Now on Netflix: <i>Jiro Dreams of [[BLANK]].</i>",
        "blanks": 1
      },
      {
        "text": "Aw babe, your burps smell like [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "Excuse me, waiter. Could you take this back? This soup tastes like [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "PAX East 2013 Pack A": {
    "mark": "PE13A",
    "cards": [
      {
        "text": "You have been waylaid by [[BLANK]] and must defend yourself.",
        "blanks": 1
      },
      {
        "text": "I have an idea even better than Kickstarter, and it's called [[BLANK]]starter.",
        "blanks": 1
      }
    ]
  },
  "Season's Greetings Pack": {
    "mark": "❄2012",
    "cards": [
      {
        "text": "Jesus is [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "This holiday season, Tim Allen must overcome his fear of [[BLANK]] to save Christmas.",
        "blanks": 1
      },
      {
        "text": "Blessed are you, Lord our God, creator of the universe, who has granted us [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Here's what you can expect for the new year. Out: [[BLANK]]. In: [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "What's the one thing that makes an elf instantly ejaculate?",
        "blanks": 1
      },
      {
        "text": "Donna, pick up my dry cleaning and get my wife something for christmas. I think she likes [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "It's beginning to look a lot like [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "PAX East 2013 Pack B": {
    "mark": "PE13B",
    "cards": [
      {
        "text": "In the final round of this year's Omegathon, Omeganauts must face off in a game of [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Action stations! Action stations! Set condition one throughout the fleet and brace for [[BLANK]]!",
        "blanks": 1
      }
    ]
  },
  "PAX East 2013 Pack C": {
    "mark": "PE13C",
    "cards": [
      {
        "text": "I don't know exactly how I got the PAX plague, but I suspect it had something to do with [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "Geek Pack": {
    "mark": "GEEK",
    "cards": [
      {
        "text": "Press &darr;&darr;&larr;&rarr;B to unleash [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[[BLANK]] is way better in [[BLANK]] mode.",
        "blanks": 2
      }
    ]
  },
  "PAX East 2014 Pack": {
    "mark": "PE14",
    "cards": [
      {
        "text": "<i>(Heavy breathing)</i> Luke, I am [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What the hell?! They added a 6/6 with flying, trample, and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[[BLANK]] is way better in [[BLANK]]mode.",
        "blanks": 2
      },
      {
        "text": "Unfortunately, Neo, no one can be <i>told</i> what [[BLANK]] is. You have to see it for yourself.",
        "blanks": 1
      },
      {
        "text": "You think you have defeated me? Well, let's see how you handle [[BLANK]]!",
        "blanks": 1
      }
    ]
  },
  "Jew Pack": {
    "mark": "JEW",
    "cards": [
      {
        "text": "What's so important right now that you can't call your mother?",
        "blanks": 1
      },
      {
        "text": "According to Freud, all children progress through three stages of development: the oral stage, the anal stage, and the [[BLANK]] stage.",
        "blanks": 1
      },
      {
        "text": "Oh, your daughter should meet my son! He gives to charity, he loves [[BLANK]] and did I mention he's a doctor?",
        "blanks": 1
      },
      {
        "text": "Coming to Broadway next season: \"[[BLANK]] on the Roof.\"",
        "blanks": 1
      },
      {
        "text": "Can't you see? The Jews are behind everything--the banks, the media, even [[BLANK]]!",
        "blanks": 1
      }
    ]
  },
  "PAX Prime 2013 Pack": {
    "mark": "PAX13",
    "cards": [
      {
        "text": "[[BLANK]]: Achievement unlocked.",
        "blanks": 1
      },
      {
        "text": "What's the latest bullshit that's troubling this quaint fantasy town?",
        "blanks": 1
      },
      {
        "text": "What made Spock cry?",
        "blanks": 1
      },
      {
        "text": "In the new DLC for Mass Effect, Shepard must save the galaxy from [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "The most controversial game at PAX this year is an 8-bit indie platformer about [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "There was a riot at the Gearbox panel when they gave the attendees [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "No Enforcer wants to manage the panel on [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "Period Pack": {
    "mark": ".",
    "cards": [
      {
        "text": "What gets me wet?",
        "blanks": 1
      },
      {
        "text": "My body, my voice! [[BLANK]], my choice!",
        "blanks": 1
      },
      {
        "text": "My vagina's angry. My vagina's furious and it needs to talk. It needs to talk about [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Can a woman really have it all? A career <i>and [[BLANK]]?</i>",
        "blanks": 1
      },
      {
        "text": "Tampax&reg;: Don't let your period ruin [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "New from Mattel, it's [[BLANK]] Barbie!",
        "blanks": 1
      }
    ]
  },
  "Post-Trump Pack": {
    "mark": "PSTT",
    "cards": [
      {
        "text": "Donald Trump's first act as president was to outlaw [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Donald Trump has nominated [[BLANK]] for his VP.",
        "blanks": 1
      },
      {
        "text": "In 2019, Donald Trump eliminated our national parks to make room for [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "Reject Pack": {
    "mark": "RJECT",
    "cards": [
      {
        "text": "What are two cards in your hand that you want to get rid of?",
        "blanks": 1
      },
      {
        "text": "From WBEZ Chicago, it's <i>This American Life.</i> Today on our program, [[BLANK]]. Stay with us.",
        "blanks": 1
      },
      {
        "text": "My name is Inigo Montoya. You killed my father. Prepare for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "[rorschach test] What do you see?",
        "blanks": 1
      },
      {
        "text": "Sir, we found you passed out naked on the side of the road. What's the last thing you remember?",
        "blanks": 1
      },
      {
        "text": "You can't wait forever. It's time to talk to your doctor about [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "The elders of the Ibo tribe of Nigeria recommend [[BLANK]] as a cure for impotence.",
        "blanks": 1
      },
      {
        "text": "The Westboro Baptist Church is now picketing soldiers' funerals with signs that read 'GOD HATES [[BLANK]]!'",
        "blanks": 1
      }
    ]
  },
  "Retail Pack": {
    "mark": "RTAIL",
    "cards": [
      {
        "text": "Looking to earn big bucks? Learn how to make [[BLANK]] work for you!",
        "blanks": 1
      },
      {
        "text": "How are the writers of Cards Against Humanity spending your $25?",
        "blanks": 1
      }
    ]
  },
  "Sci-Fi Pack": {
    "mark": "SCIFI",
    "cards": [
      {
        "text": "Fear leads to anger. Anger leads to hate. Hate leads to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Computer! Display [[BLANK]] on screen. Enhance.",
        "blanks": 1
      },
      {
        "text": "You're not going to believe this, but I'm you from the future! You've got to stop [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "This won't be like negotiating with the Vogons. Humans only respond to one thing: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Madam President, the asteroid is headed directly for Earth and there's only one thing that can stop it: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "You have violated the Prime Directive! You exposed an alien culture to [[BLANK]] before they were ready.",
        "blanks": 1
      },
      {
        "text": "What is the answer to life, the universe, and everything?",
        "blanks": 1
      }
    ]
  },
  "Reject Pack 2": {
    "mark": "RJCT2",
    "cards": [
      {
        "text": "Why did the chicken cross the road?",
        "blanks": 1
      },
      {
        "text": "Some men aren't looking for anything logical, like money. They can't be bought, bullied, reasoned, or negotiated with. Some men just want [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "America is hungry. America needs [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "In bourgeois society, capital is independent and has individuality, while the living person is [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Housekeeping! You want [[BLANK]]?",
        "blanks": 1
      },
      {
        "text": "BowWOW! is the first pet hotel in LA that offers [[BLANK]] for dogs.",
        "blanks": 1
      },
      {
        "text": "Astronomers have discovered that the universe consists of 5% ordinary matter, 25% dark matter, and 70% [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Hey, whatever happened to Renee Zellweger?",
        "blanks": 1
      },
      {
        "text": "What's wrong with these gorillas?",
        "blanks": 1
      },
      {
        "text": "You say tomato, I say [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "Science Pack": {
    "mark": "SCI",
    "cards": [
      {
        "text": "A study published in <i>Nature</i> this week found that [[BLANK]] is good for you in small doses.",
        "blanks": 1
      },
      {
        "text": "What really killed the dinosaurs?",
        "blanks": 1
      },
      {
        "text": "In line with our predictions, we find a robust correlation between [[BLANK]] and [[BLANK]] ( <i>p&lt;.05).</i>",
        "blanks": 2
      },
      {
        "text": "In an attempt to recreate conditions just after the Big Bang, physicists at the LHC are observing collisions between [[BLANK]] and [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "In what's being hailed as a major breakthrough, scientists have synthesized [[BLANK]] in the lab.",
        "blanks": 1
      },
      {
        "text": "Hey there, Young Scientists! Put on your labcoats and strap on your safety goggles, because today we're learning about [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "Today on <i>Mythbusters,</i> we find out how long [[BLANK]] can withstand [[BLANK]].",
        "blanks": 2
      }
    ]
  },
  "Weed Pack": {
    "mark": "WEED",
    "cards": [
      {
        "text": "Hold up. I gotta deal with [[BLANK]], then I'mma smoke this.",
        "blanks": 1
      },
      {
        "text": "Okay here's the pitch. James Franco and Seth Rogen are trying to score some weed, and then [[BLANK]] happens.",
        "blanks": 1
      },
      {
        "text": "You know what's like, really funny when you think about it? [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Instead of playing a card this round, everyone must stare at the Card Czar while making a sound you'd make after tasting something delicious.",
        "blanks": 1
      },
      {
        "text": "Everyone is staring at you because you're [[BLANK]].",
        "blanks": 1
      }
    ]
  },
  "Retail Product Pack": {
    "mark": "RTPRD",
    "cards": [
      {
        "text": "Wait, I came here to buy socks. How did I wind up with [[BLANK]]?",
        "blanks": 1
      }
    ]
  },
  "Tabletop Pack": {
    "mark": "TBLTP",
    "cards": [
      {
        "text": "Hey, you guys want to try this awesome new game? It's called [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "For my turn, I will spend four gold and allocate all three workers to [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "Backers who supported Tabletop at the $25,000 level were astonished to receive [[BLANK]] from Wil Wheaton himself.",
        "blanks": 1
      }
    ]
  },
  "World Wide Web Pack": {
    "mark": "WWW",
    "cards": [
      {
        "text": "I'm just gonna stay in tonight. You know, Netflix and [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "What did I nickname my genitals?",
        "blanks": 1
      },
      {
        "text": "This app is basically Tinder, but for [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "You guys, you can buy [[BLANK]] on the dark web.",
        "blanks": 1
      },
      {
        "text": "Don't worry, Penny! Go Go Gadget [[BLANK]]!",
        "blanks": 1
      },
      {
        "text": "TRIGGER WARNING: [[BLANK]].",
        "blanks": 1
      },
      {
        "text": "I need you like [[BLANK]] needs [[BLANK]].",
        "blanks": 2
      },
      {
        "text": "Such [[BLANK]]. Very [[BLANK]]. Wow.",
        "blanks": 2
      },
      {
        "text": "Nothing says \"I love you\" like [[BLANK]].",
        "blanks": 1
      }
    ]
  }
}

export const whiteSets: any = {
  "Base Game (US)": {
    "mark": "US",
    "cards": [
      "J.D. Power and his associates.",
      "Adderall.&reg;",
      "50 mg of Zoloft daily.",
      "The Three-Fifths Compromise.",
      "Ruth Bader Ginsburg brutally gaveling your penis.",
      "The Red Hot Chili Peppers.",
      "Hillary Clinton's emails.",
      "Ronald Reagan.",
      "Aaron Burr.",
      "Racially-biased SAT questions.",
      "Women of color.",
      "Mike Pence.",
      "An AR-15 assault rifle.",
      "Steve Bannon.",
      "The Trail of Tears.",
      "A fuck-ton of almonds.",
      "Wondering if it's possible to get some of that salsa to go."
    ]
  },
  "Base Game (Canada)": {
    "mark": "CA",
    "cards": [
      "The Hamburglar.",
      "Forced sterilization.",
      "Active listening.",
      "Smallpox blankets.",
      "Being marginalized.",
      "Some god damn peace and quiet.",
      "Fox News.",
      "Huffing spray paint.",
      "Half-assed foreplay.",
      "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.",
      "The Boy Scouts of America.",
      "The Kool-Aid Man.",
      "Pedophiles.",
      "Republicans.",
      "All-you-can-eat shrimp for $8.99.",
      "Bingeing and purging.",
      "Fancy Feast.&reg;",
      "The Amish.",
      "The entire Mormon Tabernacle Choir.",
      "Count Chocula.",
      "Eating the last known bison.",
      "The Rapture.",
      "Some punk kid who stole my turkey sandwich.",
      "Mansplaining.",
      "Switching to Geico.&reg;",
      "Crumbs all over the god damn carpet.",
      "A brain tumor.",
      "Bill Nye the Science Guy.",
      "The South.",
      "Doin' it in the butt.",
      "Rap music.",
      "GoGurt.&reg;",
      "A Mexican.",
      "The Underground Railroad.",
      "The Hustle.",
      "Jerking off into a pool of children's tears.",
      "Heteronormativity.",
      "A Bop It.&trade;",
      "Prescription pain killers.",
      "Vehicular manslaughter.",
      "Authentic Mexican cuisine.",
      "Getting naked and watching Nickelodeon.",
      "Passive aggressive Post-it notes.",
      "8 oz. of sweet Mexican black-tar heroin.",
      "These hoes.",
      "Waking up half-naked in a Denny's parking lot.",
      "Lena Dunham.",
      "Some of the best rappers in the game.",
      "Lunchables.&trade;",
      "Braiding three penises into a Twizzler.",
      "My black ass.",
      "An icy handjob from an Edmonton hooker.",
      "An Evening with Michael Bubl&eacute;.",
      "Getting a DUI on a Zamboni.",
      "The Royal Canadian Mounted Police.",
      "Heritage minutes.",
      "A hairless little shitstain named Caillou.",
      "A despondent Maple Leafs fan sitting all alone.",
      "Apologizing.",
      "Syrupy sex with a maple tree.",
      "Canadian Netflix.",
      "Burning down the White House.",
      "Newfies.",
      "A vastly superior healthcare system.",
      "Women of colour.",
      "Living in Yellowknife.",
      "Clubbing baby seals.",
      "The Official Languages Act. La Loi sur les langues officielles.",
      "Terry Fox's prosthetic leg.",
      "Mr. Dressup.",
      "Justin Trudeau."
    ]
  },
  "Base Game (UK)": {
    "mark": "UK",
    "cards": [
      "Getting so angry that you pop a boner.",
      "My cheating son-of-a-bitch husband.",
      "The KKK.",
      "Inserting a Mason jar into my anus.",
      "Illegal immigrants.",
      "Chunks of dead hitchhiker.",
      "The unstoppable tide of Islam.",
      "A sassy black woman.",
      "The only gay person in a hundred miles.",
      "The inevitable heat death of the universe.",
      "Black people.",
      "Germans on holiday.",
      "The Hillsborough Disaster.",
      "Druids.",
      "The way James Bond treats women.",
      "Blowing up Parliament.",
      "A white van man.",
      "Benedict Cumberbatch.",
      "Shitting out a perfect Cumberland sausage.",
      "Shutting up so I can watch the match.",
      "Faffing about.",
      "Blood, toil, tears, and sweat.",
      "Your mum.",
      "Dogging.",
      "Concealing an erection.",
      "Polish people.",
      "Waking up in Idris Elba's arms.",
      "Braiding three penises into a Curly Wurly.",
      "However much weed &pound;20 can buy.",
      "A Chelsea smile.",
      "The EDL.",
      "Ecstasy.",
      "England.",
      "Egging an MP.",
      "The Scouts.",
      "The North.",
      "Maureen of Blackpool, Reader's Wife of the Year 1988.",
      "Spaniards.",
      "Pikies.",
      "An entrenched class system.",
      "Just touching David Beckham's hair.",
      "Used knickers.",
      "A hen night in Slough.",
      "Waking up half-naked in a Little Chef car park.",
      "Haggis.",
      "Anything that comes out of Prince Philip's mouth.",
      "The bloody Welsh.",
      "Mad cow disease.",
      "The sudden appearance of the Go Compare man.",
      "The smell of Primark.",
      "Theresa May.",
      "My mate Dave.",
      "Cottaging.",
      "Not wearing trousers.",
      "A nice cup of tea.",
      "Jimmy Savile.",
      "A posh wank.",
      "A foul mouth.",
      "Trench foot.",
      "An AK-47 assault rifle.",
      "Cheeky bum sex.",
      "The <i>Strictly Come Dancing</i> season finale.",
      "Bogies.",
      "The Daily Mail.",
      "A fanny fart.",
      "Tories.",
      "Slapping Nigel Farage over and over.",
      "Madeleine McCann.",
      "400 years of colonial atrocities.",
      "Queuing.",
      "9 oz. of sweet Mexican black-tar heroin.",
      "Chivalry.",
      "A bit of slap and tickle.",
      "Seeing Granny naked.",
      "The petty troubles of the landed gentry.",
      "Lads.",
      "The French.",
      "Ed Balls.",
      "A vindaloo poo.",
      "Scousers.",
      "Getting naked and watching CBeebies.",
      "Rubbing Boris Johnson's belly until he falls asleep.",
      "A sober Irishman who doesn't care for potatoes.",
      "Daddies&reg; Brown Sauce.",
      "Brexit.",
      "Knife crime.",
      "Getting married, having a few kids, buying some stuff, retiring to the south of France, and dying.",
      "Africa children.",
      "Somali pirates."
    ]
  },
  "Base Game (Australia)": {
    "mark": "AU",
    "cards": [
      "My Uber driver, Pavel.",
      "White privilege.",
      "Vigorous jazz hands.",
      "An M. Night Shyamalan plot twist.",
      "The rhythms of Africa.",
      "The homosexual agenda.",
      "Seppuku.",
      "Worshipping that pussy.",
      "Anal beads.",
      "Lockjaw.",
      "Child beauty pageants.",
      "The penny whistle solo from \"My Heart Will Go On.\"",
      "Little boy penises.",
      "Smegma.",
      "Seven dead and three in critical condition.",
      "A mating display.",
      "Auschwitz.",
      "Hospice care.",
      "Seething with quiet resentment.",
      "Nickelback.",
      "Famine.",
      "Executing a hostage every hour.",
      "Jews, gypsies, and homosexuals.",
      "The arrival of the pizza.",
      "Giving 110%.",
      "10,000 Syrian refugees.",
      "Filling my briefcase with business stuff.",
      "A balanced breakfast.",
      "Committing suicide.",
      "Judge Judy.",
      "Kourtney, Kim, Khloe, Kendall, and Kylie.",
      "Not giving a shit about the Third World.",
      "Firing a rifle into the air while balls deep in a squealing hog.",
      "Opposable thumbs.",
      "Geese.",
      "Serfdom.",
      "A Super Soaker&trade; full of cat pee.",
      "NBA superstar LeBron James.",
      "Natural male enhancement.",
      "<i>The Bachelorette</i> season finale.",
      "The wonders of the Orient.",
      "However much weed $20 can buy.",
      "A whole thing of butter.",
      "Lumberjack fantasies.",
      "A salad for men that's made of metal.",
      "Wizard music.",
      "Eating a hard boiled egg out of my husband's asshole.",
      "Hobos.",
      "Bubble butt bottom boys.",
      "A mopey zoo lion.",
      "Extremely tight pants.",
      "Queefing.",
      "A live studio audience.",
      "An oversized lollipop.",
      "Women's suffrage.",
      "Sex with Patrick Stewart.",
      "Former President George W. Bush.",
      "The female orgasm.",
      "The magic of live theatre.",
      "Lance Armstrong's missing testicle.",
      "Only dating Asian women.",
      "Yeast.",
      "Battlefield amputations.",
      "Dry heaving.",
      "A pangender octopus who roams the cosmos in search of love.",
      "Synergistic management solutions.",
      "Liberals.",
      "Some guy.",
      "Shutting up so I can watch the game.",
      "Blowing my boyfriend so hard he shits.",
      "The Great Depression.",
      "This month's mass shooting.",
      "Radical Islamic terrorism.",
      "Assless chaps.",
      "Boogers.",
      "Looking in the mirror, applying lipstick, and whispering \"tonight, you will have sex with Tom Cruise.\"",
      "Ethnic cleansing.",
      "Brown people.",
      "Tearing that ass up like wrapping paper on Christmas morning.",
      "Sideboob.",
      "Swooping.",
      "MechaHitler.",
      "Crippling debt.",
      "Whipping it out.",
      "Academy Award winner Meryl Streep.",
      "Funky fresh rhymes.",
      "Fellowship in Christ.",
      "Coat hanger abortions.",
      "Muhammad (Peace Be Upon Him).",
      "Gay conversion therapy.",
      "The glass ceiling.",
      "Completely unwarranted confidence.",
      "A Fleshlight.&reg;",
      "William Shatner.",
      "Danny DeVito.",
      "A three-way with my wife and Shaquille O'Neal.",
      "Tap dancing like there's no tomorrow.",
      "Object permanence.",
      "Oestrogen.",
      "An endless stream of diarrhoea.",
      "An M16 assault rifle.",
      "Punching an MP in the face.",
      "A fuck-tonne of almonds.",
      "Sitting on my face.",
      "Queen Elizabeth's immaculate anus.",
      "Dirty nappies.",
      "Catapult.",
      "A bleached arsehole.",
      "Kissing nan on the forehead and turning off her life support.",
      "Being marginalised.",
      "Jehovah's Witnesses.",
      "The end of days.",
      "Forced sterilisation.",
      "Some bloody peace and quiet.",
      "Paedophiles.",
      "Drinking out of the toilet and eating rubbish.",
      "A foetus.",
      "Perfunctory foreplay.",
      "LYNX&reg; Body Spray.",
      "Crumbs all over the bloody carpet.",
      "Hooning.",
      "Waking up half-naked in a Macca's car park.",
      "Half a kilo of pure China White heroin.",
      "100% Pure New Zealand.",
      "Pauline Hanson.",
      "Skippy the Bush Kangaroo.",
      "A slab of VB and a pack of durries.",
      "Getting married, having a few kids, buying some stuff, retiring to Queensland, and dying.",
      "Fiery poos.",
      "Having a Golden Gaytime.",
      "Total control of the media.",
      "All four prongs of an echidna's penis.",
      "The White Australia Policy.",
      "Making up for centuries of oppression with one day of apologising.",
      "Glassing a wanker.",
      "Dropping a baby down the dunny.",
      "A sick burnout.",
      "Rupert Murdoch.",
      "Women in yoghurt commercials.",
      "Tony Abbott in budgie smugglers.",
      "Contagious face cancer.",
      "Mr. Squiggle, the Man from the Moon.",
      "Taking a sheep-wife.",
      "Crazy hot cousin sex.",
      "Getting so angry that you pop a stiffy.",
      "Nothing but sand.",
      "A cute, fuzzy koala with chlamydia.",
      "Profound respect and appreciation for indigenous culture.",
      "John Howard's eyebrows.",
      "Selling ice to children.",
      "A sick wombat.",
      "A Halal Snack Pack.",
      "Braiding three penises into a licorice twist.",
      "The cool, refreshing taste of Coca-Cola.&reg;",
      "Getting naked and watching <i>Play School.</i>",
      "Women's undies.",
      "Nippers.",
      "Summoning Harold Holt from the sea in a time of great need.",
      "A didgeridildo.",
      "A five-litre goon bag.",
      "Vegemite.&trade;",
      "Good-natured, fun-loving Aussie racism.",
      "A fair go.",
      "Cashed-up bogans.",
      "Inserting a jam jar into my anus.",
      "Doin' it up the bum.",
      "A stingray barb through the chest.",
      "Pingers.",
      "The bush.",
      "Sorry, this content cannot be viewed in your region.",
      "A shark!",
      "Having a shag in the back of a ute.",
      "Australia.",
      "Massive, widespread drought.",
      "Millions of cane toads.",
      "Alcohol poisoning.",
      "Xenophobia.",
      "Ice.",
      "A decent fucking Internet connection.",
      "What's left of the Great Barrier Reef.",
      "The Hemsworth brothers.",
      "A literal tornado of fire.",
      "The Great Emu War.",
      "Chundering into a kangaroo's pouch.",
      "The big fucking hole in the ozone layer.",
      "My cheating prick of a husband.",
      "Whiskas&reg; Catmilk.",
      "Steve Irwin.",
      "A six-point plan to stop the boats.",
      "Whoever the Prime Minister is these days."
    ]
  },
  "Base Game (International)": {
    "mark": "INT",
    "cards": [
      "Throwing grapes at a man until he loses touch with reality.",
      "A stray pube.",
      "Facebook.",
      "Pac-Man uncontrollably guzzling cum.",
      "An Oedipus complex.",
      "Scientology.",
      "My fat daughter.",
      "Having big dreams but no realistic way to achieve them.",
      "A time travel paradox.",
      "Lactation.",
      "Dick fingers.",
      "Dying.",
      "My good bra.",
      "Me time.",
      "Seeing my father cry.",
      "Hot people.",
      "Dead babies.",
      "Not reciprocating oral sex.",
      "A bleached asshole.",
      "Flesh-eating bacteria.",
      "Itchy pussy.",
      "Foreskin.",
      "World peace.",
      "Expecting a burp and vomiting on the floor.",
      "Kamikaze pilots.",
      "Being rich.",
      "Shapeshifters.",
      "Breaking out into song and dance.",
      "Pretending to care.",
      "Waiting till marriage.",
      "The wifi password.",
      "Being a woman.",
      "The past.",
      "Catapults.",
      "A lifetime of sadness.",
      "Going an entire day without masturbating.",
      "Dwayne \"The Rock\" Johnson.",
      "A saxophone solo.",
      "A fart so powerful that it wakes the giants from their thousand-year slumber.",
      "My genitals.",
      "BATMAN!",
      "Preteens.",
      "More elephant cock than I bargained for.",
      "A micropenis.",
      "My ugly face and bad personality.",
      "A good sniff.",
      "Explaining how vaginas work.",
      "Genuine human connection.",
      "An old guy who's almost dead.",
      "Being a motherfucking sorcerer.",
      "Holding down a child and farting all over him.",
      "Land mines.",
      "Centaurs.",
      "My relationship status.",
      "Used panties.",
      "Alcoholism.",
      "Sexual peeing.",
      "A windmill full of corpses.",
      "Darth Vader.",
      "Daniel Radcliffe's delicious asshole.",
      "A good, strong gorilla.",
      "Nipple blades.",
      "Being able to talk to elephants.",
      "Making a pouty face.",
      "Drowning the kids in the bathtub.",
      "Emerging from the sea and rampaging through Tokyo.",
      "Magnets.",
      "Touching a pug right on his penis.",
      "Vladimir Putin.",
      "Spontaneous human combustion.",
      "Leprosy.",
      "Explosions.",
      "Licking things to claim them as your own.",
      "Consensual sex.",
      "Bananas.",
      "Masturbating.",
      "All the dues I've fucked.",
      "Running out of semen.",
      "Goblins.",
      "Laying an egg.",
      "A bowl of mayonnaise and human teeth.",
      "A micropig wearing a tiny raincoat and booties.",
      "A bitch slap.",
      "A man on the brink of orgasm.",
      "A sad handjob.",
      "Police brutality.",
      "Throwing a virgin into a volcano.",
      "A sea of troubles.",
      "Multiple stab wounds.",
      "A tiny horse.",
      "Grandma.",
      "A bag of magic beans.",
      "Doing the right thing.",
      "Emma Watson.",
      "Racism.",
      "Powerful thighs.",
      "Men.",
      "Farting and walking away.",
      "German Chancellor Angela Merkel.",
      "Peeing a little bit.",
      "Viagra.&reg;",
      "Bisexuality.",
      "The clitoris.",
      "Soft, kissy missionary sex.",
      "Sitting on my face and telling me I'm garbage.",
      "Puberty.",
      "Poor people.",
      "Harry Potter erotica.",
      "Penis breath.",
      "Agriculture.",
      "The heart of a child.",
      "Justin Bieber.",
      "Concealing a boner.",
      "Not vaccinating my children because I am stupid.",
      "Sex with animals.",
      "Men discussing their feelings in an emotionally healthy way.",
      "Dead birds everywhere.",
      "My bright pink fuckhole.",
      "Having sex for the first time.",
      "An endless stream of diarrhea.",
      "German dungeon porn.",
      "Mouth herpes.",
      "Seeing what happens when you lock people in a room with hungry seagulls.",
      "72 virgins.",
      "Getting cummed on.",
      "Poor life choices.",
      "Being fat and stupid.",
      "Teaching a robot to love.",
      "Child abuse.",
      "Fucking my sister.",
      "Science.",
      "The gays.",
      "Becoming a blueberry.",
      "Oprah.",
      "Three dicks at the same time.",
      "Puppies!",
      "An unwanted pregnancy.",
      "The Holy Bible.",
      "Doing crimes.",
      "Having anuses for eyes.",
      "Silence.",
      "My balls on your face.",
      "Dead parents.",
      "Barack Obama.",
      "A snapping turtle biting the tip of your penis.",
      "African children.",
      "Fading away into nothingness.",
      "Spaghetti? Again?",
      "The miracle of childbirth.",
      "Selling crack to children.",
      "Menstrual rage.",
      "Still being a virgin.",
      "Shiny objects.",
      "Giving birth to the Antichrist.",
      "The placenta.",
      "Bees?",
      "Drinking alone.",
      "Telling a shitty story that goes nowhere.",
      "Sunshine and rainbows.",
      "A little boy who won't shut the fuck up about dinosaurs.",
      "Finger painting.",
      "Natural selection.",
      "An erection that lasts longer than four hours.",
      "My soul.",
      "A middle-aged man on roller skates.",
      "Being a dick to children.",
      "Mutually assured destruction.",
      "The cool, refreshing taste of Pepsi.&reg;",
      "Nicolas Cage.",
      "Daddy issues.",
      "Accepting the way things are.",
      "The Big Bang.",
      "Inappropriate yodeling.",
      "An older woman who knows her way around the penis.",
      "Raptor attacks.",
      "The Patriarchy.",
      "Free samples.",
      "My ex-wife.",
      "The Pope.",
      "Covering myself with Parmesan cheese and chili flakes because I am pizza.",
      "White people.",
      "Unfathomable stupidity.",
      "A bird that shits human turds.",
      "Your weird brother.",
      "Jobs.",
      "Estrogen.",
      "Donald J. Trump.",
      "Casually suggesting a threesome.",
      "David Bowie flying in on a tiger made of lightning.",
      "Memes.",
      "A salty surprise.",
      "Balls.",
      "The Devil himself.",
      "Fucking the weatherman on live television.",
      "Necrophilia.",
      "Vomiting seafood and bleeding anally.",
      "Pulling out.",
      "Spectacular abs.",
      "Full frontal nudity.",
      "A tiny, gay guitar called a ukulele.",
      "Poorly-timed Holocaust jokes.",
      "Sweet, sweet vengeance.",
      "How amazing it is to be on mushrooms.",
      "Hope.",
      "The screams... the terrible screams.",
      "Gandhi.",
      "Getting fingered.",
      "Emotions.",
      "Wet dreams.",
      "Dark and mysterious forces beyond our control.",
      "Shaking a baby until it stops crying.",
      "Being on fire.",
      "Huge biceps.",
      "My vagina.",
      "My inner demons.",
      "Pooping in a laptop and closing it.",
      "A fetus.",
      "Strong female characters.",
      "Tentacle porn.",
      "The Jews.",
      "Teenage pregnancy.",
      "Saying \"I love you.\"",
      "50,000 volts straight to the nipples.",
      "Self-loathing.",
      "Erectile dysfunction.",
      "Poopy diapers.",
      "Friction.",
      "Oompa-Loompas.",
      "Drinking out of the toilet and eating garbage.",
      "Fragile masculinity.",
      "Kissing grandma on the forehead and turning off her life support.",
      "The true meaning of Christmas.",
      "A pyramid of severed heads.",
      "Getting really high.",
      "Hot cheese.",
      "Incest.",
      "Elderly Japanese men.",
      "Announcing that I am about to cum.",
      "Invading Poland.",
      "RoboCop.",
      "Flying sex snakes.",
      "Slaughtering innocent civilians.",
      "Establishing dominance.",
      "Girls.",
      "Italians.",
      "Jennifer Lawrence.",
      "Penis envy.",
      "Repression.",
      "Cards Against Humanity.",
      "Heartwarming orphans.",
      "A falcon with a cap on its head.",
      "AXE Body Spray.",
      "Solving problems with violence.",
      "Gloryholes.",
      "A homoerotic volleyball montage.",
      "Flightless birds.",
      "A disappointing birthday party.",
      "Permanent Orgasm-Face Disorder.",
      "The Blood of Christ.",
      "Cuddling.",
      "The American Dream.",
      "Pooping back and forth. Forever.",
      "The Force.",
      "Exactly what you'd expect.",
      "Getting crushed by a vending machine.",
      "A ball of earwax, semen, and toenail clippings.",
      "Diversity.",
      "Pixelated bukkake.",
      "Seeing Grandma naked.",
      "Women in yogurt commercials.",
      "Arnold Schwarzenegger.",
      "The bombing of Nagasaki.",
      "Chainsaws for hands.",
      "Fear itself.",
      "Ghosts.",
      "My neck, my back, my pussy, and my crack.",
      "God.",
      "Nazis.",
      "My collection of Japanese sex toys.",
      "One titty hanging out.",
      "How bad my daughter fucked up her dance recital.",
      "The violation of our most basic human rights.",
      "Morgan Freeman's voice.",
      "Stalin.",
      "Old-people smell.",
      "Fake tits.",
      "Sexual tension.",
      "A really cool hat.",
      "An octopus giving seven handjobs and smoking a cigarette.",
      "Listening to her problems without trying to solve them.",
      "The Russians.",
      "Murder.",
      "A crucifixion.",
      "Her Majesty, Queen Elizabeth II.",
      "Not wearing pants.",
      "Man meat.",
      "Many bats.",
      "Horse meat.",
      "Dick pics.",
      "One trillion dollars.",
      "Sperm whales.",
      "My sex life.",
      "Chemical weapons.",
      "Pictures of boobs.",
      "AIDS.",
      "Autocannibalism.",
      "A horde of Vikings.",
      "My abusive boyfriend who really isn't so bad once you get to know him.",
      "Fiery poops.",
      "Meth.",
      "Soup that is too hot.",
      "Stephen Hawking talking dirty.",
      "The milkman.",
      "Kanye West.",
      "Poverty.",
      "Judging everyone.",
      "PTSD.",
      "Bitches.",
      "The only gay person in a hundred kilometers.",
      "Wanking into a pool of children's tears.",
      "The Black Death.",
      "A brain tumour.",
      "Passive-aggressive Post-it notes.",
      "Amputees.",
      "Sniffing glue.",
      "Winking at old people.",
      "Americanization.",
      "Denying climate change.",
      "Chunks of dead backpacker.",
      "The inevitable heath death of the universe.",
      "Words.",
      "Michael Jackson.",
      "Horrifying laser hair removal accidents.",
      "A monkey smoking a cigar.",
      "Not having sex,",
      "Doing it in the butt.",
      "The arrival of pizza.",
      "Extremely tight jeans.",
      "Eating a hard boiled out of my husband's asshole.",
      "Friendly fire.",
      "The crazy, ball-slapping sex your parents are having right now.",
      "An AK-47.",
      "Weapons-grade plutonium.",
      "Sexy pillow fights.",
      "Tom Cruise.",
      "Kim Jong-un.",
      "The Dalai Lama.",
      "Some really fucked-up shit.",
      "Robert Downey Jr.",
      "Ryan Gosling riding in on a white horse.",
      "Sexual humiliation.",
      "A defective condom.",
      "A Chinese tourist who wants something very badly but cannot communicate it.",
      "Self-flagellation.",
      "FIlling my son with spaghetti.",
      "Buying the right clothes to be cool.",
      "Edible underwear.",
      "An oversized lollipop,",
      "The World of Warcraft.",
      "Grave robbing.",
      "Panda sex.",
      "A thermonuclear detonation.",
      "Destroying the evidence.",
      "Miley Cyrus.",
      "Keanu Reeves.",
      "LIving in a trashcan.",
      "Children on leashes.",
      "Slave.",
      "Indescribable loneliness.",
      "Being fabulous.",
      "Homeless people.",
      "My cheating-son-of-a-bitch-husband.",
      "Heroin.",
      "The pirate's life.",
      "One Ring to rule them all.",
      "A mime having a stroke.",
      "Women voting.",
      "Gladiatorial combat.",
      "Some kind of bird man.",
      "Rising from the grave.",
      "Terrorists.",
      "Staring at a painting and going \"hmmmmmmm...\"",
      "A sweet spaceships.",
      "Lady Gaga.",
      "Eating an albino.",
      "Our first chimpanzee Prime Minister.",
      "The Gulags.",
      "Wiping her butt.",
      "The land of chocolate.",
      "Bosnian chicken farmers.",
      "Blowing my boyfriend so hard so he shits."
    ]
  },
  "Red Box Expansion": {
    "mark": "RED",
    "cards": [
      "An ass disaster.",
      "Disco fever.",
      "Spending lots of money.",
      "Mooing.",
      "A cat video so cute that your eyes roll back and your spine slides out of your anus.",
      "Dying alone and in pain.",
      "Shitting out a screaming face.",
      "Literally eating shit.",
      "Rich people.",
      "An evil man in evil clothes.",
      "A low standard of living.",
      "Wearing an octopus for a hat.",
      "Whining like a little bitch.",
      "A fat bald man from the Internet.",
      "Basic human decency.",
      "How awesome it is to be white.",
      "Nothing.",
      "Moral ambiguity.",
      "Dining with cardboard cutouts of the cast of <i>Friends.</i>",
      "A big black dick.",
      "An unstoppable wave of fire ants.",
      "A web of lies.",
      "Ominous background music.",
      "My machete.",
      "Multiple orgasms.",
      "Daddy's belt.",
      "The boners of the elderly.",
      "The hiccups.",
      "Going around punching people.",
      "Letting everyone down.",
      "Nunchuck moves.",
      "The prunes I've been saving for you in my armpits.",
      "A PowerPoint presentation.",
      "The entire Internet.",
      "Walking in on Dad peeing into Mom's mouth.",
      "Dad's funny balls.",
      "Flying robots that kill people.",
      "Being white.",
      "A slightly shittier parallel universe.",
      "Having sex on top of a pizza.",
      "Power.",
      "Scrotum tickling.",
      "An army of skeletons.",
      "Actually getting shot, for real.",
      "A cop who is also a dog.",
      "A vagina that leads to another dimension.",
      "A man in yoga pants with a ponytail and feather earrings.",
      "Converting to Islam.",
      "Me.",
      "Intimacy problems.",
      "Leveling up.",
      "That ass.",
      "Ripping open a man's chest and pulling out his still-beating heart.",
      "A sad fat dragon with no friends.",
      "A surprising amount of hair.",
      "Fisting.",
      "The human body.",
      "My father, who died when I was seven.",
      "The economy.",
      "Deflowering the princess.",
      "Graphic violence, adult language, and some sexual content.",
      "Shutting the fuck up.",
      "The baby that ruined my pussy.",
      "Being black.",
      "All of this blood.",
      "Stockholm Syndrome.",
      "Gandalf.",
      "Sneezing, farting, and cumming at the same time.",
      "Running naked through a mall, pissing and shitting everywhere.",
      "Blood farts.",
      "Vomiting mid-blowjob.",
      "A pi&ntilde;ata full of scorpions.",
      "A Japanese toaster you can fuck.",
      "Suicidal thoughts.",
      "Grandpa's ashes.",
      "Reverse cowgirl.",
      "My first kill.",
      "Mom.",
      "Double penetration.",
      "White power.",
      "Tongue.",
      "Tiny nipples.",
      "Screaming like a maniac.",
      "Existing.",
      "The flute.",
      "Being a busy adult with many important things to do.",
      "Slapping a racist old lady.",
      "Genetically engineered super-soldiers.",
      "Pumping out a baby every nine months.",
      "Taking a man's eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes.",
      "Mild autism.",
      "Not contributing to society in any meaningful way.",
      "Cock.",
      "Some douche with an acoustic guitar.",
      "Overpowering your father.",
      "Being a hideous beast that no one could love.",
      "Samuel L. Jackson.",
      "Making the penises kiss.",
      "Being a dinosaur.",
      "Tripping balls.",
      "Sudden Poop Explosion Disease.",
      "The total collapse of the global financial system.",
      "Loki, the trickster god.",
      "Making a friend.",
      "Hipsters.",
      "All my friends dying.",
      "Jesus.",
      "Another shot of morphine.",
      "How wet my pussy is.",
      "Having shotguns for legs.",
      "Bullshit.",
      "Cumming deep inside my best bro.",
      "Being awesome at sex.",
      "Santa Claus.",
      "Having a penis.",
      "Gay aliens.",
      "Jafar.",
      "Jumping out at people.",
      "The mixing of the races.",
      "The Harlem Globetrotters.",
      "Scrotal frostbite.",
      "Statistically validated stereotypes.",
      "Pretty Pretty Princess Dress-Up Board Game.&reg;",
      "Making shit up.",
      "Mufasa's death scene.",
      "Having $57 in the bank.",
      "A sales team of clowns and pedophiles.",
      "Survivor's guilt.",
      "The mere concept of Applebees.&reg;",
      "Boris the Soviet Love Hammer.",
      "Not having sex.",
      "Indescribably loneliness.",
      "One thousand Slim Jims.",
      "A nuanced critique.",
      "A nautical theme.",
      "The black Power Ranger.",
      "Neil Patrick Harris.",
      "Bill Clinton, naked on a bearskin rug with a saxophone.",
      "The hose.",
      "Finding Waldo.",
      "Fuck Mountain.",
      "Unlimited soup, salad, and breadsticks.",
      "Syphilitic insanity.",
      "Oncoming traffic.",
      "Suicide bombers.",
      "Some kind of bird-man.",
      "Ryan Goslin riding in on a white horse.",
      "Living in a trash can.",
      "Historical revisionism.",
      "A passionate Latino lover.",
      "Roland the Farter, flatulist to the king.",
      "Consent.",
      "An unhinged Ferris wheel rolling toward the sea.",
      "A plunger to the face.",
      "Shaft.",
      "Big Bird's crown, crusty asshole.",
      "Filling every orifice with butterscotch pudding.",
      "A fortuitous turnip harvest.",
      "Buying the right pants to be cool.",
      "Getting hilariously gang-banged by the Blue Man Group.",
      "A phantasmagoria of anal delights.",
      "The new Radiohead album.",
      "24-hour media coverage.",
      "Gargling jizz.",
      "A dollop of sour cream.",
      "Demonic possession.",
      "Chugging a lava lamp.",
      "Jeff Goldblum.",
      "The day the birds attacked.",
      "Subduing a grizzly bear and making her your wife.",
      "A sofa that says \"I have style, but I like to be comfortable.\"",
      "Dorito breath.",
      "The way white people is.",
      "Fetal alcohol syndrome.",
      "The Quesadilla Explosion Salad&trade; from Chili's.&reg;",
      "Racial profiling.",
      "Special musical guest, Cher.",
      "A crappy little hand.",
      "The systemic destruction of an entire people and their way of life.",
      "Clenched butt cheeks.",
      "Filing my son with spaghetti.",
      "Blowing some dudes in an alley.",
      "Words, words, words.",
      "Clams.",
      "Hot doooooooogs!",
      "Andr&eacute; the Giant's enormous, leathery scrotum.",
      "A greased-up Matthew McConaughey.",
      "A pile of squirming bodies.",
      "A bloody pacifier.",
      "Medieval Times&reg; Dinner &amp; Tournament.",
      "Just the tip.",
      "One ring to rule them all.",
      "The milk that comes out of a person.",
      "A sweet spaceship.",
      "Big ol' floppy titties.",
      "A 55-gallon drum of lube.",
      "Sorcery.",
      "Getting your dick stuck in a Chinese finger trap with another dick.",
      "Weapons grade plutonium.",
      "Mad hacky-sack skills.",
      "Emotional baggage.",
      "Insatiable bloodlust.",
      "Hillary Clinton.",
      "Catastrophic urethral trauma.",
      "Putting an entire peanut butter and jelly sandwich into the VCR.",
      "Crying into the pages of Sylvia Plath.",
      "A spontaneous conga line.",
      "A Japanese tourist who wants something very badly but cannot communicate it.",
      "A boo-boo.",
      "A black-owned and operated business.",
      "The moist, demanding chasm of his mouth.",
      "Velcro.&trade;",
      "The shambling corpse of Larry King.",
      "Drinking my bro's pee-pee right out of his peen.",
      "Quiche.",
      "Some really fucked up shit.",
      "Warm, velvety muppet sex.",
      "The primal, ball-slapping sex your parents are having right now.",
      "A bigger, blacker dick.",
      "Crabapples all over the fucking sidewalk.",
      "Bosnian chick farmers.",
      "Sanding off a man's nose.",
      "The harsh light of day.",
      "Vietnam flashbacks.",
      "Savagely beating a mascot.",
      "Staring at a painting and going \"hmmmmmm...\"",
      "Nubile slave boys.",
      "Drinking ten 5-hour ENERGYs&reg; to get fifty continuous hours of energy.",
      "A sweaty, panting leather daddy.",
      "My manservant, Claude."
    ]
  },
  "Blue Box Expansion": {
    "mark": "BLUE",
    "cards": [
      "Khakis.",
      "Bathing in moonsblood and dancing around the ancient oak.",
      "The passage of time.",
      "A one-way ticket to Gary, Indiana.",
      "The power of the Dark Side.",
      "A team of lawyers.",
      "Getting eaten alive by Guy Fieri.",
      "Figuring out how to have sex with a dolphin.",
      "Some sort of Asian.",
      "Vegetarian options.",
      "An inability to form meaningful relationships.",
      "One unforgettable night of passion.",
      "Important news about Taylor Swift.",
      "The all-new Nissan Pathfinder with 0.9% APR financing!",
      "Free ice cream, yo.",
      "My boyfriend's stupid penis.",
      "A mouthful of potato salad.",
      "Our new Buffalo Chicken Dippers&reg;!",
      "Crying and shitting and eat spaghetti.",
      "A fart.",
      "Actual mutants with medical conditions and no superpowers.",
      "Deez nuts.",
      "Africa.",
      "Finally finishing off the Indians.",
      "Owls, the perfect predator.",
      "A dance move that's just sex.",
      "Ass to mouth.",
      "Bouncing up and down.",
      "Walking into a glass door.",
      "Eating together like a god damn family for once.",
      "No longer finding any Cards Against Humanity card funny.",
      "Treasures beyond your wildest dreams.",
      "Ejaculating live bees and the bees are angry.",
      "Sucking all the milk out of a yak.",
      "Falling into the toilet.",
      "The color \"puce.\"",
      "An oppressed people with a vibrant culture.",
      "Out-of-this-world bazongas.",
      "Getting caught by the police and going to jail.",
      "The sweet song of sword against sword and the braying of mighty war beasts.",
      "A sex goblin with a carnival penis.",
      "Genghis Khan's DNA.",
      "A gender identity that can only be conveyed through slam poetry.",
      "The ghost of Marlon Brando.",
      "Immortality cream.",
      "Butt stuff.",
      "Getting offended.",
      "My dad's dumb fucking face.",
      "A bunch of idiots playing a card game instead of interacting like normal humans.",
      "Neil Diamond's Greatest Hits.",
      "Whatever a McRib&reg; is made of.",
      "Total fucking chaos.",
      "Whispering all sexy.",
      "Calculating every mannerism so as not to suggest homosexuality.",
      "Some shit-hot guitar licks.",
      "No clothes on, penis in vagina.",
      "Sports.",
      "How awesome I am.",
      "The white half of Barack Obama.",
      "An overwhelming variety of cheeses.",
      "Ejaculating inside another man's wife.",
      "Getting shot by the police.",
      "Beloved television star Bill Cosby.",
      "The tiger that killed my father.",
      "Changing a person's mind with logic and facts.",
      "Child Protective Services.",
      "A peyote-fueled vision quest.",
      "Cute boys.",
      "A hopeless amount of spiders.",
      "The swim team, all at once.",
      "Whatever you wish, mother.",
      "A possible Muslim.",
      "All the single ladies.",
      "Letting out 20 years' worth of farts.",
      "Being paralyzed from the neck down.",
      "The eight gay warlocks who dictate the rules of fashion.",
      "Shapes and colors.",
      "Seeing my village burned and my family slaughtered before my eyes.",
      "Filling a man's anus with concrete.",
      "Peeing into a girl's butt to make a baby.",
      "Meaningless sex.",
      "Wearing glasses and sounding smart.",
      "Setting my balls on fire and cartwheeling to Ohio.",
      "Child support payments.",
      "Being John Malkovich.",
      "Throwing stones at a man until he dies.",
      "A shiny rock that proves I love you.",
      "Kale.",
      "Stuffing a child's face with Fun Dip&reg; until he starts having fun.",
      "A turd.",
      "Party Mexicans.",
      "Too much cocaine.",
      "Like a million alligators.",
      "Grammar nazis who are also regular Nazis.",
      "A face full of horse cum.",
      "Fresh dill from the patio.",
      "Boring vaginal sex.",
      "Crazy opium eyes.",
      "AIDS monkeys.",
      "Crippling social anxiety.",
      "Not believing in giraffes.",
      "An interracial handshake.",
      "Irrefutable evidence that God is real.",
      "A zero-risk way to make $2,000 from home.",
      "My sex dungeon.",
      "Being nine years old.",
      "Daddy.",
      "Unquestioning obedience.",
      "A bass drop so huge it tears the starry vault asunder to reveal the face of God.",
      "Sharks with legs.",
      "Generally having no idea what's going on.",
      "Bullets.",
      "An unforgettable quincea&ntilde;era.",
      "Two whales fucking the shit out of each other.",
      "A whole lotta woman.",
      "A self-microwaving burrito.",
      "Snorting coke off a clown's boner.",
      "A buttload of candy.",
      "A thrilling chase over the rooftops of Rio de Janeiro.",
      "Dem titties.",
      "The amount of gay I am.",
      "My first period.",
      "Common-sense gun control legislation.",
      "Being a terrible mother.",
      "Being popular and good at sports.",
      "Never having sex again.",
      "A giant powdery manbaby.",
      "A crazy little thing called love.",
      "Stupid.",
      "The best taquito in the galaxy.",
      "Fucking a corpse back to life.",
      "A pizza guy who fucked up.",
      "Ennui.",
      "Injecting speed into one arm and horse tranquilizer into the other.",
      "Lots and lots of abortions.",
      "Eggs.",
      "My worthless son.",
      "Blowjobs for everyone.",
      "Shitting all over the floor like a bad, bad girl.",
      "An uninterrupted history of imperialism and exploitation.",
      "The unbelievable world of mushrooms.",
      "A horse with no legs.",
      "Having been dead for a while.",
      "Drinking responsibly.",
      "Breastfeeding a ten-year-old.",
      "Going to a high school reunion on ketamine.",
      "Backwards knees.",
      "Gwyneth Paltrow's opinions.",
      "The basic suffering that pervades all of existence.",
      "Cutting off a flamingo's legs with garden shears.",
      "The secret formula for ultimate female satisfaction.",
      "Seeing things from Hitler's perspective.",
      "A constant need for validation.",
      "Jizz.",
      "What Jesus would do.",
      "A Ugandan warlord.",
      "Slowly easing down onto a cucumber.",
      "Smoking crack, for instance.",
      "A kiss on the lips.",
      "The haunting stare of an Iraqi child.",
      "A sex comet from Neptune that plunges the Earth into eternal sexiness.",
      "Giant sperm from outer space.",
      "The euphoric rush of strangling a drifter.",
      "Morpheus.",
      "Mom's new boyfriend.",
      "Blackface.",
      "Every ounce of charisma left in Mick Jagger's tired body.",
      "Sudden penis loss.",
      "Daddy's credit card.",
      "Ripping a dog in half.",
      "Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of the night.",
      "Interspecies marriage.",
      "Cancer.",
      "The male gaze.",
      "Being worshipped as the one true God.",
      "All these decorative pillows.",
      "Unrelenting genital punishment.",
      "Exploding pigeons.",
      "A disappointing salad.",
      "The dentist.",
      "Moderate-to-severe joint pain.",
      "Getting drive-by shot.",
      "The black half of Barack Obama.",
      "Western standards of beauty.",
      "A reason not to commit suicide.",
      "40 acres and a mule.",
      "Such a big boy.",
      "10 Incredible Facts About the Anus.",
      "A manhole.",
      "The size of my penis.",
      "The complex geopolitical quagmire that is the Middle East.",
      "My dead son's baseball glove.",
      "Robots who just want to party.",
      "A whole new kind of porn.",
      "Ambiguous sarcasm.",
      "Russian super-tuberculosis.",
      "Prince Ali, fabulous he, Ali Ababwa.",
      "Doing the right stuff to her nipples.",
      "Ancient Athenian boy-fucking.",
      "The eighth graders.",
      "September 11th, 2001.",
      "The safe word.",
      "Doo-doo.",
      "Blackula.",
      "Anal fissures like you wouldn't believe.",
      "Texas.",
      "Going down on a woman, discovering that her vaginas is filled with eyeballs, and being totally into that.",
      "P.F. Chang himself.",
      "Almost giving money to a homeless person.",
      "Depression.",
      "Growing up chained to a radiator in perpetual darkness.",
      "Three consecutive seconds of happiness.",
      "Going inside at some point because of the mosquitoes.",
      "Pussy.",
      "Unsheathing my massive horse cock.",
      "A woman.",
      "Turning the rivers red with the blood of infidels.",
      "A woman who is so cool that he rides on a motorcycle.",
      "The peaceful and nonthreatening rise of China.",
      "A chimpanzee in sunglasses fucking your wife."
    ]
  },
  "Green Box Expansion": {
    "mark": "GREEN",
    "cards": [
      "Finding a nice elevator to poop in.",
      "An incurable homosexual.",
      "The body of a 46-year-old man.",
      "Mixing M&amp;Ms and Skittles like some kind of psychopath.",
      "Grunting for ten minutes and then peeing sand.",
      "Gay thoughts.",
      "When the big truck goes \"Toot! Toot!\"",
      "Water.",
      "Becoming the President of the United States.",
      "Hot lettuce.",
      "Rock-hard tits and a huge vagina.",
      "Meatloaf, the man.",
      "Smashing my balls at the moment of climax.",
      "A creature made of penises that must constantly arouse itself to survive.",
      "My brother's hot friends.",
      "You.",
      "Getting high with mom.",
      "Twisting my cock and balls into a balloon poodle.",
      "Loud, scary thunder.",
      "Whomsoever let the dogs out.",
      "Having a vagina.",
      "A man with the head of a goat and the body of a goat.",
      "Taking the form of a falcon.",
      "A hug.",
      "Putting more black people in jail.",
      "Trevor, the world's greatest boyfriend.",
      "Anal.",
      "Just now finding out about the Armenian Genocide.",
      "Getting the Dorito crumbs out of my pubes.",
      "A man in a suit with perfect hair who tells you beautiful lies.",
      "Critical thinking.",
      "Quacking like a duck in lieu of a cogent argument.",
      "A long business meeting with no obvious purpose.",
      "Facilitating dialogue and deconstructing binaries.",
      "Getting killed and dragged up a tree by a leopard.",
      "Brunch.",
      "Child labor.",
      "Esmeralda, my most beautiful daughter.",
      "The feeling of going to McDonald's as a 6-year-old.",
      "Eating people.",
      "Art.",
      "Having sex with your mom.",
      "The hottest MILF in Dallas.",
      "Getting trapped in a conversation about Ayn Rand.",
      "Happy daddies with happy sandals.",
      "A dolphin that learns to talk and becomes the Dead of Harvard Law School.",
      "The graceful path of an autumn leaf as it falls to its earthen cradle.",
      "Meatloaf, the food.",
      "10,000 shrieking teenage girls.",
      "Chris Hemsworth.",
      "Straight blazin' 24/7.",
      "Objectifying women.",
      "The mysterious fog rolling into town.",
      "Math.",
      "Restoring Germany to its former glory.",
      "Exploring each other's buttholes.",
      "An old dog full of tumors.",
      "Antidepressants.",
      "Having an awesome time drinking and driving.",
      "Jazz.",
      "Dumpster juice.",
      "Raising three kids on minimum wage.",
      "Going to bed at a reasonable hour.",
      "10 football players with erections barreling towards you at full speed.",
      "Working so hard to have muscles and then having them.",
      "Turning 32.",
      "Albert Einstein but if he had a huge muscles and a rhinoceros cock.",
      "Assassinating the president.",
      "A woman's right to choose.",
      "Eternal screaming madness.",
      "Late-stage dementia.",
      "Consensual, nonreproductive incest.",
      "Swearing praise upon the Sultan's hideous daughters.",
      "A cheerfulness that belies a deep-seated self-loathing.",
      "An arrangement wherein I give a person money they have sex with me.",
      "A genetic predisposition for alcoholism.",
      "The wind.",
      "Getting pegged.",
      "Period poops.",
      "The chicken from Popeyes. &reg;",
      "A massive collection of child pornography.",
      "A big, beautiful mouth packed to the brim with sparkling teeth.",
      "Pooping in the potty.",
      "Getting eaten out by a dog.",
      "Munchin' puss.",
      "It being too late to stop having sex with a horse.",
      "One of those \"blow jobs\" I've been hearing so much about.",
      "The lived experience of African Americans.",
      "Prematurely ejaculating like a total loser.",
      "Big, smart money boys tap-tapping on their keyboards.",
      "Homework.",
      "A finger up the butt.",
      "Tiny, rancid girl farts.",
      "The sweet, forbidden meat of the money.",
      "Farting all over my face with your tight little asshole.",
      "Doing a somersault and barfing.",
      "The government.",
      "How good lead paint taste.",
      "Every man's ultimate fantasy: a perfectly cylindrical vagina.",
      "Rubbing my bush all over your bald head.",
      "Feeling the emotion of anger.",
      "Gregor, my largest son.",
      "A strong horse and enough rations for thirty days.",
      "Getting aborted.",
      "Systems and policies designed to preserve centuries-old power structures.",
      "Overthrowing the democratically-elected government of Chile.",
      "A weird guy who says weird stuff and weirds me out.",
      "How strange it is to be anything at all.",
      "Twenty cheerleaders laughing at your tiny penis.",
      "Everything.",
      "The flaming wreckage of the International Space Station.",
      "A duffel bag full of lizards.",
      "Beyonc&eacute;.",
      "The fear and hatred in men's hearts.",
      "One of them big-city Jew lawyers.",
      "An empowered woman.",
      "Tables.",
      "The amount of baby carrots I can fit up my ass.",
      "Farting a huge shit out of my pussy.",
      "Being sexually attracted to children.",
      "Participating.",
      "Blossoming into a beautiful young woman.",
      "Discovering that what I really want in life is to kill people and have sex with their corpses.",
      "Breastfeeding in public like a radiant earth goddess.",
      "ISIS.",
      "All these people I've killed.",
      "The full force of the American military.",
      "Eating ass.",
      "Who really did 9/11.",
      "Condoleezza Rice.",
      "Content.",
      "Creamy slices of real, California avocado.",
      "How sad it will be when Morgan Freeman dies.",
      "A black friend.",
      "Whooping your ass at Mario Kart.",
      "Sudden and unwanted slam poetry.",
      "A cold and indifferent universe.",
      "The best, deepest quotes from The Dark Night.",
      "Salsa Night at Dave's Cantina.",
      "Dominating a man by peeing on his eldest son.",
      "Two shitty kids and a garbage husband.",
      "The Rwandan Genocide.",
      "The LGBT community.",
      "Founding a major world religion.",
      "Rolling so hard.",
      "My huge penis and substantial fortune.",
      "Forty-five minutes of finger blasting.",
      "How great my ass looks in these jeans.",
      "Pooping in a leotard and hoping no one notices.",
      "Guns.",
      "Getting this party started!",
      "Twenty bucks.",
      "Getting laid like all the time.",
      "A big ol' plate of fettuccine alfredo.",
      "Showing all the boys my pussy.",
      "Fucking me good and taking me to Red Lobster.&reg;",
      "A terrified fat child who won't come out of the bushes.",
      "Doritos and a Fruit Roll-Up.",
      "Mommy and daddy fighting all the time.",
      "Holding the proper political beliefs of my time to attract a mate.",
      "Onions.",
      "Self-identifying as a DJ.",
      "Watching you die.",
      "Some real spicy shrimps.",
      "A burrito that's just sour cream.",
      "The bond between a woman and her horse.",
      "The secret to truly resilient hair.",
      "Mental illness.",
      "Gayle from HR.",
      "Informing you that I am a registered sex offender.",
      "A negative body image that is totally justified.",
      "Political correctness.",
      "The clown that followed me home from the grocery store.",
      "That bitch, Stacy.",
      "Ejaculating at the apex of a cartwheel.",
      "Gazpacho.",
      "Having sex with a man and then eating his head.",
      "An X-Man whose power is that he has sex with dogs and children.",
      "Out-of-control teenage blowjob parties.",
      "Tender chunks of all-white-meat chicken.",
      "Crushing the patriarchy.",
      "The full blown marginalization of ugly people.",
      "Aborting the shit out of a fetus.",
      "Film roles for actresses over 40.",
      "Plowing that ass like a New England corn farmer.",
      "Huge big balls full of jizz.",
      "Some of that good dick.",
      "Being turned into sausages.",
      "Hating Jews.",
      "Crazy anal orgasms.",
      "Regurgitating a half-digested sparrow.",
      "The ol' penis-in-the-popcorn surprise.",
      "A tiny fireman who puts out tiny fires.",
      "Dis bitch.",
      "Trees.",
      "Three hours of nonstop penetration.",
      "Slamming a dunk.",
      "Starting a shitty podcast.",
      "Gary.",
      "Feminism.",
      "Our baby.",
      "Falling into a pit of waffles.",
      "A woman's perspective.",
      "Chipotle.",
      "Scissoring, if that's a thing.",
      "Watching a hot person eat.",
      "Defeating a gorilla in single combat.",
      "Bad emotions I don't want.",
      "A creepy child singing a nursery rhyme.",
      "Comprehensive immigration reform.",
      "Denying the Holocaust.",
      "Two beautiful pig sisters.",
      "Catching a live salmon in your mouth.",
      "Daddy going away forever.",
      "A medium horchata.",
      "Libertarians.",
      "Picking up a glass of water and taking a sip and being the president.",
      "Waking up inside of a tornado.",
      "Making out and stuff.",
      "A slowly encroaching circle of wolves.",
      "Opening your mouth to talk and a big penis fops out.",
      "Eating too many Cinnabons and then vomiting and then eating the vomit.",
      "Seizing control of the means of production.",
      "Misogyny.",
      "Thinking about what eating even is.",
      "Dropping dead in a Sbarro's bathroom and not being found for 72 hours.",
      "Sucking each other's penises for hours on end.",
      "Awesome pictures of planets and stuff.",
      "Microaggressions.",
      "Pretending to be one of the guys but actually being the spider god.",
      "Fucking my therapist.",
      "Having sex with a beautiful person.",
      "Moon people.",
      "Jason, the teen mayor.",
      "Quinoa.",
      "China.",
      "Menopause.",
      "My dog dying.",
      "A gun that shoots cobras.",
      "Reaching an age where barbecue chips are better than sex.",
      "Going around pulling people's tampons out.",
      "Playing my asshole like a trumpet.",
      "Getting blasted in the face by a t-shirt cannon.",
      "Getting naked too soon."
    ]
  },
  "90s Nostalgia Pack": {
    "mark": "90s",
    "cards": [
      "Pamela Anderson's boobs running in slow motion.",
      "A bus that will explode if it goes under 50 miles per hour.",
      "<i>Pure Moods</i> , Vol. 1.",
      "Jerking off to a 10-second RealMedia clip.",
      "Pizza in the morning, pizza in the evening, pizza at supper time.",
      "Stabbing the shit out of a Capri Sun.",
      "Angels interfering in an otherwise fair baseball game.",
      "Sucking the President's dick.",
      "Sunny D! Alright!",
      "The Great Cornholio.",
      "Painting with all the colors of the wind.",
      "Cool 90s up-in-the-front hair.",
      "The Y2K bug.",
      "A mulatto, an albino, a mosquito, and my libido.",
      "Liking big butts and not being able to lie about it.",
      "Deregulating the mortgage market.",
      "Kurt Cobain's death.",
      "A threesome with 1996 Denise Richards and 1999 Denise Richards.",
      "Freeing Willy.",
      "Several Michael Keatons.",
      "Patti Mayonnaise.",
      "Wearing Nicolas Cage's face.",
      "Log.&trade;"
    ]
  },
  "Holiday Pack 2012": {
    "mark": "❄2012",
    "cards": [
      "Santa's heavy sack."
    ]
  },
  "Vote for Hillary Pack": {
    "mark": "V4HIL",
    "cards": [
      "Donald Trump holding his nose while he eats pussy.",
      "Black lives mattering.",
      "Kicking the middle class in the balls with a regressive tax code.",
      "Slapping Ted Cruz over and over.",
      "Eating the president's pussy.",
      "Keeping the government out of my vagina.",
      "The fact that Hillary Clinton is a woman.",
      "Increasing economic inequality and political polarization.",
      "The Bernie Sanders revolution.",
      "A beautiful, ever-expanding circle of inclusivity that will never include Republicans.",
      "Letting Bernie Sanders rest his world-weary head on your lap.",
      "The systemic disenfranchisement of black voters."
    ]
  },
  "Vote for Trump Pack": {
    "mark": "V4TR",
    "cards": [
      "Actually voting for Donald Trump to be President of the actual United States.",
      "Growing up and becoming a Republican.",
      "A liberal bias.",
      "Full-on socialism.",
      "Hating Hillary Clinton.",
      "Jeb!",
      "Conservative talking points.",
      "Courageously going ahead with that racist comment.",
      "The good, hardworking people of Dubuque, Iowa.",
      "Dispelling with this fiction that Barack Obama doesn't know what he's doing.",
      "Shouting the loudest.",
      "Sound fiscal policy."
    ]
  },
  "House of Cards Pack": {
    "mark": "US",
    "cards": [
      "Punching a congressman in the face.",
      "A much younger woman.",
      "An older man.",
      "A homoerotic subplot.",
      "The sensitive European photographer who's fucking my wife.",
      "An origami swan that's some kind of symbol?",
      "Carbon monoxide poisoning.",
      "A childless marriage.",
      "Ribs so good they transcend race and class.",
      "25 shitty jokes about <i>House of Cards.</i>",
      "Making it look like a suicide.",
      "Forcing a handjob on a dying man.",
      "Getting eaten out while on the phone with Dad.",
      "My constituents.",
      "Strangling a dog to make a point to the audience.",
      "Discharging a firearm in a residential area."
    ]
  },
  "College Pack": {
    "mark": "COLEG",
    "cards": [
      "Performative wokeness.",
      "The sound of my roommate masturbating.",
      "Rocking a 1.5 GPA.",
      "Pretending to have done the reading.",
      "Throw up.",
      "Uggs, leggings, and a North Face.",
      "Valuable leadership experience.",
      "Whichever one of you took a shit in the shower.",
      "Fucking the beat boxer from the a cappella group.",
      "Five morons signing a lease together.",
      "Googling how to eat pussy.",
      "Sucking a flaccid penis for 20 minutes.",
      "My high school boyfriend.",
      "A bachelor's degree in communications.",
      "Calling mom because it's just really hard and I miss her and I don't know anyone here.",
      "Wandering the streets in search of a party.",
      "Underage drinking.",
      "Young Republicans.",
      "A Yale man.",
      "An emergency all-floor meeting of inclusion.",
      "Going to college and becoming a new person, who has sex.",
      "How many Asians there are.",
      "A girl who is so interesting that she has blue hair.",
      "Falling in love with poetry."
    ]
  },
  "Holiday Pack 2013": {
    "mark": "❄2013",
    "cards": [
      "Eating an entire snowman.",
      "A Christmas stocking full of coleslaw.",
      "Giving money and personal information to strangers on the Internet.",
      "The royal afterbirth.",
      "A magical tablet containing a world of unlimited pornography.",
      "Breeding elves for their priceless semen.",
      "Clearing a bloody path through Walmart with a scimitar.",
      "Slicing a ham in icy silence.",
      "A simultaneous nightmare and wet dream starring Sigourney Weaver.",
      "A visually arresting turtleneck.",
      "Moses gargling Jesus's balls while Shiva and the Buddha penetrate his divine hand holes.",
      "The tiny, calloused hands of the Chinese children that made this card.",
      "The Star Wars Holiday Special.",
      "Rudolph's bright red balls.",
      "Jizzing into Santa's beard.",
      "Being blind and deaf and having no limbs.",
      "Mall Santa.",
      "The Hawaiian goddess Kapo and her flying detachable vagina.",
      "Taking down Santa with a surface-to-air missile.",
      "Fucking up \"Silent Night\" in front of 300 parents.",
      "Krampus, the Austrian Christmas monster.",
      "Several intertwining love stories featuring Hugh Grant.",
      "Space Jam on VHS.",
      "Swapping bodies with mom for a day.",
      "Immaculate conception.",
      "People with cake in their mouths talking about how good cake is.",
      "Congress's flaccid penises withering away beneath their suit pants.",
      "Having a strong opinion about Obamacare.",
      "Whatever Kwanzaa is supposed to be about.",
      "A Hungry-Man&trade; Frozen Christmas Dinner for One.",
      "Making up for 10 years of shitty parenting with a PlayStation.",
      "The Grinch's musty, cum-stained pelt."
    ]
  },
  "Fantasy Pack": {
    "mark": "FNTSY",
    "cards": [
      "Dinosaurs who wear armor and you ride them and they kick ass.",
      "Accidentally conjuring a legless horse that can't stop ejaculating.",
      "Shitting in a wizard's spell book and jizzing in his hat.",
      "A Hitachi Magic Wand.",
      "Reading <i>The Hobbit</i> under the covers while mom and dad scream at each other downstairs.",
      "How hot Orlando Bloom was in <i>Lord of the Rings.</i>",
      "A mysterious, floating orb.",
      "Shooting a wizard with a gun.",
      "Hodor.",
      "Make-believe stories for autistic white men.",
      "A magical kingdom with dragons and elves and no black people.",
      "The card Neil Gaiman wrote: \"Three elves at a time.\"",
      "Gender equality.",
      "Going on an epic adventure and learning a valuable lesson about friendship.",
      "True love's kiss.",
      "Eternal darkness.",
      "The all-seeing Eye of Sauron.",
      "Bathing naked in a moonlit grove.",
      "Handcuffing a wizard to a radiator and dousing him with kerosene.",
      "Kneeing a wizard in the balls.",
      "A ghoul.",
      "A weed elemental who gets everyone high.",
      "A gay sorcerer who turns everyone gay.",
      "A CGI dragon.",
      "Freaky, pan-dimensional sex with a demigod.",
      "A dwarf who won't leave you alone until you compare penis sizes."
    ]
  },
  "Mass Effect Pack": {
    "mark": "MSFX",
    "cards": [
      "Falling in actual love with a video game character.",
      "My complicated backstory that you will soon learn about.",
      "The Genophage.",
      "Totally fuckable aliens.",
      "Running a few errands before saving the galaxy.",
      "Bone-shattering sex with a metal woman.",
      "Space racism.",
      "An emergency induction port.",
      "An armored Krogan war-clitoris.",
      "An extremely long elevator ride."
    ]
  },
  "Holiday Pack 2014": {
    "mark": "❄2014",
    "cards": [
      "Being replaced by a robot.",
      "The events depicted in James Cameron's <i>Avatar.</i>",
      "Blockbuster late fees up the wazoo.",
      "All the poop inside of my body.",
      "A protracted siege.",
      "The diminishing purity of the white race.",
      "Trying to feel something, anything.",
      "A cloud of ash that darkens the Earth for a thousand years.",
      "A vague fear of something called ISIS.",
      "200 years of slavery.",
      "The transience of all things.",
      "Ebola.",
      "Small-town cops with M4 assault rifles.",
      "Rising sea levels consistent with scientific predictions.",
      "What remains of my penis.",
      "Harnessing the miraculous power of the atom to slaughter 200,000 Japanese people.",
      "This groovy new thing called LSD.",
      "Building a ladder of hot dogs to the moon.",
      "Rock music and premarital sex.",
      "The Great Lizard Uprising of 2352.",
      "The dying breath of the last human.",
      "Reading an entire book.",
      "The Bowflex Revolution."
    ]
  },
  "NASA Pack": {
    "mark": "NASA",
    "cards": [
      "Forgetting to convert pound-seconds into newton-seconds.",
      "A zero-g cumshot.",
      "Seven minutes of terror.",
      "A slow, shitty car that drives around Mars for no reason.",
      "Discovering some bullshit microscopic life instead of anything cool.",
      "Achieving escape velocity.",
      "Dreaming of going to space, but being hopelessly fat."
    ]
  },
  "Food Pack": {
    "mark": "FOOD",
    "cards": [
      "Kevin Bacon Bits.",
      "Being emotionally and physically dominated by Gordon Ramsay.",
      "A belly full of hard-boiled eggs.",
      "Kale farts.",
      "Clamping down on a gazelle's jugular and tasting its warm life waters.",
      "A table for one at The Cheesecake Factory.",
      "The hot dog I put in my vagina ten days ago.",
      "The Dial-A-Slice Apple Divider from Williams-Sonoma.",
      "Oreos for dinner.",
      "A joyless vegan patty.",
      "Soup that's better than pussy.",
      "The Hellman's Mayonnaise Corporation.",
      "Going vegetarian and feeling so great all the time.",
      "Not knowing what to believe anymore about butter.",
      "A sobering quantity of chili cheese fries.",
      "Licking the cake batter off of grandma's fingers.",
      "Real cheese flavor.",
      "Swishing the wine around and sniffing it like a big fancy man.",
      "Sucking down thousands of pounds of krill every day.",
      "The inaudible screams of carrots.",
      "Committing suicide at the Old Country Buffet.",
      "What to do with all of this chocolate on my penis.",
      "Father's forbidden chocolates.",
      "Jizz Twinkies."
    ]
  },
  "PAX East 2013 Pack A": {
    "mark": "PE13A",
    "cards": [
      "An immediately regrettable $9 hot dog from the Boston Convention Center.",
      "Paying the iron price.",
      "Casting Magic Missile at a bully.",
      "Rotating shapes in mid-air so that they fit into other shapes when they fall.",
      "Firefly: Season 2.",
      "Jiggle physics."
    ]
  },
  "Season's Greetings Pack": {
    "mark": "❄2013",
    "cards": [
      "Elf cum.",
      "A toxic family environment.",
      "The shittier, Jewish version of Christmas.",
      "Gift-wrapping a live hamster.",
      "Socks.",
      "These low, low prices!",
      "Finding out that Santa isn't real.",
      "My hot cousin.",
      "Pretending to be happy.",
      "Another shitty year.",
      "Piece of shit Christmas cards with no money in them.",
      "The 9,000 children who starved to death today.",
      "How many drinks Aunt Deborah has had.",
      "A snowman that contains the soul of my dead father.",
      "A choir of angels descending from the sky and jizzing all over dad's sweater.",
      "Probably Grandma's last Christmas, kids.",
      "A frozen homeless man shattering on your doorstep.",
      "Snow falling gently on the frozen body of an orphan boy.",
      "My uncle who voted for Trump.",
      "How great of a blowjob Jesus could give.",
      "Starting to see where ISIS is coming from.",
      "Fucking up <i>Silent Night</i> in front of 300 parents.",
      "How cool it is that I love Jesus and he loves me back."
    ]
  },
  "PAX East 2013 Pack B": {
    "mark": "PE13B",
    "cards": [
      "The rocket launcher.",
      "Getting inside the Horadric Cube with a hot babe and pressing the transmute button.",
      "Spending the year's insulin budget on Warhammer 40k figurines.",
      "Punching a tree to gather wood.",
      "Violating the First Law of Robotics."
    ]
  },
  "PAX East 2013 Pack C": {
    "mark": "PE13C",
    "cards": [
      "Vespene gas.",
      "Wil Wheaton crashing an actual spaceship.",
      "The Klobb.",
      "Smashing all the pottery in a Pottery Barn in search of rupees.",
      "Judging elves by the color of their skin and not by the content of their character."
    ]
  },
  "Geek Pack": {
    "mark": "GEEK",
    "cards": [
      "Getting bitch slapped by Dhalsim.",
      "Running out of stamina.",
      "Sharpening a foam broadsword on a foam whetstone.",
      "The depression that ensues after catching 'em all.",
      "Loading from a previous save.",
      "Charging up all the way.",
      "Achieving 500 actions per minute.",
      "Forgetting to eat, and consequently dying."
    ]
  },
  "Jew Pack": {
    "mark": "JEW",
    "cards": [
      "Resurrecting an army of six million Jews and conquering Germany.",
      "The part of Anne Frank's diary where she talks about her vagina.",
      "Sacrificing Isaac to the Lord.",
      "The ethical implications of enjoying a Woody Allen film in light of the allegations against him.",
      "Chopping off a bit of the penis.",
      "Some kind of concentrated encampment for people.",
      "Pork products.",
      "Wandering the desert for 40 years.",
      "What it means to be a Jewish woman in contemporary society.",
      "Suddenly remembering that the Holocaust happened.",
      "Thy neighbor's wife.",
      "Holding up the line at Walgreens by trying to use an expired coupon.",
      "Demolishing that ass like a Palestinian village.",
      "Being chosen by God to win a free iPod Nano.",
      "A little bit of schmutz right there.",
      "Torturing Jews until they say they're not Jews anymore.",
      "A lifetime of internalized guilt.",
      "A three-foot-tall corned beef sandwich.",
      "Usury.",
      "Hiding from the Nazis.",
      "Bags of money.",
      "The blood of Christian babies.",
      "A headache that's definitely cancer.",
      "A big brain full of facts and sadness.",
      "Whoopi Goldberg."
    ]
  },
  "PAX Prime 2013 Pack": {
    "mark": "13PAX",
    "cards": [
      "Tapping Serra Angel.",
      "The gravity gun.",
      "Never watching, discussing, or thinking about My Little Pony.",
      "Reading the comments.",
      "The Sarlacc.",
      "Unlocking a new sex position.",
      "Being an attractive elf trapped in an unattractive human's body.",
      "Bowser's aching heart.",
      "Charles Barkley Shut Up and Jam!",
      "70,000 games sweating and farting inside an airtight steel dome.",
      "The collective wail of every <i>Magic</i> player suddenly realizing that they've spent hundreds of dollars on pieces of cardboard.",
      "Legendary Creature -- Robert Khoo.",
      "Allowing nacho cheese to curdle in your beard while you creep in League of Legends.",
      "Winning the approval of Cooking Mama that you never got from actual mama.",
      "Temporary invincibility.",
      "Full HD.",
      "The boner hatch in the Iron Man suit.",
      "Buying virtual clothes for a Sim family instead of real clothes for a real family.",
      "An angry stone head that stomps on the floor every three seconds.",
      "Offering sexual favors for an ore and a sheep.",
      "Turn-of-the-century-sky racists.",
      "Getting into a situation with an owlbear.",
      "Grand Theft Auto: Fort Lauderdale.",
      "Achieving the manual dexterity and tactical brilliance of a 12-year-old Korean boy.",
      "The decade of legal inquests following a single hour of Grand Theft Auto.",
      "SNES cartridge cleaning fluid.",
      "Eating a pizza that's lying in the street to gain health.",
      "Mario Kart rage.",
      "A homemade, cum-stained <i>Star Trek</i> uniform.",
      "Google Glass + e-cigarette: Ultimate Combo!",
      "Yoshi's huge egg-laying cloaca.",
      "A fully-dressed female videogame character.",
      "Nude-modding Super Mario World.",
      "A madman who lives in a policebox and kidnaps women.",
      "Filling every pouch of a UtiliKilt&trade; with pizza.",
      "The Cock Ring of Alacrity.",
      "Rolling a D20 to save a failing marriage."
    ]
  },
  "Period Pack": {
    "mark": ".",
    "cards": [
      "Period globs.",
      "Always&reg; Infinity Extra Heavy Overnight Pads with Wings.",
      "Wringing out a sopping wet maxi pad in Donald Trump's mouth.",
      "Playing with my pussy while I watch TV.",
      "An emotionally draining friendship.",
      "Post-partum depression.",
      "Full bush.",
      "Drinking Beyonce's DivaCup and becoming immortal.",
      "Feeling lots of feelings.",
      "Carrying a fetus to term.",
      "Eating three sleeves of Chips Ahoy!",
      "Destroying a pair of underwear.",
      "Masturbating with a Sonicare.",
      "How bloody that dick's about to be.",
      "The vagina hole.",
      "Dancing carefree in white linen pants.",
      "Pussy lips of all shapes and sizes.",
      "Using a Smucker's Uncrustable&trade; as a maxi pad.",
      "Pulling out a never-ending tampon.",
      "Catching a whiff of my vag.",
      "A diverse group of female friends casually discussing the side effects of birth control.",
      "A woman president.",
      "Driving my daughter to her abortion.",
      "Feeling bloaty and crampy."
    ]
  },
  "Post-Trump Pack": {
    "mark": "PSTT",
    "cards": [
      "Whipping lower-class white men into a xenophobic frenzy.",
      "Extra rations for my little girl.",
      "Roaming through a wasteland of windblown trash and deserted highways.",
      "Drinking urine to survive.",
      "A legitimate reason to commit suicide.",
      "Burying my only son.",
      "Desperately hurling insults at Donald Trump as he absorbs them into his rapidly expanding body.",
      "Trying to remember what music was.",
      "Casual dismissiveness.",
      "Finding out that democracy might not be such a great idea.",
      "A father and son fighting each other over the last scrap of bread.",
      "Mild amusement.",
      "A back-alley abortion from a Mexican cyborg doctor.",
      "Rage.",
      "World Wards 3 through 5.",
      "President Donald Trump.",
      "Making Islam illegal.",
      "Trying to wake up from this nightmare.",
      "The purging of the disloyal.",
      "Nuclear winter.",
      "Bringing millions of dangerous, low-paying manufacturing jobs back to America.",
      "A gnawing sense of dread."
    ]
  },
  "Reject Pack": {
    "mark": "RJECT",
    "cards": [
      "Caribbean Jesus.",
      "Corn.",
      "Super yoga.",
      "A sexy naked interactive theater thing.",
      "Actually believing that the Bible happened.",
      "A giant squid in a wedding gown.",
      "A heart that is two sizes too small and that therefore cannot pump an adequate amount of blood.",
      "Ejaculating a pound of tinsel.",
      "Crawling into a vagina.",
      "Faking a jellyfish sting so someone will pee on you.",
      "My dick in your mouth.",
      "Asshole pomegranates that are hard to eat.",
      "The John D. and Catherine T. MacArthur Foundation.",
      "Dividing by zero.",
      "Becoming so rich that you shed your body and turn into vapor.",
      "Playing an ocarina to summon Ultra-Congress from the sea."
    ]
  },
  "Retail Pack": {
    "mark": "RTAIL",
    "cards": [
      "Feeding a man a pie made of his own children.",
      "Ironically buying a trucker hat and then ironically being a trucker for 38 years.",
      "A teenage boy gunning for a handjob."
    ]
  },
  "Sci-Fi Pack": {
    "mark": "SCIFI",
    "cards": [
      "Going too far with science and bad things happening.",
      "Frantically writing equations on a chalkboard.",
      "An alternate history where Hitler was gay but he still killed all those people.",
      "A hazmat suit full of farts.",
      "That girl from the Hungry Games.",
      "Funkified aliens from the planet Groovius.",
      "The ending of <i>Lost.</i>",
      "Vulcan sex-madness.",
      "Three boobs.",
      "A misty room full of glistening egg sacs.",
      "Cheerful blowjob robots.",
      "How great of a movie <i>Men in Black</i> was.",
      "A planet-devouring space worm named Rachel.",
      "Beep beep boop beep boop.",
      "Nine seasons of sexual tension with David Duchovny.",
      "Darmok and Jalad at Tanagra.",
      "A protagonist with no qualities.",
      "The dystopia we're living in right now.",
      "Cosmic bowling.",
      "Masturbating Yoda's leathery turtle-penis.",
      "Laying thousands of eggs in a man's colon.",
      "Trimming poop out of Chewbacca's butt hair."
    ]
  },
  "Reject Pack 2": {
    "mark": "RJCT2",
    "cards": [
      "Sandwich.",
      "At least three ducks.",
      "Mushy tushy.",
      "Saving the Rainforest Cafe.",
      "Becoming engorged with social justice jelly and secreting a thinkpiece.",
      "That one leftover screw.",
      "Greg Kinnear's terrible lightning breath.",
      "Sir Thomas More's Fruitopia.&trade;",
      "Mr. and Mrs. Tambourine Man's jingle-jangle morning sex.",
      "The spooky skeleton under my skin.",
      "A double murder suicide barbeque.",
      "Sweating it out on the streets of a runaway American Dream.",
      "Disco Mussolini.",
      "That thing politicians do with their thumbs when they talk.",
      "These dolphins.",
      "A dick so big and so black that not even light can escape its pull.",
      "Being the absolute worst.",
      "A primordial soup and salad bar.",
      "Three hairs from the silver-golden head of Galadriel.",
      "A stack of bunnies in a trenchcoat.",
      "Mitt Romney's eight sons Kip, Sam, Trot, Fergis, Toolshed, Grisham, Hawkeye, and Thorp.",
      "Ringo Starr &amp; His All-Starr Band.",
      "The token lesbian.",
      "Water so cold it turned into a rock."
    ]
  },
  "Science Pack": {
    "mark": "NASA",
    "cards": [
      "Uranus.",
      "Being knowledgeable in a narrow domain that nobody understands or cares about.",
      "A supermassive black hole.",
      "A 0.7 waist-to-hip ratio.",
      "The quiet majesty of the sea turtle.",
      "Photosynthesis.",
      "Getting really worried about global warming for a few seconds.",
      "Infinity.",
      "Reconciling quantum theory with general relativity.",
      "Driving into a tornado to learn about tornadoes.",
      "Explosive decompression.",
      "Oxytocin release via manual stimulation of the nipples.",
      "Developing secondary sex characteristics.",
      "David Attenborough watching us mate.",
      "Achieving reproductive success.",
      "Electroejaculating a capuchin monkey.",
      "Insufficient serotonin.",
      "Slowly evaporating.",
      "Failing the Turing test.",
      "Evolving a labyrinthe vagina.",
      "Fun and interesting facts about rocks.",
      "The Sun engulfing the Earth.",
      "3.7 billion years of evolution."
    ]
  },
  "Weed Pack": {
    "mark": "WEED",
    "cards": [
      "How bright the sun is.",
      "Grinning like an idiot.",
      "Smoking a blunt butt-ass naked.",
      "Forgetting to breathe and then dying.",
      "Dank ass cancer weed.",
      "Snoop Dogg.",
      "A whole cheese pizza just for me.",
      "Dicking around on the guitar for an hour.",
      "Cheesy crunchies.",
      "Whatever the fuck I was just talking about.",
      "Ancient aliens.",
      "Huge popcorn nugs of hairy alien weed.",
      "Too much edibles.",
      "An eight-foot man smoking a six-foot bong.",
      "Unbelievably soft carpet.",
      "Dropping stuff and knocking everything over.",
      "My own fingers.",
      "The banks, the media, the entire system, man.",
      "A sandwich with Cheetos in it!",
      "A bong rip so massive it restores justice to the kingdom.",
      "Being too high for airplane.",
      "Hot tub.",
      "Eating all the skin off a rotisserie chicken.",
      "Smoking a joint with former President Barack Obama.",
      "Getting high and watching <i>Planet Earth.</i>"
    ]
  },
  "Retail Product Pack": {
    "mark": "RTPRD",
    "cards": [
      "A Pringles&reg; can full of screams.",
      "A framed photocopy of an oil painting of Paris, France.",
      "Buying the right toothbrush cup for my lifestyle.",
      "Shiny gadgets for sadness distraction.",
      "Saving 20% or more on khakis.",
      "How fun it is to eat Pringles&reg;.",
      "Refusing to go up a size.",
      "An exclusive partnership with Taylor Swift.",
      "An 800-foot-long pool noodle.",
      "Confusing possessions with accomplishments.",
      "Blood Pringles&reg;.",
      "Crunchy snacks for my big flappy mouth.",
      "A Pringle&reg;.",
      "Subsisting on tiny pizzas.",
      "Extracting the maximum amount of money from naive consumers.",
      "The obscene amount of money Cards Against Humanity is making by selling this game at Target.&reg;",
      "Gender-neutral toys that make children feel no emotions whatsoever.",
      "Getting eaten out in the family fitting room.",
      "Buying and returning clothes just to have someone to talk to."
    ]
  },
  "Tabletop Pack": {
    "mark": "TBLTP",
    "cards": [
      "A marriage-destroying game of <i>The Resistance</i> .",
      "SIX GOD DAMN HOURS OF FUCKING DIPLOMACY.",
      "Condensing centuries of economic exploitation into 90 minutes of gaming fun.",
      "Spending 8 years in the Himalayas becoming a master of dice-rolling and resource allocation.",
      "A disappointing season of Tabletop that's just about tables.",
      "A zombie with a tragic backstory.",
      "A Wesley Crusher blow-up doll.",
      "The porn set that Tabletop is filmed on.",
      "An owlbear.",
      "The pooping position.",
      "A German-style board game where you invade Poland.",
      "Victory points."
    ]
  },
  "World Wide Web Pack": {
    "mark": "WWW",
    "cards": [
      "A fun, sexy time at the nude beach.",
      "A complete inability to understand anyone else's perspective.",
      "Three years of semen in a shoebox.",
      "A respectful discussion of race and gender on the Internet.",
      "Taking a shit while running at full speed.",
      "A night of Taco Bell and anal sex.",
      "Googling.",
      "Smash Mouth.",
      "A man from Craigslist.",
      "My browser history.",
      "Getting teabagged by a fifth grader in <i>Call of Duty.</i>",
      "My privileged white penis.",
      "Internet porn analysis paralysis.",
      "YouTube comments.",
      "Pretending to be black.",
      "That thing on the Internet everyone's talking about.",
      "Goats screaming like people.",
      "Destroying Dick Cheney's last horcrux.",
      "Game of Thrones spoilers.",
      "Cat massage.",
      "Matching with Mom on Tinder."
    ]
  },
  "Box Expansion Pack": {
    "mark": "BOXEX",
    "cards": [
      "Boxing up my feelings.",
      "An alternate universe in which boxes store things inside of people.",
      "Being a motherfucking box.",
      "The Boxcar Children.",
      "A box that is conscious and wishes it weren't a box.",
      "A box within a box.",
      "A man-shaped box.",
      "A world without boxes.",
      "A box of biscuits, a box of mixed biscuits, and a biscuit mixer.",
      "Former President George W. Box.",
      "A box without hinges, key, or lid, yet golden treasure inside is hid.",
      "A box-shaped man.",
      "The J15 Patriot Assault Box.",
      "A falcon with a box on its head.",
      "Two midgets shitting into a box.",
      "An outbreak of smallbox.",
      "Something that looks like a box but turns out to be a crate.",
      "Pandora's vagina.",
      "A boxing match with a giant box.",
      "A box."
    ]
  },
  "Hidden Compartment Pack": {
    "mark": "HCOMP",
    "cards": [
      "How far I can get my own penis up my butt.",
      "Getting drugs off the street and into my body.",
      "A gossamer stream of jizz that catches the light as it arcs through the morning air.",
      "Eight beautiful men jerking each other off in front of a fountain.",
      "Ruth Bader Ginsberg brutally gaveling your penis.",
      "A blind, quadriplegic AIDS survivor with face cancer and diarrhea.",
      "Free ice cream forever, or getting fingered by Chris Hemsworth for five minutes.",
      "Digging up Heath Ledger's corpse to reenact the prom scene from Ten Things I Hate About You.",
      "Throwing your hands in the air and waving them despite caring deeply.",
      "Chugging a gallon of milk and then vomiting a gallon of milk.",
      "How wonderful it is when my master throws the ball and I go and get it for him.",
      "Giving ISIS whatever they want so they leave us alone.",
      "Throwing a baby dolphin back into the ocean with a perfect spiral.",
      "Sitting in a jar of vinegar all night because I am pickle.",
      "Hickory-fucked pork ribs smothered in hot garbage."
    ]
  },
  "PAX Prime 2014 Pack: ": {
    "mark": "PAX14",
    "cards": [
      "Getting bitten by a radioactive spider and then battling leukemia for 30 years.",
      "Separate drinking fountains for dark elves.",
      "Stuffing my balls into a Sega Genesis and pressing the power button.",
      "Ser Jorah Mormont's cerulean-blue balls.",
      "A grumpy old Harrison Ford who'd rather be doing anything else.",
      "Taking 2d6 emotional damage.",
      "KHAAAAAAAAAN!",
      "Endless ninjas.",
      "Demons and shit.",
      "Collecting all seven power crystals.",
      "Xena, Warrior Princess.",
      "The old gods.",
      "The Star Wars Universe.",
      "The imagination of Peter Jackson.",
      "Lagging out.",
      "All of the good times and premium gaming entertainment available to you in the Kickstarter room.",
      "Attacking from Kamchatka.",
      "The pure, Zen-like state that exists between micro and macro.",
      "Mistakenly hitting on a <i>League of Legends</i> statue.",
      "A giant mechanical bird with a tragic backstory.",
      "Whatever <i>Final Fantasy</i> bullshit happened this year.",
      "Futuristic death sports."
    ]
  }
}

export function getShuffledStack(allSets: any, setsToUse: string[]) {
  let cards = []
  for (let set of setsToUse) {
    if (allSets[set])
      for (let card of allSets[set].cards)
        if (typeof card != 'string') {
          cards.push({ ...card, mark: allSets[set].mark });
        }
        else
          cards.push({ text: card, mark: allSets[set].mark });
  }
  shuffleArrayInplace(cards)
  return cards
}

const defaultSets = [
  "Blue Box Expansion",
  "Base Game (International)",
  "Box Expansion Pack",
  "Green Box Expansion",
  "Red Box Expansion"
]

let sortedLabels = customSort(arrayUnique(Object.keys(blackSets).concat(Object.keys(whiteSets))))
let clientDataPrep: any = {}
for (let set of sortedLabels) {
  clientDataPrep[set] = { white: whiteSets[set] ? whiteSets[set].cards.length : 0, black: blackSets[set] ? blackSets[set].cards.length : 0, checked: defaultSets.includes(set) }
}

export const clientStartGameData = clientDataPrep
