<template>
  <div class="product-main">
    <div class="product-image-div">
      <div
        class="
          absolute
          z-40
          text-white
          bg-red-500 bg-opacity-70
          rounded-tr-lg rounded-bl-xl
          p-0.5
          px-1
          shadow-lg
        "
      >
        <nuxt-link to="/" class="shadow-lg">{{ sort }}</nuxt-link>
      </div>

      <img :src="coverImage" class="product-img" alt="" />
    </div>
    <!-- https://source.unsplash.com/user/erondu/1600x900 -->
    <div class="product-content">
      <div class="product-conent-right-div">
        <div class="product-content-title">
          <p>
            <nuxt-link to="/product-details">
              {{ name }} - {{ title }}
            </nuxt-link>
          </p>
        </div>
        <div class="product-content-author">
          <p class="">
            <i class="far fa-user pl-2 fa-sm"></i
            ><nuxt-link to="/user-details">{{ user }}</nuxt-link>
          </p>
        </div>
        <div class="product-content-description">
          <p>
            {{ content }}
          </p>
        </div>

        <div class="product-content-control">
          <nuxt-link
            class="product-content-control-preview"
            to="/product-details"
          >
            <i class="fa fa-eye pl-1"></i>معاينة
          </nuxt-link>
          <button class="product-content-controle-cart">
            <i class="fa fa-shopping-cart mr-px"></i>
          </button>
        </div>
      </div>
      <div class="product-content-left-div">
        <div class="product-left-top-div">
          <div class="product-content-price">
            <p>{{ price }}$</p>
          </div>

          <div class="product-content-discount" v-if="discount == true">
            <p>17.49$</p>
          </div>
        </div>
        <div class="product-content-left-buttom-div">
          <div class="product-content-salles group">
            <div
              class="
                absolute
                bg-gray-700
                text-gray-400
                bg-opacity-50
                -mr-20
                shadow-md
                text-sm
                rounded-lg
                scale-0
                group-hover:scale-100
                transition-all
                duration-200
                px-1.5
                py-1
              "
            >
              المبيعات
            </div>

            <p class="text-red-200">
              <a href="#"
                ><i class="fa fa-shopping-cart text-red-500 fa-sm"></i> 24</a
              >
            </p>
          </div>
          <div class="product-content-rate group">
            <div
              class="
                absolute
                bg-gray-700
                text-gray-400
                bg-opacity-50
                text-sm
                -mr-20
                -mt-1
                shadow-md
                rounded-lg
                scale-0
                group-hover:scale-100
                transition-all
                duration-200
                px-1.5
                py-1
              "
            >
              التقيمات
            </div>
            <p class="text-red-200">
              <a href="#"><i class="fa fa-star text-red-500 fa-sm"></i> 4.5</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-component',
  data() {
    return {}
  },
  props: {
    name: {
      type: String,
      default: 'تداوين',
    },
    title: {
      type: String,
      default: 'مدونة وردبريس عربية',
    },
    content: {
      type: String,
      default:
        'لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذاالنص أو العديد من النصوص الأخرى ...',
    },
    coverImage: {
      type: String,
      default: ' https://source.unsplash.com/user/erondu/1600x900 ',
    },
    user: {
      type: String,
      default: 'عمرو ابوراس',
    },
    sort: {
      type: String,
      default: 'ثيمات ورد بريس',
    },
    price: {
      type: Number,
      default: 29.99,
    },
    discount: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style>
.product-info {
  @apply bg-gray-900 pt-3 px-4  grid grid-cols-12 rounded-b-lg;
}
.product-main {
  @apply my-2 max-w-min;
}
.product-image-div {
  @apply rounded-t-lg;
}
.product-img {
  @apply rounded-t-lg;
}
.product-content {
  @apply bg-gray-900 pt-3 px-4 text-left grid grid-cols-12  rounded-b-lg;
}
.product-conent-right-div {
  @apply col-span-10;
}
.product-content-title {
  @apply text-xl font-bold text-gray-300 text-right;
}
.product-content-author {
  @apply text-gray-500 text-right mt-1 hover:text-red-500;
}
.product-content-description {
  @apply text-gray-400 mb-2 mt-3 min-h-3.5 w-full text-right;
}
.product-content-control {
  @apply flex;
}
.product-content-control-preview {
  @apply border-2 ml-1 my-4 transition-colors duration-200 rounded-md border-red-500 px-2 py-1 text-red-500 hover:text-white hover:bg-red-500 font-bold;
}
.product-content-controle-cart {
  @apply border-2 mx-1 my-4 transition-colors duration-200 rounded-md border-red-500 px-2 pt-0.5 text-red-500 hover:text-white hover:bg-red-500;
}
.product-content-left-div {
  @apply col-span-2 text-center grid grid-rows-6;
  font-family: sans-serif;
}

.product-left-top-div {
  @apply self-start row-span-3;
}

.product-content-price {
  @apply font-bold text-red-500 text-xl row-span-1 flex  justify-center self-start;
}
.product-content-discount {
  @apply font-bold justify-center self-start text-gray-500 line-through text-lg row-span-2 flex;
}

.product-content-left-buttom-div {
  @apply self-end row-span-3;
}

.product-content-rate {
  @apply bg-opacity-20 bg-red-500 rounded-md row-span-6  self-end  bottom-0  mb-5 mt-2 justify-center;
}
.product-content-salles {
  @apply bg-opacity-20 bg-red-500 rounded-md row-span-6  self-end mt-5 justify-center;
}
</style>
