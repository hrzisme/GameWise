import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class BandageStore {
  bandageList = []
  constructor() {
    makeAutoObservable(this)
  }
  searchGames = async (query) => {
    const res = await axios.get(`http://82.156.158.41:5000/?query=${encodeURIComponent(query)}`);
    this.bandageList = res.data
  }
}
const bandageStore = new BandageStore()
export default bandageStore