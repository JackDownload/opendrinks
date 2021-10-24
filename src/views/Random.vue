<template>
  <div class="home container">
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
    <div class="float-right">
      <b-button variant="primary" size="sm" @click="onNext">Next</b-button>
    </div>
    <Recipe v-bind:name="name" />
  </div>
</template>

<script>
import Recipe from '@/components/Recipe.vue';
import recipes from '../recipes';

export default {
  name: 'home',
  components: {
    Recipe,
  },
  data() {
    return {
      name: null,
    };
  },
  created() {
    this.getRandom();
  },
  methods: {
    getRandom() {
      const randDrink = recipes.getRandom();
      this.name = randDrink;
      this.$router.replace({
        path: `recipe/${randDrink.replace('.json', '')}`,
      });
    },
    onNext() {
      this.getRandom();
    },
  },
};
</script>
