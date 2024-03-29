import Core from './core.js'

export default class tes3mp extends Core {
  async run (state) {
    if (!this.options.port) this.options.port = 25565
    if (!this.options.port_query) this.options.port_query = 8081
    this.usedTcp = true

    const serverInfo = await this.request({
      url: `http://master.tes3mp.com:${this.options.port_query}/api/servers/${this.options.address}:${this.options.port}`,
      responseType: 'json'
    })

    state.name = serverInfo.server.hostname
    state.password = serverInfo.server.passw
    state.numplayers = serverInfo.server.players
    state.maxplayers = serverInfo.server.max_players

    state.version = serverInfo.server.version
  }
}
