<style src="./style.sass" lang="sass" scoped></style>

<template>
  <div id="create-car">
    <div class="container">
      <div class="content">
        <Logo />
        <form novalidate @submit="handleSubmit">
          <vue-form-generator
            :schema="schema"
            :model="model"
            :options="formOptions"
          ></vue-form-generator>
          <Button
            type="submit"
            text="Register a new car"
            classes="btn-success"
          />
          <Link to="/car" text="Back" classes="btn btn-default" />
        </form>
      </div>
    </div>
    {{ model }}
  </div>
</template>

<script src="./index.js"></script>
