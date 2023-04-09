export interface IBaseForm {
  labelWidth?: string
  itemLayout?: {
    padding?: string
  }
  formItem: IFormItem[]
}

export interface IFormItem {
  type: string
  label?: string
  placeholder?: string
  prop: string
  labelWidth?: string
  span: number
}
