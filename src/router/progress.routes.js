import progress from '@/views/progress/progress.vue'
export default {
  path: '/progress',
  name: 'progress',
  component: progress,//component引用什么组件就会在什么组件的<router-view /> 上跳转
  // 
  children: [
    {
      path: '/progress',
      name: 'progress',
      component: () => import('@/views/progress/progress')//懒加载
    }
  ]
}