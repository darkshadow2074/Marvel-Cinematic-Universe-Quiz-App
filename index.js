const readLine = require("readline-sync");
const chalk = require("chalk");
let answer = [];

const userName = readLine.question(chalk.bgCyan("\nPlease Enter Your Name Before We Proeed The Game : "));
console.log("\n=============================================");
let ironMan = [
  {question: "\nWhen did Iron Man first appear in comics?\na ) 1954\nb ) 1963\nc ) 1972\nd ) 1981\nAns: ",
  answer: 'b'},
  {question: "\nWhat year did the first Iron Man movie come out?\na ) 2004\nb ) 2006\nc ) 2008\nd ) 2010\nAns : ",
  answer: 'c'},
  {question: "\nWhat is the name of the actor who plays Iron Man?\na ) Robert Downey Jr\nb ) Chris Hemsworth\nc ) Tom Holland\nd ) Chris Evans\nAns : ",
  answer: 'a'},
  {question: "\nWhat does Harley Call Tony In 'Iron Man 3'?\na ) The Protector\nb ) The Mechanic\nc ) The Inventor\nd ) The Hero\nAns : ",
  answer: 'b'},
  {question: "\nWhat does Stark Drink In 'Iron Man 2'?\na ) Chlorophyll\nb ) Palladium Juice\nc ) Green Luck\nd ) Kale Moothie\nAns : ",
  answer: 'a'},  
  ];
let captainAmerica = [
  {question: "\nWhat is Captain America's real name ?\na ) Johnny Storm\nb ) Steve Rogers\nc ) Bucky Barnes\nd ) None Of These\nAns : ",
  answer: 'b'},
  {question: "\nHow does the Marvel hero Captain America get his powers?\na ) Hydra experiment\nb )chemical exposure\nc ) a U.S. military experiment\nd ) None Of These\nAns : ",
  answer: 'c'},
  {question: "\nWhat duo created Captain America?\na ) Jack Kirby and Joe Simon\nb ) Sheldon Mayer and Gardner Fox\nc ) Stan Lee and Bill Finger\nd ) None Of These\nAns : ",
  answer: 'a'},
  {question: "\nMarvel's first version of a Captain America movie went straight to video in the U.S.\na ) True\nb ) False\nc ) Both True\nd ) None Of These\nAns : ",
  answer: 'a'},
  {question: "\nWhat is Captain America's primary weapon?.\na ) machine gun\nb ) a shield\nc ) a pistol\nd ) None Of These\nAns :  ",
  answer: 'b'},  
]; 
let nickFury = [
  {question: "\nWhich Was The First Marvel Movie Nick Fury Appeared In?\na ) The Avengers\nb ) The Incredible Hulk\nc ) Captain America: The First Avenger\nd ) Iron Man\nAns : ",
  answer: 'd'},
  {question: "\nWhat Is Nick Fury's Middle Initial?\na ) P\nb ) J\nc ) F\nd ) R\nAns : ",
  answer: 'c'},
  {question: "\nWhere Was Nick Fury Born?\na ) Memphis, Tennessee\nb ) Phoneix,Arizona\nc ) Atlanta,Georgia\nd ) Huntsville,Alabama\nAns : ",
  answer: 'd'},
  {question: "\nHow Does Nick Fury Lose Sight In His Left Eye?\na ) He was being tortured by the Kree\nb ) He Was shot with bullet\nc ) Goose The cat scratched him\nd ) Nazi grenade\nAns : ",
  answer: 'd'},
  {question: "\nIn Which Film Is Nick Fury Supposedly Killed, Only To Be Shown Alive Later?\na ) Iron Man 2\nb ) Captain America: The Winter Soldier \nc ) Ant-Man and the Wasp\nd ) Captain Marvel\nAns : ",
  answer: 'c'},
];


let captainMarvel = [
  {question: "\nWhat race does Mar-Vell belong to?\na ) Kree\nb ) Watchers\nc ) Skrull\nd ) Timebreakers\nAns : ",
  answer: 'a'},
  {question: "\nWho is Mar-Vell's son?\na ) Gens-Vell\nb ) Fahr-Vell\nc ) Elysia\nd ) Genis-Vell\nAns : ",
  answer: 'd'},
  {question: "\nShortly after arriving on Earth, Mar-Vell took this alias.?\na ) James Devon\nb ) Dennis Blake\nc ) Walter Lawson\nd ) Gene Howard\nAns : ",
  answer: 'd'},
  {question: "\nWhom did Mar-Vell battle as his physical body lay dying?\na ) Galactus\nb ) Thanos\nc ) Annihilus\nd ) Fenris\nAns : ",
  answer: 'b'},
  {question: "\n In which issue of 'Marvel Super-Heroes' did Mar-Vell first appear?\na ) Twelve\nb ) Seventeen\nc ) Eleven\nd ) Six\nAns : ",
  answer: 'a'},
];


