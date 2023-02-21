<template>
    <div class="flow-root">
        <div class="mb-6 px-6 ml-12 mr-12 flex flex-1 flex-col border-x-4 border-gray-900 rounded-md">
            <div>
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                        <a href="#">{{title}}</a>
                    </h3>
                </div>
                <p class="mt-1 text-sm text-gray-500">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'article',
        props: {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        }
    })
</script>