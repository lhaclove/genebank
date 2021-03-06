
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.mixin({
    computed: {
        env: function () {
            return window.env
        }
    },
    methods: {
        url(string) {
            return this.env.baseUrl + string
        }
    }
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
    'sidebar',
    require('./components/navigation/Sidebar.vue')
);

Vue.component(
    'Spinner',
    require('./components/Spinner.vue')
);

Vue.component(
    'HomePage',
    require('./components/front/home/HomePage.vue')
);

Vue.component(
    'about',
    require('./components/front/about/About.vue')
);

Vue.component(
    'download',
    require('./components/front/download/Download.vue')
);

Vue.component(
    'terms',
    require('./components/front/terms/Terms.vue')
);

Vue.component(
    'Gallery',
    require('./components/front/gallery/Gallery.vue')
);

Vue.component(
    'NewsList',
    require('./components/front/news/NewsList.vue')
);
Vue.component(
    'NewsDetail',
    require('./components/front/news/NewsDetail.vue')
);
Vue.component(
    'berita1',
    require('./components/front/news/Berita1.vue')
);
Vue.component(
    'berita2',
    require('./components/front/news/Berita2.vue')
);
Vue.component(
    'berita3',
    require('./components/front/news/Berita3.vue')
);
Vue.component(
    'CharGenusBase',
    require('./components/front/char/CharGenusBase.vue')
);
Vue.component(
    'CharVegetableList',
    require('./components/front/char/CharVegetableList.vue')
);
Vue.component(
    'CharDetail',
    require('./components/front/char/CharDetail.vue')
);
Vue.component(
    'PassportList',
    require('./components/front/passport/PassportList.vue')
);
Vue.component(
    'PassportListDetail',
    require('./components/front/passport/PassportListDetail.vue')
);
Vue.component(
    'EvalList',
    require('./components/front/evaluation/EvalList.vue')
);
Vue.component(
    'EvalListDetail',
    require('./components/front/evaluation/EvalListDetail.vue')
);
Vue.component(
    'ComponentBase',
    require('./components/ComponentBase.vue')
);

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);

Vue.filter('titleCase', function (value) {
  if (!value) return ''
  
  return value.toLowerCase().split('_').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
})

import store from './store/index';

const app = new Vue({
    el: '#app',
    store,
});
