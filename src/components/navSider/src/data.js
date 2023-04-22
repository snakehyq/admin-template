export const menus = [
  {
    id: 38,
    name: '系统总览',
    type: 1,
    url: '/main/analysis',
    icon: 'el-icon-monitor',
    sort: 1,
    children: [
      {
        id: 39,
        url: '/main/analysis/overview',
        name: '核心技术',
        sort: 1,
        type: 2,
        children: null,
        parentId: 38
      },
      {
        id: 40,
        url: '/main/analysis/shopCacular',
        name: '商品统计',
        sort: 3,
        type: 2,
        children: null,
        parentId: 38
      }
    ]
  },
  {
    id: 41,
    name: '系统管理',
    type: 1,
    url: '/main/system',
    icon: 'el-icon-monitor',
    sort: 4,
    children: [
      {
        id: 42,
        url: '/main/system/user',
        name: '用户管理',
        sort: 5,
        type: 2,
        children: null,
        parentId: 41
      },
      {
        id: 43,
        url: '/main/system/depart',
        name: '部门管理',
        sort: 6,
        type: 2,
        children: null,
        parentId: 41
      },
      {
        id: 44,
        url: '/main/system/menu',
        name: '菜单管理',
        sort: 7,
        type: 2,
        children: null,
        parentId: 41
      },
      {
        id: 55,
        url: '/main/system/role',
        name: '角色管理',
        sort: 8,
        type: 2,
        children: null,
        parentId: 41
      }
    ]
  },
  {
    id: 45,
    name: '商品中心',
    type: 1,
    url: '/main/shop',
    icon: 'el-icon-monitor',
    sort: 8,
    children: [
      {
        id: 46,
        url: '/main/shop/tixt',
        name: "'核心技术'",
        sort: 106,
        type: '2',
        children: null,
        parentId: 38
      }
    ]
  }
]
