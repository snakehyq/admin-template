export const contentConfig = {
  title: '用户列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      prop: 'name',
      label: '用户名',
      minwidth: '100'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minwidth: '100'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      minwidth: '100'
    },
    {
      prop: 'enable',
      label: '状态',
      minwidth: '100',
      slotName: 'enable'
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
