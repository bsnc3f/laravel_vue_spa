<template>
  <div>
    <p v-if="debug">idが{{ book.id }}の編集フォーム</p>
    <form @submit.prevent="updateBook">
      <div>
      <label>曜日</label>
        <!-- <input type="text" v-model="book.weekday" /> -->
      <select id="weekday" class="PullDownList" type="text" v-model="book.weekday" style="width: 70px">
        <option value="" disabled selected style="display: none">曜日</option>
        <option value="7">平日</option>
        <option value="8">土日祝</option>
        <option value="1">月</option>
        <option value="2">火</option>
        <option value="3">水</option>
        <option value="4">木</option>
        <option value="5">金</option>
        <option value="6">土</option>
        <option value="0">日</option>
        <option value="9">祝</option>
     </select>
      </div>
      <div>
        <label>番組</label>
        <!-- <input type="text" v-model="book.program" /> -->
    <select
      id="program" class="PullDownList2" v-model="book.program" style="width: 80px">
      <option value="" disabled selected style="display: none">番組選択</option>
      <option value="おはよう">おはよう</option>
      <option value="news">News</option>
      <option value="首都圏">首都圏</option>
      <option value="シブ5時">シブ5時</option>
    </select>
      </div>
      <div>
        <label>識別名</label>
        <!-- <input type="text" v-model="book.name" /> -->
        <input type="text" placeholder="識別名(必須)" v-model="book.name" style="width: 120px" maxlength="12" />
      </div>
      <div>
        <label>A卓</label>
        <!-- <input type="checkbox" v-model="book.nca" /> -->
        <input type="checkbox" id="nca" v-model="book.nca" style="width: 20px" />
      </div>
      <div>
        <label>B卓</label>
        <!-- <input type="checkbox" v-model="book.ncb" /> -->
        <input type="checkbox" id="ncb" v-model="book.ncb" style="width: 20px" />
      </div>
      <div>
        <label>C卓</label>
        <!-- <input type="checkbox" v-model="book.ncc" /> -->
        <input type="checkbox" id="ncc" v-model="book.ncc" style="width: 20px" />
      </div>
      <div>
        <label>機能</label>
        <!-- <input type="text" v-model="book.func" /> -->
        <select type="selectbox" placeholder="機能" v-model="book.func" style="width: 130px" >
      <option value="" disabled selected style="display: none">
        機能を選択
      </option>
      <option value="注意喚起">注意喚起</option>
      <option value="カウントダウン">カウントダウン</option>
      <option value="実線">実線</option>
    </select>
      </div>
      <div>
        <label>開始時間</label>
        <!-- <input type="text" v-model="book.startTime" /> -->
        <input type="text" placeholder="開始" v-model="book.startTime" style="width: 70px" />
      </div>
      <div>
        <label>尺</label>
        <!-- <input type="text" v-model="book.duration" /> -->
        <input type="text" placeholder="尺" v-model="book.duration" style="width: 60px" />
      </div>
      <div>
        <label>終了時間</label>
        <!-- <input type="text" v-model="book.endTime" /> -->
        <input type="text" placeholder="終了" v-model="book.endTime" style="width: 70px" />
      </div>
      <div>
        <label>点滅時間</label>
        <!-- <input type="text" v-model="book.blink" /> -->
        <select
          type="selectbox"
          id="blink"
          placeholder="点滅時間"
          v-model="book.blink"
          style="width: 70px"
        >
          <option value="15">15秒</option>
          <option value="30">30秒</option>
          <option value="45">45秒</option>
          <option value="60">60秒</option>
          <option value="90">90秒</option>
          <option value="120">120秒</option>
        </select>

      </div>
      <div>
        <label>有効／無効</label>
        <input type="checkbox" v-model="book.isValid" />
      </div>
      <div>
        <label>メッセージ１</label>
        <input type="text" v-model="book.msg1" style="width: 120px" maxlength="12" />
      </div>
      <div>
        <label>メッセージ２</label>
        <input type="text" v-model="book.msg2" style="width: 120px" maxlength="12" />
      </div>
      <div>
        <label>メッセージ３</label>
        <input type="text" v-model="book.msg3" style="width: 120px" maxlength="12" />
      </div>
    <label for="bgColor">背景色</label>
    <span class="colorset">
      <input
        type="color"
        id="bgColor"
        v-model="book.bgColor"
        style="width: 60px"
        list="colors"
        @change="onChangeColor(book.bgColor)"
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
        v-model="book.textColor"
        style="width: 60px"
        list="txtcolors"
      />
    </span>
      <div>
        <label>実行済み</label>
        <input type="checkbox" v-model="book.isDone" />
      </div>

      <button>上書きする</button>
      <button @click="updateCancel">キャンセル</button>
      <br>
            {{ book }}

    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      book: {},
    };
  },
  created() {
    axios
      .get("/api/books/" + this.$route.params.id)
      .then(response => (this.book = response.data))
      .catch(erorr => console.log(error));
  },
  methods: {
    updateCancel() {
      this.$router.push({ name: "index" });
    },
    updateBook() {
      axios
        .put("/api/books/" + this.book.id, {
          weekday: this.book.weekday,
          program: this.book.program,
          name: this.book.name,
          nca: this.book.nca,
          ncb: this.book.ncb,
          ncc: this.book.ncc,
          func: this.book.func,
          startTime: this.book.startTime,
          duration: this.book.duration,
          endTime: this.book.endTime,
          blink: this.book.blink,
          isValid: this.book.isValid,
          msg1: this.book.msg1,
          msg2: this.book.msg2,
          msg3: this.book.msg3,
          bgColor: this.book.bgColor,
          textColor: this.book.textColor,
          isDone: this.book.isDone,
          isShow: this.book.isShow,
        })
        .then(response => {
          this.$router.push({ name: "index" });
        })
        .catch(erorr => {
          this.message = erorr;
        });
    },
    onChangeColor(hexcolor) {
      var r = parseInt(hexcolor.substr(1, 2), 16);
      var g = parseInt(hexcolor.substr(3, 2), 16);
      var b = parseInt(hexcolor.substr(5, 2), 16);
      this.book.textColor =
        (r * 299 + g * 587 + b * 114) / 1000 < 128 ? "#ffffff" : "#000000";
      // return (this.textColor =
      //   (r * 299 + g * 587 + b * 114) / 1000 < 128 ? "#ffffff" : "#000000");
    },
  }
};
</script>
