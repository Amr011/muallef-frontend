<template>
  <div class="text-gray-300 text-xl mt-3 font-bold mr-12 w-60 xl:w-80">
    <div>
      <div
        class="
          py-4
          px-4
          bg-gray-900
          rounded-lg
          border border-red-500
          flex
          items-center
          justify-between
          cursor-pointer
        "
        @click="toggleFilter()"
      >
        <div class="flex items-center">
          <div>
            <i class="ml-2 text-red-500" :class="filterIcon"></i
            >{{ filterName }}
          </div>
          <p
            class="
              font-sans
              mr-2
              font-normal
              bg-red-500 bg-opacity-50
              rounded
              px-1.5
              text-sm
            "
          >
            {{ filterValue }}
          </p>
        </div>
        <i
          v-if="openFilter == true"
          class="fa fa-caret-left text-red-500 fa-lg"
        ></i>
        <i
          v-if="openFilter == false"
          class="fa fa-caret-down text-red-500 fa-lg"
        ></i>
      </div>
      <div :class="{ hidden: openFilter }" class="mt-2 bg-gray-800 rounded-lg">
        <div class="px-2">
          <div>
            <label class="inline-flex items-center px-4 py-4 mt-2 text-red-500">
              <input type="radio" class="form-radio" name="radio" value="2" />
              <span class="mr-2 flex">
                <i class="fa fa-star fa-xs ml-1"></i>
                <i class="fa fa-star fa-xs ml-1"></i>
                <i class="fa fa-star fa-xs ml-1"></i>
                <i class="fa fa-star fa-xs ml-1"></i>
                <i class="fa fa-star fa-xs ml-1"></i>
              </span>
            </label>
          </div>
        </div>
        <div class="px-2">
          <div>
            <label class="inline-flex items-center px-4 py-4 mt-2 text-red-500">
              <input type="radio" class="form-radio" name="radio" value="2" />
              <span class="mr-2 flex">
                <i class="fa fa-star fa-xs ml-1"></i>
                <i class="fa fa-star fa-xs ml-1"></i>
                <i class="fa fa-star fa-xs ml-1"></i>
                <i class="fa fa-star fa-xs ml-1"></i>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advanced-filter-component',
  props: ['filterIcon', 'filterName', 'filterValue'],
  data() {
    return {
      openFilter: true,
    }
  },
  methods: {
    toggleFilter() {
      this.openFilter = !this.openFilter
    },
  },
}
</script>

<style></style>
