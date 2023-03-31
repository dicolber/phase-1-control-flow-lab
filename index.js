function scuberGreetingForFeet(value) {
  if (value <= 400){
    return 'This one is on me!'
  } else if (value > 400 && value <2000){
    return 'That will be twenty bucks.'
  } else if (value > 2000 && value <2500){
    return 'I will gladly take your thirty bucks.'
  } else if (value > 2500){
    return 'No can do.'
  }
}
 
  // Write your code here!

function ternaryCheckCity(value) {
  return (value === "NYC" ? 'Ok, sounds good.':'No go.')
}
 
function switchOnCharmFromTip(amount){
  switch (amount){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
      break
    default:
      return 'Bye.'
  }

  // Write your code here!
}