let groot = [
  {question: "\nwho is groots best friend?\na ) drax\nb ) rocket raccoon\nc ) gamora\nd ) yandu\nAns : ",
  answer: 'b'},
  {question: "\nwho calls groot twig?\na ) quill\nb ) rocket\nc ) drax\nd ) yondu\nAns : ",
  answer: 'd'},
  {question: "\nwhen groot is dancing who makes him stop dancing by looking at him?\na ) Thanos\nb ) Drax\nc ) Peter\nd ) Spider Man\nAns : ",
  answer: 'b'},
  {question: "\nwhen did groot first show up?\na ) Age of Ultron\nb ) Guardians of the Galaxy 2\nc ) guardians of the galaxy 1\nd ) Infinity War\nAns : ",
  answer: 'c'},
  {question: "\ncan thor speak groot?\na ) yes\nb ) no\nc ) maybe\nd ) I Don't Know\nAns : ",
  answer: 'a'},
];
 let hawkeye = [
  {question: "\nWhich Of These Is NOT The Name Of One Of Clint's Children ?\na ) Cooper\nb ) Dinah\nc ) Lila\nd ) Nathaniel\nAns : ",
  answer: 'b'},    
  {question: "\nAccording To Bobbi Morse, This Mercenary Was Once Hired By HYDRA To Kill Clint (and Failed) ?\na ) Anton Ivanov\nb ) Viktor Orlov\nc ) Jack Rollins\nd ) Marcus Scarlotti\nAns : ",
  answer: 'd'},
  {question: "\nIn His Introduction In Thor, Barton Notably Nearly Picked This Weapon Before Grabbing His Bow ?\na ) A Shotgun\nb ) A Handgun\nc ) A Sniper Rifle\nd ) A Grenade Launcher\nAns : ",
  answer: 'c'},
  {question: "\nUnder Loki's Mind Control, Clint Stole Iridium In This German City ?\na ) Stuttgart\nb ) Munich\nc ) Berlin\nd ) Hamburg\nAns : ",
  answer: 'a'},
  {question: "\nDuring The Assault On Strucker's Base, Clint Was Severely Wounded When He Was Hit By A Cannon Blast ?\na ) To His Right Arm\nb ) To His Abdomen\nc ) To His Chest\nd ) To His Left Thigh\nAns : ",
  answer: 'b'},      
 
];
let blackWidow = [
  {
    question: "\nwhat is black widow's real name ?\na ) Black Widow\nb ) Gamora\nc ) Natasha Romanoff\nd ) Burse Banner\nAns : ",
    answer: 'c'
  },
  {
    question: "\nwho dose black widow honor the most ?\na ) IronMan\nb ) Captain America\nc ) Hulk\nd ) Hawkeye\nAns : ",
    answer: 'd'
  },
  {
    question: "\nWhat Did Black Widow See During Her Dream Sequence In Age Of Ultron? ?\na ) Glimpses of all the people she has ever killed\nb ) The time she set fire to a hospital\nc ) Her assassin training at the Red Room\nd ) A lost love from before she became a spy\nAns : ",
    answer: 'c'
  } , 
  {
    question: "\nHow does Black Widow turn the Hulk back into Bruce Banner?\na ) By asking politely\nb ) By shouting \nc ) With lulaby\nd ) With speacial powers\nAns : ",
    answer: 'a'
  },
  {
    question: "\nWhat Alias Did Black Widow Use As Tony Stark's Assistant In Iron Man 2 ?\na ) Natalie Rushman\nb ) Natalia Romanova\nc ) Natasha Romanoff\nd ) Yelena Belova\nAns : ",
    answer: 'a'
  }  , 
];
let hulk = [
  {
    question: "\nWhere was Bruce Banner living in the beginning scenes (not counting the flashback sequence in the opening credits) ?\na ) Guatemala\nb ) Peru\nc ) Mexico\nd ) Brazil\nAns : ",
    answer: 'd'
  },
  {
    question: "\nBruce was helped via the Internet in his quest for a cure. On the instant messenger, Bruce went by Mr. Green. What was his helper's screen name ?\na ) Mr. Yellow\nb ) Mr. Red\nc ) Mr. Blue\nd ) Mr. Black\nAns : ",
    answer: 'c'
  },
  {
    question: "\nTo further his quest for a cure, Bruce learned that he needed more data from back home. What university did Bruce go to ?\na ) Culver University\nb ) Stanford University\nc ) University of California, Berkeley\nd ) University of Chicago\nAns : ",
    answer: 'a'
  },
  {
    question: "\nWhy did the General want Bruce ?\na ) He wanted to cure Bruce.\nb ) He wanted to kill Bruce for harming Betty.\nc ) He wanted Bruce to face justice for his crimes.\nd ) He wanted to turn the Hulk research into an army weapon.\nAns : ",
    answer: 'd'
  },
  {
    question: "\nWhat method of transportation did Bruce and Betty NOT use at any point to get to or around New York City ?\na ) Boat\nb ) Walking\nc ) Subway\nd ) Cab\nAns : ",
    answer: 'c'
  },
];
let spiderMan = [
  {
    question: "\nWho is Peter's uncle ?\na ) Uncle Boss\nb ) Uncle Ben\nc ) Uncle Grandpa\nd ) Uncle May\nAns : ",
    answer: 'b'
  },
  {
    question: "\nWho is Peter's best friend in Spider-Man: Homecoming ?\na ) Ned\nb ) Lizz\nc ) Flash\nd ) Peter Parke\nAns : ",
    answer: 'a'
  },
  {
    question: "\nWWho is Peter's mentor ?\na ) Tony Tark\nb ) Zendaya\nc ) Aunt May\nd ) Uncle May\nAns : ",
    answer: 'a'
  },
  {
    question: "\nWhat is Spider-man' s suit called in Avengers: Infinity War ?\na ) Iron Man\nb ) Iron Suit\nc ) Spider Suit\nd ) Iron Suit\nAns : ",
    answer: 'd'
  },
  {
    question: "\nIn what movie did Spider-Man become an Avenger ?\na ) Spider-Man: Homecoming\nb ) Spider-Man: Far from Home\nc ) Avengers: Infinity War\nd ) Captain America: Civil War\nAns : ",
    answer: 'c'
  },
];

