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
          const params = {
            redirectUri: process.env.VUE_APP_KAKAO_REDIRECT,
          };
          window.Kakao.Auth.authorize(params);
      },
    }
}
</script>