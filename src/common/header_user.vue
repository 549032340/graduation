<template>
  <div :class="userType == '1'?'headerWrapper1':userType == '2'?'headerWrapper2':'headerWrapper3'">
    <div class="leftBar">
      <img src="@/assets/images/title.png" class="titlePhoto">
    </div>
    <div class="rightBar">
      <div class="userName">
        <span class="left" @click="show">{{userName}}</span>
        <div class="about" v-show="showOn" v-on:mouseleave="hide">
          <div @click="reset">修改密码</div>
          <div @click="quit">退出</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  props: {
    // userName: {
    //   type: String,
    //   default: "王二麻子"
    // },
  },
  data () {
    return {
      showOn: false,
      userName: sessionStorage.getItem('userName'),
      userType: sessionStorage.getItem('userType'),
    };
  },
  mounted () { },
  methods: {
    show () {
      this.showOn = !this.showOn;
    },
    hide () {
      this.showOn = !this.showOn;
    },
    reset () {
      // this.$router.push("/resetPassword/reset");
    },
    quit () {
      this.$router.push("/login");
      // this.$router.push("/resetPassword/reset");
    },
    photo () {
      let type = sessionStorage.getItem('userType');
      type == '1' ? this.imageUrl = '@/assets/images/userTitle.jpg' : type == '2' ? this.imageUrl = '@/assets/images/companyTitle.jpg' : this.imageUrl = '@/assets/images/adminTitle.jpg'
    }
  },
  created () {
    // 
  }
};
</script>

<style scoped>
.headerWrapper1 {
  width: 100%;
  height: 120px;
  position: relative;
  background: url('../assets/images/userTitle.jpg') no-repeat;
  background-size: 100% 100%;
}
.headerWrapper2 {
  width: 100%;
  height: 120px;
  position: relative;
  background: url('../assets/images/companyTitle.jpg') no-repeat;
  background-size: 100% 100%;
}
.headerWrapper3 {
  width: 100%;
  height: 120px;
  position: relative;
  background: url('../assets/images/adminTitle.jpg') no-repeat;
  background-size: 100% 100%;
}
.leftBar {
  width: 301px;
  height: 43px;
  position: absolute;
  left: 35px;
  top: 24px;
  font-size: 26px;
}
.rightBar {
  position: absolute;
  right: 50px;
  top: 27px;
}
.userName {
  display: inline-block;
  height: 40px;
  cursor: pointer;
  position: relative;
}
.userName span {
  font-size: 18px;
  line-height: 70px;
  letter-spacing: 0px;
  color: #ffffff;
  padding: 0 1px;
  border-bottom: 1px solid #ffffff;
}
.about {
  width: 94px;
  height: 80px;
  z-index: 999;
  padding: 10px 0;
  background-color: #ffffff;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  top: 41px;
  box-shadow: 0px 2px 8px 0px #bbbbbb;
  border-radius: 0 0 3px 3px;
}
.about div {
  width: 94px;
  height: 30px;
  font-size: 13px;
  line-height: 30px;
  text-indent: 15px;
  color: #999999;
}
.about div:hover {
  background-color: #cccccc;
}
.titlePhoto {
  width: 540px;
  height: 70px;
}
</style>
