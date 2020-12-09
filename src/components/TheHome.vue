<template>
<div> <h1>Inicio</h1>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">{{user.nombre}}</a>
            <form class="d-flex">
            <button 
            class="btn btn-outline-success" 
            type="submit"
            v-on:click.prevent="logOut"
            >Log out</button>
            </form>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        getUserDetails(){

        },
    logOut(){
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        this.$router.push('/');
    }
    },
    created(){
        this.getUserDetails;
    }
}
</script>