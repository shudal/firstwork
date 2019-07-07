import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '@/page/Index'

const q1  = r => require.ensure([], () => r(require('@/page/q1')),  'q1');
const q2  = r => require.ensure([], () => r(require('@/page/q2')),  'q2');
const q3  = r => require.ensure([], () => r(require('@/page/q3')),  'q3');
const q4  = r => require.ensure([], () => r(require('@/page/q4')),  'q4');
const q5  = r => require.ensure([], () => r(require('@/page/q5')),  'q5');
const q6  = r => require.ensure([], () => r(require('@/page/q6')),  'q6');
const q7  = r => require.ensure([], () => r(require('@/page/q7')),  'q7');
const q8  = r => require.ensure([], () => r(require('@/page/q8')),  'q8');
const q9  = r => require.ensure([], () => r(require('@/page/q9')),  'q9');
const q10 = r => require.ensure([], () => r(require('@/page/q10')), 'q10');
const q11 = r => require.ensure([], () => r(require('@/page/q11')), 'q11');
const q12 = r => require.ensure([], () => r(require('@/page/q12')), 'q12');
const q13 = r => require.ensure([], () => r(require('@/page/q13')), 'q13');
const q14 = r => require.ensure([], () => r(require('@/page/q14')), 'q14');
const q15 = r => require.ensure([], () => r(require('@/page/q15')), 'q15');
const q16 = r => require.ensure([], () => r(require('@/page/q16')), 'q16');
const q17 = r => require.ensure([], () => r(require('@/page/q17')), 'q17');
const q18 = r => require.ensure([], () => r(require('@/page/q18')), 'q18');
const q19 = r => require.ensure([], () => r(require('@/page/q19')), 'q19');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {path: '/q1', component: q1},
        {path: '/q2', component: q2},
        {path: '/q3', component: q3},
        {path: '/q4', component: q4},
        {path: '/q5', component: q5},
        {path: '/q6', component: q6},
        {path: '/q7', component: q7},
        {path: '/q8', component: q8},
        {path: '/q9', component: q9},
        {path: '/q10', component: q10},
        {path: '/q11', component: q11},
        {path: '/q12', component: q12},
        {path: '/q13', component: q13},
        {path: '/q14', component: q14},
        {path: '/q15', component: q15},
        {path: '/q16', component: q16},
        {path: '/q17', component: q17},
        {path: '/q18', component: q18},
        {path: '/q19', component: q19},
      ]
    }
  ]
})