let antMan = [
  {
    question: "\nWhat Is Scott's Full Name ?\na )Scott Harvey Lang\nb ) Scott Edward Harris Lang\nc ) Scott Edmund Howard Lang\nd ) Scott Ethan Hedley Lang\nAns : ",
    answer: 'b'
  },
  {
    question: "\nWhat is the Name of the Company Where Scott worked before getting arrested ?\na ) Pym Technologies\nb ) Milgrom Hotel\nc ) HYDRA\nd) Vistacorp\nAns : ",
    answer: 'd'
  },
  
  {
    question: "\nWhat Does Scott Have A Masters Degree In ?\na ) Mechanical Engineering\nb ) Bio Engineering\nc ) Hydro Engineering\nd ) Electrical Engineering\nAns : ",
    answer: 'd'
  },
  {
    question: "\nHow Many Years Did Scott Spend In San Quentin State Prison ?\na ) 3\nb ) 2\nc ) 4\nd ) 5\nAns : ",
    answer: 'a'
  },

  {
    question: "\nWhat Is The Name Of Scott's Daughter ?\na )Caddie\nb ) Caitlan\nc ) Carly\nd ) Cassie\nAns : ",
    answer: 'd'
  },

];
let doctorStrange = [
  {
   question: "\nWho played the role of Dr. Stephen Strange in the movie ?\na ) Tom Hiddleston\nb ) Mark Ruffalo\nc ) Robert Downey Jr.\nd ) Benedict Cumberbatch\nAns : ",
    answer: 'd'
  },
  {
   question: "\nWhere does Dr. Strange go to get himself healed ?\na ) Taj Mahal\nb ) Kamar Taj\nc ) Mt. Everest\nd ) Hong Kong\nAns : ",
    answer: 'b'
  },
  {
   question: "\nWhom out of these appears in the post-credit scenes (What?! You didn't wait to watch that? How unlucky!) ?\na ) Thor\nb ) Frigga\nc ) Odin\nd ) Loki\nAns : ",
    answer: 'a'
  },
  {
   question: "\n What was the wi-fi password that Mordo gave Strange ?\na ) Avada Kedavara\nb ) Shamballa\nc ) Dormammu\nd ) Kaecillius\nAns : ",
    answer: 'b'
  },
  {
   question: "\nWhich relic chooses Dr. Strange ?\na ) The Wand of Watoomb\nb ) The Eye of Agamotto\nc ) The Cloak of Levitation\nd ) The Infinity Stone\nAns : ",
    answer: 'c'
  },
];
let thor = [
  {
    question: "\nWhich Actor Plays Thor ?\na ) Chris Hemsworth\nb ) Michael Hemsworth\nc ) Luke Hemsworth\nd ) Danny Hemsworth\nAns : ",
    answer: 'a'
  },
  {
    question: "\nWhere Is Thor From ?\na )Battleworld\nb ) Midgard\nc ) Xandar\nd ) Assguard\nAns : ",
    answer: 'd'
  },
  {
    question: "\nWho Is Thor's Sister ?\na ) Ayesha\nb ) Hela\nc ) Mystique\nd ) Viper\nAns : ",
    answer: 'b'
  },
  {
    question: "\nn Which Movie Did Thor Battle Surtur ?\na ) Thor: The Dark World\nb ) Thor nightmare\nc ) Thor: Ragnarok\nd ) Age of Ultron\nAns : ",
    answer: 'c'
  },

  {
    question: "\nWhat Nickname Does Stark Give To Thor ?\na ) Bill & Ted\nb ) Point Break\nc ) Road House\nd ) Wayne's World\nAns : ",
    answer: 'b'
  },

];
let blackPanther = [
 {
  question: "\nWho is allowed to make a challenge for the throne of Wakanda in ritual combat ?\na ) ANY MEMBER OF THE ROYAL FAMILY ONLY.\nb ) ANY MEMBER OF THE ROYAL FAMILY OR A REPRESENTATIVE FROM ONE OF THE TRIBES.\nc ) ANY WAKANDAN.\nd ) A REPRESENTATIVE FROM ONE OF THE TRIBES ONLY.\nAns : ",
    answer: 'b'
 },
 {
  question: "\nWhat was Zuri’s alias when living in Oakland ?\na ) ERIC\nb ) GEORGE\nc ) JAMES\nd ) ANDRE\nAns : ",
    answer: 'c'
 },
 {
  question: "\nWhy did T’Chaka decide to leave Killmonger in Oakland ?\na ) HE WANTED TO COVER UP THE FACT THAT HE KILLED N’JOBU.\nb ) HE WAS AFRAID KILLMONGER MIGHT TRY TO AVENGE HIS FATHER’S DEATH.\nc ) HE BELIEVED IT WAS BETTER FOR KILLMONGER TO LIVE IN AMERICA, WHERE HE WAS ACCUSTOMED TO LIVING.\nd ) ALL OF THE ABOVE.\nAns : ",
    answer: 'a'
 },
 {
  question: "\nWhat is W’Kabi’s job in Wakanda ?\na ) CHIEF OF THE BORDER TRIBE.\nb ) HEAD OF THE WAKANDAN MILITARY.\nc ) HEAD OF BORDER SECURITY.\nd ) T’CHALLA’S PERSONAL ADVISER.\nAns : ",
    answer: 'c'
 },
 {
  question: "\nWhat important news event can be seen on the TV in the Oakland prologue ?\na ) THE CLINTON IMPEACHMENT HEARINGS.\nb ) THE PERSIAN GULF WAR\nc ) THE O.J. SIMPSON TRIAL\nd ) THE L.A. RIOTS\nAns : ",
    answer: 'd'
 },
];
var score=0;
console.log(chalk.greenBright(`\nWelcome ${userName} :) Hope You Are Doing Well.... `));
let totalScore = [{
       user : 'BOT',
       score: 0,
},
{
       user : 'Tanay Pratap',
       score: 3,
},
{
        user : 'Aryan',
        score : 2 ,
},
{
        user: 'Sunny',
        score : 3,
},
{
        user : 'Dev',
        score : 3,
},{
        user : 'Keshav',
        score : 3,
},
{
        user : 'Janmejay',
        score : 4,
},
{
        user : 'Esha',
        score : 3,
},
{
        user : 'Roshan',
        score : 4,
}];
let ch;
console.log("\n=============================================");
const userChoice =  readLine.question(chalk.blueBright("We Want To Confirm That Are You A Marvel Fan Or DC Fan  (Marvel/Dc) :  "));

