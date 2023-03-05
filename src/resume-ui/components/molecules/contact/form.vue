<template lang="pug">
.mt-10(class='sm:mt-0')
  .mt-5(class='md:col-span-2 md:mt-0')
    form
      .overflow-hidden(class='sm:rounded-md')
        .px-4.py-5(class='sm:p-6')
          .grid.grid-cols-12.gap-12
            .col-span-12(class='sm:col-span-12')
              label.block.text-sm.font-medium.leading-6.text-gray-900 Your name
              input.mt-2.block.w-full.bg-gray-50.rounded-md.border-0.text-gray-900.shadow-sm.ring-1.ring-inset.ring-gray-300.pl-2(type='text' class='py-1.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6')
            .col-span-12(class='sm:col-span-12')
              label.block.text-sm.font-medium.leading-6.text-gray-900 Email address
              input.mt-2.block.w-full.bg-gray-50.rounded-md.border-0.text-gray-900.shadow-sm.ring-1.ring-inset.ring-gray-300.pl-2(type='text' class='py-1.5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6')
            .col-span-12
              label.block.text-sm.font-medium.leading-6.text-gray-900(for='message') Message
              textarea.pl-2.mt-1.block.w-full.rounded-md.border-0.text-gray-900.shadow-sm.ring-1.ring-inset.ring-gray-300(rows='3' class='placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:py-1.5 sm:text-sm sm:leading-6' placeholder='you@example.com')
        .px-4.py-3.text-center
          button.inline-flex.justify-center.rounded-md.py-2.px-3.bg-gray-600.text-white.text-sm.font-semibold.shadow-sm(class='focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-600') Send Message

</template>

<script>

export default defineComponent({
    name: 'form',
})

</script>