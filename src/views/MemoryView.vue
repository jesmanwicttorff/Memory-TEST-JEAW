<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useRoute , useRouter} from 'vue-router'; // We get the route parameters
const ruta = useRoute()
const ruta2 = useRouter()
const status = ref(true)
const ArrayCards= ref([{}])
const back = () =>{
    ruta2.push('/')
};
const SpinCards = ref([]) //Currently flipped cards
onMounted(() => { 
  if(ruta.params === '/')
  status.value = false
 })
const User = ruta.params.name
const arrayMemory = ref([]) 
const countSuccess = ref(0)
const countMistake = ref(0)
const getData = async() =>{
    try { 
        let i=0
       const imagen1 = new Image();
       const imagen2 = new Image();
       const imagen3 = new Image();
       const imagen4 = new Image();
       const imagen5 = new Image();
       const imagen6 = new Image();
       const imagen7 = new Image();
       const imagen8 = new Image();
       const imagen9 = new Image();
       const imagen10 = new Image();
       const imagen11 = new Image();
       const imagen12 = new Image();
       const imagen13 = new Image();
       const imagen14 = new Image();
       const imagen15 = new Image();
       const imagen16 = new Image();
       const imagen17 = new Image();
       const imagen18 = new Image();
       const imagen19 = new Image();
       const imagen20 = new Image();
       const {data} = await axios.get("https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20")
       arrayMemory.value = data.entries
      
        // Ruta de la primera imagen
        imagen1.src = data.entries[0].fields.image.url;
        imagen2.src = data.entries[1].fields.image.url; // Ruta de la primera imagen
        imagen3.src = data.entries[2].fields.image.url; // Ruta de la primera imagen
        imagen4.src = data.entries[3].fields.image.url; // Ruta de la primera imagen
        imagen5.src = data.entries[4].fields.image.url; // Ruta de la primera imagen
        imagen6.src = data.entries[5].fields.image.url; // Ruta de la primera imagen
        imagen7.src = data.entries[6].fields.image.url; // Ruta de la primera imagen
        imagen8.src = data.entries[7].fields.image.url; // Ruta de la primera imagen
        imagen9.src = data.entries[8].fields.image.url; // Ruta de la primera imagen
        imagen10.src = data.entries[9].fields.image.url; // Ruta de la primera imagen
        imagen11.src = data.entries[10].fields.image.url; // Ruta de la primera imagen
        imagen12.src = data.entries[11].fields.image.url; // Ruta de la primera imagen
        imagen13.src = data.entries[12].fields.image.url; // Ruta de la primera imagen
        imagen14.src = data.entries[13].fields.image.url; // Ruta de la primera imagen
        imagen15.src = data.entries[14].fields.image.url; // Ruta de la primera imagen
        imagen16.src = data.entries[15].fields.image.url; // Ruta de la primera imagen
        imagen17.src = data.entries[16].fields.image.url; // Ruta de la primera imagen
        imagen18.src = data.entries[17].fields.image.url; // Ruta de la primera imagen
        imagen19.src = data.entries[18].fields.image.url; // Ruta de la primera imagen
        imagen20.src = data.entries[19].fields.image.url; // Ruta de la primera imagen
       

       ArrayCards.value=[
            { image: imagen1.src, RaiseCard: false , name:"Bear"},
            { image: imagen2.src, RaiseCard: false , name:"Bird"},
            { image: imagen3.src, RaiseCard: false , name:"Cat"},
            { image: imagen4.src, RaiseCard: false , name:"Deer"},
            { image: imagen5.src, RaiseCard: false , name:"Dog" },
            { image: imagen6.src, RaiseCard: false , name:"Dolphin" },
            { image: imagen7.src, RaiseCard: false , name:"Fish" },
            { image: imagen8.src, RaiseCard: false , name:"Fox"},
            { image: imagen9.src, RaiseCard: false , name:"Frog" },
            { image: imagen10.src, RaiseCard: false , name : "Lion" },
            { image: imagen11.src, RaiseCard: false , name:"Monkey" },
            { image: imagen7.src, RaiseCard: false , name:"Fish" },
            { image: imagen12.src, RaiseCard: false , name:"Mouse"},
            { image: imagen20.src, RaiseCard: false , name:'Zebra' },
            { image: imagen13.src, RaiseCard: false , name:"Penguin" },
            { image: imagen14.src, RaiseCard: false , name:"Rabbit"},
            { image: imagen15.src, RaiseCard: false, name :"Seal" },
            { image: imagen4.src, RaiseCard: false , name:"Deer"},
            { image: imagen16.src, RaiseCard: false , name:"Squirrel"},
            { image: imagen18.src, RaiseCard: false,  name:"Turtle" },
            { image: imagen9.src, RaiseCard: false , name:"Frog" },
            { image: imagen17.src, RaiseCard: false, name:"Tiger" },
            { image: imagen13.src, RaiseCard: false , name:"Penguin" },
            { image: imagen18.src, RaiseCard: false,  name:"Turtle" },
            { image: imagen6.src, RaiseCard: false , name:"Dolphin" },
            { image: imagen19.src, RaiseCard: false , name:"Wild-pig" },
            { image: imagen1.src, RaiseCard: false , name:"Bear"},
            { image: imagen20.src, RaiseCard: false , name:'Zebra' },
            { image: imagen2.src, RaiseCard: false , name:"Bird"},
            { image: imagen3.src, RaiseCard: false , name:"Cat"},   
            { image: imagen16.src, RaiseCard: false , name:"Squirrel"},         
            { image: imagen5.src, RaiseCard: false , name:"Dog" },
            { image: imagen15.src, RaiseCard: false, name :"Seal" },
            { image: imagen8.src, RaiseCard: false , name:"Fox"},
            { image: imagen19.src, RaiseCard: false , name:"Wild-pig" },
            { image: imagen11.src, RaiseCard: false , name:"Monkey" },
            { image: imagen12.src, RaiseCard: false , name:"Mouse"},
            { image: imagen14.src, RaiseCard: false , name:"Rabbit"},
            { image: imagen17.src, RaiseCard: false, name:"Tiger" },
            { image: imagen10.src, RaiseCard: false , name : "Lion" }
        ]
       
    } catch(e){
        console.log(e)
    } 
    }
    const getCard = (index) => {
            if (SpinCards.value.length < 2 && !ArrayCards.value[index].RaiseCard) {
                ArrayCards.value[index].RaiseCard = true;
                SpinCards.value.push(index);

                if (SpinCards.value.length === 2) {
                    const [index1, index2] = SpinCards.value;
                    if (ArrayCards.value[index1].image === ArrayCards.value[index2].image) {
                       countSuccess.value = countSuccess.value +1;
                        // Cartas coincidentes, déjalas boca arriba.
                        SpinCards.value = [];
                        if( countSuccess.value === 20){
                            Swal.fire({
                                icon: 'success',
                                title: 'Congratulations ' + User + ' !!!',
                                text: 'You have won the Memory game'
                                })
                        }
                    } else {
                        countMistake.value = countMistake.value + 1
                        // No coinciden, espera un momento y luego voltea las cartas.
                        setTimeout(() => {
                            ArrayCards.value[index1].RaiseCard = false;
                            ArrayCards.value[index2].RaiseCard = false;
                            SpinCards.value = [];
                        }, 1000);
                    }
                }
            }
        }
    getData();
</script>
<template>
    <div  class="container">
    <h1>{{User}}</h1>
    <div class="d-flex justify-content-center mt-5">
        <h5 >Success: {{ countSuccess }} </h5>
        <h5 class="ms-2">-</h5>
        <h5 class="ms-4">Mistake: {{ countMistake }}</h5>
    </div>
    <div id="app">   
    <div v-for="(card, index) in ArrayCards" :key="index" class="card" @click="getCard(index)">
            <div :class="{ 'raise-card': card.RaiseCard }" class="card-inner">
                <div class="front">?</div>
                <img v-if="card.RaiseCard==true" class="back" :src="card.image" alt="Imagen de tarjeta">
                
            </div>
        </div>
    </div><br>
    
    <button @click="back" class="btn btn-outline-success ms-2">Come Back</button>
    <footer class="ms-2">Created by Jesman Arteaga</footer>
    </div>
    
</template>
<style>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

#app {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
}

.card {
    width: 45px;
    height: 50px;
    margin: 5px;
    perspective: 1000px;
    cursor: pointer;
}

.card-inner {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}

.card:hover .card-inner {
    transform: rotateY(180deg);
}

.front,
.back {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    backface-visibility: hidden;
    font-size: 24px;
    font-weight: bold;
}

.front {
    background-color: #007bff;
    color: #fff;
}

.face-up .front {
    display: none;
}

.face-up .back {
    display: flex;
}
</style>