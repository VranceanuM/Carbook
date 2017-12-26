<template>
  <div id="view-garage">
     <ul class="collection width-header">
      <li class="collection-header"><h4>{{name}}</h4></li>
      <li class="collection-item">AdresaUrl:{{adresaUrl}}</li>
      <li class="collection-item">Phone:{{phone}}</li>
      <li class="collection-item">Garage ID#:{{garage_id}}</li>
      </ul>
      <router-link to="/" class="btn grey">Back</router-link>
      <button  @click="deleteGarage" class="btn red">Delete</button>
       <div class="fixed-action-btn">
              <router-link v-bind:to="{name:'edit-garage',params:{garage_id:garage_id}}" 
               class="btn-floating btn-large purple darken-3">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </router-link>
       </div>
  </div>

</template>
<script>
import db from './firebaseInit'
export default {
  name:'view-garage',
  data(){
      return{
          adresaUrl:null,
          garage_id:null,
          name:null,
          phone:null
      }
  },
 beforeRouteEnter: (to, from, next) => {
    db.collection('Garage').where('garage_id', '==', to.params.garage_id).get()
    .then(querySnapshot =>{
      querySnapshot.forEach(doc => {
        next(vm =>{
          vm.garage_id = doc.data().garage_id
          vm.adresaUrl = doc.data().adresaUrl
          vm.name      = doc.data().name
          vm.phone     = doc.data().phone
        })
      })
    })
 },
 watch: {
   '$route':'fetchData'
 },
 methods:{
   fetchData(){
     db.collection('Garage').where('garage_id', '==' , this.$route.params.garage_id).get()
     .then(querySnapshot =>{ 
        querySnapshot.forEach(doc =>{
          this.garage_id = doc.data().garage_id
          this.adresaUrl = doc.data().adresaUrl
          this.name      = doc.data().name
          this.phone     = doc.data().phone
        })
     })
   },
   deleteGarage(){
   if(confirm('Are you sure you want to delete?')){
     db.collection('Garage').where('garage_id', '==' , this.$route.params.garage_id).get()
     .then(querySnapshot =>{ 
        querySnapshot.forEach(doc =>{
         doc.ref.delete()
         this.$router.push('/')
        })
     })
   }
  }
  }
 }
</script>
