module.exports = {
  hooks: {
    'pre-commit': 'yarn lint',
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
  }
}
