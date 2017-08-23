#!/usr/bin/env node
const appInfo = require('../package.json')
const cmd = require('commander')
const fs = require('fs')
const path = require('path')

const animals = fs.readFileSync(path.join(__dirname, '../data/animals.txt'))
		.toString()
		.split('===============++++SEPERATOR++++====================\n')

const jokes = fs.readFileSync(path.join(__dirname, '../data/jokes.txt')).toString().split('%\n')
const quotes = fs.readFileSync(path.join(__dirname, '../data/quotes.txt')).toString().split('%\n')
const tang300 = fs.readFileSync(path.join(__dirname, '../data/tang300.txt')).toString().split('%\n')
const song100 = fs.readFileSync(path.join(__dirname, '../data/song100.txt')).toString().split('%\n')			

function randomAnimal () {
	return animals[Math.floor(Math.random() * animals.length)]
}

function prefix (type) {
	switch (type) {
		case 'quote':
			return quotes[Math.floor(Math.random() * quotes.length)]
		case 'jokes': 
			return jokes[Math.floor(Math.random() * jokes.length)]
		case 'tang':
			return tang300[Math.floor(Math.random() * tang300.length)]
		case 'song':
			return song100[Math.floor(Math.random() * song100.length)]
		default:
			return tang300[Math.floor(Math.random() * tang300.length)]
	}
}					

cmd.version(appInfo.version)
	.option('-i, --index <n>', 'ascii art index, default is random', -1, parseInt)
	.option('-t, --type <value>', '[quote|jokes|tang|song]', 'quotes', /^(quotes|jokes|tang|song)$/i)
	.on('--help', () => {
		console.log('hahahhaha')
	})
	.parse(process.argv)

const animal = cmd.index === -1 ? randomAnimal() : animals[cmd.index]
console.log(prefix(cmd.type))
console.log(animal)
