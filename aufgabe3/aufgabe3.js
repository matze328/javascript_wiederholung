function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Bitte geben Sie die Länge des Passworts ein: ', (answer) => {
    const passwordLength = parseInt(answer);
    const randomPassword = generateRandomPassword(passwordLength);
    console.log(`Das generierte Passwort lautet: ${randomPassword}`);
    rl.close();
  });