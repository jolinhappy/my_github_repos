<template>
  <div class="container">
    <Navbar />
    <div class="repo-table">
      <div class="table-title">My repos</div>
      <table class="main-table">
        <thead class="table-header">
          <tr class="table-header-list">
            <th class="table-header-title">name</th>
            <th class="table-header-title">discription</th>
            <th class="table-header-title">link</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr class="table-body-list">
            <td class="table-content-name">123</td>
            <td class="table-content-description">1234</td>
            <td class="table-content-link">
              <a href="#">url</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from ".././components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.table-title {
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 10px;
}
.repo-table {
  width: 80%;
  margin: auto;
}

.main-table {
  width: 100%;
  height: auto;
}
.table-header {
  background: #5a5aad;
  color: #ffffff;
  border: solid 1px red;
}

.table-body {
  border: solid 1px red;
}
th,
td {
  padding-left: 5px;
}

@media screen and (min-width: 768px) {
  .table-title {
    font-size: 35px;
  }
}
</style>