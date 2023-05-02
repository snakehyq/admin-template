export const contentConfig = {
  pageName: '/menu',
  title: '菜单列表',
  showIndexColumn: false,
  showSelectColumn: false,
  showFooter: false,
  childrenProps: {
    rowKey: 'id',
    treeProps: { children: 'children', hasChildren: 'hasChildren' }
  },
  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      minwidth: '100'
    },
    {
      prop: 'type',
      label: '类型',
      minwidth: '100'
    },
    {
      prop: 'url',
      label: '菜单路径',
      minwidth: '100'
    },
    {
      prop: 'icon',
      label: '菜单图标',
      minwidth: '100'
    }
  ]
}