if(userChoice.toUpperCase() ===  'Marvel'.toUpperCase()){
    console.log(chalk.bgRed("\nHello Marvel Fan !!!! Let's Get Started ........"));
    console.log("\n====================================================================");
    console.log("\nRules of the Game :->");
    console.log("\n1 : THERE WILL BE TOTAL 11 QUESTIONS. ");
    console.log("\n2 : PLAYER WILL BE ASKED FOR THE NUMBER OF QUESTION OUT OF 11  THEY WANTED TO PLAY WITH. ")
    console.log("\n3 : QUESTIONS ARE VERY BASIC AND RELATED TO HIS NORMAL LIFESTYLE. ");
    console.log("\n4 : MOST IMPORTANTLY PLAYER HAVE TO WRITE  ONLY OPTIONS OTHER THAN THIS NOTHING WILL BE ACCEPTED ");
    console.log("\n5 : FOR EACH CORRECT ANSWERS YOUR SCORE WILL BE INCREASED BY 1. ");
    console.log("\n====================================================================");
    do{
      quizApp();
      total_score();
      if(totalScore[0].score===0){
        console.log("\nNo One is Higher Scorer!!!!!!!");
        break;
      }else{
          console.log(`\nThe Top Scorer is ${totalScore[0].user} and His High Score is  ${totalScore[0].score} Points`);
          console.log(chalk.bgRedBright(`\nDear ${userName} Please Send Me The ScreenShot of Your Total Point If You Beat The Previous High Score So That I Can Store It In My Temporary Database`))
      } 
      ch = readLine.question(chalk.yellowBright('\nDo You Want To Continue ? (y/Y) : '));
    }while(ch==='y'||ch==='Y'); 
   
}
 else if(userChoice.toUpperCase()=== 'DC'.toUpperCase()){
      console.log(chalk.red("\nSorry This Quizz App is Only for Marvel Fan"));
 }else{
   console.log(chalk.bgBlackBright("\nPlease Enter Valid Choice!!!!!!"))
 }





