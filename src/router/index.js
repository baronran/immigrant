import {createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import pagesLayout from '../components/layout/standLayout.vue'
import bureauLayout from '../components/layout/bureauLayout.vue'
//边检
import bureauLayoutFI from '../components/layout/bureauLayoutFI.vue'

const routes = [
  {
    path: '/',
    component: () => import('../pages/login/index.vue'),

  },
  {
    name: 'window',
    path: '/window',
    component: () => import('../components/pages/SSO2/window.vue')
  },
  //  局
  {
    name: 'Bureau',
    path: '/Bureau',
    component: bureauLayout,
    redirect: '/Bureau/SSO',
    children: [
      {
        name: 'BureauSSO',
        path: 'SSO',
        component: () => import('../pages/Bureau/SSO2.vue')

      },
      {
        name: 'BureauPLES',
        path: 'PLES',
        component: () => import('../pages/Bureau/PLES2.vue')
      },
      {
        name: 'BureauSCSIBJ',
        path: 'SCSIBJ',
        component: () => import('../pages/Bureau/SCSIBJ2.vue')
      },
      {
        name: 'BureauSOEAEA',
        path: 'SOEAEA',
        component: () => import('../pages/Bureau/SOEAEA2.vue')
      },

    ]
  },
  //  总站 边管
  {
    name: 'Stand',
    path: '/Stand',
    component: pagesLayout,
    redirect: '/Stand/SSO',
    children: [
      //边管
      {
        name: 'SSO',
        path: 'SSO',
        component: () => import('../pages/Stand/SSO2.vue')
      },
      {
        name: 'PLES',
        path: 'PLES',
        component: () => import('../pages/Stand/PLES.vue')
      },
      {
        name: 'SCSIBJ',
        path: 'SCSIBJ',
        component: () => import('../pages/Stand/SCSIBJ.vue')
      },
      {
        name: 'SOEAEA',
        path: 'SOEAEA',
        component: () => import('../pages/Stand/SOEAEA.vue')
      },
    ]
  },

  //
  // {
  //   path: "/masterStation",
  //   name: "masterStation",
  //   component: () => import('../pages/masterStation/index.vue'),
  // },

  //  总站 边检
  {
    name: 'StandFI',
    path: '/StandFI',
    component: bureauLayoutFI,
    redirect: '/StandFI/Examine',
    children: [
      {
        name: 'ExamineFI',
        path: 'ExamineFI',
        component: () => import('../pages/Stand/Examine.vue')
      },
      {
        name: 'PLESFI',
        path: 'PLESFI',
        component: () => import('../pages/Stand/PLES.vue')
      },
      {
        name: 'SOEAEAFI',
        path: 'SOEAEAFI',
        component: () => import('../pages/Stand/SOEAEA.vue')
      },
    ]
  },
  //  边检站
  {
    path: "/frontierInspectionStation",
    name: "frontierInspectionStation",
    redirect: '/frontierInspectionStation/frontierInspectionStationHome',
    component: () => import('../pages/frontierInspectionStation/index.vue'),
    children: [
      {
        name: 'frontierInspectionStationHome',
        path: 'frontierInspectionStationHome',
        component: () => import('../pages/frontierInspectionStation/home2/index.vue')
      },

    ]
  },
  //  支队
  {
    path: "/detachment",
    name: "detachment",
    component: () => import('../pages/detachment/index.vue'),
    redirect: '/detachment/detachmentHome',
    children: [
      {
        name: 'detachmentHome',
        path: 'detachmentHome',
        component: () => import('../pages/detachment/home2/index.vue')
      },

    ]
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.path == '/')  {
//     next()
//   } else {
//     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
//     // console.log(userInfo,'userInfo');
//     if (userInfo)  next()
//     // 没有token
//     else next({path: '/'});
//   }
// })
export default router

