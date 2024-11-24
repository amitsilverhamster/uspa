<template>
    <Disclosure as="nav" class="tw-bg-white-800 tw-border" v-slot="{ open }">
        <div class=" tw-mx-auto tw-max-w-8xl tw-px-2 sm:tw-px-6 lg:tw-px-8">
            <div class="tw-relative tw-flex tw-h-16 tw-items-center tw-justify-between">
                <div class="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center lg:tw-hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="tw-relative tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2 tw-text-gray-400 hover:tw-bg-gray-700 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-white">
                        <span class="tw-absolute -tw-inset-0.5" />
                        <span class="tw-sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="tw-block tw-size-6" aria-hidden="true" />
                        <XMarkIcon v-else class="tw-block tw-size-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div
                    class="tw-flex tw-flex-1 tw-items-center tw-justify-center sm:tw-items-stretch sm:tw-justify-start">
                    <div class="tw-flex tw-shrink-0 tw-items-center tw-hidden lg:tw-block sm:tw-ml-6">
                        <img class="tw-h-10 tw-w-auto" src="../assets/img/USPA_Logo_Single.svg" alt="USPA" />
                    </div>
                    <div class="tw-hidden lg:tw-block sm:tw-ml-6">
                        <div class="tw-flex ">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                                :class="[item.current ? 'tw-border-b-4 tw-text-dark  tw-border-red-600  ' : 'tw-text-gray-500 hover:tw-border-b-4  hover:tw-text-dark', ' tw-px-2 tw-py-2 tw-text-sm tw-font-small tw-border-red-600']"
                                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                        </div>
                    </div>
                </div>
                <div
                    class="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2 sm:tw-static sm:tw-inset-auto sm:tw-ml-6 sm:tw-pr-0">
                    <!-- main Site -->
                    <div class="tw-relative tw-ml-3">
                        <div class="tw-flex tw-flex-1">
                            <div class="tw-flex tw-shrink-0 tw-items-end tw-pe-4">
                                <img class="tw-h-8 tw-w-auto" src="../assets/img/USPA_Logo_Single.svg" alt="USPA" />
                            </div>
                            <div class="tw-flex  ">
                                <a href="" class="tw-text-sm tw-text-gray-500 tw-py-2">MAIN SITE (USPOLO.ORG)</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <DisclosurePanel class="lg:tw-hidden">
            <div class="tw-space-y-1 tw-px-2 tw-pb-3 tw-pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                    :class="[item.current ? 'tw-border-b-4 tw-text-dark  tw-border-red-600' : 'tw-text-gray-500 hover:tw-border-b-4 hover:tw-text-dark', 'tw-block  tw-px-3 tw-py-2 tw-text-base tw-font-medium tw-border-red-600']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Profile', href: '#', current: true },
    { name: 'Registration', href: '#', current: false },
    { name: 'Member Benefits', href: '#', current: false },
    { name: 'E-Learning', href: '#', current: false },
    { name: 'Search', href: '#', current: false },
    { name: 'TOURN DATA', href: '#', current: false },
    { name: 'HCP VOTING', href: '#', current: false },
    { name: 'DELEGATE INFO', href: '#', current: false },
    { name: 'GOVERNOR INFO', href: '#', current: false },
    { name: 'LOGOUT', href: '#', current: false },



]
</script>