<template>
  <div class="navbar">
    <!-- /* Navbar Top Level */ -->
    <div class="navbar-level-1">
      <div class="navbar-level-1-div">
        <ul class="navbar-level-1-ul">
          <li class="navbar-level-1-item"><a href="#">ابدأ بالبيع</a></li>
          <li class="navbar-level-1-item"><a href="#">الشكاوى</a></li>
          <li class="navbar-level-1-item"><a href="#">الإقتراحات</a></li>
          <li class="navbar-level-1-item"><a href="#">الخصوصية</a></li>
        </ul>
      </div>
    </div>
    <!-- /* Navbar Mid Top Level */ -->
    <div class="navbar-level-2">
      <div class="navbar-level-2-control">
        <div class="navbar-level-2-control-div">
          <ul class="navbar-level-2-control-ul w-full md:flex sm:flex">
            <li class="navbar-level-2-control-item" v-if="isAuth == false">
              <nuxt-link to="/profile" class="flex items-center">
                <i class="fa fa-user"></i>
                <p class="mr-2 hidden lg:flex">تسجيل الدخول</p>
              </nuxt-link>
            </li>
            <li class="navbar-level-2-control-item group" v-if="isAuth == true">
              <nuxt-link to="/profile" class="flex">
                <img
                  src="https://images.unsplash.com/photo-1547039996-61c1135690c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxfHx3aWRlfGVufDB8fHx8MTYzNzYxMDY3OQ&ixlib=rb-1.2.1&q=80&w=1080"
                  class="w-9 h-9 rounded-full border-2 border-red-500"
                  alt=""
                />
                <p class="mr-2 hidden lg:flex">عمرو ابوراس</p>
              </nuxt-link>
              <div
                class="
                  absolute
                  bg-gray-800
                  border border-gray-700
                  scale-0
                  group-hover:scale-100
                  rounded-lg
                  text-gray-300
                  py-2
                  px-4
                  mr-8
                  text-lg
                "
              >
                <ul class="my-1 px-4">
                  <li class="hover:text-red-500 flex items-center">
                    <i class="fa fa-user"></i>
                    <nuxt-link to="/user-details" class="mr-2"
                      >الملف الشخصي</nuxt-link
                    >
                  </li>
                  <li class="my-1 hover:text-red-500 flex items-center">
                    <i class="fas fa-chart-line"></i>
                    <nuxt-link to="/profile" class="mr-2"
                      >لوحة التحكم</nuxt-link
                    >
                  </li>
                  <li class="hover:text-red-500 flex items-center">
                    <i class="fas fa-sign-out-alt"></i>
                    <nuxt-link class="mr-2" to="/login" @click="isAuth = false">
                      تسجيل الخروج
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="navbar-level-2-control-item group">
              <nuxt-link to="/cart" class="flex"
                ><i class="fas fa-shopping-cart pl-1 mt-1"></i>
                <p class="hidden lg:flex">السلة</p>
                <div
                  class="
                    w-4
                    h-4
                    rounded-full
                    bg-red-500
                    text-center text-xs text-white
                    absolute
                    -mr-2.5
                    group-hover:bg-white group-hover:text-red-500
                    transition-all
                    duration-200
                    font-sans
                  "
                >
                  {{ cartItemsCount }}
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-level-2-search">
        <div class="navbar-level-2-div">
          <i
            class="navbar-level-2-search-icon fas fa-search fa-lg md:fa-sm"
          ></i>
          <input
            type="text"
            class="navbar-level-2-search-input"
            placeholder="ابحث عن افضل الملحقات الرقمية"
          />
        </div>
      </div>
      <div class="navbar-level-2-logo">
        <h1
          class="navbar-level-2-logo-h1"
          title="مؤلف - لبيع و شراء الملحقات الرقمية"
        >
          <nuxt-link to="/"> مُـؤَلِّـفْ </nuxt-link>
        </h1>
      </div>
    </div>
    <!-- /* Navbar Mid Bottom Level */ -->
    <div class="navbar-level-3">
      <div class="navbar-level-3-div">
        <button
          class="font-bold flex xl:hidden lg:hidden"
          @click="toggleSection"
        >
          <i class="fas fa-bars pt-1 pl-2"></i> الأقسام
        </button>
        <ul
          class="
            lg:flex
            xl:flex
            my-4
            mx-4
            xl:my-0 xl:mx-0
            lg:mx-0 lg:my-0
            md:mx-0 md:my-0
            border border-red-500
            rounded-lg
            bg-gray-900
            xl:border-none xl:bg-none
            lg:border-none lg:bg-none
            md:border-none md:bg-none
          "
          :class="{ hidden: openSection }"
        >
          <li
            class="navbar-level-3-item"
            v-for="section in sectionData"
            :key="section.id"
            @click="selected = section.id"
            :class="
              selected == section.id
                ? 'navbar-level-3-item-focus'
                : 'navbar-level-3-item'
            "
          >
            <a href="#">{{ section.title }}</a>
          </li>
          <!--   <li class="navbar-level-3-item-focus">
            <a href="#">برامج و تطبيقات</a>
          </li>
          <li class="navbar-level-3-item">
            <a href="#">تصميم غرافيك </a>
          </li>
          <li class="navbar-level-3-item">
            <a href="#">فيديو مونتاج</a>
          </li>
          <li class="navbar-level-3-item">
            <a href="#">نماذج ثلاثية الأبعاد</a>
          </li>
          <li class="navbar-level-3-item">
            <a href="#">ملحقات مكتبية</a>
          </li>
          <li class="navbar-level-3-item">
            <a href="#">مؤثرات صوتية</a>
          </li> -->
        </ul>
      </div>
    </div>
    <!-- /* Navbar bottom Level */ -->
    <div class="navbar-level-4">
      <div class="navbar-level-4-div">
        <button
          class="font-bold flex xl:hidden lg:hidden"
          @click="toggleCategory"
        >
          <i class="fas fa-bars pt-1 pl-2"></i> الأصناف
        </button>
        <ul
          class="
            lg:flex
            xl:flex
            my-4
            mx-4
            xl:my-0 xl:mx-0
            lg:mx-0 lg:my-0
            md:mx-0 md:my-0
            border border-red-500
            rounded-lg
            bg-gray-800
            xl:border-none xl:bg-none
            lg:border-none lg:bg-none
            md:border-none md:bg-none
          "
          :class="{ hidden: openCategory }"
        >
          <li class="navbar-level-4-item">
            <a href="#">ذكاء اصطناعي</a>
          </li>

          <li
            class="navbar-level-4-item"
            @mouseenter="activeDropdown = false"
            @mouseleave="activeDropdown = true"
          >
            <a href="#">مواقع ويب</a>
            <div
              class="
                bg-gray-800
                mt-0.5
                absolute
                rounded-b-md
                text-gray-200
                px-4
                z-50
                py-2
              "
              @mouseenter="activeDropdown = false"
              :class="{ hidden: activeDropdown }"
            >
              <ul class="px-4">
                <li class="py-1 hover:text-red-500">
                  <a href="#">مدونات</a>
                </li>
                <li class="py-1 hover:text-red-500">
                  <a href="#">متاجر الكترونية</a>
                </li>
                <li class="py-1 hover:text-red-500">
                  <a href="#">مواقع فنادق</a>
                </li>
                <li class="py-1 hover:text-red-500">
                  <a href="#">تطبيقات مطاعم</a>
                </li>
                <li class="py-1 hover:text-red-500">
                  <a href="#">مواقع شات</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="navbar-level-4-item">
            <a href="#">اندرويد - ايفون</a>
          </li>
          <li class="navbar-level-4-item"><a href="#">سطح مكتب</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as axios from 'axios'

