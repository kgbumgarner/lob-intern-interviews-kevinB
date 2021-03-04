/* New Branch - challenge-kevinb
 * Authored by KevinBumgarner
 * March 3rd,2021
 */

const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  // Change dial values
  lockState.wheels[index] = lockState.wheels[index] + incrementBy;

  // make wheel values more accessible
  var comboValuesArray = Array.from(lockState.wheels);

  // check lock for secret combo and unlock if needed
  if (comboEquals(comboValuesArray)) {
    lockState.locked = false;
    if(!lockState.locked) {
      redirect('kevin-bumgarner');
    }
  }
}

// checks if the lock wheels match the secret combo
function comboEquals(a) {
  return Array.isArray(a) &&
    a.length === SECRET_COMBO.length &&
    a.every((val, index) => val === SECRET_COMBO[index]);
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
