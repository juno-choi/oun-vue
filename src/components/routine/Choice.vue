<template>
    <div class="bg-white py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center">
            <button
                class="inline-block rounded-md border border-transparent bg-blue-500 py-3 px-8 text-center font-medium text-white hover:bg-blue-700"
                @click='routineOrder'
                >루틴 시작하기</button
            >
            </div>
            <div class="text-center mt-3">
            <button
                @click='pre'
                class="inline-block rounded-md border border-transparent bg-blue-500 py-3 px-8 text-center font-medium text-white hover:bg-blue-700"
                >루틴 불러오기</button
            >
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router/router';

export default {
    name: 'choice',
    methods: {
        routineOrder() { 
            router.push({name: 'order'});
        },
        pre() { 
            alert('해당 기능은 준비중입니다...');
            //router.push({name: 'home'});
        }
    }
}
</script>