export default {
  name: 'navbar-component',
  data() {
    return {
      activeDropdown: true,
      openSection: true,
      openCategory: true,
      sectionData: [],
      selected: undefined,
    }
  },
  props: {
    cartItemsCount: {
      type: Number,
      default: 3,
    },
    isAuth: { type: Boolean, default: true },
  },
  created() {
    this.getAllSection()
  },
  methods: {
    async getAllSection() {
      const section = await axios.get(
        `http://localhost:5000/api/v1/layout/section`
      )
      this.sectionData = section.data.data
    },
    defaultSectionSelection() {
      var selection = this.sectionData[0]
      this.selected = selection.id
    },
    toggleSection() {
      this.openSection = !this.openSection
    },
    toggleCategory() {
      this.openCategory = !this.openCategory
    },
  },
}
</script>

<style>
/* Navbar */
.navbar {
  @apply w-full mb-6;
}

/* Navbar Top Level */
.navbar-level-1 {
  @apply w-full h-10 bg-gray-800;
}
.navbar-level-1-div {
  @apply list-none text-gray-300 font-bold py-2 px-12;
}

.navbar-level-1-item {
  @apply inline-block pl-4;
}

/* Navbar Mid Top Level */
.navbar-level-2 {
  @apply w-full h-16 bg-gray-900 grid grid-cols-3 gap-4;
}

.navbar-level-2-logo {
  @apply flex justify-end text-4xl font-bold px-8 py-5 text-red-500 xl:text-4xl lg:text-2xl;
}
.navbar-level-2-logo-h1 {
  @apply transition-all duration-1000 font-bold;
}
.navbar-level-2-search {
  @apply flex justify-center text-gray-50 py-4 max-h-[84px];
}
.navbar-level-2-div {
  @apply rounded-xl bg-gray-800 w-full h-full;
}
.navbar-level-2-search-input {
  @apply rounded-xl outline-none py-3 bg-gray-800 font-bold w-9/12 md:w-7/12 sm:w-full text-xl ml-12;
}
.navbar-level-2-search-icon {
  @apply rounded-xl text-gray-400 py-4 px-4 hidden xl:inline-flex lg:inline-flex md:inline-flex;
}

.navbar-level-2-control {
  @apply flex justify-start text-red-500 py-4;
}
.navbar-level-2-control-div {
  @apply list-none text-gray-300 text-xl py-3 font-bold px-5;
}

.navbar-level-2-control-ul {
  @apply space-x-4;
}

.navbar-level-2-control-item {
  @apply inline-block pr-2 xl:pr-8 lg:pr-8 md:pr-6 sm:pr-4 hover:text-red-500 transition-colors;
}

/* Navbar Mid Bottom Level */
.navbar-level-3 {
  @apply w-full h-16 bg-gray-900;
}
.navbar-level-3-div {
  @apply flex justify-center list-none text-gray-100 py-5 font-bold text-xl px-4 space-x-12;
}
.navbar-level-3-item {
  @apply inline-block px-5 hover:text-red-500 transition-colors;
}
.navbar-level-3-item-focus {
  @apply inline-block px-5 hover:text-red-500 transition-colors text-red-500;
}

/* Navbar Bottom Level */
.navbar-level-4 {
  @apply w-full h-10 bg-gray-800;
}
.navbar-level-4-div {
  @apply flex justify-center list-none text-gray-300  font-bold text-lg px-12 pt-1;
}
.navbar-level-4-item {
  @apply inline-block px-3 hover:text-red-500  rounded-lg py-0.5;
}
.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid rgb(239, 68, 68);
}
</style>
