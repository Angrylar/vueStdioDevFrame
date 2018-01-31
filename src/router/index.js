import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

import layout from '../layout/common/common.vue';
import contentA from '../components/contentA/contentA.vue';
import contentB from '../components/contentB/contentB.vue';
import contentC from '../components/contentC/contentC.vue';
import contentD from '../components/contentD/contentD.vue';

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/hello',
      name: 'layout',
      component: layout,
      children: [
        {
          path: 'hello',
          name: 'HelloWorld',
          component: HelloWorld
        }, {
          path: 'contentA',
          name: 'contentA',
          component: contentA
        }, {
          path: 'contentB',
          name: 'contentB',
          component: contentB
        }, {
          path: 'contentC',
          name: 'contentC',
          component: contentC
        }, {
          path: 'd',
          redirect: '/d/dd',
          name: 'ddd',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'dd',
              name: 'contentD',
              component: contentD
            }, {
              path: 'hello',
              name: 'HelloWorld',
              component: HelloWorld
            }
          ]
        }, {
          path: 'componentE/:id',
          name: 'componentE',
          component: contentB
        },

      ]
    }
  ]
})
