<template>
  <div>
    <img
      src="../assets/Honda.png"
      class="h-64 mx-auto -mt-10 -mb-10 contents md:hidden"
      alt=""
    />
    <div class="flex flex-col items-center">
      <img src="../assets/Honda.png" class="h-64 mx-auto -mt-10 -mb-10" alt="" />
      <div
        class="text-center mt-12 mx-auto w-full items-center justify-center text-white py-4 bg-blue-600 lg:rounded-md shadow-lg"
      >
        <div class="text-2xl font-semibold tracking-wide uppercase">
          2013 Honda Accord
        </div>
      </div>
    </div>

    <div class="px-4 lg:px-0 mt-10 w-full lg:w-full mx-auto">
      <div class="">
        <div>
          <div class="w-full mt-4">
            <div class="flex flex-col w-full">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-4">
                  <div class="overflow-hidden p-4">
                    <table class="min-w-full divide-y divide-gray-200">
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
        </div>
      </div>
    </div>
    <div class="w-full mt-10 space-y-3 flex flex-col items-center mb-10">
      <h1 class="text-2xl font-semibold tracking-normal">Your Duty Estimate is Ready</h1>
      <button
        class="px-12 py-2 bg-blue-600 hover:bg-blue-800 hover:underline hover:animate-none animate-bounce shadow-lg text-white text-lg rounded-md tracking-wide"
      >
        Click to View
      </button>
    </div>
    <duty />

    <div>
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium text-gray-900">More Information</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500"></p>
      </div>
      <div class="border border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Manufacturer</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Plant Company Name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Vehicle Type</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Doors</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Seat Belts Type</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Engine Displacement (CI)</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Engine Displacement (CC)</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Fuel Type</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Engine Stoke Cycles</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Engine Model</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Gross Vehicle Weight Rating From
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Number of Seats</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Steering Location</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Series</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Transmission Style</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Axles</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Brake System Description</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Curtain Air Bag Locations</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Wheel Base Type</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Body Class</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Not Applicable
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import duty from "./duty";
export default {
  components: { duty },
};
</script>
