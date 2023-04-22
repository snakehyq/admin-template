import { IBaseForm } from '@/base-ui/baseForm/config'
export const searchFormConfig: IBaseForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  formItem: [
    {
      type: 'input',
      label: 'id',
      placeholder: '请输入id',
      prop: 'id',
      labelWidth: '120px',
      span: 12
    },
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      prop: 'username',
      labelWidth: '120px',
      span: 12
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      prop: 'password',
      labelWidth: '120px',
      span: 8
    }
  ]
}
