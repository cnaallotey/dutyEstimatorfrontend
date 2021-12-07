<template>
  <div>
    <div class="max-w-screen-lg mx-auto">
      <template>
        <div>
          <div
            class="flex flex-col items-center md:flex-row mb-10 md:pl-0 space-x-5 mx-5 lg:mx-0"
          >
            <div
              class="flex flex-col md:flex-row items-center md:items-end flex-1 w-full space-x-0 md:space-x-4 space-y-4 md:space-y-0"
            >
              <img src="../assets/resizer.jpg" class="w-64 mx-auto md:w-64" alt="" />
              <div
                class="text-center mx-auto w-full items-center justify-center text-white py-4 bg-blue-600 lg:rounded-none shadow-lg"
              >
                <div class="text-2xl font-semibold tracking-wide uppercase">
                  2013 Honda Accord
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-blue-100 rounded-lg px-10 py-10 md:pb-10 my-5 mx-5 lg:mx-0 flex flex-col justify-center items-center"
          >
            <div class="flex flex-col items-center mb-5 md:mb-0">
              <h1
                class="font-bold text-3xl text-gray-900 text-center tracking-tight flex flex-col md:flex-row items-center mb-2"
              >
                <span class="mr-2"
                  ><img src="../assets/shipping.svg" class="w-10" alt=""
                /></span>
                Import Duty Range
              </h1>
              <p
                class="font-medium text-xs text-gray-500 mb-10 tracking-tight text-center"
              >
                Approximate price if you were to import this car to Ghana
              </p>
            </div>
            <div
              class="flex flex-col md:flex-row items-end justify-around space-y-10 md:space-y-0"
            >
              <div>
                <div class="hidden md:flex flex-row justify-between py-1 px-10">
                  <p class="font-semibold text-xs text-yellow-500">Low</p>
                  <p class="font-semibold text-xs text-green-500">Average</p>
                  <p class="font-semibold text-xs text-red-500">High</p>
                </div>
                <div
                  class="w-full relative h-7 bg-gradient-to-r from-yellow-500 via-green-500 to-red-500 rounded-full hidden md:flex"
                ></div>
                <div
                  class="relative flex flex-col md:flex-row md:justify-around w-full space-y-10 md:space-y-0 -mt-4 z-10"
                >
                  <div
                    class="px-5 py-10 flex flex-col items-center justify-center space-y-5 bg-white shadow-lg hover:shadow-xl cursor-pointer rounded-3xl mx-5"
                  >
                    <div class="-mt-14">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 bg-white rounded-full text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                      <p class="font-bold text-2xl text-yellow-500">$2,600</p>
                      <p
                        class="text-xs font-semibold text-gray-500 tracking-tight text-center"
                      >
                        Minimum Duty for the 2021 Honda Accord
                      </p>
                    </div>
                  </div>
                  <div
                    class="px-5 py-10 flex flex-col items-center justify-center space-y-5 bg-white shadow-lg hover:shadow-xl cursor-pointer rounded-3xl mx-5"
                  >
                    <div class="-mt-14">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 bg-white rounded-full text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                      <p class="font-bold text-2xl text-green-500">$3,800</p>
                      <p
                        class="text-xs font-semibold text-gray-500 tracking-tight text-center"
                      >
                        Average Duty for the 2021 Honda Accord
                      </p>
                    </div>
                  </div>
                  <div
                    class="px-5 py-10 flex flex-col items-center justify-center space-y-5 bg-white shadow-md hover:shadow-xl cursor-pointer rounded-3xl mx-5"
                  >
                    <div class="-mt-14">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 bg-white rounded-full text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                      <p class="font-bold text-2xl text-red-500">$6,340</p>
                      <p
                        class="text-xs font-semibold text-gray-500 tracking-tight text-center"
                      >
                        Maximum Duty for the 2021 Honda Accord
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="px-5 py-10 flex flex-col items-center justify-center space-y-5 bg-white shadow-lg hover:shadow-xl cursor-pointer rounded-3xl mx-5"
                >
                  <div class="-mt-14">
                    <img src="../assets/car.png" class="w-32" alt="" />
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="font-bold text-2xl text-blue-500">$4,300</p>
                    <p
                      class="text-xs font-semibold text-gray-500 tracking-tight text-center"
                    >
                      Common Duty for the 2021 Honda Accord
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-0 md:px-0 my-5 md:m-0">
            <div
              class="flex flex-wrap -mx-3 overflow-hidden p-5 md:p-0 lg:mb-10 cursor-pointer"
            >
              <div
                class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6"
              >
                <!-- Column Content -->
                <div
                  class="flex p-5 flex-col justify-start items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg hover:border hover:border-blue-400"
                >
                  <img
                    src="../assets/odometer1.svg"
                    class="w-20 p-3 bg-white rounded-full"
                    alt=""
                  />
                  <p class="font-semibold text-sm text-gray-500 text-center">Odometer</p>
                  <p
                    class="text-center font-semibold text-xs text-red-600 tracking-tight"
                  >
                    3 problems Found
                  </p>
                </div>
              </div>

              <div
                class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6"
              >
                <!-- Column Content -->
                <div
                  class="flex p-5 flex-col justify-start items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg hover:border hover:border-blue-400"
                >
                  <img
                    src="../assets/seatbelt1.svg"
                    class="w-20 p-3 bg-white rounded-full"
                    alt=""
                  />
                  <p class="font-semibold text-sm text-gray-500 text-center">
                    Open Safety Recalls
                  </p>
                  <p
                    class="text-center font-semibold text-xs text-red-600 tracking-tight"
                  >
                    2 problems Found
                  </p>
                </div>
              </div>

              <div
                class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6"
              >
                <!-- Column Content -->
                <div
                  class="flex p-5 flex-col justify-start h-full items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm rounded-lg hover:border hover:border-blue-400"
                >
                  <img
                    src="../assets/accidents.svg"
                    class="w-20 p-3 bg-white rounded-full"
                    alt=""
                  />
                  <p class="font-semibold text-sm text-gray-500 text-center">Accidents</p>
                  <p
                    class="text-center font-semibold text-xs text-red-600 tracking-tight"
                  >
                    3 problems Found
                  </p>
                </div>
              </div>

              <div
                class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6"
              >
                <!-- Column Content -->
                <div
                  class="flex p-5 flex-col justify-start items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg hover:border hover:border-blue-400"
                >
                  <img
                    src="../assets/road.svg"
                    class="w-20 p-3 bg-white rounded-full"
                    alt=""
                  />
                  <p class="font-semibold text-sm text-gray-500">Mileage</p>
                  <p class="text-center font-bold text-xs text-blue-500 tracking-tight">
                    4,495 miles
                    <span class="text-gray-900 font-semibold"
                      >(Last odometer reading)</span
                    >
                  </p>
                </div>
              </div>

              <div
                class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6"
              >
                <!-- Column Content -->
                <div
                  class="flex p-5 flex-col justify-start items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg hover:border hover:border-blue-400"
                >
                  <img
                    src="../assets/car-sale1 1.svg"
                    class="w-20 p-3 bg-white rounded-full"
                    alt=""
                  />
                  <p class="font-semibold text-sm text-gray-500 text-center">
                    Sale History
                  </p>
                  <p class="text-center font-bold text-xs text-blue-500 tracking-tight">
                    10 <span class="font-semibold text-gray-900"> sales found</span>
                  </p>
                </div>
              </div>

              <div
                class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6"
              >
                <!-- Column Content -->
                <div
                  class="flex p-5 flex-col justify-start items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg hover:border-2 hover:border-blue-400"
                >
                  <img
                    src="../assets/group1.svg"
                    class="w-20 p-3 bg-white rounded-full"
                    alt=""
                  />
                  <p class="font-semibold text-sm text-gray-500 text-center">
                    Owners History
                  </p>
                  <p
                    class="font-semibold text-xs text-gray-900 tracking-tight text-center"
                  >
                    2+ Owners
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="flex flex-col w-full">
              <div class="px-5 md:px-0 mb-2">
                <h3 class="text-2xl font-semibold tracking-tight text-gray-900">
                  Vehicle Information
                </h3>
              </div>
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="align-middle inline-block min-w-full sm:px-6 lg:px-4">
                  <div class="overflow-hidden px-4">
                    <table class="min-w-full divide-y divide-gray-200 border-b">
                      <tbody class="">
                        <tr class="py-4">
                          <td class="border p-4">
                            <span>Vin</span><br />
                            <span class="font-bold py-4">Not Applicable</span>
                          </td>
                          <td class="border p-4">
                            <span class="">Make</span><br />
                            <span class="font-bold py-4">Not Applicable</span>
                          </td>
                          <td class="border p-4">
                            <span class="">Model</span><br />
                            <span class="font-bold py-4">Not Applicable</span>
                          </td>
                          <td class="border p-4">
                            <span>Year</span><br />
                            <span class="font-bold py-4">Not Applicable</span>
                          </td>
                          <td class="border p-4">
                            <span class="">Drive type</span><br />
                            <span class="font-bold py-4">Not Applicable</span>
                          </td>
                        </tr>
                        <tr class="py-4 mt-4">
                          <td class="border p-4">
                            <span class="">Style/Body</span><br />
                            <span class="font-bold py-4">Not Applicable</span>
                          </td>
                          <td class="border p-4">
                            <span class="">Engine</span><br />
                            <span class="font-bold py-4">Not Applicable</span>
                          </td>
                          <td class="border p-4" colspan="2">
                            <span class="">Manufacturer</span><br />
                            <span class="font-bold py-4"> Not Applicable</span>
                          </td>
                          <td class="border p-4">
                            <span>Age</span><br />
                            <span class="font-bold py-4"> Not Applicable</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 px-5 md:px-0">
            <div class="space-x-2 flex flex-col items-start mb-2 md:px-0">
              <div class="">
                <h3 class="text-2xl font-semibold tracking-tight text-gray-900">
                  Duty per Trim
                </h3>
              </div>
            </div>
            <table class="w-full block md:table border md:mx-0">
              <thead class="block md:table-header-group">
                <tr
                  class="block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative bg-gray-100 border-b-2"
                >
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Trim Level
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    HDV
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Origin Code
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    CIF NCY
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Total Tax
                  </th>
                </tr>
              </thead>
              <tbody class="block md:table-row-group font-medium text-gray-500">
                <tr class="bg-white block md:table-row border-b-2 md:border-b-0">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left block md:table-cell tracking-tight"
                  >
                    <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span
                    >SPORT
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span
                    >CA
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap5 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
                    92,749.8
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left block md:table-cell font-bold text-blue-500"
                  >
                    <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
                    32,311.7
                  </td>
                </tr>
                <tr class="bg-gray-100 block md:table-row">
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span
                    >SPORT
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span
                    >CA
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
                    92,749.8
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left block md:table-cell font-bold text-blue-500"
                  >
                    <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
                    32,311.7
                  </td>
                </tr>
                <tr class="bg-white block md:table-row">
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span
                    >SPORT
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span
                    >CA
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
                    92,749.8
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left block md:table-cell font-bold text-blue-500"
                  >
                    <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
                    32,311.7
                  </td>
                </tr>
                <tr class="bg-gray-100 block md:table-row">
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span
                    >SPORT
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span
                    >CA
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
                    92,749.8
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left block md:table-cell font-bold text-blue-500"
                  >
                    <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
                    32,311.7
                  </td>
                </tr>
                <tr class="bg-white block md:table-row">
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span
                    >SPORT
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span
                    >CA
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
                    92,749.8
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left block md:table-cell font-bold text-blue-500"
                  >
                    <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
                    32,311.7
                  </td>
                </tr>
                <tr class="bg-gray-100 block md:table-row">
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span
                    >SPORT
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span
                    >CA
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
                    92,749.8
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-left block md:table-cell font-bold text-blue-500"
                  >
                    <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
                    32,311.7
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex flex-row items-center justify-end -mr-7 -mt-5">
              <p class="text-xs font-semibold text-gray-500">source:</p>
              <img src="../assets/icums.png" class="w-32 -ml-7" alt="" />
            </div>
          </div>
        </div>
      </template>
    </div>
    <!--print icon-->
    <div class="sticky bottom-10 left-0 mb-4 mr-4 z-10 max-w-screen-xl mx-auto">
      <div class="flex flex-row-reverse space-x-4 items-center">
        <div class="flex flex-col md:flex-row items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 bg-gray-500 rounded-full p-2 text-white mr-2 transform hover:scale-110 hover:bg-gray-600 transition ease-linear delay-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click.prevent="printPage()"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          <p
            class="text-md font-semibold tracking-tight text-gray-700 hidden lg:contents"
          >
            Print Page
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    printPage: function () {
      window.print();
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
