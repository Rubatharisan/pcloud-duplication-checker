const readline = require('readline');
const pCloud = require('./pcloud');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


class Index {
	constructor(){
		this.pCloud = new pCloud();
		this.introText();
		this.auth();

	}

	introText(){
		console.log("---------------------------------------------------------")
		console.log("- pCloud - file duplication checker");
		console.log("---------------------------------------------------------")
		console.log("*** Please use this tool on own risk ***");
		console.log("The author of this tool have no affilation with pCloud AG");
		console.log("_________________________________________________________")
	}

	auth(){
		rl.question('Please provide me your email: ', (email) => {
			rl.question('Please provide me your password: ', (password) => {
				this.pCloud.test();
				rl.close();
			});
		});
	}


}

let k = new Index();