// OS module is for interaction with  the operating system.
// const { log } = require('console');
const os = require('os') // built-in module

// Information about current user
const user = os.userInfo();
// console.log(`User: ${user.username}`)
// console.log(user)

// method returns the system uptime in seconds: how long system is running
console.log(`The system Uptime is ${os.uptime()} Seconds`);

const currOS = {
    name: os.type(), 
    release: os.release(), 
    totalMem: os.totalmem(), 
    freeMem: os.freemem(),
}

console.log(currOS)

