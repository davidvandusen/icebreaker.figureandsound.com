const fs = require('fs');

const questions = fs.readFileSync(process.argv[2], 'utf8').split('\n');

for (var i = 0; i < questions.length; i++) {
  fs.writeFileSync(`public/questions/${i}.txt`, questions[i]);
}
