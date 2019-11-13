import Logo from '~/components/Logo/Logo.vue'
import Fas from '~/components/FontAwesomeIcon/Fas.vue'
import Link from '~/components/Link/Link.vue'
import Button from '~/components/Button/Button.vue'
import toastSuccess from '~/config/Toast/Success'
import toastError from '~/config/Toast/Error'

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
        'Gear',
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
        this.$toasted.show(
          `The Car with id: ${id} was deleted from the database`,
          toastSuccess
        )
      } catch (e) {
        this.errors.push(e)
        this.$toasted.show(
          'An error occurred while deleting the car',
          toastError
        )
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
