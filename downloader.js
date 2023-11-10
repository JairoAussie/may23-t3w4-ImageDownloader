// Synchronous library for doing filo IO
const fs = require("node:fs");

//Asynchronous function, making a directory can take time
const{ mkdir } = require("node:fs/promises");

//Streaming data, safer than traditional saving/downloading/etc
// Synchronous, so we wait and it is blocking
const { Readable } = require("node:stream");

// Wait for streaming to finish, it can take time, so it should be a promise
// It shouldn't be blocking, let's handle this with promise instead of async/await
const { finished } = require("node:stream/promises");

// Node file & directory path helper system
// /folder/subfolder/filename.png
const path = require("node:path");

function downloadPokemonPicture (targetId = getRandomPokemonId()){

}

// Generate a random number between 1 and 1017 (number of Pokemons ???)
function getRandomPokemonId(){

}

//Retrieve Pokemon data for that number
//Retrieve the image url from that Pokemon data
async function getPokemonPictureUrl(targetId = getRandomPokemonId()){

}

//Download that image and save it to the computer
// Return the downloader image's file path
async function savePokemonPictureToDisk(targetUrl, targetDownloadFilename, targetDownloadDirectory = "."){

}

module.exports = {
    downloadPokemonPicture,
    getPokemonPictureUrl,
    savePokemonPictureToDisk,
    getRandomPokemonId
}