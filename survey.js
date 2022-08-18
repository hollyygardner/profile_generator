const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = {}
rl.question('What is your name or nickname?', (name) => {
  survey.name = name
  rl.question('What activity do you like doing?', (activity) => {
    survey.activity = activity 
    rl.question('What do you listen to while doing that?', (song) => {
      survey.song = song
      rl.question('Which meal is your favourite?', (meal) => {
        survey.meal = meal 
        rl.question('What is your favourite thing to eat for that meal?', (food) => {
          survey.food = food 
          rl.question('Which sport is your absolute favourite?', (sport) => {
            survey.sport = sport 
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
              survey.superpower = superpower 
              console.log(`${name} likes to do ${activity} while listening to ${song}. They like to eat ${food} for ${meal}. Their favourite sport is ${sport}. Their superpower is ${superpower}!`);
              rl.close();
            })
          })
        })

      })
    })
  })
});