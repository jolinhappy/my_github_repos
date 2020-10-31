<template>
  <div class="container">
    <Navbar />
    <div class="my-profile">
      <div class="profile-title">My profile</div>
      <div class="prfile-card">
        <div class="img-part">
          <img
            src="https://avatars0.githubusercontent.com/u/58591365?v=4"
            alt=""
            class="profile-img"
          />
        </div>
        <div class="name">jolin</div>
        <div class="account">jolin123</div>
        <div class="bio">hihi</div>
        <div class="followship">
          <font-awesome-icon icon="users" class="followship-icon" />
          <div class="followers">
            <strong>100</strong> <span>followers</span>
          </div>
          <div class="followings">
            ．<strong>30</strong> <span>followings</span>
          </div>
        </div>
        <div class="blog">
          <font-awesome-icon icon="link" class="blog-icon" />
          <a href="#" class="blog-link">WWW</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from ".././components/Navbar";
export default {
  name: "Profile",
  components: {
    Navbar,
  },
};
</script>


<style scoped>
.profile-title {
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 10px;
  color: #484891;
}
.my-profile {
  width: 80%;
  margin: auto;
}
.prfile-card {
  width: 430px;
  height: 400px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  box-shadow: 2px 5px 10px gray;
  border-radius: 20px;
}

.profile-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 30px 0 15px 0;
}
.name {
  font-weight: 700;
  font-size: 25px;
}
.account {
  font-size: 15px;
}
.bio {
  font-size: 13px;
  margin-bottom: 15px;
}
.followship {
  display: flex;
  align-items: center;
}
.followship-icon {
  margin-right: 5px;
  width: 17px;
  height: 17px;
}
.followers,
.followings {
  font-size: 15px;
}

.blog-icon {
  margin-right: 5px;
  width: 15px;
  height: 15px;
}
.blog-link {
  font-size: 15px;
}
@media screen and (min-width: 768px) {
  .profile-title {
    font-size: 35px;
  }
}
</style>