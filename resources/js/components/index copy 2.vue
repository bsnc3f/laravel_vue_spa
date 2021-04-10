<template>
  <div>
    <router-link :to="{name:'add'}">新規追加</router-link>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.id }}/曜日{{ book.weekday }}/{{ book.program }}/A卓{{ book.nca }}/B卓{{ book.ncb }}/C卓{{ book.ncc }}/{{ book.func }}/開始{{ book.startTime }}/尺{{ book.duration }}/終了{{ book.endTime }}/点滅{{ book.blink }}/有効{{ book.isValid }}/msg1{{ book.msg1 }}/msg2{{ book.msg2 }}/msg3{{ book.msg3 }}/背景{{ book.bgColor }}/文字{{ book.textColor }}
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
</template>

<script>
export default {
  data() {
    return {
      message: "",
      books: {}
    };
  },
  created: function() {
    this.getBook();
  },
  methods: {
    getBook() {
      axios
        .get("/api/books/")
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
          this.message = error;
        });
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
    }
  }
};
</script>
