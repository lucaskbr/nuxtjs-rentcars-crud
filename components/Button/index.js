export default {
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      required: false,
      default: 'btn-default'
    }
  }
}
