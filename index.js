var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name, array){
  kittens.shift(name, array)
  return array
}