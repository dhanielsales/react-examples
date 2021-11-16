module.exports = {
    presets: ["next/babel", "@babel/preset-typescript"],
    plugins: [["styled-components", { "ssr": true }]],
    env: {
      test: {
        plugins: ["styled-jsx/babel-test"]
      }
    }
  };