/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint global-require: 0 */
module.exports = (shipit) => {
  require('shipit-deploy')(shipit)
  require('shipit-shared')(shipit)
  // require('dotenv').config()

  const appName = 'gatsby-hello-world'

  shipit.initConfig({
    default: {
      deployTo: `/home/deploy/${appName}`,
      repositoryUrl: 'https://github.com/kmorning/gatsby-hello-world.git',
      branch: 'main',
      keepReleases: 5,
      shallowClone: true,
      shared: {
        overwrite: true,
        dirs: ['node_modules']
      }
    },
    production: {
      servers: 'deploy@192.168.2.4'
    }
  })

  const path = require('path')

  const ecosystemFilePath = path.join(shipit.config.deployTo, 'shared', 'ecosystem.config.js')

  // listeners
  shipit.on('updated', async () => {
    shipit.start('install-modules', 'copy-config', 'build')
  })

  shipit.on('published', async () => {
    shipit.start('pm2-server')
  })

  // tasks
  shipit.blTask('install-modules', async () => {
    await shipit.remote(`cd ${shipit.releasePath} && yarn install --production`)
  })

  shipit.blTask('copy-config', async () => {
    const fs = require('fs')

    const ecosystem = `
      module.exports = {
          apps: [
              {
                  name: '${appName}',
                  cwd: '${shipit.releasePath}',
                  script: 'yarn',
                  args: 'gatsby serve',
                  interpreter: '/bin/bash',
                  watch: true,
                  autorestart: true,
                  restart_delay: 1000,
                  env: {
                      NODE_ENV: 'development'
                  },
                  env_production: {
                      NODE_ENV: 'production'
                  }
              }
          ]
      }
      `
    fs.writeFileSync('ecosystem.config.js', ecosystem, (err) => {
      if (err) throw err
      console.log('Successfully created ecosytem.conf.js')
    })

    await shipit.copyToRemote('ecosystem.config.js', ecosystemFilePath)
  })

  shipit.blTask('build', async () => {
    await shipit.remote(`cd ${shipit.releasePath} && ~/.yarn/bin/gatsby build`)
  })

  shipit.blTask('pm2-server', async () => {
    await shipit.remote(`~/.yarn/bin/pm2 delete -s ${appName} || :`)
    await shipit.remote(`~/.yarn/bin/pm2 start ${ecosystemFilePath} --env production --watch true`)
  })
}
