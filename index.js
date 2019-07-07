exports.printMsg = function() {
  console.log('npm');
}

exports.isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}