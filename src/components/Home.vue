<template>
<div class="bg-white py-12">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <button
        class="inline-block rounded-md border border-transparent bg-blue-500 py-3 px-8 text-center font-medium text-white hover:bg-blue-700"
        @click="member"
        >회원 로그인</button
      >
    </div>
    <div class="text-center mt-3">
      <button
        @click="noMember"
        class="inline-block rounded-md border border-transparent bg-blue-500 py-3 px-8 text-center font-medium text-white hover:bg-blue-700"
        >비회원 시작</button
      >
    </div>
  </div>
</div>
</template>

<script>
import router from '@/router/router';

export default {
  name: 'HomeComponent',

  methods: {
    member() {
      router.push({name:'login'});
    },
    noMember() {
      if(window.confirm("비회원은 루틴을 저장할 수 없습니다! 계속 하시겠어요?")){
        router.push({name:'choice'});
      }
    }
  }
}
</script>