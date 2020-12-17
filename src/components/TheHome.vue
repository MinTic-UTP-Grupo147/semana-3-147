<template>
<div> 
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">{{user.name}}</a>
            <div class="d-flex">
            <button 
            class="btn btn-lg btn-primary" 
            type="submit"
            v-on:click.prevent="logOut"
            >Log out</button>
            </div>
        </div>
    </nav>
    <div class="container mt-5">
        <div class="card position-absolute top-50 start-50 translate-middle" style="width: 18rem;">
        <div class="card-header">
        <h3>Bienvenido</h3> 
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5>Id:</h5>{{user.id}}</li>
            <li class="list-group-item"> <h5>Name:</h5>{{user.name}}</li>
            <li class="list-group-item"><h5>Email:</h5>{{user.email}}</li>
            
        </ul>
        </div>
    </div>
</div>    
</template>

<script>
 export default {
     data(){
         return{
            user:{}
         }
     },
     methods:{
         getUserDetails(){
             let user = localStorage.getItem('user');
             let token = localStorage.getItem('jwt');

             if(token){
                 this.user = JSON.parse(user);
             }
         },
     logOut(){
         localStorage.removeItem('jwt');
         localStorage.removeItem('user');
         this.$router.push('/');
     }
     },
     created(){
         this.getUserDetails();
     }
 }
 </script>