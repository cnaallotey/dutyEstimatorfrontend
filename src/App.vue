<template>
  <div>
    <div
      class="font-sans flex pt-5 md:pt-32 pb-10 md:pb-10 justify-center hero shadow-md"
    >
      <div class="pr-5 pl-5 text-center max-w-2xl space-y-10 md:space-y-10">
        <div class="md:text-6xl text-5xl font-semibold tracking-tight text-white">
          Car Duty Estimater
        </div>
        <div class="text-sm text-white font-normal mt-4 tracking-normal">
          Get the
          <span class="font-bold text-md">Import Duty Estimate</span> For Your Automobile
        </div>
        <form action="">
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
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </form>

        <div
          class="flex flex-col w-full items-center space-y-3 md:flex-row justify-between h-auto relative md:space-x-3 md:space-y-0"
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
            <p class="tracking-tight font-normal">Most recent payments</p>
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
            <p class="tracking-tight font-normal">Accurate Automobile Information</p>
          </div>
        </div>
      </div>
    </div>
    <!-- component -->
    <div class="max-w-screen-lg mx-auto">
      <main class="mt-10">
        <div class="md:mb-0 w-full mx-auto relative">
          <div class="pl-3 lg:px-0 border-l-4 py-2 border-blue-500">
            <h2
              class="text-2xl font-extrabold text-gray-800 leading-tight ml-3 tracking-tight"
            >
              What is a Vehicle Identification Number (VIN)?
            </h2>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row lg:space-x-12">
          <div class="px-4 lg:px-0 mt-10 text-gray-800 text-lg leading-relaxed w-full">
            <p class="ml-3 tracking-tight">
              The car's vehicle identification number (VIN) is the identifying code for a
              SPECIFIC automobile. The VIN serves as the car's fingerprint, as no two
              vehicles in operation have the same VIN. A VIN is composed of 17 characters
              (digits and capital letters) that act as a unique identifier for the
              vehicle. A VIN displays the car's unique features, specifications and
              manufacturer. The VIN can be used to track recalls, registrations, warranty
              claims, thefts and insurance coverage.
            </p>
            <div
              class="-ml-4 lg:ml-0 pl-4 lg:px-0 border-l-4 py-2 mb-10 border-blue-500 mt-10"
            >
              <h2 class="text-2xl text-gray-800 font-extrabold ml-3 tracking-tight">
                VIN Decode Explained
              </h2>
            </div>
            <img class="mx-auto" src="./assets/vin.jpg" alt="" />
            <div
              class="-ml-4 lg:ml-0 pl-4 lg:px-0 border-l-4 py-2 border-blue-500 mt-10 mb-10"
            >
              <h2 class="text-2xl text-gray-900 font-extrabold ml-3 tracking-tight">
                Where can I locate the VIN of a car?
              </h2>
            </div>

            <p class="ml-3 text-gray-800 tracking-tight">
              The VIN can be found by looking at the dashboard on the driver's side of the
              vehicle. The easiest way to view it is to stand outside the vehicle on the
              driver's side and look at the corner of the dashboard where it meets the
              windshield. If the VIN cannot be found there, open the driver's side door
              and look at the door post (where the door latches when it is closed). It is
              likely that the VIN will also be displayed in this location.
            </p>

            <img src="./assets/VIN-Locations.jpg" alt="Vin Location on the car" />
          </div>
        </div>
      </main>
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

<script></script>
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
</style>
