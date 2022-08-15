//seed files runs with `npm run seed`
//deletes current databse and and replaces with only what is in seed database
//TODO make it so it only deletes bikes without owner

const mongoose = require('./connection')
const Item = require('./item')
const db = require('../../config/db')

const stockPokeMart = [
    {
        name: 'Pikachu',
        image: 'https://img.pokemondb.net/artwork/avif/pikachu.avif',
        cost: 5000000,
        description: 'Pikachu is an Electric type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.',
        pokemonType: 'Electric',
        stock: 1
    },
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
        description: 'Ivysaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.',
        pokemonType: 'Grass',
        stock: 12
    },
    {
        name: 'Venusaur',
        image: 'https://img.pokemondb.net/artwork/avif/venusaur.avif',
        cost: 300,
        description: 'Venusaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.',
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
    {
        name: 'Caterpie',
        image: 'https://img.pokemondb.net/artwork/avif/caterpie.avif',
        cost: 350,
        description: 'Caterpie is a Bug type Pokémon introduced in Generation 1. It is known as the Worm Pokémon.',
        pokemonType: 'Bug',
        stock: 10
    },
    {
        name: 'Metapod',
        image: 'https://img.pokemondb.net/artwork/avif/metapod.avif',
        cost: 900,
        description: 'Metapod is a Bug type Pokémon introduced in Generation 1. It is known as the Cocoon Pokémon.',
        pokemonType: 'Bug',
        stock: 3
    },
    {
        name: 'Nidorina',
        image: 'https://img.pokemondb.net/artwork/avif/nidorina.avif',
        cost: 90,
        description: 'Nidorina is a Poison type Pokémon introduced in Generation 1. It is known as the Poison Pin Pokémon.',
        pokemonType: 'Poison',
        stock: 33
    },
    {
        name: 'Butterfree',
        image: 'https://img.pokemondb.net/artwork/avif/butterfree.avif',
        cost: 200,
        description: 'Butterfree is a Bug/Flying type Pokémon introduced in Generation 1. It is known as the Butterfly Pokémon.',
        pokemonType: 'Flying',
        stock: 5
    },
    {
        name: 'Weedle',
        image: 'https://img.pokemondb.net/artwork/avif/weedle.avif',
        cost: 280,
        description: 'Weedle is a Bug/Poison type Pokémon introduced in Generation 1. It is known as the Hairy Bug Pokémon.',
        pokemonType: 'Bug',
        stock: 15
    },
    {
        name: 'Kakuna',
        image: 'https://img.pokemondb.net/artwork/avif/kakuna.avif',
        cost: 300,
        description: 'Kakuna is a Bug/Poison type Pokémon introduced in Generation 1. It is known as the Cocoon Pokémon.',
        pokemonType: 'Bug',
        stock: 8
    },
    {
        name: 'Beedrill',
        image: 'https://img.pokemondb.net/artwork/avif/beedrill.avif',
        cost: 55,
        description: 'Beedrill is a Bug/Poison type Pokémon introduced in Generation 1. It is known as the Poison Bee Pokémon.',
        pokemonType: 'Poison',
        stock: 30
    },
    {
        name: 'Pidgey',
        image: 'https://img.pokemondb.net/artwork/avif/pidgey.avif',
        cost: 99,
        description: 'Pidgey is a Normal/Flying type Pokémon introduced in Generation 1. It is known as the Tiny Bird Pokémon.',
        pokemonType: 'Normal',
        stock: 22
    },
    {
        name: 'Rattata',
        image: 'https://img.pokemondb.net/artwork/avif/rattata.avif',
        cost: 5,
        description: 'Rattata is a Normal type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.',
        pokemonType: 'Normal',
        stock: 15008
    },
    {
        name: 'Spearow',
        image: 'https://img.pokemondb.net/artwork/avif/spearow.avif',
        cost: 400,
        description: 'Spearow is a Normal/Flying type Pokémon introduced in Generation 1. It is known as the Tiny Bird Pokémon.',
        pokemonType: 'Normal',
        stock: 150
    },
    {
        name: 'Fearow',
        image: 'https://img.pokemondb.net/artwork/avif/fearow.avif',
        cost: 75,
        description: 'Fearow is a Normal/Flying type Pokémon introduced in Generation 1. It is known as the Beak Pokémon.',
        pokemonType: 'Flying',
        stock: 69
    },
    {
        name: 'Ekans',
        image: 'https://img.pokemondb.net/artwork/avif/ekans.avif',
        cost: 375,
        description: 'Ekans is a Poison type Pokémon introduced in Generation 1. It is known as the Snake Pokémon.',
        pokemonType: 'Poison',
        stock: 5
    },
    {
        name: 'Arbok',
        image: 'https://img.pokemondb.net/artwork/avif/arbok.avif',
        cost: 200,
        description: 'Arbok is a Poison type Pokémon introduced in Generation 1. It is known as the Cobra Pokémon.',
        pokemonType: 'Poison',
        stock: 11
    },
    {
        name: 'Raichu',
        image: 'https://img.pokemondb.net/artwork/avif/raichu.avif',
        cost: 2500,
        description: 'Raichu is an Electric type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.',
        pokemonType: 'Electric',
        stock: 2
    },
    {
        name: 'Sandshrew',
        image: 'https://img.pokemondb.net/artwork/avif/sandshrew.avif',
        cost: 420,
        description: 'Sandshrew is a Ground type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.',
        pokemonType: 'Ground',
        stock: 6
    },
    {
        name: 'Sandslash',
        image: 'https://img.pokemondb.net/artwork/avif/sandslash.avif',
        cost: 355,
        description: 'Sandslash is a Ground type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon.',
        pokemonType: 'Ground',
        stock: 88
    },
    {
        name: 'Clefairy',
        image: 'https://img.pokemondb.net/artwork/avif/clefable.avif',
        cost: 660,
        description: 'Clefairy is a Fairy type Pokémon introduced in Generation 1. It is known as the Fairy Pokémon.',
        pokemonType: 'Fairy',
        stock: 7
    },
    {
        name: 'Vulpix',
        image: 'https://img.pokemondb.net/artwork/avif/vulpix.avif',
        cost: 480,
        description: 'Vulpix is a Fire type Pokémon introduced in Generation 1. It is known as the Fox Pokémon.',
        pokemonType: 'Fire',
        stock: 8
    },
    {
        name: 'Ninetales',
        image: 'https://img.pokemondb.net/artwork/avif/ninetales.avif',
        cost: 1000,
        description: 'Ninetales is a Fire type Pokémon introduced in Generation 1. It is known as the Fox Pokémon.',
        pokemonType: 'Fire',
        stock: 10
    },
    {
        name: 'Jigglypuff',
        image: 'https://img.pokemondb.net/artwork/avif/jigglypuff.avif',
        cost: 100,
        description: 'Jigglypuff is a Normal/Fairy type Pokémon introduced in Generation 1. It is known as the Balloon Pokémon.',
        pokemonType: 'Fairy',
        stock: 100
    },
    {
        name: 'Zubat',
        image: 'https://img.pokemondb.net/artwork/avif/zubat.avif',
        cost: 10,
        description: 'Zubat is a Poison/Flying type Pokémon introduced in Generation 1. It is known as the Bat Pokémon.',
        pokemonType: 'Poison',
        stock: 100000
    },
    {
        name: 'Oddish',
        image: 'https://img.pokemondb.net/artwork/avif/oddish.avif',
        cost: 150,
        description: 'Zubat is a Poison/Flying type Pokémon introduced in Generation 1. It is known as the Bat Pokémon.',
        pokemonType: 'Grass',
        stock: 100
    },
    {
        name: 'Gloom',
        image: 'https://img.pokemondb.net/artwork/avif/gloom.avif',
        cost: 15,
        description: 'Gloom is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Weed Pokémon.',
        pokemonType: 'Grass',
        stock: 10000
    },
    {
        name: 'Vileplume',
        image: 'https://img.pokemondb.net/artwork/avif/vileplume.avif',
        cost: 340,
        description: 'Vileplume is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Flower Pokémon.',
        pokemonType: 'Grass',
        stock: 23
    },
    {
        name: 'Paras',
        image: 'https://img.pokemondb.net/artwork/avif/paras.avif',
        cost: 3,
        description: 'Paras is a Bug/Grass type Pokémon introduced in Generation 1. It is known as the Mushroom Pokémon.',
        pokemonType: 'Bug',
        stock: 2300
    },
    {
        name: 'Venonat',
        image: 'https://img.pokemondb.net/artwork/avif/venonat.avif',
        cost: 300,
        description: 'Venonat is a Bug/Poison type Pokémon introduced in Generation 1. It is known as the Insect Pokémon.',
        pokemonType: 'Bug',
        stock: 10
    },
    {
        name: 'Diglett',
        image: 'https://img.pokemondb.net/artwork/avif/diglett.avif',
        cost: 300000,
        description: 'Diglett is a Ground type Pokémon introduced in Generation 1. It is known as the Mole Pokémon.',
        pokemonType: 'Ground',
        stock: 3
    },
    {
        name: 'Meowth',
        image: 'https://img.pokemondb.net/artwork/avif/meowth.avif',
        cost: 3000,
        description: 'Meowth is a Normal type Pokémon introduced in Generation 1. It is known as the Scratch Cat Pokémon.',
        pokemonType: 'Normal',
        stock: 5
    },
    {
        name: 'Psyduck',
        image: 'https://img.pokemondb.net/artwork/avif/psyduck.avif',
        cost: 30,
        description: 'Psyduck is a Water type Pokémon introduced in Generation 1. It is known as the Duck Pokémon.',
        pokemonType: 'Water',
        stock: 50
    },
    {
        name: 'Mankey',
        image: 'https://img.pokemondb.net/artwork/avif/mankey.avif',
        cost: 2500,
        description: 'Mankey is a Fighting type Pokémon introduced in Generation 1. It is known as the Pig Monkey Pokémon.',
        pokemonType: 'Fighting',
        stock: 5
    },
    {
        name: 'Growlithe',
        image: 'https://img.pokemondb.net/artwork/avif/growlithe.avif',
        cost: 250,
        description: 'Growlithe is a Fire type Pokémon introduced in Generation 1. It is known as the Puppy Pokémon.',
        pokemonType: 'Fire',
        stock: 24
    },
    {
        name: 'Poliwag',
        image: 'https://img.pokemondb.net/artwork/avif/poliwag.avif',
        cost: 20,
        description: 'Poliwag is a Water type Pokémon introduced in Generation 1. It is known as the Tadpole Pokémon.',
        pokemonType: 'Water',
        stock: 100
    },
    {
        name: 'Pokeball',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8QjdVpljuDTt9XhGJj01auA6g3AwgeFX3WGSu55wwYZvaFJ1qd0_0WjWw9IKEC7F8M4&usqp=CAU',
        cost: 2,
        description: 'A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system.',
        pokemonType: 'Pokeball',
        stock: 10000000
    },
    {
        name: 'Babiri Berry',
        image: 'https://i.imgur.com/441dssJ.png',
        cost: 20,
        description: 'Weakens a supereffective Steel-type attack against the holding Pokémon.',
        pokemonType: 'Berries',
        stock: 100
    },
    {
        name: 'Kebia Berry',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y3Md-urXq32lbcbZKcbEOb5lvTQHRD7h3A&usqp=CAU',
        cost: 5,
        description: 'Weakens a supereffective Poison-type attack against the holding Pokémon.',
        pokemonType: 'Berries',
        stock: 10
    },
    {
        name: 'Big Pearl',
        image: 'https://i.imgur.com/G6ySPT7.png',
        cost: 50000,
        description: 'A quite-large pearl that sparkles in a pretty silver color. It can be sold at a high price to shops.',
        pokemonType: 'General',
        stock: 6
    },
    {
        name: 'Big Mushroom',
        image: 'https://i.imgur.com/S4tdriw.png',
        cost: 250000,
        description: 'A large and rare mushroom. It is sought after by collectors.',
        pokemonType: 'General',
        stock: 2
    },
    {
        name: 'Cheri Berry',
        image: 'https://i.imgur.com/V5iWTUI.png',
        cost: 25,
        description: 'If held by a Pokémon, it recovers from paralysis.',
        pokemonType: 'Berries',
        stock: 20
    },
    {
        name: 'Grepa Berry',
        image: 'https://i.imgur.com/X8iArW4.png',
        cost: 4,
        description: 'Increases Friendship but lowers Special Defense EVs.',
        pokemonType: 'Berries',
        stock: 2245
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