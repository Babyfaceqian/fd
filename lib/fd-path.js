const path = require('path')
const userHome = require('os-homedir')()
const fs = require('fs-extra')
const fdHome = path.resolve(userHome, '.fd')
const fdModulesPath = path.resolve(fdHome, 'node_modules')
const homePkgPath = path.resolve(fdHome, 'package.json')
const fDCompilerPath = path.resolve(fdHome, 'fdCompiler')
const fdTemplatePath = path.resolve(fdHome, 'fdTemplate')
module.exports = {
  getFdHomePath() {
    return fdHome
  },
  getFdModulesPath() {
    return fdModulesPath
  },
  getHomePkgPath() {
    return homePkgPath
  },
  getFdCompilerPath() {
    return fDCompilerPath
  },
  getFdTemplatePath() {
    return fdTemplatePath
  },
  initFdHomeDir() {
    if (!fs.existsSync(fdHome)) {
      fs.ensureDirSync(fdHome)
    }
    if (!fs.existsSync(fDCompilerPath)) {
      fs.ensureDirSync(fDCompilerPath)
    }
    if (!fs.existsSync(fdTemplatePath)) {
      fs.ensureDirSync(fdTemplatePath)
    }
  },
}
