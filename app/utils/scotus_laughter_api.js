import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"

const ScotusLaughterAPI = {
  getSpeakers() {
    return axios.get(`${BASE_URL}speakers`)
    .then((data) => this.getData(data));
  },
  getSpeaker(id) {
    return axios.get(`${BASE_URL}speakers/${id}`)
    .then((data) => this.getData(data));
  },
  getCases() {
    return axios.get(`${BASE_URL}cases`)
    .then((data) => this.getData(data));
  },
  getCasesForSpeaker(id) {
    return axios.get(`${BASE_URL}speakers/${id}/cases`)
    .then((data) => this.getData(data));
  },
  getCase(docket_num) {
    return axios.get(`${BASE_URL}cases/${docket_num}`)
    .then((data) => this.getData(data));
  },
  getData(data) {
    return data.data;
  }
}

export default ScotusLaughterAPI
