import Logo from '~/components/Logo/Logo.vue'
import Fas from '~/components/FontAwesomeIcon/Fas.vue'
import Link from '~/components/Link/Link.vue'
import Button from '~/components/Button/Button.vue'

export default {
  components: {
    Logo,
    Link,
    Fas,
    Button
  },
  data() {
    return {
      cars: [],
      errors: [],
      featuresName: [
        'Passangers',
        'Air Conditioner',
        'Car change',
        'Doors',
        'Baggage',
        'Motor'
      ],
      // Icons from FontAwesome declared in nuxtconfig
      featuresIcon: [
        'male',
        'snowflake',
        'cog',
        'door-open',
        'suitcase-rolling',
        'tachometer-alt'
      ]
    }
  },
  methods: {
    async deleteCar(id) {
      try {
        await this.$axios.delete(`/cars/${id}`)
        this.cars = this.cars.filter((c) => c.id !== id)
        this.$toasted.show('Car was deleted', {
          theme: 'toasted-primary',
          position: 'top-right',
          type: 'success',
          duration: 5000
        })
      } catch (e) {
        this.errors.push(e)
        this.$toasted.show('Error on delete', {
          theme: 'toasted-primary',
          position: 'top-right',
          type: 'error',
          duration: 5000
        })
      }
    }
  },
  async created() {
    try {
      const response = await this.$axios.get('/cars')
      this.cars = response.data
    } catch (e) {
      this.errors.push(e)
    }
  }
}
