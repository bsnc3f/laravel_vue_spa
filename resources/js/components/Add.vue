<template>
  <div>
    <router-link :to="{name:'index'}">トップ</router-link>
    <form @submit.prevent="addBook">
    <select id="weekday" class="PullDownList" type="text" v-model="weekday" style="width: 70px">
      <!-- <option value="" disabled selected style="display: none">曜日</option>
      <option value="7" selected="selected">平日</option>
      <option value="8">土日祝</option>
      <option value="1">月</option>
      <option value="2">火</option>
      <option value="3">水</option>
      <option value="4">木</option>
      <option value="5">金</option>
      <option value="6">土</option>
      <option value="0">日</option>
      <option value="9">祝</option> -->
    </select>
    <select
      id="program"
      class="PullDownList2"
      v-model="program"
      style="width: 80px"
    >
      <!-- <option value="" disabled selected style="display: none">番組選択</option>
      <option value="おはよう" selected="selected">おはよう</option>
      <option value="news">News</option>
      <option value="首都圏">首都圏</option>
      <option value="シブ5時">シブ5時</option> -->
    </select>
    <input
      type="text"
      placeholder="識別名(必須)"
      v-model="name"
      style="width: 120px"
      maxlength="12"
    />
    <label for="nca">A卓</label>
    <input type="checkbox" id="nca" v-model="nca" style="width: 20px" />
    <label for="ncb">B卓</label>
    <input type="checkbox" id="ncb" v-model="ncb" style="width: 20px" />
    <label for="ncc">C卓</label>
    <input type="checkbox" id="ncc" v-model="ncc" style="width: 20px" />
    <select
      type="selectbox"
      placeholder="機能"
      v-model="func"
      style="width: 130px"
    >
      <option value="" disabled selected style="display: none">
        機能を選択
      </option>
      <option value="注意喚起">注意喚起</option>
      <option value="カウントダウン">カウントダウン</option>
      <option value="実線">実線</option>
    </select>
    <input type="text" placeholder="開始" v-model="startTime" style="width: 70px" />
    <input type="text" placeholder="尺" v-model="duration" style="width: 30px" />
    <input type="text" placeholder="終了" v-model="endTime" style="width: 70px" />
    <!-- <label>133059の形式で入力</label> -->
    <label>点滅時間</label>
    <select
      type="selectbox"
      id="blink"
      placeholder="点滅時間"
      v-model="blink"
      style="width: 70px"
    >
      <option value="15">15秒</option>
      <option value="30">30秒</option>
      <option value="45">45秒</option>
      <option value="60">60秒</option>
      <option value="90">90秒</option>
      <option value="120">120秒</option>
    </select>
    <br />
    <!-- <input type="button" v-if="isValid" @click="toggle">有効 /> -->
    <!-- <button v-else @click="toggle">無効</button> -->
    <!-- <button v-else v-on:click="toggle(isTrue)">無効</button> -->

    <label for="isValid">有効／無効</label>
    <input type="checkbox" id="isValid" v-model="isValid" style="width: 20px" />
    <input
      type="text"
      placeholder="msg1"
      v-model="msg1"
      style="width: 120px"
      maxlength="12"
    />
    <input
      type="text"
      placeholder="msg2"
      v-model="msg2"
      style="width: 120px"
      maxlength="12"
    />
    <input
      type="text"
      placeholder="msg3"
      v-model="msg3"
      style="width: 120px"
      maxlength="12"
    />
    <label for="bgColor">背景色</label>
    <span class="colorset">
      <input
        type="color"
        id="bgColor"
        v-model="bgColor"
        style="width: 60px"
        list="colors"
        @change="onChangeColor(bgColor)"
      />
      <datalist id="colors">
        <option value="#000000"></option>
        <option value="#ffffff"></option>
        <option value="#ff0000"></option>
        <option value="#ffff00"></option>
        <option value="#c0c0c0"></option>
        <option value="#0000ff"></option>
        <option value="#008000"></option>
        <option value="#800080"></option>
        <option value="#000080"></option>
        <option value="#008080"></option>
      </datalist> 
    </span>
    <span class="colorset">
      <label for="textColor">文字色</label>
      <input
        type="color"
        id="textColor"
        v-model="textColor"
        style="width: 60px"
        list="txtcolors"
      />
    </span>
    <input type="checkbox" id="isDone" v-model="isDone" style="width: 20px" />
    <!-- <input type="checkbox" id="isShow" v-model="isShow" style="width: 20px" /> -->
    <input type="button" value="追加" />
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      books: {},
      weekday: "7",
      program: "おはよう",
      name: "",
      nca: true,
      ncb: false,
      ncc: false,
      func: "注意喚起",
      startTime: "10:00:00",
      duration: 60,
      endTime: "10:03:00",
      blink: "45",
      isValid: true,
      msg1: "msgA",
      msg2: "msgB",
      msg3: "msgC",
      bgColor: "#008080",
      textColor: "#ffffff",
      isDone: false,
      isShow: true,
       list: [
        { val: "7", txt: "平日" },
        { val: "8", txt: "土日祝" },
        { val: "1", txt: "月" },
        { val: "2", txt: "火" },
        { val: "3", txt: "水" },
        { val: "4", txt: "木" },
        { val: "5", txt: "金" },
        { val: "6", txt: "土" },
        { val: "0", txt: "日" },
        { val: "9", txt: "祝" },
      ],
      lists: [
        { val: "おはよう", txt: "おはよう" },
        { val: "news", txt: "news" },
        { val: "首都圏", txt: "首都圏" },
        { val: "シブ5時", txt: "シブ5時" },
        { val: "N7", txt: "N7" },
        { val: "NW9", txt: "NW9" },
        { val: "きょう一日", txt: "きょう一日" },
      ],
    };
  },
  methods: {
    addBook() {
      axios
        .post("/api/books/", {
          weekday: this.weekday,
          program: this.program,
          name: this.name,
          nca: this.nca,
          ncb: this.ncb,
          ncc: this.ncc,
          func: this.func,
          startTime: this.startTime,
          duration: this.duration,
          endTime: this.endTime,
          blink: this.blink,
          isValid: this.isValid,
          msg1: this.msg1,
          msg2: this.msg2,
          msg3: this.msg3,
          bgColor: this.bgColor,
          textColor: this.textColor,
          isDone: this.isDone,
          isShow: this.isShow,
        })
        .then(response => {
          this.$router.push({ name: "index" });
        })
        .catch(erorr => {
          this.message = erorr;
        });
    },
    toggle(e) {
      this.isValid = !this.isValid;
    },
    onChangeColor(hexcolor) {
      var r = parseInt(hexcolor.substr(1, 2), 16);
      var g = parseInt(hexcolor.substr(3, 2), 16);
      var b = parseInt(hexcolor.substr(5, 2), 16);
      this.textColor =
        (r * 299 + g * 587 + b * 114) / 1000 < 128 ? "#ffffff" : "#000000";
      // return (this.textColor =
      //   (r * 299 + g * 587 + b * 114) / 1000 < 128 ? "#ffffff" : "#000000");
    },
  },
  mounted() {
        // セレクトボックスが1つだけの場合 (id管理)
    //プルダウンリストをループ処理で値を取り出してセレクトボックスにセットする
    for (var i = 0; i < this.list.length; i++) {
      let opt = document.createElement("option");
      opt.value = this.list[i].val; //value値
      opt.text = this.list[i].txt; //テキスト値
      document.getElementById("weekday").appendChild(opt);
      // document.getElementById("PullDownList").appendChild(opt);
    }
    // セレクトボックスが複数の場合 (class管理)
    let opt = document.createElement("option");
    let tmp = document.getElementsByClassName("PullDownList2");
    for (var i = 0; i < this.lists.length; i++) {
      for (var j = 0; j < tmp.length; j++) {
        opt = document.createElement("option");
        opt.value = this.lists[i].val; //value値
        opt.text = this.lists[i].txt; //テキスト値
        tmp[j].appendChild(opt);
      }
    }
  }
};
</script>
