<template>
 <div id="container">
  <div class="white-container">
    <div class="menu-container" id="transfer">
        <h1 id = "app">Cargar Servicio</h1>
        <ul>
            <label>Nombre del servicio a pagar</label>
            <b-form-input class="col-md-6" v-model="service.name" placeholder="Ingrese el nombre del servicio"></b-form-input>
            <label>Descripcion del servicio</label>
            <b-form-input class="col-md-6" v-model="service.description" placeholder="Ingrese descripcion del servicio"></b-form-input>
            <label>Monto a abonar</label>
            <b-form-input class="col-md-6" v-model="service.amount" type="number" placeholder="Ingrese monto a abonar"></b-form-input>
        </ul>
        <div id="boton2">
        <button type="button" v-on:click="createServices()" class="btn btn-success"> Confirmar</button>
        <button type="button" v-on:click="goBack()" class="btn btn-success"> Volver</button>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
class Service {
    constructor(name, description, amount) {
        this.name = name;
        this.description = description;
        this.amount = amount;
    }
}
export default {
  name: 'CreateServices',
  data () {
    return {
      service : new Service()
    }
  },
  methods:{
    createServices() {
      this.axios.post('http://localhost:3060/services/create/' + this.$route.params.id, this.service)
           .then(res => {
                        this.$route.params.services.push(res.data.services);                      
                        this.$router.push({ name: 'PayService', params: { ...this.$route.params}});})
           .catch(err => alert(err.response.data.message));
    },
    goBack () {
    this.$router.push({ name: 'PayService', params: {...this.$route.params} })
    }
  }
}
</script>

<style scoped>
  #register {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #2cc197;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
  }

  .white-container {
    display: flex;
    width: 90%;
    padding: 30px;
    margin: 0 auto;
    box-sizing: border-box;

    border: 1px solid #979797;
    border-radius: 8px;
    background-color: #fff;

    justify-content: center;
  }

  .menu-container {
    display: block;
    width: 300%;
    padding-right: 10px;
  }

  .links {
    position: relative;

    display: block;
    padding: 0;
    margin: 20px 0;
    margin-bottom: 30px;

    font-family: "Source Sans Pro";
    font-size: 16px;

    color: #666;
    border: 0;
    background-color: transparent;
  }

  #boton2{
    margin: 15px;
    height: 150px;
    margin-left: 40px;
  }

  #container{
      margin-top: 250px;
      margin-left: 250px;
      border-style : groove;
      width: 700px;
      background-color: #fbffea;
  }
</style>
