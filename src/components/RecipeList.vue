<template>
  <div id="recipe-list" class="">
    <div class="card-container">
  <div class="card u-clearfix">
    <div class="card-body">
      <div v-for="(o, i) in paginatedItems" v-bind:key="i" class="card-wrapper mb-2">
      <span class="card-number card-circle subtle">01</span>
      <span class="card-author subtle">John Smith</span>
      <h2 class="card-title"> {{ o.name }}</h2>
      <span class="card-description subtle"> {{ o.description }}</span>
      <div class="card-read">Read</div>
      <span class="card-tag card-circle subtle">C</span>
    </div>
    <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" class="card-media" />
    </div>
  </div>
  <div class="card-shadow"></div>
</div>
    <b-card-group deck>
      <div v-for="(o, i) in paginatedItems" v-bind:key="i" class="card-wrapper mb-2">
        <b-card
          :title="o.name"
          :img-src="o.image ? require(`@/assets/recipes/${o.image}`) : null"
          :img-alt="o.name"
          img-top
        >
          <b-card-text>
            {{ o.description }}
          </b-card-text>

          <b-button :to="'/recipe/' + o.filename" variant="primary" v-t="'View Recipe'" />
          <FavoriteStar
            class="mt-2 float-right"
            @favorite="favorited(o.name)"
            :isFavorited="favorites.includes(o.name)"
          ></FavoriteStar>
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
html {
  background: #FAF7F2;
  background-image: url(https://s3.postimg.org/s1n3ji1ur/paper_fibers_2_X.png);
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 400;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.u-clearfix:before,
.u-clearfix:after {
  content: " ";
  display: table;
}

.u-clearfix:after {
  clear: both;
}

.u-clearfix {
  *zoom: 1;
}

.subtle {
  color: #aaa;
}

.card-container {
  margin: 25px auto 0;
  position: relative;
  width: 692px;
}

.card {
  background-color: #fff;
  padding: 30px;
  position: relative;
  box-shadow: 0 0 5px rgba(75, 75, 75, .07);
  z-index: 1;
}

.card-body {
  display: inline-block;
  width: 310px;
}

.card-number {
  margin-top: 15px;
}

.card-circle {
  border: 1px solid #aaa;
  border-radius: 50%;
  display: inline-block;
  line-height: 22px;
  font-size: 12px;
  height: 25px;
  text-align: center;
  width: 25px;
}

.card-author {
  display: block;
  font-size: 12px;
  letter-spacing: .5px;
  margin: 15px 0 0;
  text-transform: uppercase;
}

.card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 60px;
  font-weight: 300;
  line-height: 60px;
  margin: 10px 0;
}

.card-description {
  display: inline-block;
  font-weight: 300;
  line-height: 22px;
  margin: 10px 0;
}

.card-read {
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 6px;
  margin: 5px 0 20px;
  position: relative;
  text-align: right;
  text-transform: uppercase;
}

.card-read:after {
  background-color: #b8bddd;
  content: "";
  display: block;
  height: 1px;
  position: absolute;
  top: 9px;
  width: 75%;
}

.card-tag {
  float: right;
  margin: 5px 0 0;
}

.card-media {
  float: right;
}

.card-shadow {
  background-color: #fff;
  box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 1), 0 2px 50px 2px rgba(0, 0, 0, 1), 0 0 100px 3px rgba(0, 0, 0, .25);
  height: 1px;
  margin: -1px auto 0;
  width: 80%;
  z-index: -1;
}

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
