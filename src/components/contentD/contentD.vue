<template>
    <div id="contentD">
        <table class="table table-striped">
            <tbody>
                <tr>
                    <td v-for="title in table.titleList">{{title}}</td>
                </tr>
                <tr v-for="obj in table.content">
                    <td>{{obj.date}}</td>
                    <td v-for="cell in obj.data">{{cell}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: "contentD",
  data() {
    return {
      table: {
        titleList: ["列0", "列1", "列2", "列3", "列4", "列5"],
        content: [
          {
            date: "2月1日",
            data: [1, 2, 3, 4, 5]
          },
          {
            date: "2月2日",
            data: [1, 2, 3, 4, 5]
          },
          {
            date: "2月3日",
            data: [1, 2, 3, 4, 5]
          },
          {
            date: "2月4日",
            data: [1, 2, 3, 4, 5]
          },
          {
            date: "2月5日",
            data: [1, 2, 3, 4, 5]
          }
        ]
      }
    };
  }
};
</script>