<template>
  <div id="new-garage">
      <h3>New Garage</h3>
    <div class="row">
      <form @submit.prevent="saveGarage" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="garage_id" required>
            <label>Garage ID#</label>
          </div>
        </div>
         <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label>Name</label>
          </div>
        </div>
         <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="adresaUrl" required>
            <label>AdresaUrl</label>
          </div>
        </div>
         <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="phone" required>
            <label>Phone</label>
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
  name:'new-garage',
  data(){
      return{
          adresaUrl:null,
          garage_id:null,
          name:null,
          phone:null
      }
  },
  methods: {
    saveGarage(){
      db.collection('Garage').add({
        adresaUrl: this.adresaUrl,
        garage_id: this.garage_id,
        name: this.name,
        phone: this.phone
      }).then(docRef => {this.$router.push('/')})
        .catch(error => console.log(err))
    }
  }
}
</script>
<style scoped>
input[type=text]{
  border-bottom: 1px solid rgb(43, 187, 173)
}
</style>
