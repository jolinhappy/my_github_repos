<template>
  <div id="my-repo">
    <main role="main" class="main">
      <router-view />
    </main>
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
body {
  background-color: #ffffff;
  font-family: "Noto Sans TC", sans-serif; /* 設定字型 */
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
  color: #2a2a2a;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}

ul,
ol,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
a,
a:hover,
a:focus {
  text-decoration: none;
  color: unset;
}
th,
td {
  text-align: initial;
}

.main {
  width: 100%;
  margin: 0 auto;
  flex: 1;
}

/* .container {
} */
</style>
