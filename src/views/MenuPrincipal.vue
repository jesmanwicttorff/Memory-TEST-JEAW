<script setup>
import { onMounted, ref } from 'vue'
import { useRouter} from 'vue-router';

const ruta = useRouter()

const status = ref(true)
const name = ref('')
  status.value = true
 const handleSubmit = (e) => {
      e.preventDefault() // tomar los dato a traves del action
      status.value= false
      ruta.push(`/memory/${name.value}`)
 }
 onMounted(() => { 
  if(ruta.params === undefined)
  status.value = true
 })
 
</script>
<template>
  <nav class="navbar navbar-light bg-light">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Welcome to the Memory Game
    </router-link><br>
    
  </div>  
</nav>

<div class="container" >
  <form @submit="(e) =>handleSubmit(e)" v-if="status===true">
        <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping"></span>
        <input type="text" v-model="name" class="name form-control" placeholder="Enter your Name" aria-label="Username" aria-describedby="addon-wrapping">
      </div><br>
     <!--- <router-link  class="btn btn-primary" :to="`/memory/${name}`">Aceptar</router-link>-->
     <button type="submit" class="btn btn-primary">Success</button>
  </form>
 
</div>

 
</template>