<template>
  <div class="tag-dropdown">
    <label v-if="label">{{ label }}</label>

    <!-- Selected tags -->
    <div class="selected-tags" v-if="multi && selected.length">
      <span class="tag" v-for="val in selected" :key="val">
        {{ getText(val) }}
        <button class="tag-remove" @click="removeTag(val)">×</button>
      </span>
      <button class="clear-all" @click="clearAll">Clear All</button>
    </div>

    <!-- Search input -->
    <input
      v-if="searchable"
      type="text"
      v-model="search"
      placeholder="Search..."
      class="dropdown-search"
    />

    <!-- Options list -->
    <div class="options">
      <div
        v-for="option in filteredOptions"
        :key="option[valueField]"
        :class="['option-item', { selected: isSelected(option), disabled: option.disabled }]"
        @click="toggleOption(option)"
      >
        <input
          v-if="multi"
          type="checkbox"
          :checked="isSelected(option)"
          :disabled="option.disabled"
        />
        {{ option[textField] }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  modelValue: [String, Number, Array],
  options: { type: Array, default: () => [] },
  valueField: { type: String, default: 'value' },
  textField: { type: String, default: 'text' },
  label: String,
  multi: { type: Boolean, default: false },
  searchable: { type: Boolean, default: true },
})

const emit = defineEmits(['update:modelValue'])

const search = ref('')

// selected values
const selected = ref(props.multi ? [...(props.modelValue || [])] : props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    selected.value = props.multi ? [...(val || [])] : val
  },
)

const filteredOptions = computed(() => {
  if (!search.value) return props.options
  return props.options.filter((opt) =>
    String(opt[props.textField]).toLowerCase().includes(search.value.toLowerCase()),
  )
})

function isSelected(option) {
  if (props.multi) return selected.value.includes(option[props.valueField])
  return selected.value === option[props.valueField]
}

function toggleOption(option) {
  if (option.disabled) return

  if (props.multi) {
    const val = option[props.valueField]
    if (selected.value.includes(val)) {
      selected.value = selected.value.filter((i) => i !== val)
    } else {
      selected.value.push(val)
    }
    emit('update:modelValue', [...selected.value])
  } else {
    selected.value = option[props.valueField]
    emit('update:modelValue', selected.value)
  }
}

function removeTag(val) {
  selected.value = selected.value.filter((i) => i !== val)
  emit('update:modelValue', [...selected.value])
}

function clearAll() {
  selected.value = []
  emit('update:modelValue', [])
}

function getText(val) {
  const opt = props.options.find((o) => o[props.valueField] === val)
  return opt ? opt[props.textField] : val
}
</script>

<style scoped>
.tag-dropdown {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 300px;
}

.selected-tags {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  gap: 5px;
}

.tag {
  background-color: #007bff;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.tag-remove {
  margin-left: 4px;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
}

.clear-all {
  margin-left: auto;
  border: none;
  background: #f44336;
  color: #fff;
  border-radius: 4px;
  padding: 2px 6px;
  cursor: pointer;
}

.dropdown-search {
  width: 100%;
  padding: 4px 8px;
  margin-bottom: 5px;
  border-radius: 4px;
  border: 1px solid #aaa;
}

.options {
  border: 1px solid #ccc;
  border-radius: 6px;
  max-height: 150px;
  overflow-y: auto;
}

.option-item {
  padding: 5px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.option-item.selected {
  background-color: #007bff;
  color: white;
}

.option-item.disabled {
  color: #aaa;
  cursor: not-allowed;
}

.option-item input {
  margin-right: 5px;
}
</style>
