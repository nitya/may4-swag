const https = require('https');

const unplashApi = 'https://source.unsplash.com/1600x900?starwars';
const quotes = [
  '"It\'s not my fault" - Han Solo',
  '"Your focus determines your reality.” – Qui-Gon Jinn',
  ' “Do. Or do not. There is no try.” – Yoda',
  ' “Somebody has to save our skins.” – Leia Organa',
  '“In my experience there is no such thing as luck.” – Obi-Wan Kenobi',
  '“I find your lack of faith disturbing.” – Darth Vader',
  ' “I’ve got a bad feeling about this.” – basically everyone',
  ' “It’s a trap!” – Admiral Ackbar',
  '“So this is how liberty dies…with thunderous applause.” – Padmé Amidala',
  ' “Never tell me the odds.” – Han Solo',
  ' “Mind tricks don’t work on me.” – Watto',
  '“Great, kid. Don’t get cocky.” – Han Solo',
  '“Stay on target.” – Gold Five',
  ' “This is a new day, a new beginning.” – Ahsoka Tano',
  '',
];

async function getImage() {
  return new Promise((resolve, reject) => {
    https.get(unplashApi, (response) => {
      // API returns a HTTP 302 code, we only want the final image URL
      resolve(response.headers.location);
    }).on('error', (error) => {
      reject(error.message);
    });
  });
}

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const image = await getImage();
  const text = quotes[Math.floor(Math.random() * quotes.length)];

  context.res = {
    body: {
      image,
      text
    }
  };
};
