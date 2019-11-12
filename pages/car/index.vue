<template>
  <div class="container">
    <div class="content">
      <Logo></Logo>
      <div class="submenu">
        <Link
          to="car/create"
          text="Register new car"
          classes="btn btn-default width-300"
        />
      </div>
      <div v-for="car of cars" :key="car.name" class="card-info">
        <div class="card-header">
          <h3>{{ car.brand }} {{ car.model }}</h3>
          <div class="extra-info">
            <span class="rating">
              <Fas i="star" class="feature-icon" />
              {{ car.rating }}
            </span>
            <span>
              <strong>Location:</strong>
              {{ car.location }}
            </span>
            <span @click="deleteCar(car.id)">
              <Fas i="trash" class="remove-button" />
            </span>
          </div>
        </div>
        <div class="card-body">
          <img :src="car.image" />
          <ul>
            <li
              v-for="(featureValue, _featureName, index) of car.features"
              :key="featureValue.id"
            >
              <Fas :i="featuresIcon[index]" class="feature-icon" />
              <strong>{{ featuresName[index] }}:</strong>
              {{ featureValue }}
            </li>
          </ul>
          <div class="checkout">
            <strong>R$ {{ car.price }}</strong>
            <Button text="Rent" classes="btn-success width-160" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
