<template>
    <div class="text-center">
        <h1>카카오 회원가입 시도 중...</h1>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router/router';
export default {
    name: 'kakaoJoin',
    async mounted() {
        const code = this.$route.query.code;
        const kakaoHeader = {
            'Authorization': process.env.VUE_APP_KAKAO_ADMIN,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        };
        const apiHeader = {
            'Content-type': 'application/json;charset=utf-8',
        };
        
        console.log("kakao login 실행");
        const data = {
            grant_type: 'authorization_code',
            client_id: process.env.VUE_APP_KAKAO_API,
            redirect_uri: process.env.VUE_APP_KAKAO_JOIN_REDIRECT,
            code: code,
        };
        const queryString = Object.keys(data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');
        const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader }).catch(err => {
            alert("kakao와 통신에 실패했습니다... 관리자에게 문의해주세요!");    
            return;
        });
        console.log('카카오 토큰', result.data);

        const result2 = await axios.post('/v1/kakao/join', result.data, { headers: apiHeader }).then(res => {
            alert("회원 가입 완료! 로그인 후 진행해주세요!");
            router.push({name:'login'});
        }).catch(err => { 
            alert(err.response.data.resultMsg);
            router.push({name:'login'});
        });
        return result;
    }
}
</script>