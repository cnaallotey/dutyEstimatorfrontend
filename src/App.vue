<template>
  <div>
    <div
      class="font-sans flex pt-5 md:pt-32 pb-10 md:pb-10 justify-center hero shadow-md"
    >
      <div class="pr-5 pl-5 text-center max-w-2xl space-y-10 md:space-y-10">
        <div
          class="md:text-6xl text-5xl font-semibold tracking-tight leading-snug md:leading-tight text-white"
        >
          Calculate your Vehicle Duty
        </div>
        <div class="text-sm text-white font-normal mt-4 tracking-loose">
          Get an
          <span class="font-bold text-md">Estimated Import Duty</span> For Your Vehicle
        </div>
        <div
          class="flex space-x-2 md:-mx-5 py-2 rounded-md bg-white border-gray-200 hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
        >
          <input
            type="text"
            id="password"
            class="w-full pl-3 pr-10 py-2 focus:outline-none text-lg text-black font-normal k"
            placeholder="Enter your VIN..."
          />
          <button
            class="block px-4 font-medium text-lg text-center text-blue-900 leading-0 focus:outline-none hover:text-gray-900 transition-colors"
            @click.prevent="showhome = !showhome"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @click.prevent="togglehome()"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex flex-col w-full items-center space-y-3 md:flex-row justify-between h-auto relative md:space-x-2 md:space-y-0"
        >
          <div class="flex text-sm text-white font-medium space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="tracking-tight font-normal">Official data from ICUMS</p>
          </div>
          <div class="flex text-sm text-white font-medium space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="tracking-tight font-normal">Most recent Duty Payments</p>
          </div>
          <div class="flex text-sm text-white font-medium space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="tracking-tight font-normal">Accurate Vehicle Information</p>
          </div>
        </div>
      </div>
    </div>
    <!-- component -->
    <div class="max-w-screen-lg mx-auto">
      <main class="mt-10">
        <!-- <Vindetail v-if="!showhome" />
        <Homepage v-if="showhome" />-->
        <carreport />
      </main>
    </div>
    <div class="sticky bottom-10 left-0 mb-4 mr-4 z-10">
      <div class="flex flex-row-reverse space-x-4 items-center">
        <a
          title="Share our Pageon Twitter"
          href="https://twitter.com/intent/tweet?text=Visit Ghanadutestimator.com to check your Vehicle Import Duty"
          target="_blank"
          class="block w-10 h-10 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 ml-2"
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            src="./assets/twitter.svg"
          />
        </a>
        <a
          title="Share our Page on Whatsapp"
          href="whatsapp://send?text=Visit Ghanadutestimator.com to check your Vehicle Import Duty"
          target="_blank"
          class="block w-100 h-10 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            src="./assets/whatsapp.svg"
          />
        </a>
        <p class="text-md font-semibold tracking-tight text-gray-700 hidden lg:contents">
          Please share our Page
        </p>
      </div>
    </div>
    <footer>
      <div
        class="p-5 bg-gradient-to-l from-black to-gray-900 shadow-md flex justify-center mt-10"
      >
        <h1 class="text-sm font-thin text-white">copyright AppGharage©, 2021</h1>
      </div>
    </footer>
  </div>
</template>

<script>
import Homepage from "./components/homepage.vue";
import Vindetail from "./components/vindetail.vue";
import duty from "./components/duty.vue";
import carreport from "./components/carreport.vue";

export default {
  components: { Homepage, Vindetail, duty, carreport },
  data() {
    return {
      showhome: true,
      showvin: false,
    };
  },
  methods: {
    togglehome() {
      this.showhome = !showhome;
      this.showvin = !showvin;
    },
  },
};
</script>
<style>
.hero {
  background: linear-gradient(
      rgba(9, 9, 220, 0.45),
      rgba(9, 9, 220, 0) 45%,
      rgba(9, 9, 220, 0) 80%,
      rgba(9, 9, 220, 0.25)
    ),
    linear-gradient(0.3turn, rgb(0, 89, 179), rgb(0, 128, 255) 30%, rgb(85, 0, 255));
}

.new_hero {
  background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);
}
</style>
