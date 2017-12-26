<template>
<div>
  <ul id="slide-out" class="side-nav">
    <li><div class="user-view">
      <div class="background">
        <img src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?h=350&auto=compress&cs=tinysrgb" class="responsive-img">
      </div>
      <a href="#!user"><img class="circle" src="https://carbook.ua/img/favicon_1200.png"></a>
      
    </div></li>
    <router-link to="/">
        <li><a href="#!"><i class="material-icons">cloud</i>
        Home</a></li>
    </router-link>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
    <nav>
      <a href="#" data-activates="slide-out" class="btn button-collapse" id="btnCollapse" ><i class="material-icons">view_headline
      </i></a>
      <router-link to="/" class="brand-logo center">Carbook Data Center</router-link>
    </nav>
  </div>
</template>
<script>
export default {

}
$(document).ready(function(){
$(".button-collapse").sideNav();
   });
</script>

<style>
#btnCollapse{
  display: block!important;
  background:#d1c4e9;
  margin-left:0;
  }
nav{
  background: #6a1b9a;
}

.user-view{
  height: 200px;
}
</style>
