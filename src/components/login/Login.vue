<template>
    <div class="text-center">
    <button type="button" class="kakoBtn" @click="kakaoLogin" />
    </div>    
</template>

<style>
  button.kakoBtn {
    background-image: url("https://velog.velcdn.com/images/ililil9482/post/09d0b625-db31-48cb-9948-c5d280d6c840/image.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    margin: 10px;
    width: 100px;
    height: 50px;
  }
</style>

<script>
export default {
    name: 'login',
    
    methods: {
        kakaoLogin() { 
            const key = "e05c246a6b97f69e3b4a9c4c5039ce70";
            const redirect_uri = process.env.VUE_APP_KAKAO_REDIRECT;
            const url = `https://kauth.kakao.com/oauth/authorize?client_id=${key}&redirect_uri=${redirect_uri}&response_type=code`;

            location.href = url;
        }
    }
}
</script>