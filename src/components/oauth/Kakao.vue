<template>
    <div class="text-center">
        <h1>카카오 로그인 시도 중...</h1>
    </div>
</template>

<script>
import api from "@/axios/api";

export default {
    name: 'kakaoOauth',
    async mounted() {
        const code = this.$route.query.code;
        
        await api.get("/v1/oauth/kakao/login?code="+code)
        .then(()=>{
            alert('성공');
        })
        .catch(()=>{
            alert("실패");
        });
    }
}
</script>