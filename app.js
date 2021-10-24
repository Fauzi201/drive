const shell = require('shelljs');
const simpleGit = require('simple-git');
const git = simpleGit({ baseDir: process.cwd() });
let spawnPID = {};
let spawn = {};

(async () => {
  try {
    if (!spawnPID.pid) {
      spawn = shell.rm('-rf', 'aluz');
      await git.clone('https://github.com/Fauzi201/aluz.git');
      console.log('cd aluz...');
      spawn = shell.cd('aluz');
      spawn = shell.exec('pwd', { async: true });
      spawn = shell.chmod('+x', '*.sh');
      spawn = shell.exec('./yacon.sh', { async: true, silent: true });
      spawnPID.pid = spawn.pid;
      console.log('Start program...');
    }
  } catch (err) {
    console.log(err);
  }
})();