function quizApp(){
        marvelCharacter = ['Iron Man','Captain America','Captain Marvel','Thor','Groot','Hawkeye','Doctor Strange','Ant Man','Black Widow','Black Panther','Spider Man','Nick Fury','Hulk']
         index = readLine.keyInSelect(marvelCharacter, chalk.blue('Which SuperHero Do You Like Most ?'));
  
     if(index===-1){
        return;
     }else{
        switch(marvelCharacter[index].toUpperCase()){
           case 'Iron Man'.toUpperCase(): iron_man();break;
           case 'Captain America'.toUpperCase(): captain_america();break;
           case 'Captain Marvel'.toUpperCase(): captain_marvel();break;
           case 'Thor'.toUpperCase(): thunder_God();break;
           case 'Groot'.toUpperCase(): the_groot();break;
           case 'Hawkeye'.toUpperCase(): hawk_eye();break;
           case 'Doctor Strange'.toUpperCase(): doctor_strange();break;
           case 'Ant Man'.toUpperCase(): ant_man();break;
           case 'Black Widow'.toUpperCase(): black_widow();break;
           case 'Black Panther'.toUpperCase(): black_panther();break;
           case 'Spider Man'.toUpperCase(): spider_man();break;
           case 'Nick Fury'.toUpperCase(): nick_fury();break;
           case 'Hulk'.toUpperCase():   the_hulk();break; 
           default: console.log(`\nDear ${userName} Please Select Valid Options.......`);
        }
     } 
}    


function iron_man(){
  console.log(chalk.bgMagentaBright("\nWelcome To Iron Man Quiz Section :) "));
  compare(ironMan);
  console.log(chalk.green("\nThanks For Playing Iron Man Quiz!!! I Hope You would Have Enjoyed A Lot :)"))
}

function captain_marvel(){
  console.log(chalk.bgMagentaBright("\nWelcome To Captain Marvel Quiz Section :) "));
  compare(captainMarvel);
  console.log(chalk.green("\nThanks For Playing Captain Marvel Quiz!!! I Hope You would Have Enjoyed A Lot :)"))
}

function captain_america(){
  console.log(chalk.bgMagentaBright("\nWelcome To Captain America Quiz Section :) "));
  compare(captainAmerica);
  console.log(chalk.green("\nThanks For Playing Captain America Quiz!!! I Hope You would Have Enjoyed A Lot :)"))
}

