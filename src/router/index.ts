import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const RecommendComponent = () => import('@/views/recommend/Index.vue')
const PlayListComponent = () => import('@/views/playlist/Index')
const RankComponent = () => import('@/views/rank/Index.vue')
const SingerComponent = () => import('@/views/singer/Index.vue')
const LatestMusicComponent = () => import('@/views/latest-music/Index.vue')
const PlayListDetailComponent = () => import('@/views/playlist-detail/Index.vue')
const SingerDetailComponent = () => import('@/views/singer-detail/Index.vue')
const BoutiqueListComponent = () => import('@/views/boutiquelist/Index.vue')
const SearchComponenst = () => import('@/views/search/Index.vue')
const AlbumDetailComponent = () => import('@/views/album-detail/Index.vue')
const VideoComponent = () => import('@/views/video/Index.vue')
const MvListComponent = () => import('@/views/mvlist/Index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/recommend',
    children: [
      {
        path: '/recommend',
        name: 'recommend',
        component: RecommendComponent
      },
      {
        path: '/playList',
        name: 'playList',
        component: PlayListComponent
      },
      {
        path: '/boutiqueList',
        name: 'boutiqueList',
        component: BoutiqueListComponent
      },
      {
        path: '/playList/:id',
        name: 'playListDetails',
        component: PlayListDetailComponent,
        meta: { isCover: true }
      },
      {
        path: '/album/:id',
        name: 'albumDetail',
        component: AlbumDetailComponent,
        meta: { isCover: true }
      },
      {
        path: '/rank',
        name: 'rank',
        component: RankComponent
      },
      {
        path: '/singer',
        name: 'singer',
        component: SingerComponent
      },
      {
        path: '/singer/:id',
        name: 'singerDetails',
        component: SingerDetailComponent,
        meta: { isCover: true }
      },
      {
        path: '/newMusic',
        name: 'newMusic',
        component: LatestMusicComponent
      },
      {
        path: '/search/:keyWords',
        name: 'search',
        component: SearchComponenst,
        meta: { isCover: true }
      },
      {
        path: '/mvList',
        name: 'mvList',
        component: MvListComponent,
        meta: { isCover: true }
      },
      {
        path: '/video/:id',
        name: 'video',
        components: {
          video: VideoComponent
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
