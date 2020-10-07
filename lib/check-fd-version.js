const childProcess = require('child_process')
const semver = require('semver');
const { latestVersion } = require('./utils/npmUtil');

module.exports = async () => {
  let fdPkg = require('../package.json');
  let fdVersion = fdPkg.version;
  let latestFdVersion = await latestVersion('mic-cli');
  if (semver.gte(fdVersion, latestFdVersion)) {
    console.error(`当前fd版本为 ${fdVersion}，建议升级至 ${latestFdVersion}`)
    process.exit(0)
  }
}