function thunder_God(){
  console.log(chalk.bgMagentaBright("\nWelcome To Thor Quiz Section :) "));
  compare(thor);
  console.log(chalk.green("\nThanks For Playing Thor Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}

function the_groot(){
  console.log(chalk.bgMagentaBright("\nWelcome To Groot Quiz Section :) "));
  compare(groot);
  console.log(chalk.green("\nThanks For Playing Groot Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}

function hawk_eye(){
  console.log(chalk.bgMagentaBright("\nWelcome To Hawkeye Quiz Section :) "));
  compare(hawkeye);
  console.log(chalk.green("\nThanks For Playing Hawkeye Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}

function doctor_strange(){
  console.log(chalk.bgMagentaBright("\nWelcome To Doctor Strange Quiz Section :) "));
  compare( doctorStrange);
  console.log(chalk.green("\nThanks For Playing Doctor Strange Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}

function ant_man(){
  console.log(chalk.bgMagentaBright("\nWelcome To Ant Man Quiz Section :) "));
  compare(antMan);
  console.log(chalk.green("\nThanks For Playing Ant Man Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}

function black_widow(){
  console.log(chalk.bgMagentaBright("\nWelcome To Black Widow Quiz Section :) "));
  compare(blackWidow);
  console.log(chalk.green("\nThanks For Playing Black Widow Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}

function black_panther(){
  console.log(chalk.bgMagentaBright("\nWelcome To Black Panther Quiz Section :) "));
  compare(blackPanther);
  console.log(chalk.green("\nThanks For Playing Black Panther Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}

function spider_man(){
  console.log(chalk.bgMagentaBright("\nWelcome To Spider Man Quiz Section :) "));
  compare(spiderMan);
  console.log(chalk.green("\nThanks For Playing Spider Man Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}

function the_hulk(){
  console.log(chalk.bgMagentaBright("\nWelcome To The Hulk Quiz Section :) "));
  compare(hulk);
  console.log(chalk.green("\nThanks For Playing The Hulk Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}

function nick_fury(){
  console.log(chalk.bgMagentaBright("\nWelcome To Nick Fury Quiz Section :) "));
  compare(nickFury);
  console.log(chalk.green("\nThanks For Playing Nick Fury Quiz!!! I Hope You would Have Enjoyed A Lot :) "))
}
function compare(superHero){
  for(let i=0;i<superHero.length;i++){
     answer[i]=readLine.question(superHero[i].question);
     if(answer[i].toUpperCase()===superHero[i].answer.toUpperCase()){
       score+=1;
       console.log(chalk.bgGreen("\nHurrey !!! You Answered Correct :) "));
       console.log(chalk.yellow("\nYou Got 1 Point"));
       console.log(chalk.yellowBright(`\nDear ${userName} Your Score Is ${score}`));
     }else{
       score+=0;
       console.log(chalk.bgRed("\nOoops!!! You Answered Wrong :("));
       console.log(chalk.yellow("\nYou Got 0 Points"));
       console.log(chalk.yellowBright(`\nDear ${userName} Your Score Is ${score}`));
     }
  }
}



function total_score(){
   if(totalScore.length === 0){
      totalScore.push({
        user : userName,
        score: score,
      })
      console.log(chalk.yellow(`\nHey ${totalScore[0].user} , You Just Scored A New  High Score !!! Congrats`));
   }else{
     totalScore[totalScore.length] = {
            user  : userName,
            score : score,
     }
     totalScore.sort((a,b)=> b.score-a.score);
   }
   console.log(chalk.gray(`\nThe Standing Table Are as Follows :`));
   for(let i =0;i<totalScore.length;i++){
      console.log(chalk.cyan(`\n${totalScore[i].user}   :   ${totalScore[i].score}`))
  }
}

console.log(chalk.yellowBright(`\nDear ${userName} I Hope You Enjoyed My Quiz App :>)\n\nPlzz Share This With Your Freinds...... `));
console.log(chalk.bgBlue(`\n\nPlease Do Connect & Ping Me On This Social Account Mentioned Below Along With Screen Shot Of Your Total Score :>) `));

console.log(`\nLinkedin ------>  https://www.linkedin.com/in/akash-kumar-singh-48a624157/   |`);
console.log(`\nInstagram ------> https://www.instagram.com/kumarsingh5632/?hl=en            | `);
