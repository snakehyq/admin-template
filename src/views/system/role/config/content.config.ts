export const contentConfig = {
  title: '角色列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      prop: 'name',
      label: '角色名',
      minwidth: '100'
    },
    {
      prop: 'info',
      label: '权限介绍',
      minwidth: '100'
    },
    {
      prop: 'createTime',
      label: '创建时间',
      minwidth: '100'
    },
    {
      prop: 'updateTime',
      label: '更新时间',
      minwidth: '100'
    },
    {
      prop: 'action',
      label: '操作',
      minwidth: '100',
      slotName: 'action'
    }
  ]
}
