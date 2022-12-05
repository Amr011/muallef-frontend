<template>
  <div class="footer-main">
    <div class="footer-content-top">
      <div class="footer-content-top-right">
        <a href="#">مؤلّف</a>
      </div>
      <div class="footer-content-top-left">
        <button class="footer-content-top-right-btn rounded-lg">
          ابدأ بالبيع
        </button>
      </div>
    </div>

    <div class="footer-content-main">
      <div class="">
        <p class="footer-content-title">منتجاتنا</p>
        <ul class="footer-content-ul">
          <li>
            <a href="#" class="footer-content-url"> مدونة مؤلّف </a>
          </li>
          <li>
            <a href="#" class="footer-content-url"> موقع وثّقلي </a>
          </li>
          <li>
            <a href="#" class="footer-content-url"> موقع وظّف احلا مؤلّف </a>
          </li>
          <li>
            <a href="#" class="footer-content-url"> مؤسس الموقع عمرو ابوراس </a>
          </li>
        </ul>
      </div>
      <div class="">
        <p class="footer-content-title">سياسة الخصوصية</p>
        <ul class="footer-content-ul">
          <li>
            <a href="#" class="footer-content-url"> نظام التراخيض </a>
          </li>
          <li>
            <a href="#" class="footer-content-url"> بوابات الدفع الإلكتروني </a>
          </li>
          <li>
            <a href="#" class="footer-content-url"> حقوق الملكية </a>
          </li>
          <li>
            <a href="#" class="footer-content-url"> الدفع الإلكتروني </a>
          </li>
        </ul>
      </div>
      <div class="">
        <p class="footer-content-title">من نحن</p>
        <ul class="footer-content-ul">
          <li>
            <a href="#" class="footer-content-url"> تواصل معنا </a>
          </li>
          <li>
            <a href="#" class="footer-content-url"> نبذة عن مؤسس المنصة </a>
          </li>
          <li>
            <a href="#" class="footer-content-url"> الأسئلة الأكثر شيواعاً </a>
          </li>
          <li>
            <a href="#" class="footer-content-url"> لماذا مؤلّف </a>
          </li>
        </ul>
      </div>
      <div class="">
        <p class="footer-content-title">مواقع التواصل الإجتماعي</p>
        <ul class="footer-content-ul">
          <li class="footer-content-media">
            <div class="footer-content-media-item">
              <a href="#" class="footer-content-media-item-url"
                ><i class="fab fa-facebook fa-lg py-1"></i
              ></a>
            </div>
            <div class="footer-content-media-item">
              <a href="#" class="footer-content-media-item-url"
                ><i class="fab fa-twitter fa-lg py-1"></i
              ></a>
            </div>
            <div class="footer-content-media-item">
              <a href="#" class="footer-content-media-item-url"
                ><i class="fab fa-instagram fa-lg py-1"></i
              ></a>
            </div>
            <div class="footer-content-media-item">
              <a href="#" class="footer-content-media-item-url"
                ><i class="fab fa-youtube fa-lg py-1"></i
              ></a>
            </div>
            <div class="footer-content-media-item">
              <a href="#" class="footer-content-media-item-url"
                ><i class="fab fa-discord fa-lg py-1"></i
              ></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-extend py-2 flex justify-center bg-gray-800">
      جميع الحقوق محفوظة 2021©
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-component',
}
</script>

<style>
.footer-main {
  @apply w-full bg-gray-900 text-white mt-0;
}
.footer-content-top {
  @apply py-8 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-5/6 mx-auto text-red-500;
}
.footer-content-top-right {
  @apply flex justify-start font-bold text-5xl;
}
.footer-content-top-left {
  @apply flex justify-end;
}
.footer-content-top-right-btn {
  @apply border-2 px-10 py-1 text-xl font-bold border-red-500 hover:text-white hover:bg-red-500;
}
.footer-content-main {
  @apply grid grid-cols-1 pr-10 xl:grid-cols-4 lg:grid-cols-4 mr-10 xl:mr-2 lg:mr-4 md:mr-6 sm:mr-10 md:grid-cols-2 sm:grid-cols-1 pt-2 pb-20 w-10/12;
}
.footer-content-title {
  @apply text-2xl font-bold pb-4 pt-4;
}
.footer-content-ul {
  @apply text-gray-300;
}
.footer-content-url {
  @apply text-red-500 hover:underline text-lg;
}
.footer-content-media {
  @apply flex my-4 list-none;
}
.footer-content-media-item {
  @apply bg-gray-800 mx-1 px-3 py-2.5 rounded font-bold;
}
.footer-content-media-item-url {
  @apply text-red-500;
}
</style>
