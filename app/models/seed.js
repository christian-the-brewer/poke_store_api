//seed files runs with `npm run seed`
//deletes current databse and and replaces with only what is in seed database
//TODO make it so it only deletes bikes without owner

const mongoose = require('mongoose')
const Item = require('./item')
const db = require('../../config/db')

const stockPokeMart = [
    {
        name: 'Bulbasaur',
        image: 'https://img.pokemondb.net/artwork/avif/bulbasaur.avif',
        cost: 500,
        description: 'Bulbasaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.',
        pokemonType: 'Grass',
        stock: 10
    },
    {
        name: 'Charmander',
        image: 'https://img.pokemondb.net/artwork/avif/charmander.avif',
        cost: 500,
        description: 'Charmander is a Fire type Pokémon introduced in Generation 1. It is known as the Lizard Pokémon.',
        pokemonType: 'Fire',
        stock: 10
    },
    {
        name: 'Squirtle',
        image: 'https://img.pokemondb.net/artwork/avif/squirtle.avif',
        cost: 500,
        description: 'Squirtle is a Water type Pokémon introduced in Generation 1. It is known as the Tiny Turtle Pokémon.',
        pokemonType: 'Water',
        stock: 10
    },

]

//connect to database
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        //delete items
        Item.deleteMany({ owner: null })
            .then(deletedItems => {
                console.log('deletedItems', deletedItems)
                // populate with stockPokeMart
                Item.create(stockPokeMart)
                    .then(newItems => {
                        console.log('the new items', newItems)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })