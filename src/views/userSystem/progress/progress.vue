<template>
  <div>
    <div class="header">
      <ul>
        <li @click="searchJob(1)"><span :class="itemType == 1 ? 'blueFont' : ''">投递成功</span></li>
        <li @click="searchJob(2)"><span :class="itemType == 2 ? 'blueFont' : ''">被查看</span></li>
        <li @click="searchJob(3)"><span :class="itemType == 3 ? 'blueFont' : ''">有意向</span></li>
        <li @click="searchJob(4)"><span :class="itemType == 4 ? 'blueFont' : ''">邀请面试</span></li>
        <li @click="searchJob(5)"><span :class="itemType == 5 ? 'blueFont' : ''">不合适</span></li>
      </ul> 
     </div> 
     <Content class="container">
      <div v-for="(item, index) in jobLists" :key="index">
        <div class="js">
          <div class="ji js-item">
            <div class="ji-item clearfix">
              <div class="ji-item-info fl">
                <a class="ji-item-info-jobName" href="" target="_blank">{{item.pname}}</a>
                <p>{{item.salary}}</p>
                <a class="ji-item-info-companyName" href="" target="_blank">{{item.company}}</a>
              </div>
              <div class="ji-item-status fr">
                <p>{{item.state}}</p>
                <div><span>{{item.time}}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Content>
  </div>
</template>

<script>
import * as API from "@/api/user.js";
import tool from "@/utils/formatDate"
import switchFont from "@/utils/switchFont";
export default {
  name: "index",
  props: {
    msg: String
  },
  data () {
    return {
      itemType: 1,
      jobLists: []
    };
  },
  components: {},
  watch: {

  },

  methods: {
    searchJob (type) {
      this.itemType = type;
      this.jobLists=[]
      API.progress({
        userId: sessionStorage.getItem("userId"),
        type: type
      }).then(res => {
        if (res.code == 200) {
          let _data=res.result
          _data.forEach(item => {
            item.time = tool.formatDate2(item.time);
            //item.salary = switchFont.salary(item.salary);
            if(item.state==1){
              item.state='投递成功'
            }else if(item.state==2){
              item.stete='被查看'
            }else if(item.state==3){
              item.state='有意向'
            }else if(item.state==4){
              item.state='未邀请'
            }else if(item.state==5){
              item.state='已邀请'
            }else if(item.state==6){
              item.state='未录取'
            }else if(item.state==7){
              item.state='已录取'
            }else{
              item.state='不合适'
            }
          });
          this.jobLists = _data;
        }
      })
    }
  },
  created () {
    this.searchJob('1');
  }
};
</script>

<style scoped>
.header {
  height: 50px;
  background-color: #fff;
  width: 880px;
  margin: auto;
  border-radius: 0.5em;
}
.header ul {
  list-style-type: none;
}
.header li {
  width: 176px;
  height: 48px;
  box-sizing: border-box;
  text-align: center;
  float: left;
  border-right: 1px solid #eee;
}
.header li:last-child {
  border-right: 0;
}
.header span {
  line-height: 48px;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  position: relative;
  display: block;
  /* 禁止选中文字 */
  user-select:none;
}
.header span:hover {
  color: #2d8cf0;
}
.blueFont {
  color: #2d8cf0 !important;
}
.container {
  width: 1000px;
  border: 0;
}
.js {
  margin-top: 16px;
  background-color: #fff;
  height: 140px;
  border-radius: 0.5em;
}
:first-child.js-item {
  border-top: 1px solid transparent;
}
.js-item {
  border-top: 1px solid #ededed;
  background-color: #fff;
}
.clearfix {
  zoom: 1;
  display: block;
}
.ji-item .ji-item-info {
  padding-left: 25px;
  max-width: 580px;
}
.fl {
  float: left;
}
.ji-item .ji-item-info-jobName {
  margin-top: 30px;
  display: block;
  font-size: 18px;
  color: #333;
}

.ji-item .ji-item-info p {
  margin: 4px 0 3px;
  font-size: 18px;
  color: #ff5959;
  font-weight: 700;
}
.ji-item .ji-item-info-companyName {
  display: block;
  font-size: 14px;
  color: #999;
  margin-bottom: 29px;
}
.ji-item .ji-item-status {
  padding: 31px 25px 31px 0;
  display: block;
  text-align: right;
  cursor: pointer;
}
.fr {
  float: right;
}
.ji-item .ji-item-status p {
  font-size: 14px;
  color: #666;
  height: 47px;
}
.ji-item .ji-item-status div span {
  margin-top: 11px;
  display: inline-block;
  font-size: 14px;
  color: #999;
}
</style>
