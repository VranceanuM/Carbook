<template>
  <div id="edit-garage">
      <h3>Edit Garage</h3>
      <div class="row">
      <form @submit.prevent="updateGarage" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="garage_id" required>
            
          </div>
        </div>
         <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
          
          </div>
        </div>
         <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="adresaUrl" required>
            
          </div>
        </div>
         <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="phone" required>
            
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>
<script>
import db from './firebaseInit'
export default {
  name:'edit-garage',
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
   updateGarage(){
      db.collection('Garage').where('garage_id', '==' , this.$route.params.garage_id).get()
     .then(querySnapshot =>{ 
        querySnapshot.forEach(doc =>{
          doc.ref.update({
              adresaUrl: this.adresaUrl,
              garage_id: this.garage_id,
              name: this.name,
              phone: this.phone
          }).then(() => {
            this.$router.push({name: 'view-garage', params:{garage_id:this.garage_id}})
          })
            .catch(error => console.log(err))
        })
     })
   }
  }
}
</script>
