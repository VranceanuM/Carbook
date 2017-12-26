<template>
 <div class="container">
    <div class="row">
      <div class="col s12">
        <div id="dashboard">
            <ul class="collection with-header">
              <li class="collection-header"><h4>Register by Elit</h4></li>
              <li v-for="garage in garages" v-bind:key="garage.id" class="collection-item"  >
                <div class="chip">{{garage.garage_id}}</div>{{garage.name}}
                <router-link class="secondary-content" 
                  v-bind:to="{name:'view-garage', params:{garage_id:garage.garage_id}}">
                  <i class="fa fa-eye"></i>
                </router-link>
              </li>
            </ul>
            <div class="fixed-action-btn">
              <router-link to="/new" class="btn-floating btn-large purple darken-3">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </router-link>
              </div>
            </div>
        </div>
    </div>
 </div>
</template>
<script>
import db from './firebaseInit'
export default {
  name:'dashboard',
  data(){
      return{
         garages:[] 
      }
  },
created() {
  db.collection('Garage').get().then(querySnapshot =>{
    querySnapshot.forEach(doc=>{
      // console.log(doc.data());
      const data ={
         'id':doc.id,
         'garage_id':doc.data().garage_id,
         'name':doc.data().name,
          'phone':doc.data().phone,
          'adresaUrl':doc.data().adresaUrl
      }
      this.garages.push(data)
    })
  })
 }
}
</script>
