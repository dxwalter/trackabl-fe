module.exports = {
  apps: [
    {
      name: "Tracakbl-FE",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
    },
  ],
  deploy: {
    // "production" is the environment name
    development: {
      user: "web",
      host: ["178.128.165.230"],
      ref: "origin/master",
      repo: "git@git-repo.git",
      ssh_options: ["ForwardAgent=yes"],
      path: "/var/www/trackabl-frontent/actions-runner/_work/trackabl-fe/trackabl-fe",
      "post-deploy": "pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
