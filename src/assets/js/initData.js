const menuList = [
  {
    name: 'home',
    url: '/',
    title: '首页',
    showNav: true
  },
  {
    name: 'product',
    url: '/product',
    title: '产品案例',
    showNav: true,
    children: [
      {
        name: 'prosearch',
        url: '/prosearch',
        title: '产品查询',
        showNav: true
      }
    ]
  },
  {
    name: 'about',
    url: '/about',
    title: '关于我们',
    showNav: true
  },
  {
    name: 'contact',
    url: 'index.html',
    title: '联系我们',
    showNav: false
  }
]

export default {
  menuList
}
