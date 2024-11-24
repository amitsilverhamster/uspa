<template>
   <!-- Banner -->
   <div class=" tw-grid tw-grid-rows-1 tw-grid-cols-1">
      <div class=" bg-color">
         <p class="tw-text-white tw-text-center tw-py-10 tw-text-lg tw-font-medium">Image Banner</p>
      </div>
   </div>
   <!-- renew -->
   <div
      class="tw-bg-red-800 tw-py-4 tw-text-center tw-grid tw-gap-4 sm:tw-grid-cols-1 md:tw-grid-cols-1 lg:tw-grid-cols-2 tw-ps-10">
      <div class="tw-flex tw-justify-center lg:tw-justify-end lg:tw-w-1/">
         <p class="tw-text-white tw-text-lg tw-font-medium">The USPA is now taking 2024 Membership Payments</p>
      </div>
      <div class="tw-flex tw-justify-center lg:tw-justify-center lg:tw-w-1/3">
         <a class="tw-bg-white tw-px-4 tw-py-2 tw-rounded tw-font-medium">Renew</a>
      </div>
   </div>
   <!-- my profile -->
   <div
      class="tw-bg-white tw-py-4  tw-grid tw-gap-4 sm:tw-grid-cols-1 md:tw-grid-cols-1 lg:tw-grid-cols-2 tw-mx-auto tw-max-w-6xl tw-flex tw-justify-center container ">

      <div class="tw-justify-center lg:tw-justify-end tw-border-2 tw-border-cyan-500">
         <div class="tw-grid tw-grid-cols-2 tw-bg-blue-900 tw-py-3">
            <div class="tw-text-start">
               <p class="tw-text-white tw-ms-2 tw-font-medium">MY Profile</p>
            </div>
            <div class="tw-text-end"> <a class="tw-bg-white tw-px-4 tw-py-2 tw-me-2 tw-rounded tw-font-medium ">Update
                  Information</a>
            </div>

         </div>
         <div class=" tw-ms-3 tw-my-3">
            <div class="tw-py-2">
               <p class="tw-text-dark tw-text-sm tw-font-medium tw-underline "><b>Contact Information</b></p>
               <table class="table-fixed">

                  <tbody>
                     <tr>
                        <td class="tw-pe-8 tw-text-dark tw-text-sm tw-font-medium"><b>John Smith</b></td>
                        <td class="tw-text-dark tw-text-sm tw-font-medium tw-px-8"><b>Phone:</b> (123) 456-7890</td>

                     </tr>
                     <tr>
                        <td>1234 Street St</td>
                        <td class="tw-text-dark tw-text-sm tw-font-medium tw-px-8"><b>Email:</b> test@test.com</td>

                     </tr>
                     <tr>
                        <td>Wellington, FL,33414</td>

                     </tr>
                     <tr>

                        <td>United States</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div class="tw-py-2">
               <p class="tw-text-dark tw-text-sm tw-font-medium"><b>Email Preferences:</b></p>
               <p class="tw-text-sm">I want to receive all information USPA sends via e-mail</p>
               <p class="tw-text-sm">I allow my contact information (address, phone, number or email) to be listed on
                  the Member Portal</p>
            </div>
            <div class="tw-py-2">
               <p class="tw-text-dark tw-text-sm tw-font-medium tw-underline "> <b>Membership Information</b></p>
               <table class="table-fixed">

                  <tbody>
                     <tr>
                        <td class="tw-pe-8">Registered Player</td>
                        <td  class="tw-text-dark tw-text-sm tw-font-medium tw-px-8"><b>Outdoor: 1</b> </td>
                        <td class="tw-text-dark tw-text-sm tw-font-medium tw-px-5"><b>Women's Outdoor: 1</b> </td>


                     </tr>
                     <tr>
                        <td>Valid through December 31,2024</td>
                        <td class="tw-text-dark tw-text-sm tw-font-medium tw-px-8"><b>Arena: 2</b></td>
                        <td class="tw-text-dark tw-text-sm tw-font-medium tw-px-5"><b>Women's Arena: 2</b></td>


                     </tr>
                  </tbody>
               </table>
            </div>
            <div>
               <p class="tw-text-dark tw-text-sm tw-font-medium tw-underline "><b>Club Information</b></p>
               <p class="tw-text-sm">Port Mayaca Polo Club</p>
            </div>
         </div>
      </div>
      <div class="tw-justify-center lg:tw-justify-center tw-border-2 lg:tw-mx-8 tw-h-auto lg:tw-max-h-60">
         <div class="tw-grid tw-grid-cols-1 tw-bg-blue-900 tw-py-3">
            <div class="tw-text-start">
               <p class="tw-text-white tw-ms-2 tw-font-medium">Member Quick Links</p>
            </div>
         </div>
         <ul class="tw-list-none tw-text-start  tw-p-5 ">
            <li class="tw-py-1 tw-text-red-800 tw-font-medium">Member Search</li>
            <li class="tw-py-1 tw-text-red-800 tw-font-medium">Umpire Search</li>
            <li class="tw-py-1 tw-text-red-800 tw-font-medium">E-Learning Platform</li>
            <li class="tw-py-1 tw-text-red-800 tw-font-medium">Magazine Archive</li>
            <li class="tw-py-1 tw-text-red-800 tw-font-medium">Contact USPA</li>
            <!-- ... -->
         </ul>
      </div>
   </div>
   <!-- mamber card -->
     <div class="tw-bg-white tw-py-4 tw-text-center tw-grid tw-gap-4 xs:tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-1 lg:tw-grid-cols-1 tw-mx-auto tw-max-w-6xl tw-flex tw-justify-center">
     <div class="tw-border-2 lg:tw-mx-8">
       <div class="tw-grid tw-grid-cols-1 tw-bg-blue-900 tw-py-3">
         <div class="tw-text-start">
           <p class="tw-text-white tw-ms-2 tw-font-medium">Member Card</p>
         </div>
       </div>
       <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-bg-white tw-py-3">
         <div class="tw-mx-2">
           <img src="../../assets/img/mamber-card.webp" class="tw-h-40" alt="USPA" />
           <div class="tw-text-start tw-my-3 tw-ms-9">
             <a class="tw-bg-red-800 tw-text-white tw-px-4 tw-py-2 tw-me-2 tw-rounded tw-font-medium">Update Information</a>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped>
 .bg-color{
      background-color: #7f7f7f;
 }

</style>
