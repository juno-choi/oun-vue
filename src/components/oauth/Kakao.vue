<template>
    <div class="text-center">
        <h1>카카오 로그인 시도 중...</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'kakaoOauth',
    async mounted() {
        const code = this.$route.query.code;
        const kakaoHeader = {
            'Authorization': process.env.VUE_APP_KAKAO_ADMIN,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        };
        console.log("kakao login 실행");
        try {
            const data = {
                grant_type: 'authorization_code',
                client_id: process.env.VUE_APP_KAKAO_API,
                redirect_uri: process.env.VUE_APP_KAKAO_REDIRECT,
                code: code,
            };
            const queryString = Object.keys(data)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
                .join('&');
            const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
            console.log('카카오 토큰', result);
            alert(result);
            return result;
        } catch (e) {
            alert('실패');
            console.log(e);
            return e;
        }
    }
}
</script>