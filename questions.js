var q = JSON.parse(`[
  {
  "question": "Which of the two years were the modern Summer Olympics never held?",
  "options": ["2012 and 2016", "1936 and 1940", "1940 and 1944", "1914 and 1918"],
  "answer": 2
  },
  {
  "question": "Which virus epidemic in Latin America is a serious safety concern to this year’s Olympics?",
  "options": ["Polio", "Horse Radish", "Zika", "Swine Flu"],
  "answer": 2
  },
  {
  "question": "The only city to host the Olympics a record 3 times is:",
  "options": ["Athens", "Delhi", "London", "Riiiiiooooo Baby"],
  "answer": 2
  },
  {
  "question": "Are there athletes who do not represent any country and participate under the Olympic Flag?",
  "options": ["True", "False"],
  "answer": 0
  },
  {
  "question": "Which of the following statements is true about the Olympics right after World War 2?",
  "options": ["Germany and Japan and Italy were all banned", "Only Germany and Japan were banned", "Only Germany was banned. Heil Hitler *Nazi Salute*", "Yes"],
  "answer": 1
  },
  {
  "question": "What are the two official languages of the International Olympics Committee (IOC)?",
  "options": ["English and Greek", "Greek and French", "Engilsh and French", "English and Klingon (in case aliens are real)"],
  "answer": 2
  },
  {
  "question": "There was a terrorist attack, along with the kidnapping and murder of 11 Israeli athletes in which Olymipcs?",
  "options": ["Munich, 1972", "Sydney, 2000", "Mexico City, 1968", "Los Angeles, 1984"],
  "answer": 0
  },
  {
  "question": "Europe has held more Olympic Games (Summer and Winter) than North and South America.",
  "options": ["TRUE", "FALSE"],
  "answer": 0
  },
  {
  "question": "The 1976 Summer Olympics in Montreal, Canada was opened by:",
  "options": ["Queen Elizabeth II", "Pierre Trudeau, then Canadian PM", "Ronald Reagan", "Justin Trudeau, now Candian PM"],
  "answer": 0
  },
  {
  "question": "How many female athletes participated in the 1900 French Olympics?",
  "options": ["0", "10, because a quota was set", "1", "22"],
  "answer": 3
  },
  {
  "question": "Indian PM Narendra Modi and IOC President Thomas Bach met in New Delhi during a meeting on 27 April in 2015. What did they agree on?",
  "options": ["That India will host the 2024 Olympics.", "Indian chai is the best chai.", "That 2024 is too early for India to host the Olympics.", "India and Nepal together will host the 2024 Olympics."],
  "answer": 2
  },
  {
  "question": "What were the scores of PV Sindhu vs Caroline Marin, 2016 Olympics Badminton finals? (left: PVS, right: CM)",
  "options": ["17-21, 14-21, 19-21", "21-19, 12-21, 15-21", "21-18, 21-19, 21-14", "21-17, 11-21, 21-19"],
  "answer": 1
  },
  {
  "question": "How many Indian athletes are at Rio 2016?",
  "options": ["117", "84", "132", "78"],
  "answer": 1
  },
  {
  "question": "Which country won the most medals in the first Olympics in 1896?",
  "options": ["Greece", "USA", "USSR", "UK"],
  "answer": 1
  },
  {
  "question": "The modern Olympics started in 1896, but they were originated from the ancients Olympic games from ancient Greece. However…. has Greece ever hosted a modern Olympics game?",
  "options": ["Yes, of course. They hosted the first one in 1896.", "Yes, but not the first one in 1896.", "False, the nation has decided to not to host any modern Olympics, so as to not ruin the reputation of the ancient ones.", "False. Sadly, they are no longer the great Greek Empire they once were during the reign of Alexander."],
  "answer": 0
  },
  {
  "question": "Out of 389 athletes from this country, 111 were removed from this year’s Olympic games, testing positive for performance enhancing doping. Which country?",
  "options": ["Russia", "USA", "China", "India"],
  "answer": 0
  },
  {
  "question": "Aside from the Summer Olympics there are many other Olympics. Which of these are NOT one of them?",
  "options": ["Youth Olympics Games", "Transgender Olympics Games", "Paralympic Games", "Winter Olympics Games"],
  "answer": 1
  },
  {
  "question": "Which were the first Olympics in which India was represented? In fact, India won 2 silver medals here.",
  "options": ["1900", "1948", "1956", "1960"],
  "answer": 0
  },
  {
  "question": "Which of the following companies is a worldwide Olympic sponsor?",
  "options": ["Taco Bell: 'Live mas' ('mas' = more in Spanish)", "Subway: 'Eat fresh'", "McDonalds: 'I’m lovin’ it'", "KFC: 'Finger licking good'"],
  "answer": 2
  },
  {
  "question": "Which country own the most medals overall this year?",
  "options": ["China", "Russia", "USA", "German"],
  "answer": 2
  },
  {
  "question": "Who coached PV Sindhu?",
  "options": ["Sachin Tendulkar", "Pullela Gopichand", "Abhinau Finland", "U. Vimal Kumar"],
  "answer": 1
  },
  {
  "question": "What was the gymnastics vault that Dipa Karmakar performed to get 4th place?",
  "options": ["Vault of Fear", "Vault of Death", "Vault of Fire", "Vault of Vengeance"],
  "answer": 1
  },
  {
  "question": "The LA Olympics in 1984 were the first to be profitable for the city. What do you think is the reason?",
  "options": ["LA doubled it’s city taxes that year.", "The IOC mandated that all participating countries provide funds to the host city.", "A spike in tourism thanks to lots of new global airline connections", "Official company sponsorships and telivison broadcasting rights for the time first."],
  "answer": 3
  },
  {
  "question": "The 1936 Olympic Games were the first to be ever televised, held in Berlin. The games that year were popularly referred to as?",
  "options": ["Televised Olympics", "Beer Olympics", "Nazi Olympics"],
  "answer": 2
  },
  {
  "question": "For the 2020 Summer Olympic Games, Japan is planning to spend over $6,000,000 to pull of something that never has been done before. What’s up, Japan?",
  "options": ["Anime themed stadium", "*need a better option here*", "Man-made meteor shower", "Huge working mecha mascot"],
  "answer": 2
  },
  {
  "question": "The first official Olympic mascot appeared in the 1972 Summer Olympics, Munich. Named a Waldi, it was a/an:",
  "options": ["Snowman", "Hitler", "Dachshund Dog", "Abstract Figure"],
  "answer": 2
  },
  {
  "question": "We talk a lot about the Summer/Winter Olympic Games, but waaait… We have Youth Summer/Winter Olympic Games too!? That’s right, to fight down childhood obesity, they brought us the YOG for ages 14-18. When was the first Youth Summer Games held?",
  "options": ["1998", "2004", "2010", "2020 (wut. )"],
  "answer": 2
  },
  {
  "question": "Chancellor and Fuhrer Adolf Hitler, officially opening the 11th modern Olympics in Germany failed to impose which of the following conditions?",
  "options": ["Make Germany win the most number of medals", "Banning all the Jews from playing", "Promote his Nazi party paper, Volischer Beobachter", "Make this the last Olympics for until 1948 *hint hint... WW2*"],
  "answer": 1
  },
  {
  "question": "Oscar Swahn, a Swedish shooter, was the oldest olympian ever. Despite his age, his marksmanship has seemed to be on point. How old was he when he won his last medal, which was a Silver?",
  "options": ["60", "54", "72", "69"],
  "answer": 2
  },
  {
  "question": "True or False: In the Summer Olympic Games, India has earned more medals than North Korea. (Hint: North Korea participated in 9 games, India did in 23)",
  "options": ["True", "False", "‘The Interview’ is the best movie ever"],
  "answer": 1
  },
  {
  "question": "Abebe Bikila, an Ethiopian was the first African to win a gold, he did so in the 1960 Rome Olympics for the marathon. What was special about this first?",
  "options": ["He ran shirtless", "He ran naked ;)", "He ran barefoot", "Nothing special, he was just too fast"],
  "answer": 2
  },
  {
  "question": "Today, you atleast need to be 16 to participate in the Games, but in 1896 a Greek gymnast was too hardcore for age limits. This made him the youngest Olympic medalist on record. How old was this lad, when he won his first medal?",
  "options": ["9 years 143 days", "14 years 231 days", "13 years 101 days", "10 years 218 days"],
  "answer": 3
  },
  {
  "question": "Hosting cities have been trying to outdo one another with elaborate and spectacular opening ceremonies ever since this city started doing it…",
  "options": ["London, 1908", "Los Angeles, 1932", "Los Angeles, 1984", "Beijing, 2008"],
  "answer": 0
  },
  {
  "question": "Greece marches first in the opening ceremony as they’ve got the historical status as the progenitor of the Olympics, but who marches last?",
  "options": ["North Korea (fk ‘em)", "Nazi Germany", "The Host Country", "The country which failed the final bidding to be the host"],
  "answer": 0
  },
  {
  "question": "Who entered the Rio closing ceremony dressed up as Mario and through a green pipe on the stage?<br><img src='/images/sdfbfvsdhj.jpg' height='256'>'",
  "options": ["Hwang Kyo-ahn, Korean Prime Minister", "Shinzo Abe, Japanese Prime Minister", "Xi Jinping, Chinese Premier", "Kim Jong-Un, Supreme Leader, North Korea (and the world)"],
  "answer": 1
  },
  {
  "question": "ID<br><img src='/images/dhgsdh.png' height='256'>",
  "options": ["Traditional seat for the high priestess.", "Solar concentrator to light the torch.", "An invitation to the Greek gods.", "An offering to Zeus."],
  "answer": 1
  },
  {
  "question": "'A Chinese medicinal therapy in which heated glass cups are applied to the skin along the meridians of the body, creating suction and believed to stimulate the flow of energy.' What are we talking about?",
  "options": ["Drug infusion a.k.a A certain doping procedure", "Spa treatment", "Cupping", "Thermal Chakra Stimulation Procedure (TCSP)"],
  "answer": 2
  },
  {
  "question": "Why has the Olympic salute been discontinued?",
  "options": ["Because of its similarity to the Nazi Salute.", "Because of the difficulty it posed to Paralympic athletes.", "Because of the different interpretations in different cultures across the world.", "Because television broadcasters thought the audiences disliked it."],
  "answer": 0
  },
  {
  "question": "Which of the following is the Olympic salute?",
  "options": ["Three fingers to the sky.", "Outstretched index and middle fingers of the right hand touching the left shoulder.", "Downward facing closed palm lifted above shoulder level and shifted to the right.", "Raised right hand fist."],
  "answer": 2
  },
  {
  "question": "The tradition of the Olympic relay was restarted in the Berlin Olympics of 1936. Why?",
  "options": ["Hitler thought it was a cool idea.", "As a show of strength.", "To show a connection between the Ancient Greece and the German Reich.", "All of the above."],
  "answer": 3
  },
  {
  "question": "The first Olympic flag went missing for 77 years until it was later found in the suitcase of a 1920 Olympian. Why did it go missing?",
  "options": ["Taken as part of a dare.", "It was misplaced.", "Switched suitcases.", "It was secretly auctioned."],
  "answer": 0
  },
  {
  "question": "Who is considered the first torch bearer?",
  "options": ["Adolf Hitler", "The High Priestess", "Prometheus", "Zeus"],
  "answer": 2
  },
  {
  "question": "'The design of the ______ was inspired by the Olympic spirit, our country’s nature, and the harmonious diversity and energy of our people. …once open, reveal the sky, mountains, sea and the ground, represented by the promenade of Copacabana.' FITB",
  "options": ["The Rio Mascot", "The Rio Olympic Torch", "The Rio colour scheme", "The Rio Olympic Stadium"],
  "answer": 1
  },
  {
  "question": "Funda?<br><img src='/images/fnjsknfjs.png' height=256>",
  "options": ["Homage to lives lost during Crimea war.", "It just failed.", "Represents Asian(Russia) ring.", "For peace."],
  "answer": 1
  },
  {
  "question": "ID<br><img src='/images/sdfjfg.png' height=256>",
  "options": ["Paralympic Games Logo", "Athens 2004 Olympics Logo", "Winter Olympics Logo", "Olympic Committee sponsor in late 20th Century"],
  "answer": 0
  },
  {
  "question": "The Paralympic Games logo consists of three crescents called “agitos”. What does it mean?",
  "options": ["I excel.", "I win.", "We excel.", "I move."],
  "answer": 3
  },
  {
  "question": "The Russian Olympic team arrived 12 days late to the 1908 Olympics. Why?",
  "options": ["Russia still hadn’t converted to the Gregorian Calendar.", "Bad weather affected travel time.", "Protests and revolts in Russia.", "None of the above."],
  "answer": 0
  },
  {
  "question": "Bobby Pearce, a rower, waited for a duck and her ducklings to cross during the 1928 Summer Olympics quarterfinal. Did he win?",
  "options": ["Yes", "No"],
  "answer": 0
  },
  {
  "question": "This is one of the official posters for?<br><img src='/images/sdfjhgsd.png' height=256>",
  "options": ["Sydney Olympics (2000)", "Rio Olympics (2016)", "London Olympics (2012)", "Tokyo Olympics (2020)"],
  "answer": 1
  },
  {
  "question": "The mayor of the city that organized the Games transfers a special Olympic Flag to the president of the IOC, who then passes it on to the mayor of the city hosting the next Olympic Games. The receiving mayor then waves the flag eight times. What is this called?",
  "options": ["Oslo Ceremony", "Conclusion Ceremony", "Seoul Ceremony", "Antwerp Ceremony"],
  "answer": 3
  },
  {
  "question": "The five Olympic rings are meant to represent the five Continents. Which of the following is correct?",
  "options": ["Europe: Blue ; Asia: Yellow ; Africa: Black ; Australia and Ocaeania: Green ; Americas: Red", "Europe: Red ; Asia: Blue ; Africa: Green ; Australia and Ocaeania: Yellow ; Americas: White", "Europe: White ; Asia: Black ; Africa: Yellow ; Australia and Ocaeania: Blue ; Americas: Red", "No colour matches."],
  "answer": 3
  },
  {
  "question": "Which of the following statements are false with respect to the Olympic logo?",
  "options": ["The five rings represent the five continents.", "The five colours along with white constitute colours found on flags of all contesting nations.", "White Flag and Black Ring for the monotones along with the major vibrant colours of RGB and yellow.", "None of these are false."],
  "answer": 2
  },
  {
  "question": "Who is the father of the modern Olympics?",
  "options": ["Adolf Hitler", "Zeus", "Baron de Coubertin", "Carl Diem"],
  "answer": 2
  },
  {
  "question": "What does the Olympic motto, “Citius, Altius, Fortius”, stand for?",
  "options": ["Young, Old, Everyone", "Faster, Higher, Stronger", "Yesterday, Today, Forever", "Harder, Better, Meaner, Stronger"],
  "answer": 1
  },
  {
  "question": "Who are the official mascots of Rio Olympics 2016?",
  "options": ["Dominic and Josh", "Vinicius and Tom", "Gabriel and Ana", "Lucas and Regina"],
  "answer": 1
  },
  {
  "question": "The mascots of the Rio Olympics were named by public vote after…?",
  "options": ["The creators of the song 'The Girl from Ipanema'.", "Traditional Brazilian names.", "Historical figures.", "Popular cartoon characters."],
  "answer": 1
  },
  {
  "question": "What do they represent?",
  "options": ["Brazil’s Sand and Surf", "Brazil’s abundant Sun and Water", "Brazilian wildlife and plant life", "Mangoes, Guavas and Berries"],
  "answer": 2
  },
  {
  "question": "Which of the following has never been the name of a mascot in the Olympics?",
  "options": ["Izzy", "Cobi", "Quatchi", "Sherman"],
  "answer": 3
  },
  {
  "question": "Which of the following animals has never been a mascot in the Olympics?",
  "options": ["Dachsund", "Iguana", "Kookaburra", "Wombat"],
  "answer": 1
  },
  {
  "question": "During the 2012 Olympics, the US business, founded by rapper Dr Dre and music executive Jimmy Iovine, instructed its staff to “bump” into Olympic athletes and give them a pair of free ______, especially swimmers. Some, given to British athletes, were even embossed with the Union Jack. What was given?",
  "options": ["Hats", "Shoes", "Watches", "Headphones"],
  "answer": 3
  },
  {
  "question": "Legend states that Philippides was sent from the battlefield of ______ to Athens to announce that the Persians had been defeated in the Battle of _____ (in which he had just fought), which took place in August or September, 490 BC. It is said that he ran the entire distance without stopping and burst into the assembly, exclaiming 'we have won!', before collapsing and dying. Fill in the blanks, which led to the name of an olympic event.w",
  "options": ["Race walking", "Dressage", "Marathon", "Sepak Takraw"],
  "answer": 2
  },
  {
  "question": "In the Ancient Olympics, there was only one winner and he was given a ________ as a prize. But these weren’t just any _______. They were taken from a sacred tree that was located at Olympia behind the temple dedicated to Zeus. To reward his mastery of the events, a statue was built in the winner’s honour.",
  "options": ["Medal made of dried olives", "Olive wreath", "Precious gems from under the tree", "Olive branch"],
  "answer": 1
  },
  {
  "question": "Which of the following games in reintroduced to the 2016 Olympics, previously only held before 1904?",
  "options": ["Golf", "Squash", "Pentathlon", "Rugby"],
  "answer": 0
  },
  {
  "question": "Shizo Kanakuri has the record for taking the longest time to complete a marathon. How long did he take?",
  "options": ["55 mins", "55 hours", "55 days", "55 years"],
  "answer": 3
  },
  {
  "question": "The Motto of the 1972 olympics was the _______ games which is ironic because the event was overshadowed by the ‘Munich Massacre’ where terrorists held the Israeli team hostage leading to the death of 5 athletes, 6 coaches.",
  "options": ["Peace Games", "Inspire a generation", "A new world", "Happy Games"],
  "answer": 3
  },
  {
  "question": "What is the motto for the 2016 Olympics",
  "options": ["Welcome Home", "Inspire a generation", "A new world", "One World, One dream"],
  "answer": 2
  },
  {
  "question": "Which of the following games was NOT included in the 1900 version of the Olympics?",
  "options": ["Pigeon shooting", "Rope Climbing", "Race Walking", "Tug-of-War"],
  "answer": 1
  },
  {
  "question": "The term Olympian for sportsmen was coined by",
  "options": ["Shakespeare", "Tiberies", "Plato", "Pierre de Coubertin"],
  "answer": 0
  },
  {
  "question": "In which part of Greece where the Ancient Olympics held",
  "options": ["Achaea", "Elean", "Arcadia", "Messenia"],
  "answer": 1
  },
  {
  "question": "What did the winners of the 1900 Olympics get?",
  "options": ["Gold Medals", "Gold plaques", "Gold trophies", "Olive Wreath"],
  "answer": 1
  },
  {
  "question": "In which sport does India have the maximum medal tally in the Olympics",
  "options": ["Shooting", "Tennis", "Badminton", "Hockey"],
  "answer": 3
  },
  {
  "question": "This Winter Olympics game involves using a broom and a stone officially became a part of the games in 2006. (It used to be a demonstration game. before)",
  "options": ["Quidditch", "Shuffleboard", "Curling", "Croquet"],
  "answer": 1
  },
  {
  "question": "Which body determines where the Olympics are held?",
  "options": ["The International Olympic Board", "The International Olympic Committee", "The Olympic Committee of Planning", "The United Nations Committee on Sport"],
  "answer": 1
  },
  {
  "question": "The Pierre de Coubertin medal also known as the true Spirit of Sportsmanship medal was first awarded to a German Long jumper who befriended and adviced Jessie Owens in the German Olympics of 1936. Name him",
  "options": ["Roanld Harvey", "Thomas Rohler", "Alfred Theodor", "Carl Ludwig Long"],
  "answer": 3
  },
  {
  "question": "The Olympic Order is the highest award of the Olympic movement awarded to distinguished contributions to the Olympic movement. In 2012 a US politician was  awarded this prestigious prize because of his contributions that nearly saed the 2002 Salt City Winter Olympics. Name the politician.",
  "options": ["Arnold schwarzenegger", "Jeb Bush", "Mitt Romney", "Steve Bullock"],
  "answer": 2
  },
  {
  "question": "In the history of Summer Olympics, India has won only one medal in this category, which category is it?",
  "options": ["Athletics", "Badminton", "Weightlifting", "Boxing"],
  "answer": 2
  },
  {
  "question": "Recently PV Sindhu became the youngest Olympic medallist for India. Who held this distinction before her?",
  "options": ["Vijender Singh", " Saina Nehwal", "Abhinav Bindra", "Mary Kom"],
  "answer": 0
  },
  {
  "question": "Before independence, India won medals in hockey for team event. Which other sport did India win a medal during those years?",
  "options": ["Swimming", "Wrestling", "Tennis", "Athletics"],
  "answer": 3
  },
  {
  "question": "Who is the first female sportsperson in India to win an individual medal at Olympics?",
  "options": ["Saina Nehwal", "Karnam Malleswari", "Mary Kom", "Sakshi Malik"],
  "answer": 1
  },
  {
  "question": "In 1984, X came the closest to win a medal for India in the Olympics in the 400m hurdles finishing 4th and losing the medal by 1/100th of a second. This was the closest loss for any Indian in the track and field events in Olympics. Id X?",
  "options": ["Milkha Singh", "PT Usha", "Anju Bobby George", "Anuradha Biswal"],
  "answer": 1
  },
  {
  "question": "A player from _____ won the golden boot in the 1956 Olympics football event, eventhough they did not win any medal. FITB?",
  "options": ["Germany", "Brazil", "Argentina", "India"],
  "answer": 3
  },
  {
  "question": "India is one of the two teams to win 11 medals in field hockey over the course of 108 years. Who is the other team?",
  "options": ["Pakistan", "Belgium", "Australia", "Germany"],
  "answer": 3
  },
  {
  "question": "Nicknamed “Pocket Dynamo”, X is the only Olympic medallist to not receive a Padma Award. When he returned from winning a medal at the Olympics, his villagers took out a 151 bullock cart procession accompanied by deafening beats of drums for 7 long hours to bask in the glory he had bought to their village. X?",
  "options": ["Vijender Singh", "Dhyan Chand", "Yogeshwar Dutt", "Khashaba Dadasaheb Jadhav"],
  "answer": 3
  },
  {
  "question": "Mark Spitz had planned to do something at the 1072 Munich Games, but he decided against it, when he joked about it to a Russian coach, who took it seriously. What?",
  "options": ["He shaved his moustache", "He shaved his body hair", "Took to wearing a cap while swimming", "Paint his nails"],
  "answer": 0
  },
  {
  "question": "The first suspension because a person had used an illegal substance was at the 1968 Mexico Games. The athlete in question was Hans-Gunnar Liljenwall, a Swedish pentathlete. What was the substance?",
  "options": ["Heroin", "Cocaine", "Substance X", "Alcohol"],
  "answer": 3
  },
  {
  "question": "At the Montreal Games, the Olympic flame went out due to a rainstorm. How was it (immediately) re-lit?",
  "options": ["With a match", "With a cigarette lighter", "With a firecracker", "With a death ray beam"],
  "answer": 1
  },
  {
  "question": "This game was included in the 1900 Paris Games only, and the competitors were only Britain and France. Name the sport?",
  "options": ["Baseball", "Cricket", "Ball badminton", "Knife throwing"],
  "answer": 1
  }
]
`);

module.exports = q;