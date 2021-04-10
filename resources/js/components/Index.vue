<template>
<!-- テーブルリスト項目クリックでソート -->
<!-- https://reffect.co.jp/vue/vuejs-table-sort -->
  <div class="app">
    <p v-if="errored" v-cloak>{{ error }}</p>
    <p v-if="loading" v-cloak>Loading... データベースを読み込み中</p>
        <!-- {{ book }} -->

    <div v-else　class="container">
    <span>絞り込み検索 (番組, 識別名, 機能, メッセージ1, メッセージ2, メッセージ3)<input type="text" v-model="keyword" />
    <input type="button" value="クリア" @click="clear()" />
    </span>
          {{ message }}
      <h2>sort_Key = {{ sort_key }}: {{ sort_asc ? '昇順' : '降順'}}</h2>

        <!-- フラッシュメッセージ
        @if (session('flash_message'))
            <div class="flash_message bg-success text-center py-3 my-0">
                {{ session('flash_message') }}
            </div>
        @endif -->

      <table class="tableList" ref="table">
        <!-- <thead class="thead-light"> -->
        <thead>
          <tr>
            <!-- テーブルのセルに自動で連番を振る -->
            <th width="40"></th>
            <!-- 連番表示のため、通常は非表示 ↓ -->
            <th v-if="debug" width="60" @click="sortBy('id')">No.</th>
            <th width="60" @click="sortBy('weekday')"><span>曜日</span></th>
            <th width="110" @click="sortBy('program')">番組</th>
            <th width="110" @click="sortBy('name')">識別名</th>
            <th width="35" @click="sortBy('nca')">A卓</th>
            <th width="35" @click="sortBy('ncb')">B卓</th>
            <th width="35" @click="sortBy('ncc')">C卓</th>
            <th width="90" @click="sortBy('func')">機能</th>
            <th width="75" @click="sortBy('startTime')">開始</th>
            <th width="35" @click="sortBy('duration')">尺</th>
            <th width="75" @click="sortBy('endTime')">終了</th>
            <th width="40" @click="sortBy('blink')">点滅</th>
            <th width="120" @click="sortBy('msg1')">メッセージ１</th>
            <th width="120" @click="sortBy('msg2')">メッセージ２</th>
            <th width="120" @click="sortBy('msg3')">メッセージ３</th>
            <th width="60" @click="sortBy('isValid')">有効無効</th>
            <th width="80" @click="sortBy('bgColor')">背景色／文字色</th>
            <th width="45" @click="sortBy('isDone')">実行済</th>
            <th width="55">編集</th>
            <th width="70">削除</th>
          </tr>
        </thead>
          <tbody>
            <!-- betweenで分岐 -->
            <tr v-for="(book, index) in filterdValue" :key="book.id" v-cloak>
            <!-- 有効／無効で分岐 -->
            <!-- <tr v-for="(book, index) in filterdValue" :key="book.id" v-cloak v-if="books[index].isValid == true"> -->
            <!-- 全表示 -->
            <!-- <tr v-for="book in sortValue" :key="book.id" v-cloak> -->
              <!-- <span> -->
               <!-- isValid = {{ books[index].isValid }}
                span -->
              <th></th>
              <!-- 連番表示のため、通常は非表示 ↓ -->
              <td v-if="debug">{{ book.id }}</td>
              <td>{{ book.weekday }}</td>
              <td>{{ book.program }}</td>
              <td>{{ book.name }}</td>
              <td><span v-if="book.nca === 1">〇</span><span v-if="book.nca === 0" :style="styles">×</span></td>
              <td><span v-if="book.ncb === 1">〇</span><span v-if="book.ncb === 0" :style="styles">×</span></td>
              <td><span v-if="book.ncc === 1">〇</span><span v-if="book.ncc === 0" :style="styles">×</span></td>

              <td align="center">{{ book.func }}</td>
              <td>{{ book.startTime }}</td>
              <td>{{ book.duration }}</td>
              <td>{{ book.endTime }}</td>
              <td>{{ book.blink }}</td>
              <td>{{ book.msg1 }}</td>
              <td>{{ book.msg2 }}</td>
              <td>{{ book.msg3 }}</td>
              <td><span v-if="book.isValid == true">〇</span><span v-if="book.isValid == false" :style="styles">×</span></td>
              <td v-bind:style="{backgroundColor:book.bgColor, color:book.textColor, fontSize: '16px',}">文字色</td>
              <!-- <td v-bind:style="{color:book.bgColor}">{{ book.bgColor }}</td> -->
              <!-- <td v-bind:style="{color:book.textColor, fontSize: '20px'}">文字色</td> -->

              <td><span v-if="book.isDone == true">済み</span><span v-if="book.isDone == false">未</span></td>

              <!-- <td><template name="done" v-if="book.done === true"><span>〇</span></template><template v-else="book.done === frue"><span>未</span></template></td> -->
              <td><router-link :to="{name: 'edit', params: { id: book.id }}">編集</router-link></td>
              <td><input type="button" value="削除" @click="deleteBook(book.id)"></td>
              {{ book.isDone }}
          <!-- </span> -->
          </tr>
        </tbody>
      </table>
      <button @click="toggle">リスト表示</button>
      <ul v-if="show">
        <li v-for="(book, index) in books" :key="index" v-cloak >
          <input type="checkbox" v-model="books[index].isDone" />
          <span v-if="!books[index].isDone">
          {{ book.weekday }}{{ book.nca }}{{ book.ncb }}{{ book.ncc }}{{ book.func }}{{ book.startTime }}
          {{ book.duration }} {{ book.endTime }} {{ book.blink }} {{ book.msg1 }} {{ book.msg2 }}
          {{ book.msg3 }} {{ book.isValid }} {{ book.bgColor }}
          {{ book.textColor }}  {{ book.isDone }} {{ book.isShow }}
          </span>
         <!-- taskCondition(index){{ taskCondition(index) }} -->
        </li>


        <!-- <li v-for="book in books" :key="book.id" v-cloak>
          {{ book.id }}. {{ book.weekday }} {{ book.program }} {{ book.name }} {{ book.nca }}
          {{ book.ncb }} {{ book.ncc }} {{ book.func }} {{ book.startTime }}
          {{ book.duration }} {{ book.endTime }} {{ book.blink }} {{ book.msg1 }} {{ book.msg2 }}
          {{ book.msg3 }} {{ book.isValid }} {{ book.bgColor }}
          {{ book.textColor }}  {{ book.isDone }}
        </li> -->
      </ul>
      <router-link :to="{name:'add'}">新規追加</router-link>
      <!-- <span>{{ books }} </span> -->
      <br>
      <input type="button" @click="addCount()" value="addCount"/>
      <input type="number" v-model="count" />

      test_now<input type="time" step="1" v-model="test_now" />
      test_set<input type="time" step="1" v-model="test_set" />
      test_end<input type="time" step="1" v-model="test_end" />
      <div class="caution" v-if="caution">時間になりました</div>
      <br>
      {{ caution }}
      <br>
    </div>
    <hr><!-- ******************************************** -->


  <div>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.id }}/曜日{{ book.weekday }}/{{ book.program }}/識別名{{ book.name }}/A卓{{ book.nca }}/B卓{{ book.ncb }}/C卓{{ book.ncc }}/{{ book.func }}/開始{{ book.startTime }}/尺{{ book.duration }}/終了{{ book.endTime }}/点滅{{ book.blink }}/有効{{ book.isValid }}/msg1{{ book.msg1 }}/msg2{{ book.msg2 }}/msg3{{ book.msg3 }}/背景{{ book.bgColor }}/文字{{ book.textColor }}/実行済み{{ book.isDone }}
        <router-link :to="{name: 'edit', params: { id: book.id }}">編集</router-link>
        <button @click="deleteBook(book.id)">削除</button>
      </li>
    </ul>

    <p v-if="message">{{ message }}</p>
    <ul>
      <li>BookController.phpでindex / store / editの動きを規定</li>
      <li>StoreBook.php　バリデーション</li>
      <li>Book.php　ホワイトリスト・ブラックリスト登録</li>
      <li>migrationファイル</li>
      <li>add.vue</li>
      <li>edit.vue</li>
      <li>index.vue</li>
      <li></li>
    </ul>

  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      debug: true,
      message: "",
      keyword:"",
      loading: true,
      errored: false,
      error: null,
      show: false,
      books: {},
      sort_key: "",
      sort_asc: true,
      test_now: "07:20:00",
      test_set: "08:00:00",
      test_end: "10:01:00",
      // caution: false,
      count: 0,
      styles: {
        backgroundColor: '#ccc',
        color: '#888',
      },
    };
  },
  created: function() {
    this.getBook();
  },
  methods: {
    toggle(event) {
      this.show = !this.show;
    },
    clear() {
      this.keyword = "";
    },
    getBook() {
      axios
        .get("/api/books/")
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
        (this.errored = true), (this.error = err);
          this.message = error;
        })
        .finally(() => (this.loading = false));
    },
    deleteBook(id) {
      axios
        .delete("/api/books/" + id)
        .then(response => {
          this.getBook();
          this.message = "";
        })
        .catch(error => {
          this.message = error;
        });
    },
    sortBy(key) {
      this.sort_key === key
      ? (this.sort_asc = !this.sort_asc)
      : (this.sort_asc = true);
      this.sort_key = key;
    },
    addCount() {
      this.count++ ;
    },
  },
  computed: {
    filterdValue: function() {
    var books = [];
    for(var i in this.books) {
        var book = this.books[i];
        if(book.program.indexOf(this.keyword) !== -1 ||
            book.name.indexOf(this.keyword) !==-1 ||
            book.func.indexOf(this.keyword) !==-1 ||
            book.msg1.indexOf(this.keyword) !==-1 ||
            book.msg2.indexOf(this.keyword) !==-1 ||
            book.msg3.indexOf(this.keyword) !==-1) {
            books.push(book);
        }
    }
    return books;
    },
    sortValue() {
      if(this.sort_key != "") {
        let set = 1;
        this.sort_asc ? (set = 1) : (set = -1);
        this.books.sort((a, b) => {
          if (a[this.sort_key] < b[this.sort_key]) return -1 * set;
          if (a[this.sort_key] > b[this.sort_key]) return 1 * set;
          return 0;
        // this.books.sort((a,b) => {
        //   if (a[this.sort_key] < b[this.sort_key]) return -1;
        //   if (a[this.sort_key] > b[this.sort_key]) return 1;
        //   return 0;
        });
        return this.books;
      } else {
        return this.books;
      }
    },
    // taskCondition: function() {
    //   return function(id){
    //     if(5 < this.count) {
    //       this.test_caution = true;
    //     }if(10 < this.count) {
    //       this.test_caution = false;
    //   }
    //   }
    // },
    // caution: function() {
    //   return function(id) {
    //     if(this.startTime[id] > this.test_set && this.endTime[id] < this.test_end) {
    //       return this.caution = true;
    //    }
    //   }
    // },
    caution: function() {
      if(this.test_now > this.test_set && this.test_now < this.test_end) {
        return this.caution = true;
      }
    },
    isShow: function() {
      return function(id) {
      if(this.books[id].startTime < this.test_set && this.test_set < this.books[id].endTime) {
      // if(this.books[id].startTime > this.test_set && this.test_now < this.books[id].endTime) {
        return this.caution2 = true;
      }
     }
    },
},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#app {
  width: 100%;
}
.caution {
  display: flex;
  width: 90%;
  height: 80px;
  margin: 20px 0;
  border: 10px solid #800000;
  background-color: red;
}
.container {
  margin: 10px 0;
}
li {
  list-style-type: none;
}
[v-cloak] {
  display: none;
}

