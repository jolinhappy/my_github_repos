<template>
  <div id="navbar">
    <div class="nav-title">
      <a href="#">My GitHub Data</a>
    </div>
    <input type="checkBox" class="navbar-toggle" id="navbar-toggle" />
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#" class="nav-link">my repo</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">my profile</a>
        </li>
      </ul>
    </nav>
    <label for="navbar-toggle" class="navbar-toggle-label">
      <span class="hamburger"></span>
    </label>
  </div>
</template>


<style scoped>
#navbar {
  margin-bottom: 10px;
  width: 100%;
  height: 60px;
  background: #8f4586;
  color: #ffffff;
  font-weight: 700;
  position: relative;
}
.nav {
  position: absolute;
  width: 100%;
  top: 100%;
  background: #c07ab8;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 0.2s ease-out;
}
.nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-item {
  font-size: 1.2rem;
  font-weight: normal;
  margin: 10px 0;
  opacity: 0;
}

.navbar-toggle:checked ~ .nav {
  transform: scale(1, 1);
}
.navbar-toggle:checked ~ .nav .nav-item {
  opacity: 1;
  transition: opacity 0.2s ease-out 0.15s;
}

.navbar-toggle {
  visibility: hidden;
  position: absolute;
}

.nav-title {
  color: #ffc1e0;
  font-size: 25px;
  line-height: 60px;
  text-align: center;
}

.navbar-toggle-label {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 6%;
  display: flex;
  align-items: center;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  width: 30px;
  height: 3px;
  background: #ffc1e0;
}

.hamburger::before,
.hamburger::after {
  content: "s";
  position: absolute;
  top: 0;
}

.hamburger::before,
.hamburger::after {
  position: absolute;
  left: 0;
  content: "";
}

.hamburger {
  position: relative;
}

.hamburger::before {
  top: 8px;
}

.hamburger::after {
  top: -8px;
}
</style>