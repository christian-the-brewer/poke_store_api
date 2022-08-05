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
        name: 'Ivysaur',
        image: 'https://img.pokemondb.net/artwork/avif/ivysaur.avif',
        cost: 100,
        description:'Ivysaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.',
        pokemonType: 'Grass',
        stock: 12
    },
    {
        name: 'Venusaur',
        image: 'https://img.pokemondb.net/artwork/avif/venusaur.avif',
        cost: 300,
        description:'Venusaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.',
        pokemonType: 'Grass',
        stock: 12
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
        name: 'Charmeleon',
        image: 'https://img.pokemondb.net/artwork/avif/charmeleon.avif',
        cost: 400,
        description: 'Charmeleon is a Fire type Pokémon introduced in Generation 1. It is known as the Flame Pokémon.',
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
    {
        name: 'Wartortle',
        image: 'https://img.pokemondb.net/artwork/avif/wartortle.avif',
        cost: 500,
        description: 'Wartortle is a Water type Pokémon introduced in Generation 1. It is known as the Turtle Pokémon.',
        pokemonType: 'Water',
        stock: 10
    },
    {
        name: 'Charizard',
        image: 'https://img.pokemondb.net/artwork/avif/charizard.avif',
        cost: 300,
        description: 'Charizard is a Fire/Flying type Pokémon introduced in Generation 1. It is known as the Flame Pokémon.',
        pokemonType: 'Fire',
        stock: 12
    },
    {
        name: 'Blastoise',
        image: 'https://img.pokemondb.net/artwork/avif/blastoise.avif',
        cost: 900,
        description: 'Blastoise is a Water type Pokémon introduced in Generation 1. It is known as the Shellfish Pokémon.',
        pokemonType: 'Water',
        stock: 40
    },
    {
        name: 'Ninetales',
        image: 'https://img.pokemondb.net/artwork/avif/ninetales.avif',
        cost: 200,
        description: 'Ninetales is a Fire type Pokémon introduced in Generation 1. It is known as the Fox Pokémon.',
        pokemonType: 'Fire',
        stock: 30
    },
    {
        name: 'Gloom',
        image: 'https://img.pokemondb.net/artwork/avif/gloom.avif',
        cost: 100,
        description: 'Gloom is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Weed Pokémon.',
        pokemonType: 'Grass',
        stock: 10
    },
    {
        name: 'Vileplume',
        image: 'https://img.pokemondb.net/artwork/avif/vileplume.avif',
        cost: 200,
        description: 'Vileplume is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Flower Pokémon.',
        pokemonType: 'Grass',
        stock: 10
    },
    {
        name: 'Paras',
        image: 'https://img.pokemondb.net/artwork/avif/paras.avif',
        cost: 400,
        description: 'Paras is a Bug/Grass type Pokémon introduced in Generation 1. It is known as the Mushroom Pokémon.',
        pokemonType: 'Grass',
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