<template>
  <div class="search-form">
    <base-form
      :form-config="searchFormConfig"
      v-model="formData"
      ref="searchFormRef"
    />
    <slot name="footer">
      <div style="float: right">
        <el-button @click="resetForm">重置</el-button>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </div>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { baseForm } from '@/base-ui/baseForm'
import { IBaseForm } from '@/base-ui/baseForm/config'
type ISearchForm = IBaseForm

const props = defineProps<{
  searchFormConfig: ISearchForm
  modelValue: any
}>()

const searchFormRef = ref<InstanceType<typeof baseForm>>()
let formData = ref({ ...props.modelValue })

const emit = defineEmits(['update:modelValue', 'search'])
watch(
  formData,
  (newVal) => {
    emit('update:modelValue', newVal)
  },
  {
    deep: true
  }
)
const onSubmit = () => {
  emit('search')
}
const resetForm = () => {
  searchFormRef.value.formRef.resetFields()
}
</script>

<style></style>
