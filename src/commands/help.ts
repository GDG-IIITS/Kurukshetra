//import command from '../../config.json' assert {type: 'json'};

const helpObj = {
  "commands": [
    [
    "'register'",
    "if new",
    ],
    [
      "'login'",
      "if already registered"
    ],
    [
      "'logout'",
      ":("
    ],
    [
      "'verify'",
      "use the token sent in mail to verify"
    ],
    [

      "",
      ""
    ],
    [
      "",
      "---[Teams]--"
    ],
    [
      "'team'",
      "View your team"
    ],
    [
      "'create-team'",
      "create a new team"
    ],
    [
      "'join-team'",
      "join an existing team"
    ],
    [

      "",
      ""
    ],
    [
      "",
      "---[Kurukshetra]--"
    ],
    [
      "'rules'",
      "Sigme peopl play by the rules"
    ],
    [
      "'challenge'",
      "Show your mental muscle"
    ],
    [
      "'submit'",
      "Think you got the key?"
    ],
    [
      "'leaderbord'",
      "See your ranking"
    ],
    [
      "'record'",
      "See your completed challenges"
    ],
    [

      "",
      ""
    ],
    [
      "'send-mail'",
      "resend verification mail"
    ],
    [
      "'about'",
      "take a look at the team"
    ]
  ],
}

// const socials = {
//   "commands": [
    
//     [
//       "",
//       ""
//     ],
//     [
//       "",
//       "---[Socials]--"
//     ],
//     [
//       "'s/github'",
//       "Stalk me on GitHub (follow plz)"
//     ],
//     ["'s/linkedin'",
//       "Let's connect on Linkedin"
//     ],
//     ["'s/discord'",
//       "I am a pro-g(r)amer"
//     ],
//     ["'s/instagram'",
//       "Folow me on Instagram"
//     ],
//     ["'s/gcloud'",
//       "Felxin my google cloud skills"
//     ],
//     ["'s/gdeveloper'",
//       "Got to get my eyes on that google-dev profile"
//     ],
//     ["'s/unity'",
//       "Unity plz fix your servers(hire me to do that)"
//     ],
//     ["'s/email'",
//       "Mail me your deepest fears"
//     ],
//     ["'sudo'",
//       "???"
//     ],
//     ["'hackme'",
//       "??hacker"
//     ]
//   ],
// }

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(1);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    
    string += SPACE.repeat(20 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  // const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>";
  //   string += ele[0];
  //   string += "</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);

  // command.projects.webdev.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })
  // command.projects.flutterdev.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })
  // command.projects.vrdev.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })
  // command.projects.cybersec.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })
  // command.projects.robotics.forEach((ele) =>{
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>'p/";
  //   string += ele[0];
  //   string += "'</span>";
  //   string += SPACE.repeat(16 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })

  // socials.commands.forEach((ele) => {
  //   const SPACE = "&nbsp;";
  //   let string = "";
  //   string += SPACE.repeat(1);
  //   string += "<span class='command'>";
  //   string += ele[0];
  //   string += "</span>";
    
  //   string += SPACE.repeat(20 - ele[0].length);
  //   string += ele[1];
  //   help.push(string);
  // })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
