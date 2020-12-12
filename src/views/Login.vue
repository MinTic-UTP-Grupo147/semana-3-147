<template>
    <div class="text-center">
        <main class="form-sigin">
            <the-login></the-login>
         </main>
    </div>
</template>

<script>
import TheLogin from '@/components/auth/TheLogin.vue'
export default {
    components:{
        TheLogin
    }
}
</script>