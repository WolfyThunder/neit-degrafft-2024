var name = `Katie`

var htmlNames = [
    `Loki`,       // 0
    `Abigail`,   // 1
    `Andrew`      // 2
]

console.log(`INDEX 0: ${htmlNames[0]}`)

htmlNames.push(`Wolfy`)

htmlNames[4] = `Max`

for(var i = 0; i< htmlNames.length; i++){

    console.log(`INDEX ${i}: ${htmlNames[i]}`)

}

var htmlColors = []
htmlColors[`zero`] = `Green`
htmlColors[`one`] = `Blue`
htmlColors[`two`] = `Blue`
htmlColors[`three`] = `Blue`
htmlColors[`four`] = `Organge`

for(var key in htmlColors){

    console.log(`INDEX ${key}: ${htmlColors[key]}`)

}

var gds111_0 = {
    first: `Loki`,
    color: `green`,
    age: 20,
    hasPets: true,
    petNames: [`Arthur`, `Merlin`]
}

console.log(`gds111_0 name: ${gds111_0.first}`)

for(var key in gds111_0){

    console.log(`PROPERTY ${key}: ${gds111_0[key]}`)

    if(key == `hasPets`){

        if(gds111_0[key] == true){

            for(var i = 0; i < gds111_0.petNames.length; i++){

                console.log(`Pet#${i}: ${gds11_0.petNames[i]}`)

            }
        }
    }
}