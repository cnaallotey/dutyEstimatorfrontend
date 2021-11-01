<template>
  <div>
    <div
      class="flex flex-col items-center md:flex-row mb-10 md:pl-0 space-x-5 mx-5 lg:mx-0"
    >
      <div
        class="flex flex-col md:flex-row items-center flex-1 w-full space-x-0 md:space-x-4"
      >
        <img src="../assets/Honda.png" class="w-40 mx-auto md:w-32 md:h-32" alt="" />
        <div
          class="text-center mx-auto w-full items-center justify-center text-white py-4 bg-blue-600 lg:rounded-none shadow-lg"
        >
          <div class="text-2xl font-semibold tracking-wide uppercase">
            2013 Honda Accord
          </div>
        </div>
      </div>
    </div>
    <div class="px-0 md:px-0 my-10 md:m-0">
      <div
        class="flex flex-wrap overflow-hidden p-5 md:p-0 lg:mb-10 cursor-pointer mx-5 lg:mx-0"
      >
        <div class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
          <!-- Column Content -->
          <div
            class="flex p-5 flex-col justify-center items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg transition-colors"
          >
            <img
              src="../assets/odometer1.svg"
              class="w-20 p-3 bg-white rounded-full"
              alt=""
            />
            <p class="font-semibold text-sm text-gray-500">Odometer</p>
            <p class="text-center font-semibold text-xs text-red-600 tracking-tight">
              3 problems Found
            </p>
          </div>
        </div>

        <div class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
          <!-- Column Content -->
          <div
            class="flex p-5 flex-col justify-center items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg"
          >
            <img
              src="../assets/seatbelt1.svg"
              class="w-20 p-3 bg-white rounded-full"
              alt=""
            />
            <p class="font-semibold text-sm text-gray-500 text-center">
              Open Safety Recalls
            </p>
            <p class="text-center font-semibold text-xs text-red-600 tracking-tight">
              2 problems Found
            </p>
          </div>
        </div>

        <div class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
          <!-- Column Content -->
          <div
            class="flex p-5 flex-col justify-center h-full items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm rounded-lg"
          >
            <img
              src="../assets/accidents.svg"
              class="w-20 p-3 bg-white rounded-full"
              alt=""
            />
            <p class="font-semibold text-sm text-gray-500">Accidents</p>
            <p class="text-center font-semibold text-xs text-red-600 tracking-tight">
              3 problems Found
            </p>
          </div>
        </div>

        <div class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
          <!-- Column Content -->
          <div
            class="flex p-5 flex-col justify-center items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg"
          >
            <img src="../assets/road.svg" class="w-20 p-3 bg-white rounded-full" alt="" />
            <p class="font-semibold text-sm text-gray-500">Mileage</p>
            <p class="text-center font-bold text-xs text-blue-500 tracking-tight">
              4,495 miles
              <span class="text-gray-900 font-semibold">(Last odometer reading)</span>
            </p>
          </div>
        </div>

        <div class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
          <!-- Column Content -->
          <div
            class="flex p-5 flex-col justify-center items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg"
          >
            <img
              src="../assets/car-sale1.svg"
              class="w-20 p-3 bg-white rounded-full"
              alt=""
            />
            <p class="font-semibold text-sm text-gray-500">Sale History</p>
            <p class="text-center font-bold text-xs text-blue-500 tracking-tight">
              10 <span class="font-semibold text-gray-900"> sales found</span>
            </p>
          </div>
        </div>

        <div class="my-3 px-3 w-1/2 overflow-hidden sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-1/6">
          <!-- Column Content -->
          <div
            class="flex p-5 flex-col justify-center items-center overflow-hidden space-y-2 hover:bg-blue-200 bg-blue-100 hover:shadow-sm h-full rounded-lg"
          >
            <img
              src="../assets/group1.svg"
              class="w-20 p-3 bg-white rounded-full"
              alt=""
            />
            <p class="font-semibold text-sm text-gray-500">Owners History</p>
            <p class="text-center font-semibold text-xs text-gray-900 tracking-tight">
              2+ Owners
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-4">
      <div class="flex flex-col w-full">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-4">
            <div class="overflow-hidden p-4">
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
    <div
      class="bg-blue-100 rounded-lg px-10 py-10 md:pb-10 my-10 mx-5 lg:mx-0 flex flex-col justify-center items-center"
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
        <p class="font-medium text-xs text-gray-500 mb-10 tracking-tight">
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
                <p class="font-bold text-2xl text-yellow-500">$6,600</p>
                <p class="text-xs font-semibold text-gray-500 tracking-tight text-center">
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
                <p class="font-bold text-2xl text-green-500">$6,600</p>
                <p class="text-xs font-semibold text-gray-500 tracking-tight text-center">
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
                <p class="font-bold text-2xl text-red-500">$6,600</p>
                <p class="text-xs font-semibold text-gray-500 tracking-tight text-center">
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
              <p class="font-bold text-2xl text-blue-500">$6,600</p>
              <p class="text-xs font-semibold text-gray-500 tracking-tight text-center">
                Common Duty for the 2021 Honda Accord
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-5 lg:mx-0 white md:pt-5 p-5 md:p-0">
      <div class="space-x-2 flex flex-col items-center mb-5">
        <h1
          class="font-bold text-3xl text-gray-900 text-center tracking-tight flex flex-col md:flex-row items-center"
        >
          Duty Per Trim
        </h1>
      </div>
      <table class="min-w-full block md:table">
        <thead class="block md:table-header-group">
          <tr
            class="block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative bg-gray-100 border-b-2"
          >
            <th
              class="px-5 py-5 text-gray-500 uppercase text-xs font-bold text-left block md:table-cell"
            >
              Trim Level
            </th>
            <th
              class="px-2 py-5 text-gray-500 uppercase text-xs font-bold text-left block md:table-cell"
            >
              HDV
            </th>
            <th
              class="px-2 py-5 text-gray-500 uppercase text-xs font-bold text-left block md:table-cell"
            >
              Origin Code
            </th>
            <th
              class="px-2 py-5 text-gray-500 uppercase text-xs font-bold text-left block md:table-cell"
            >
              CIF NCY
            </th>
            <th
              class="px-2 py-5 text-gray-500 uppercase text-xs font-bold text-left block md:table-cell"
            >
              Total Tax
            </th>
          </tr>
        </thead>
        <tbody class="block md:table-row-group font-semibold text-gray-900">
          <tr class="bg-white block md:table-row">
            <td class="px-2 md:px-5 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span>SPORT
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span>CA
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
              92,749.8
            </td>
            <td class="px-2 py-5 text-left block md:table-cell font-bold text-blue-500">
              <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
              32,311.7
            </td>
          </tr>
          <tr class="bg-gray-100 block md:table-row">
            <td class="px-2 md:px-5 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span>SPORT
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span>CA
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
              92,749.8
            </td>
            <td class="px-2 py-5 text-left block md:table-cell font-bold text-blue-500">
              <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
              32,311.7
            </td>
          </tr>
          <tr class="bg-white block md:table-row">
            <td class="px-2 md:px-5 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span>SPORT
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span>CA
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
              92,749.8
            </td>
            <td class="px-2 py-5 text-left block md:table-cell font-bold text-blue-500">
              <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
              32,311.7
            </td>
          </tr>
          <tr class="bg-gray-100 block md:table-row">
            <td class="px-2 md:px-5 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span>SPORT
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span>CA
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
              92,749.8
            </td>
            <td class="px-2 py-5 text-left block md:table-cell font-bold text-blue-500">
              <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
              32,311.7
            </td>
          </tr>
          <tr class="bg-white block md:table-row">
            <td class="px-2 md:px-5 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span>SPORT
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span>CA
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
              92,749.8
            </td>
            <td class="px-2 py-5 text-left block md:table-cell font-bold text-blue-500">
              <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
              32,311.7
            </td>
          </tr>
          <tr class="bg-gray-100 block md:table-row">
            <td class="px-2 md:px-5 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Trim Level</span>SPORT
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">HDV</span>26,180
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Origin Code</span>CA
            </td>
            <td class="px-2 py-5 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">CIF NCY</span>$
              92,749.8
            </td>
            <td class="px-2 py-5 text-left block md:table-cell font-bold text-blue-500">
              <span class="inline-block w-1/3 md:hidden font-bold">Total Tax</span>$
              32,311.7
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

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
