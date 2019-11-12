export default {
  props: {
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      required: false,
      default: 'default'
    }
  }
}
