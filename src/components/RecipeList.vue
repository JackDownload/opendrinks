<template>
  <div id="recipe-list" class="">

            <div v-for="(o, i) in paginatedItems" v-bind:key="i" class="card-wrapper mb-2">
          <figure class="snip1581"><img v-bind:src="o.image ? require(`@/assets/recipes/${o.image}`) : null" alt="{{ o.name }}"/>
  <figcaption>
    <h3 class="title1">{{ o.name }}</h3>
  </figcaption>
</figure>
            </div>
        <b-card-group deck>
      <div v-for="(o, i) in paginatedItems" v-bind:key="i" class="card-wrapper mb-2">
<div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
              <b-card
          :title="o.name"
          :img-src="o.image ? require(`@/assets/recipes/${o.image}`) : null"
          :img-alt="o.name"
          img-top
        >
      <div class="p-4 flex-1 flex flex-col" style="
">
        <h3 class="mb-4 text-2xl">{{ o.name }}</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p> {{ o.description }} </p>
        </div>
        <a href="#" class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide" style="
">Twitter</a>
          <b-button :to="'/recipe/' + o.filename" variant="primary" v-t="'View Recipe'" />
          <FavoriteStar
            class="mt-2 float-right"
            @favorite="favorited(o.name)"
            :isFavorited="favorites.includes(o.name)"
          ></FavoriteStar>
      </div>
      </div>
    </b-card-group>
        <div v-for="(o, i) in paginatedItems" v-bind:key="i" class="card-wrapper mb-2">
          
    <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
              <b-card
          :title="o.name"
          :img-src="o.image ? require(`@/assets/recipes/${o.image}`) : null"
          :img-alt="o.name"
          img-top
        >
      <div class="p-4 flex-1 flex flex-col" style="
">
        <h3 class="mb-4 text-2xl">{{ o.name }}</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p> {{ o.description }} </p>
        </div>
        <a href="#" class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide" style="
">Twitter</a>
          <b-button :to="'/recipe/' + o.filename" variant="primary" v-t="'View Recipe'" />
          <FavoriteStar
            class="mt-2 float-right"
            @favorite="favorited(o.name)"
            :isFavorited="favorites.includes(o.name)"
          ></FavoriteStar>
      </div>
    </div>  
  </div>
        </div>
    <b-card-group deck>
      <div v-for="(o, i) in paginatedItems" v-bind:key="i" class="bg-white rounded-lg shadow-lg overflow-hidden card-wrapper mb-2">
        <b-card>
            <div v-for="(o, i) in paginatedItems" v-bind:key="i" class="card-wrapper mb-2">
          <figure class="snip1581"><img v-bind:src="o.image ? require(`@/assets/recipes/${o.image}`) : null" alt="{{ o.name }}"/>
  <figcaption>
    <h3 class="title1">{{ o.name }}</h3>
  </figcaption>
</figure>
            </div>
        </b-card>
      </div>
    </b-card-group>

    <b-row class="mt-4">
      <b-col cols="12" md="10">
        <b-pagination-nav
          @change="onPageChanged"
          :link-gen="linkGen"
          :number-of-pages="pages"
          use-router
        ></b-pagination-nav>
      </b-col>
      <b-col cols="12" md="2">
        <b-form-select v-model="perPage" :options="options" v-on:change="getSelectedItem">
        </b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FavoriteStar from './FavoriteStar.vue';

export default {
  name: 'RecipeList',
  props: {
    title: String,
    items: Array,
  },
  components: {
    FavoriteStar,
  },
  data() {
    return {
      perPage: 12,
      options: [
        { value: 12, text: '12' },
        { value: 24, text: '24' },
        { value: 48, text: '48' },
      ],
      favorites: [],
    };
  },
  mounted() {
    window.document.title = this.title;
    this.favorites = JSON.parse(window.localStorage.getItem('favorites')) || [];
  },
  watch: {
    async items(newItems, oldItems) {
      const { page } = (this.$route && this.$route.query) || 0;
      if (newItems && newItems.length !== oldItems.length) {
        if (newItems.length < page * this.perPage) {
          const query = Object.assign({}, this.$route.query);
          query.page = 1;

          /* NOTE: Alternatively you could use:
           * query.page = Math.ceil(newItems.length / this.perPage);
           */
          await this.$router.push({ query });
        }
      }
    },
  },
  computed: {
    pages() {
      return this.items.length === 0 ? 1 : Math.ceil(this.items.length / this.perPage);
    },
    paginatedItems() {
      let pageNumber;
      const { page } = (this.$route && this.$route.query) || 0;
      if (page) {
        pageNumber = page - 1;
      } else {
        pageNumber = 0;
      }
      return this.items.slice(pageNumber * this.perPage, (pageNumber + 1) * this.perPage);
    },
  },
  methods: {
    onPageChanged() {
      window.scrollTo(0, 0);
    },
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`;
    },
    getSelectedItem(event) {
      this.perPage = event;
    },
    favorited(name) {
      const index = this.favorites.indexOf(name);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      } else {
        this.favorites.push(name);
      }
      window.localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.$emit('favoriteClick', name);
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  width: 315px;
}

@media (max-width: 768px) {
  .card-wrapper {
    width: 100%;
  }
}

.card-deck .card {
  margin-right: 0;
}
.card-text {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 6rem;
}
.card-img-top {
  height: 212px;
  object-fit: cover;
}
.snip1581 {
  font-family: 'Poppins:400,700', Arial, sans-serif;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 8px;
  min-width: 250px;
  max-width: 310px;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.snip1581 * {
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.snip1581 img {
  max-width: 100%;
  vertical-align: top;
}
.snip1581 figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.snip1581 h3 {
  font-size: 44px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 3px 0;
}
.snip1581 .title1 {
  font-weight: 700;
}
.snip1581 .title2 {
  color: #a58e7c;
  font-weight: 300;
}
.snip1581 .title3 {
  font-weight: 700;
  font-size: 25px;
}
.snip1581 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.snip1581:hover img,
.snip1581.hover img {
  -webkit-transform: scale(1.3) rotate(5deg);
  transform: scale(1.3) rotate(5deg);
}
/* Demo purposes only */
body {
  background-color: #212121;
  text-align: center;
}
</style>

<i18n>
{
  "hu": {
    "View Recipe": "Recept megtekintése"
  },
  "fr": {
    "View Recipe": "Voir la Recette"
  },
  "es": {
    "View Recipe": "Ver Receta"
  },
  "hi": {
    "View Recipe": "विधि देखे"
  },
  "ar": {
    "View Recipe": "شاهد الوصفة"
  },
  "gl": {
    "View Recipe": "Ver receita"
  },
  "de": {
  "View Recipe": "Rezept ansehen"
  },
  "nl": {
    "View Recipe": "Recept bekijken"
  },
  "no": {
    "View Recipe": "Se oppskrift"
  },
  "ru": {
    "View Recipe": "Просмотреть рецепт"
  },
  "uk": {
    "View Recipe": "Переглянути рецепт"
  },
  "bn": {
    "View Recipe": "রেসিপিটি দেখুন"
  },
  "it": {
    "View Recipe": "Visualizza ricetta"
  },
  "np": {
    "View Recipe": "नुस्खा हेर्नुहोस्"
  },
  "pt": {
    "View Recipe": "Ver receita"
  },
  "zh": {
    "View Recipe": "查看配方"
  }
}
</i18n>
