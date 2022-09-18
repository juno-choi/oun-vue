<template>
    <div class="bg-white py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center">
            <p
                class="text-3xl font-bold leading-8 tracking-tight text-gray-400 sm:text-4xl"
            >
                🏃‍♂️ 루틴 세트와 개수를 지정해주세요.
            </p>
            </div>

            <div id="routine-div" class="text-center mt-10">
                <div class="mb-4" v-for="(index, item) in test" :key="item">
                    <input
                        class="w-40 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-0"
                        type="text"
                        value="테스트"
                        disabled
                    />

                    <input
                        class="w-24 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-0"
                        type="text"
                        placeholder="세트"
                    />
                    <input
                        class="w-24 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-0"
                        type="text"
                        placeholder="세트당 수"
                    />
                </div>
            </div>

            <div class="text-center mt-10">
                <button
                    class="inline-block rounded-md border border-transparent bg-blue-500 py-3 px-8 text-center font-medium text-white hover:bg-blue-700"
                    @click="pre"
                >
                    이전
                </button>
                <button
                    class="inline-block rounded-md border border-transparent bg-blue-500 py-3 px-8 text-center font-medium text-white hover:bg-blue-700"
                    @click="routineComplete">
                    다음
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router/router';

export default {
    name: "setting",
    data() { 
        const test = 3;
        return { test };
    },
    methods: {
        pre() {
            router.push({name: 'order'});
        },
        routineComplete() {
            router.push({ name: 'start' });
        }
    }
}
</script>