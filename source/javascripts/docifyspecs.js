//WIP

//create md files from JSON specs
//script to read JSON specs from https://github.com/techdroplabs/dyspatch/tree/master/service-template/bml/internal/v2/specs
//and create markdown files in ../includes/

const fs = require('fs')
const path = require('path')
const specsPath = '../specs/'

fs.readdirSync(specsPath).forEach(file => {
	console.log(file);
	fs.readFile(path.join(specsPath, file), 'utf8', (err, fileContents) => {
	  if (err) {
	    console.error(err)
	    return
	  }
	  try {
	    const data = JSON.parse(fileContents)
	    console.log(data.Description)
	  } catch(err) {
	    console.error(err)
	  }
	})
})
