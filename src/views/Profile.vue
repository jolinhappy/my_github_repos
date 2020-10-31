<template>
  <div class="container">
    <Navbar />
    <div class="my-profile">
      <div class="profile-title">My Profile</div>
      <div class="prfile-card">
        <div class="img-part">
          <img :src="profile.avatar" alt="" class="profile-img" />
        </div>
        <div class="name">{{ profile.name }}</div>
        <div class="account">{{ profile.account }}</div>
        <div class="bio">{{ profile.bio }}</div>
        <div class="followship">
          <font-awesome-icon icon="users" class="followship-icon" />
          <div class="followers">
            <strong>{{ profile.followers }}</strong> <span>followers</span>
          </div>
          <div class="followings">
            ．<strong>{{ profile.following }}</strong> <span>following</span>
          </div>
        </div>
        <div class="blog">
          <font-awesome-icon icon="link" class="blog-icon" />
          <a :href="profile.blog" class="blog-link">{{ profile.blog }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from ".././components/Navbar";
import profileAPI from ".././apis/profile";
export default {
  name: "Profile",
  components: {
    Navbar,
  },
  data() {
    return {
      profile: {
        avatar: "",
        name: "",
        account: "",
        bio: "",
        followers: "",
        following: "",
        blog: "",
      },
    };
  },
  created() {
    this.fetchProfle();
  },
  methods: {
    async fetchProfle() {
      const { data } = await profileAPI.getProfile();
      this.profile = {
        avatar: data.avatar_url,
        name: data.name,
        account: data.login,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        blog: data.blog,
      };
    },
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
  width: 430px;
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
  margin-top: -5px;
  margin-bottom: 7px;
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
.blog-link:hover {
  text-decoration: underline;
  color: blue;
}

@media screen and (min-width: 768px) {
  .profile-title {
    font-size: 35px;
  }
}
</style>