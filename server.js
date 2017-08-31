  // content of index.js
  const http = require('http')  
  const port = 3000

  const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello Node.js Server!')


  var nlp = require('nlp_compromise');
  var nlpSyllables = require('nlp-syllables');

  nlp.plugin(nlpSyllables);
  var t2 = nlp.term('michael down hello sunshine');
  var results = t2.syllables()
  console.log(results);
    //[ [ 'hous', 'ton' ], [ 'tex', 'as' ] ] 


  // write all the data to the file
  var fs = require('fs');
  var str = JSON.stringify(results);
  fs.appendFile('file.json', str, function(err) {
      if(err) {
          console.log('there was an error: ', err);
          return;
      }
      console.log('data was appended to file');
  });

}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})


