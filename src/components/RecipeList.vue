<template>
  <div id="recipe-list" class="">
    <div class="recipe-card">
  <div id="recipe-card__cover" class="recipe-card__cover">
    <div class="recipe-card__img">
      <img
        src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80"
        alt="Blueberry French Toast">
    </div>
    <div class="recipe-card__cover-details">
      <div id="recipe-card__duration" class="recipe-card__duration">
        <p><span>30</span>mins</p>
      </div>
      <div id="recipe-card__servings" class="recipe-card__servings">
        <p><span>8</span>servings</p>
      </div>
      <div id="recipe-card__info" class="recipe-card__info">
        <div class="recipe-card__title">
          <h1>Blueberry French Toast</h1>
        </div>
        <div class="recipe-card__description">
          <p>Wonderful blueberry french toast recipe to serve for your whole family!</p>
        </div>
      </div>
    </div>
  </div>
    <div id="recipe-card__content-container" class="recipe-card__content-container">
    <div class="recipe-card__actions">
      <ul>
        <li><a id="ingredientsTab" href="#" class="active">Ingredients</a></li>
        <li><a id="preparationsTab" href="#">Preparation</a></li>
      </ul>
    </div>
    <div id="recipe-card__content--ingredients" class="recipe-card__content recipe-card__content--active">
      <ul>
        <span>MAIN:</span>
        <li> 12 slices day-old white bread, crusts removed</li>
        <li>2 packages (8 ounces each) cream cheese</li>
        <li>1 cup fresh or frozen blueberries</li>
        <li>12 large eggs, lightly beaten</li>
        <li>2 cups 2% milk</li>
        <li>1/3 cup maple syrup or honey</li>
      </ul>
      <ul>
        <span>SAUCE:</span>
        <li>1 cup sugar</li>
        <li>2 tablespoons cornstarch</li>
        <li>1 cup water</li>
        <li>1 cup fresh or frozen blueberries</li>
        <li>1 tablespoon butter</li>
      </ul>
    </div>
    <div id="recipe-card__content--preparations" class="recipe-card__content">
      <ul class="preparation-steps">
        <li>Cut bread into 1-in. cubes; place half in a greased 13x9-in. baking dish. Cut cream cheese into 1-in. cubes; place over bread. Top with blueberries and remaining bread cubes.</li>

        <li>Whisk the eggs, milk and syrup in a large bowl. Pour over bread mixture. Cover and refrigerate for 8 hours or overnight.</li>

        <li>Remove from the refrigerator 30 minutes before baking. Cover and bake at 350° for 30 minutes. Uncover; bake 25-30 minutes longer or until a knife inserted in center comes out clean.</li>

        <li>Combine the sugar, water and cornstarch until smooth in a small saucepan. Bring to a boil over medium heat; cook and stir until thickened, 3 minutes. Stir in blueberries; bring to a boil. Reduce heat and simmer until berries burst, 8-10 minutes. Remove from heat; stir in butter. Serve with French toast.</li>
      </ul>
    </div>
  </div>
</div>

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
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: "Questrial", sans-serif;
}
.recipe-card {
  border-radius: 15px;
  display: flex;
  // background: #eee;
  &__cover {
    cursor: pointer;
    background:#EEE;
    border-radius: 15px;
    position: relative;
    height: 500px;
    width: 300px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 30;
    transition: transform 0.3s ease-in-out, border-radius 0.3s ease-in-out;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07);
    &-details {
      z-index: 20;
      color: white;
      height: 100%;
      width: 100%;
      position: relative;
    }
  }

  &__img {
    display: flex;
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease-in;
    }
  }
  &__cover--open {
    transform: translateX(-80%);
    // border-top-right-radius: 0;
    // border-bottom-right-radius: 0;
  }
  &__cover:hover &__img {
    img {
      transform: scale(1.1);
    }
  }
  &__servings,
  &__duration {
    background: rgba(52, 73, 94, 0.8);
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 10px;
    text-align: center;
    font-size: 0.4em;
    transform: translatex(-120%);
    transition: transform 0.3s ease-in;
    text-transform: uppercase;
  }
  &__cover:hover &__servings,
  &__cover:hover &__duration {
    transform: translatex(0);
  }
  &__servings--show,
  &__duration--show {
    transform: translatex(0);
  }
  &__servings span,
  &__duration span {
    display: block;
    font-size: 3em;
  }
  &__info {
    position: absolute;
    bottom: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 25%,
      rgba(0, 0, 0, 0.6) 100%
    );
    padding: 0 20px;
    transition: transform 0.3s ease-in;
    transform: translateY(45%);
  }
  &__cover:hover &__info {
    transform: translateY(0%);
  }
  &__info--show {
    transform: translateY(0%);
  }
  &__title {
    font-family: "Enriqueta", serif;
    font-size: 1.2em;
  }
  &__description {
    font-size: 1.1em;
    line-height: 1.3;
  }
  &__content-container {
    width: 300px;
    height: 450px;
    margin-top:25px;
    background: #f5f5f5;
    position: absolute;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07);
    transition: 0.3s ease-in-out ;
    border-radius: 15px;
    overflow: hidden;
  }
  &__content-container--open {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    transform: translateX(12%);
    width:500px;
  }
  &__actions {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      display: flex;
      height: 60px;
      width: 100%;

      align-items: center;
    }
    li {
      display: flex;
      height: 60px;
      width: 100%;
      transition: background-color 0.2s ease;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    li:hover {
      background-color: #eee;
    }

    a {
      padding: 10px;
      text-decoration: none;
      color: #333;
      text-transform: uppercase;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.2s ease;
      font-weight: 900;
    }
    a:hover {
      border-bottom: 2px solid #2c3e50;
    }
    a::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    a.active {
      border-bottom: 2px solid #34495e;
    }
  }
  &__content {
    display: none;
    padding: 10px 20px;
    height: 360px;
    overflow-y: scroll;
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      span {
        font-weight: 900;
        background: #34495e;
        color: white;
        padding: 5px 3px;
      }
    }
    li {
      min-height: 30px;
      display: flex;
      align-items: center;
      padding: 5px 3px;
      line-height: 1.4;
    }
    li:nth-child(even) {
      background: #eee;
    }
  }
  &__content--active {
    display: block;
  }
}

.preparation-steps{
  counter-reset: section;
}

.preparation-steps li{
  margin-left:10px;
  padding-left:30px;
  position:relative;
  border-left:3px solid rgba(52, 73, 94, .5);
}
.preparation-steps li::before{
  content:'1';
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  left:-21px;
  background: rgba(52, 73, 94, 1);
  color:white;
  border-radius:50%;
  height:2em;
  width:2em;
  display:flex;
  align-items:center;
  justify-content:center;
  border:4px solid #F5F5F5;
  counter-increment: section;
  content: counter(section);
}


@media screen and (max-width: 640px) {
  .recipe-card {
    flex-direction: column;
    &__cover {
      height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: none;
    }
    &__cover--open,
    &__content-container--open {
      transform: translatex(0);
    }
    &__content-container {
      position: relative;
      height: 50vh;
      width: 100vw;
      border-radius:0;
      margin-top:0;
    }
    &__content{
      height:40vh;
      
    }
    &__info {
      transform: translateY(0);
    }
    &__duration {
      transform: translatex(0);
    }
    &__servings {
      transform: translatex(0);
    }
  }
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
