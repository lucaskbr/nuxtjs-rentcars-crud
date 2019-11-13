import './style.sass'
import * as yup from 'yup'
import Logo from '~/components/Logo/Logo.vue'
import Button from '~/components/Button/Button.vue'
import Link from '~/components/Link/Link.vue'

import toastSuccess from '~/config/Toast/Success'
import toastError from '~/config/Toast/Error'

const schema = yup.object().shape({
  brand: yup
    .string()
    .min(3)
    .required(),
  model: yup
    .string()
    .min(3)
    .required(),
  passangers: yup.number().required(),
  air_conditioner: yup.string().required(),
  gear: yup.string().required(),
  doors: yup.number().required(),
  baggage: yup.number().required(),
  rating: yup.number().required(),
  price: yup
    .number()
    .min(2)
    .required(),
  location: yup.string().required()
})

export default {
  components: {
    Logo,
    Button,
    Link
  },
  data() {
    return {
      model: {
        image:
          'https://static.rentcars.com/imagens/carros/toyota-corolla-2015.png',
        brand: '',
        model: '',
        passangers: 2,
        air_conditioner: 'No',
        gear: 'Manual',
        doors: 2,
        baggage: 1,
        rating: 1,
        price: '',
        location: 'Curitiba'
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Brand',
            model: 'brand',
            placeholder: '',
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Model',
            model: 'model',
            required: true
          },
          {
            type: 'radios',
            label: 'Passangers',
            model: 'passangers',
            values: [2, 5, 7],
            required: true
          },
          {
            type: 'radios',
            label: 'Air conditioner',
            model: 'air_conditioner',
            values: ['Yes', 'No'],
            required: true
          },
          {
            type: 'radios',
            label: 'Gear',
            model: 'gear',
            values: ['Auto', 'Manual'],
            required: true
          },
          {
            type: 'radios',
            label: 'Doors',
            model: 'doors',
            values: [2, 4],
            required: true
          },
          {
            type: 'radios',
            label: 'Baggage',
            model: 'baggage',
            values: [1, 2, 3],
            required: true
          },
          {
            type: 'select',
            label: 'Rating',
            model: 'rating',
            noneSelectedText: 'nada',
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            required: true
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'Price',
            model: 'price',
            placeholder: '',
            step: '0.01',
            featured: true,
            required: true
          },
          {
            type: 'select',
            label: 'Location',
            model: 'location',
            values: ['Curitiba', 'São Paulo', 'Rio de Janeiro'],
            required: true
          }
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  },
  methods: {
    reset() {
      Object.assign(this.$data, this.$options.data.call(this))
    },
    async handleSubmit(e) {
      e.preventDefault()

      const { model } = this.$data

      const isValid = await schema.isValid(model)

      const newModel = {
        image: model.image,
        brand: model.brand,
        model: model.model,
        features: {
          passangers: model.passangers,
          air_conditioner: model.air_conditioner,
          gear: model.gear,
          doors: model.doors,
          baggage: model.baggage
        },
        rating: model.rating,
        price: model.price,
        location: model.location
      }

      if (isValid) {
        try {
          await this.$axios.post('/cars', newModel)
          this.reset()
          this.$toasted.show(
            `The car ${model.brand} ${model.model}  was created in the database`,
            toastSuccess
          )
        } catch (e) {
          console.log('Error when post the data')
          this.$toasted.show(
            'An error occurred on saving the car in database',
            toastError
          )
        }
      } else {
        this.$toasted.show('Some field is missing in form', toastError)
      }
    }
  }
}
