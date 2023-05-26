import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class ChannelStore {
  channelList = []
  constructor() {
    makeAutoObservable(this)
  }
  // 只要调用这个方法 就可以从后端拿到数据并且存入channelList
  setChannelList = async () => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    this.channelList = res.data.data.channels
  }
  searchGames = async (query) => {
    // const res = await axios.post('http://127.0.0.1:5000/', { query: query });
    const res = await axios.get(`http://82.156.158.41:5000/?query=${encodeURIComponent(query)}`);
    // handle the response, for example return the results:
    this.channelList = res.data.map(game => ({
      ...game,
      tags: game.tags.slice(0, 4),
      excerpt: game.excerpt.split(' ').slice(0, 50).join(' ') + '...',
    }));
  }
}
const channlStore = new ChannelStore()
export default channlStore