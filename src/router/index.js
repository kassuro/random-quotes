import Vue from 'vue';
import Router from 'vue-router';
import Quote from '@/components/Quote';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Quote',
            component: Quote
        }
    ]
});
