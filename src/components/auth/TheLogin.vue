<template>
    <form class="w-50 p-3 position-absolute top-50 start-50 translate-middle">
            <img class="mb-4" src="https://placeimg.com/72/57/arch/grayscale" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        
            <label for="inputEmail" class="visually-hidden">Email address</label>
            <input 
            type="email" 
            class="form-control"
            id="inputEmail" 
            placeholder="Email address"
            aria-describedby="emailHelp"
            v-model="login.email"
            required>
        
            <label for="exampleInputPassword1" class="visually-hidden">Password</label>
            <input 
            type="password" 
            class="form-control" 
            placeholder="Password"
            id="exampleInputPassword1"
            v-model="login.password"
            required>
        
        
            <button 
            type="submit" 
            class="w-100 btn btn-lg btn-primary mt-5"
            @click.prevent="loginUser"
            >Sign in</button>
    </form>
</template>

<script>

import swal from 'sweetalert';

export default {
    data(){
        return{
            login:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        async loginUser(){
            try{
                let response = await this.$http.post('/api/auth/signin',this.login);
                let token = response.data.accessToken;
                let user = response.data.user;

                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));

                if(token){
                    swal("Correcto","Login correcto","success")
                    this.$router.push('/home');
                }
            }
            catch(e){
                swal("Invalido","Login incorrecto","error")
            }

        }
    }
}
</script>