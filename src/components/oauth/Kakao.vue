<template>
    <div class="text-center">
        <h1>카카오 로그인 시도 중...</h1>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router/router';
export default {
    name: 'kakaoOauth',
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
            redirect_uri: process.env.VUE_APP_KAKAO_REDIRECT,
            code: code,
        };
        const queryString = Object.keys(data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');
        const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader })
            .then(res => res)
            .catch(err => {
                alert("kakao와 통신에 실패했습니다... 관리자에게 문의해주세요!");    
                return;
            });

        await axios.post('/v1/kakao/auth', result.data, { headers: apiHeader }).then(res => {
            const result = res.data;
            const now = Date.now();
            const access = result.data.access_token_expires-now;
            const refresh = result.data.refresh_token_expires-now;
            console.log(parseInt(access));
            console.log(parseInt(refresh));

            // cookie 생성
            document.cookie = `access=${result.data.access_token}; path=/; max-age=${parseInt(access/1000)}`;
            document.cookie = `refresh=${result.data.refresh_token}; path=/; max-age=${parseInt(refresh/1000)}`;
            router.push({ name: 'home'});
        }).catch(err => { 
            const result = err.response;
            if (result.status == 401) { 
                alert(result.data.resultMsg);
                router.push({ name: 'login' });
                return;
            }
            alert("알 수 없는 에러 발생... 관리자에게 문의해주세요!");
        });

        return result;
    }
}
</script>