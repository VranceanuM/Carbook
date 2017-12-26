<template>
  <div class="container">
      <div class="row">
          <div class="col s12">
           <div id="requests">
            <ul class="collection with-header">
              <li class="collection-header"><h4>Requests</h4></li>
              <li v-for="question in questions" v-bind:key="question.id" class="collection-item"  >
                <div class="chip">{{question.question_id}}</div>{{question.name}}
                <router-link class="secondary-content" 
                  v-bind:to="{name:'view-requests', params:{question_id:question.question_id}}">
                  <i class="fa fa-eye"></i>
                </router-link>
              </li>
            </ul>
            <div class="fixed-action-btn">
              <router-link to="/" class="btn-floating btn-large purple darken-3">
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
        name:'requests',
        data(){
            return{
                questions:[]
            }
        },
        created() {
        db.collection('questions').get().then(querySnapshot =>{
            querySnapshot.forEach(doc=>{
            console.log(doc.data());
            const data ={
                'id':doc.id,
                'question_id':doc.data().question_id,
                'name':doc.data().name,
                'problem':doc.data().problem,
                'car':doc.data().car,
                'district':doc.data().district,
                'more':doc.data().more
            }
            this.questions.push(data)
            })
        })
        }
    }
</script>