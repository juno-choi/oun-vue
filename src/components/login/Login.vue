<template>
    <div class="text-center">
      <div>간편 로그인</div>
      <button type="button" class="kakaoBtn" @click="kakaoLogin" />
    </div> 
    <div class="text-center">
      <div>간편 회원가입</div>
      <button type="button" class="kakaoJoinBtn" @click="kakaoJoin" />
    </div>       
</template>

<style>
  button.kakaoBtn {
    background-image: url("https://velog.velcdn.com/images/ililil9482/post/09d0b625-db31-48cb-9948-c5d280d6c840/image.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    margin: 10px;
    width: 90px;
    height: 50px;
  }
  button.kakaoJoinBtn {
    background-image: url("https://velog.velcdn.com/images/ililil9482/post/cffde7aa-be01-469d-a50c-7c3839fc8d87/image.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    margin: 10px;
    width: 170px;
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
      kakaoJoin() { 
        const params = {
          redirectUri: process.env.VUE_APP_KAKAO_JOIN_REDIRECT,
        };
        window.Kakao.Auth.authorize(params);
      },
    }
}
</script>