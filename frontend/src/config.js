const processEnv = typeof process !== 'undefined' ? process.env : {};
const injectedEnv = window && window.injectedEnv ? window.injectedEnv : {};
const env = {
  ...processEnv,
  ...injectedEnv,
};
console.log(processEnv)
console.log(injectedEnv)
console.log(env)
export { env };