table.tableList{
  width: 100%;
  table-layout: fixed;
  /* border-collapse:separate; */
  /* border-spacing: 0; */
  counter-reset: ranking;  /* ※A */
}
table th:first-child{
  border-radius: 5px 0 0 0;
}

table th:last-child{
  border-radius: 0 5px 0 0;
  border-right: 1px solid #3c6690;
}

table th{
  text-align: center;
  color:white;
  background: linear-gradient(#829ebc,#225588);
  border-left: 1px solid #3c6690;
  border-top: 1px solid #3c6690;
  border-bottom: 1px solid #3c6690;
  box-shadow: 0px 1px 1px rgba(255,255,255,0.3) inset;
}
table.tableList tbody th:before {
   counter-increment: ranking;         /* ※B */
   content: counter(ranking) ; /* ※C */
}

table td{
  text-align: center;
  border-left: 1px solid #a8b7c5;
  border-bottom: 1px solid #a8b7c5;
  border-top:none;
  box-shadow: 0px -3px 5px 1px #eee inset;
 }

table td:last-child{
  border-right: 1px solid #a8b7c5;
}

table tr:last-child td:first-child {
  border-radius: 0 0 0 5px;
}

table tr:last-child td:last-child {
  border-radius: 0 0 5px 0;
}
</style>
