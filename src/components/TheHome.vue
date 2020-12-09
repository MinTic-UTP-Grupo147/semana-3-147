<template>
<div> 
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">{{user.nombre}}</a>
            <div class="d-flex">
            <button 
            class="btn btn-outline-success" 
            type="submit"
            v-on:click.prevent="logOut"
            >Log out</button>
            </div>
        </div>
    </nav>
    <div class="container">
        
        <p>{{user}}</p>
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