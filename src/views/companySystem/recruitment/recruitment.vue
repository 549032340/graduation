<template>
  <!-- 简历管理页面 -->
  <div class="main">
    <ul class="fillIn clear">
      <li class="liStyle">
        <label for="">职位：</label>
        <Input v-model="jobName" placeholder="请输入职位名称" style="width: 160px"></Input>
      </li>
      <li class="liStyle">
        <label for="">学历：</label>
        <Select v-model="degree" style="width: 120px">
          <Option value="0">全部</Option>
          <Option value="1">高中</Option>
          <Option value="2">中专</Option>
          <Option value="3">大专</Option>
          <Option value="4">本科</Option>
          <Option value="5">硕士</Option>
          <Option value="6">博士</Option>
          <Option value="9">其他</Option>
        </Select>
      </li>
      <li class="liStyle">
        <span>状态：</span>
        <Select v-model="status" style="width: 120px">
          <Option value="0">全部</Option>
          <Option value="1">招聘中</Option>
          <Option value="2">停止招聘</Option>
        </Select>
      </li>
      <li class="liStyle">
        <Button icon="ios-search" type="primary" @click="searchData()">搜 索</Button>
      </li>
    </ul>
    <div>
      <Button icon="ios-add" class="add_button" type="primary" @click="addData()">新增职位</Button>
    </div>
    <div style="margin-top:60px;">
      <Table :columns="column" :data="selectData"></Table>
      <Page :total="total" :current="currentPage" class="paging" show-elevator @on-change="changepage"></Page>
    </div>
  </div>
</template>
<script>

import * as API from "@/api/company.js";
import tool from "../../../utils/formatDate";
import switchFont from "@/utils/switchFont";

export default {
  data () {
    return {
      userType: sessionStorage.getItem('userType') || 1,
      total: 10,
      currentPage: 1,
      jobName: '',
      degree: '0',
      status: '0',
      column: [
        {
          type: "index",
          title: "序号",
          width: 70,
          align: "center",
          render: (h, params) => {
            return h(
              "span",
              (params.index + 1) + (this.currentPage - 1) * 10
            );
          }
        },
        {
          title: "职位",
          key: "p_name",
          align: "center",
          width: 160
        },
        {
          title: "薪资",
          key: "salary",
          align: "center",
          width: 140
        },
        {
          title: "学历",
          key: "degree",
          align: "center",
          width: 110,
        },
        {
          title: "地点",
          key: "address",
          align: "center",
          width: 130
        },
        {
          title: "发布日期",
          key: "publicTime",
          align: "center",
          width: 120
        },
        {
          title: "状态",
          key: "stateFont",
          align: "center",
          width: 100,
        },
        {
          title: "操作",
          key: "action",
          width: 210,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.handleShow(params.row);
                    }
                  }
                },
                "查看"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.handleEdit(params.row);
                    }
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: params.row.state == '1' ? "error" : "primary",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.handleChange(params.row);
                    }
                  }
                },
                params.row.state == '1' ? '停止招聘' : '继续招聘'
              )
            ]);
          }
        }
      ],
      selectData: []
    };
  },
  methods: {
    changepage (val) {
      this.currentPage = val;
      this.initData();
    },
    searchData () {
      this.currentPage = 1;
      this.initData();
    },
    addData () {
      this.$router.push('add_recruitment');
    },
    handleShow(row){
      this.$router.push('search_recruitment?id=' + row.p_id);
    },
    handleEdit (row) {
      this.$router.push('add_recruitment?id=' + row.p_id);
    },
    handleChange (row) {
      let state = row.state == '1' ? '停止招聘' : '继续招聘';
      this.$Modal.confirm({
        title: '确认框',
        content: '<p>确认' + state + '吗？</p>',
        onOk: () => {
          API.updatePositionState({
            pid: row.p_id,
            state: row.state=='1'? 2 : 1
          }).then(res => {
            if(res.code == 200) {
              //row.state == '1' ? row.state = '2' : row.state = '1';
              this.initData();
            }
          });
                   
        },
        onCancel: () => {
        }
      });
    },
    initData () {
      this.selectData = [],
        API.queryPersonalPosition({
          pageNum: this.currentPage,
          pageSize: 10,
          publicId: sessionStorage.getItem("userId"),
          pname: this.jobName,
          degree: this.degree,
          state: this.status
        }).then(res => {
          if (res.code == 200) {
            let _data = res.result;
            _data.forEach(item => {
              item.state == '1' ? item.stateFont = '招聘中' : item.stateFont = '停止招聘';
              item.publicTime = tool.formatDate2(item.publicTime)
              item.salary=item.salary;
              item.degree=switchFont.degree(item.degree);
              item.address=item.workProvince+"-"+item.workCity;
            });
            this.total = res.total;
            this.selectData = _data;
          }
        });
    }
  },
  created () {
    this.initData();
  }
}
</script>
<style scoped>
.main {
  width: 1050px;
  height: 100vh;
  overflow-y: hidden;
  background-color: #fff;
  padding: 15px;
  border-radius: 0.5em;
}
.paging {
  float: right;
  margin-top: 10px;
}
.fillIn {
  list-style-type: none;
  margin-bottom: 30px;
}
.liStyle {
  float: left;
  margin: 20px 20px 0 0;
}
.clear {
  zoom: 1;
}
.clear:after {
  content: '';
  display: block;
  clear: both;
}
.add_button {
  float: right;
  margin-top: -20px;
}
</style>