import className from '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'liqilong'
    }
  },
  render () {
    return (
      <div id={className.footer}>
        <span>Writeen by {this.author}</span>
      </div>
    )
  }
}
