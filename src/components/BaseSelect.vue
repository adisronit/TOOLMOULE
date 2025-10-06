<template>
  <div class="tag-dropdown">
    <label v-if="label">{{ label }}</label>

    <div class="dropdown-box" @click="toggleDropdown">
      <!-- Selected tags -->
      <div v-if="multi && selectedItems.length" class="selected-tags">
        <span v-for="(item, index) in selectedItems" :key="index" class="tag">
          {{ item[textField] }}
          <button class="tag-remove" @click.stop="removeTag(item)">×</button>
        </span>
      </div>

      <!-- Single selected item -->
      <span v-else-if="!multi && selectedItems.length" class="single-selected">
        {{ selectedItems[0][textField] }}
      </span>

      <input
        v-if="searchable"
        v-model="search"
        placeholder="Search..."
        class="dropdown-input"
        @focus="isOpen = true"
      />
      <span v-if="!selectedItems.length && !search" class="placeholder">Select...</span>
    </div>

    <!-- Options dropdown -->
    <div v-if="isOpen" class="dropdown-options">
      <div
        v-for="option in filteredOptions"
        :key="option[valueField]"
        class="option-item"
        :class="{ selected: isSelected(option), disabled: option.disabled }"
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
      <div v-if="multi && selectedItems.length" class="clear-section">
        <button class="btn-clear" @click.stop="clearAll">Clear All</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

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
const isOpen = ref(false)
const selected = ref(props.multi ? [...(props.modelValue || [])] : props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    selected.value = props.multi ? [...(val || [])] : val
  },
)

const selectedItems = computed(() => {
  if (props.multi) {
    return props.options.filter((opt) => selected.value.includes(opt[props.valueField]))
  }
  return props.options.filter((opt) => opt[props.valueField] === selected.value)
})

const filteredOptions = computed(() => {
  if (!search.value) return props.options
  return props.options.filter((opt) =>
    String(opt[props.textField]).toLowerCase().includes(search.value.toLowerCase()),
  )
})

function isSelected(option) {
  return props.multi
    ? selected.value.includes(option[props.valueField])
    : selected.value === option[props.valueField]
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
    isOpen.value = false
  }
}

function removeTag(item) {
  selected.value = selected.value.filter((v) => v !== item[props.valueField])
  emit('update:modelValue', [...selected.value])
}

function clearAll() {
  selected.value = []
  emit('update:modelValue', [])
}

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function handleClickOutside(e) {
  if (!e.target.closest('.tag-dropdown')) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
.tag-dropdown {
  position: relative;
  width: 260px;
  font-family: 'Poppins', sans-serif;
}

.dropdown-box {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px;
  background: white;
  min-height: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
}

.placeholder {
  color: #aaa;
}

.dropdown-input {
  border: none;
  outline: none;
  flex: 1;
  padding: 2px;
}

.selected-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tag {
  background-color: #007bff;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.tag-remove {
  margin-left: 5px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
}

.dropdown-options {
  position: absolute;
  background: white;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-top: 4px;
}

.option-item {
  padding: 6px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.option-item:hover {
  background-color: #f5f5f5;
}

.option-item.selected {
  background-color: #007bff;
  color: white;
}

.option-item.disabled {
  color: #aaa;
  cursor: not-allowed;
}

.clear-section {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 6px;
}

.btn-clear {
  background-color: #f87171;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
}
.btn-clear:hover {
  background-color: #dc2626;
}
</style>
