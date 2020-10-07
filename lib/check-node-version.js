const childProcess = require('child_process')
const semver = require('semver')

module.exports = () => {
  let nodeVersion
  try {
    nodeVersion = String(childProcess.execSync('node -v'))
    if (!semver.gte(nodeVersion, '10.0.0')) {
      console.error('您当前使用的node版本小于10.x，请升级后再使用fd.')
      process.exit(0)
    }
  } catch (e) {}
}
