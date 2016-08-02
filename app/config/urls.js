const urls = {
  case(caseInfo) {
    return `${this.cases()}/${caseInfo.docket_num}`;
  },
  speaker(speaker) {
    return `${this.speakers()}/${speaker.id}`
  },
  cases() {
    return `${this.index()}cases`
  },
  speakers() {
    return `${this.index()}speakers`
  },
  index() {
    return "/"
  }
}

export default urls
