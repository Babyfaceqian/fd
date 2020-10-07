const childProcess = require('child_process')
const util = require('util');
const exec = util.promisify(childProcess.exec)
module.exports = {
  latestVersion: async (packageName) => {
    let { stdout } = await exec(`npm view ${packageName} version`)
    return stdout;
  },
}
 