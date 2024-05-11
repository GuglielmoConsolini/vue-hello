const { createApp } = Vue

const configurazione = {
    data(){
        return{
            message: "Benvenuti a VueWorld",
            nome: "Guglielmo",
            cognome: "Consolini"
        }
       
    } ,
    
    methods: {
     cambiaColore() {
		if(this.titleClass == "red") {
			this.titleClass = "blue";
		} else {
			this.titleClass = "red";
		}
		}

    }
};

let app = Vue.createApp(configurazione);

app.mount('#app');