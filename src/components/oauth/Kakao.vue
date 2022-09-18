<template>
    <div class="text-center">
        <h1>카카오 로그인 시도 중...</h1>
    </div>
</template>

<script>
export default {
    name: 'kakaoOauth',
    mounted() {
        document.addEventListener("DOMContentLoaded", () => {
            const code = this.$route.query.code;
            alert('백엔드에 데이터 전송 : '+ code);
        });
    }
}
</script>