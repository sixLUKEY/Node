function call( name ){
    console.log( `hey ${ name } get over here!`)
}

const people = [
    "John", "Bob", "Phil"
]

module.exports.people = people
module.exports.calling = call