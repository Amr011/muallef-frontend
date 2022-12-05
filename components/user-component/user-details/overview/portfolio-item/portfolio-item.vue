<template>
  <div class="my-2 mx-4">
    <div class="grid grid-cols-1 justify-center">
      <div class="grid grid-cols-4 gap-2 bg-gray-800 rounded-lg">
        <div class="col-span-1 rounded-r-lg">
          <img
            class="rounded-lg m-2"
            src="https://source.unsplash.com/user/erondu/1600x900"
            width="240"
            height="240"
            alt=""
          />
        </div>
        <div class="col-span-2 my-2 mx-4">
          <div class="text-xl">مدونة وردبريس عربية</div>
          <p class="text-lg text-gray-400 mt-3">
            هذا وصف لمدونة ورد بريس خارقة للعادة
          </p>
          <div class="font-sans text-red-500 text-xl font-bold">49$</div>
        </div>
        <div
          class="
            col-span-1
            m-2
            font-bold
            grid grid-cols-1
            text-center text-red-500
          "
        >
          <button
            class="
              bg-gray-900
              mb-1
              my-20
              flex
              justify-center
              items-center
              font-bold
              rounded-lg
            "
          >
            <i class="fa fa-eye"></i>
            <p class="mr-2">معاينة</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolioItemOverviewUserDetails',
}
</script>

<style></style>
