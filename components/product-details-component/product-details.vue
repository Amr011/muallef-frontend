<template>
  <div>
    <div class="w-full text-gray-200 font-bold text-3xl mb-4">
      {{ productTitle }}
    </div>

    <div class="w-full text-gray-300 font-bold text-lg mb-6">
      <ul>
        <li class="inline-block pl-3">
          <a href="#"
            ><i class="fa fa-user text-red-500 pl-1"></i>{{ productStore }}
          </a>
        </li>
        <li class="inline-block px-3">
          <a href="#"> <i class="fa fa-star text-red-500 pl-1"></i> 4.67</a>
        </li>
        <li class="inline-block px-3">
          <a href="#"
            ><i class="fa fa-shopping-cart text-red-500 pl-1"></i> 129</a
          >
        </li>
        <li class="inline-block px-3">
          <a href="#"
            ><i class="fa fa-calendar text-red-500 pl-1"></i>
            {{ productCreatedAt }}
          </a>
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div
        class="
          bg-gray-900
          col-span-3
          lg:col-span-2
          xl:col-span-2
          rounded-lg
          row-span-2
        "
      >
        <div class="-mt-0 -mr-0 -ml-0 rounded-tl-lg rounded-tr-lg">
          <img
            class="rounded-lg rounded-br-none rounded-bl-none"
            src="https://images.unsplash.com/photo-1547039996-61c1135690c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxfHx3aWRlfGVufDB8fHx8MTYzNzYxMDY3OQ&ixlib=rb-1.2.1&q=80&w=1080"
            alt="productDetail Title"
          />
        </div>
        <div
          class="
            w-full
            flex
            justify-center
            text-xl
            font-bold
            py-4
            text-red-500
            bg-gray-800
          "
        >
          <a href=""> <i class="fas fa-eye"></i> معاينة </a>
        </div>

        <div class="divide-gray-50 text-lg mx-5 my-5 leading-8">
          <p class="text-gray-50">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على
            المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور
            مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة
            له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق. هذا النص يمكن
            أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير
            منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
          </p>
        </div>
      </div>
      <div
        class="
          bg-gray-900
          rounded-xl
          col-span-3
          lg:col-span-1
          xl:col-span-1
          row-span-1
          text-gray-50
          px-0
          py-0
        "
      >
        <div class="px-4 py-4 border-b-2 border-gray-800 flex">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="relative inline-block text-right">
            <div>
              <button
                type="button"
                class="
                  inline-flex
                  justify-center
                  w-full
                  rounded-xl
                  font-bold
                  text-2xl
                  px-4
                  py-3
                  text-gray-50
                "
                @click="licenseActiveList = !licenseActiveList"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                ترخيص عادي
                <!-- Heroicon name: solid/chevron-down-->
                <i class="fas fa-caret-down mr-4 mt-2"></i>
              </button>
            </div>
            <div
              class="
                origin-top-right
                absolute
                right-0
                mt-2
                w-80
                rounded-md
                bg-gray-800
              "
              :class="{
                hidden: licenseActiveList,
              }"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1 h-full" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <div
                  href="#"
                  class="
                    block
                    px-2
                    py-2
                    border-b border-gray-600
                    hover:bg-gray-700
                    cursor-pointer
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  <div class="grid grid-cols-2 font-bold text-xl mx-4 w-full">
                    <div class="flex justify-start">
                      <p class="text-gray-200">ترخيص قياسي</p>
                    </div>
                    <div class="flex justify-end ml-6 text-2xl">
                      <p class="text-red-500 font-sans">29.99$</p>
                    </div>
                  </div>
                  <div class="text-base mx-4 text-gray-400 mt-2">
                    <div>
                      هذا الترخيص يحتوي على العديد من الخصائص الرائعة
                      <p class="text-red-500 underline">قرائة المزيد</p>
                    </div>
                  </div>
                </div>

                <div
                  href="#"
                  class="block px-2 py-2 hover:bg-gray-700 cursor-pointer"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  <div class="grid grid-cols-2 font-bold text-xl mx-4 w-full">
                    <div class="flex justify-start">
                      <p class="text-gray-200">ترخيص موسع</p>
                    </div>
                    <div class="flex justify-end ml-6 text-2xl">
                      <p class="text-red-500 font-sans">29.99$</p>
                    </div>
                  </div>
                  <div class="text-base mx-4 text-gray-400 mt-2">
                    <div>
                      هذا الترخيص يحتوي على العديد من الخصائص الرائعة
                      <p class="text-red-500 underline">قرائة المزيد</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 lg:w-6/12 xl:w-6/12 w-5/12 flex justify-end">
            <h2 class="text-4xl text-red-500 font-bold font-sans">29.99$</h2>
          </div>
        </div>

        <div class="text-gray-400 px-10 pt-4 font-bold group tracking-wide">
          <div class="text-lg py-0.5">
            <i class="fa fa-check pl-2 fa-lg text-red-500"></i>
            تم التحقق من قبل منصة مؤلف

            <i class="fa fa-info fa-sm mr-1"></i>
            <div
              class="
                absolute
                w-52
                rounded-lg
                scale-0
                group-hover:scale-100
                transition-all
                duration-150
                bg-gray-800
                mr-[310px]
                -mt-8
              "
            >
              <p class="py-2 px-2 text-gray-300">
                تم التحقق من الجودة من قبل فريق عمل مؤلف قبل نشر المنتج
              </p>
            </div>
          </div>
        </div>

        <div class="bottom-0 py-8">
          <add-to-cart-modal-component />

          <div class="flex justify-center self-end">
            <button
              class="
                text-lg
                w-10/12
                py-2
                my-2
                rounded-xl
                text-gray-50 text-pri
                font-bold
                bg-red-500
                border border-red-500
              "
            >
              اشتري الأن
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addToCartModalComponent from './add-to-cart-modal.vue'
// import axios from 'axios'

export default {
  name: 'product-details-component',
  components: {
    addToCartModalComponent,
  },
  data: () => {
    return {
      licenseActiveList: true,
      productTitle: 'عنوان المنتج',
      productName: 'اسم المنتج',
      productContent: '',
      productStore: 'المؤلّف',
      productCreatedAt: 'التاريخ',
    }
  },
  //   created() {
  //     this.getSingleProduct()
  //   },
  methods: {
    // Get Single Product
    //     async getSingleProduct() {
    //       try {
    //         const response = await axios.get(
    //           `http://localhost:5000/api/v1/product/single/32`
    //         )
    //         this.productTitle =
    //           response.data[0].name + ' - ' + response.data[0].title
    //         this.productStore = response.data[0].store.name
    //         this.productCreatedAt = response.data[0].createdAt
    //         this.productContent = response.data[0].content
    //       } catch (err) {
    //         console.log(err)
    //       }
    //     },
  },
}
</script>

<style></style>
