<template>
  <div id="app">
    <div class="left">
      <div>
        接口密码：
        <input type="text" v-model="fzy_token"/>
        <Checkbox v-model="single">有无token</Checkbox>
        <button @click="update">更新</button>
      </div>
      <div class="test">
        接口连接：
        <input type="text" v-model="value">
      </div>
      <div class="action">
        连接action:
        <input
          class="date"
          type="text"
          placeholder="门店零售统计(GetStoreLsDate)"
          v-model="action"
        />
      </div>
      <div class="action">
        接口地址:
        <input
          class="address"
          type="text"
          v-model="address"
        />
      </div>
      <ul class="bottom">
        <li v-for=" item in user" :key="item.id" class="bottom">
          接口参数<span>{{ item.id }}</span
          >:
          <input type="text" v-model="item.key"/>
          值:
          <input type="text" v-model="item.value"/>
        </li>
      </ul>
      <div>
        <button class="add" @click="add">新增参数</button>
        <button @click="request">Post请求</button>
      </div>
    </div>
    <div class="right">返回结果：
      <span v-for="(item, index) in data" :key="index">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
import {Request} from "@/api/login";
export default {
  name: "App",
  data() {
    return {
      value: '',
      user:[{id:1}],
      action:'',
      data:'',
      fzy_token:'',
      single:false,
      address:'login.ashx'
    };
  },
  components: {},
  computed:{

  },
  create() {},
  methods: {
    add() {
      this.user.push({
        id:this.user[this.user.length-1].id+1,
        key:'',
        value:''
      });
    },
    update(){
      this.fzy_token = this.data.fzy_token
    },
    async request() {
      try {
        this.user[this.user.key]=this.user.key
        this.user[this.user.value]=this.user.value
        console.log(this.user);
        localStorage.setItem('value',this.value)
        console.log(localStorage.getItem('value'));
        const userList = this.user.map(item =>{
          return {
            key:item.key,
            value:item.value
          }
        })
        console.log(userList);
        const dataList ={}
        userList.forEach(item =>{
          dataList[item.key] = item.value
        })
        if(this.single) {
          userList.forEach(() =>{
            dataList['fzy_token'] = this.fzy_token
          })
        }
        console.log(dataList,this.address);
        const {data} = await Request(dataList,this.action,this.address);
        console.log(data);
        this.data=data
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
#app {
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  width: 100vh;
}
.left {
  display: flex;
  flex-direction: column;
  width: 800px;
  justify-content: space-around;
}
.test {
  margin-top: 20px;
  display: flex;
}
.action {
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
}
.add {
  margin-top: 20px;
  margin-left: 75px;
  margin-right: 100px;
}
.address{
  margin-left: 10px;
}
.bottom {
  margin-bottom: 20px;
}
.right {
  width: 200px;
}
</style>
