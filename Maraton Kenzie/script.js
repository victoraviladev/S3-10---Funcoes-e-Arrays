function positions(firstPlace, secondPlace, lastPlace) {

  const name = [firstPlace, secondPlace, lastPlace]

  if (name[2] == "Daniel") {
    return console.log(`1º - Colocado ${name[0]} 2º - Colocado ${name[2]} 3º - Colocado ${name[1]}`)
  } else if (name[1] == "Daniel") {
    return console.log(`1º - Colocado ${name[1]} 2º - Colocado ${name[0]} 3º - Colocado ${name[2]}`)
  } else {
    return console.log(`1º - Colocado ${name[0]} 2º - Colocado ${name[1]} 3º - Colocado ${name[2]}`)
  }
}

positions("Rafael", "Manoel", "Daniel")

