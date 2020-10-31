<template>
  <div class="container">
    <Navbar />
    <div class="repo-table">
      <div class="table-title">My repos</div>
      <table class="main-table">
        <thead class="table-header">
          <tr class="table-header-list">
            <th class="table-header-title header-name">name</th>
            <th class="table-header-title header-description">discription</th>
            <th class="table-header-title header-link">link</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr
            class="table-body-list"
            v-for="repo in currentRenderRepos"
            :key="repo.id"
          >
            <td class="table-content-name body-name">{{ repo.name }}</td>
            <td class="table-content-description body-description">
              {{ repo.description | descriptionFilter }}
            </td>
            <td class="table-content-link body-link">
              <a :href="repo.html_url">{{ repo.html_url }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from ".././components/Navbar";
import reposAPI from ".././apis/repo";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      myTotalRepos: [],
      currentRenderRepos: [],
      perLoadingReposCount: 10,
      totalRenderCounts: null,
      currentLoadingCount: 0,
    };
  },
  created() {
    this.fetchRepos();
    window.addEventListener(
      "scroll",
      () => {
        this.scroll();
      },
      true
    );
  },
  methods: {
    async fetchRepos() {
      const { data } = await reposAPI.getRepos();
      this.myTotalRepos = data;
      this.getLoadingCount(this.myTotalRepos);
      this.loadingRepos();
    },
    getLoadingCount(myTotalRepos) {
      this.totalRenderCounts =
        Math.ceil(myTotalRepos.length / this.perLoadingReposCount) || 1;
    },
    loadingRepos() {
      this.currentLoadingCount++;
      if (this.myTotalRepos.length === 0) {
        return "沒有相關資料";
      } else if (this.currentLoadingCount > this.totalRenderCounts) {
        return;
      } else if (this.currentLoadingCount === this.totalRenderCounts) {
        let start = (this.currentLoadingCount - 1) * this.perLoadingReposCount;
        let pushData = this.myTotalRepos.slice(start, this.myTotalRepos.length);
        this.currentRenderRepos.push(...pushData);
      } else {
        let start = (this.currentLoadingCount - 1) * this.perLoadingReposCount;
        let pushData = this.myTotalRepos.slice(
          start,
          start + this.perLoadingReposCount
        );
        this.currentRenderRepos.push(...pushData);
      }
    },
    scroll() {
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      if (scrollY + visible > pageHeight) {
        this.loadingRepos();
      }
    },
  },
  filters: {
    descriptionFilter(text) {
      return text === null ? "-" : text;
    },
  },
};
</script>

<style scoped>
.table-title {
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 10px;
  color: #484891;
}
.repo-table {
  width: 80%;
  margin: auto;
}

.main-table {
  width: 100%;
  height: 90%;
  table-layout: fixed;
  border-collapse: collapse;
  margin-bottom: 60px;
  box-shadow: 2px 5px 10px gray;
}
.table-header {
  background: #5a5aad;
  color: #ffffff;
}
.table-body {
  background: #ffffff;
}
.table-header-list,
.table-body-list {
  height: 50px;
}

th,
td {
  font-size: 5px;
  border: #5a5aad 1px solid;
}
th {
  text-align: center;
}
td {
  padding-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-name,
.body-name {
  width: 50px;
}
.header-description,
.body-description {
  width: 100px;
}

.header-link,
.body-link {
  width: 60px;
}

.body-link:hover {
  text-decoration: underline;
  color: blue;
}

@media screen and (min-width: 768px) {
  .table-title {
    font-size: 35px;
  }

  .header-name,
  .body-name {
    width: 300px;
  }
  .header-description,
  .body-description {
    width: 500px;
  }

  .header-link,
  .body-link {
    width: 350px;
  }

  th,
  td {
    font-size: 15px;
  }

  .table-header-list,
  .table-body-list {
    height: 60px;
  }
}
</style>