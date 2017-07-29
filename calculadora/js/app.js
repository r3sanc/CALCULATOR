var Calculadora = {
	
	pantalla: document.getElementById("display").innerHTML,
	decimal: 0,
	signo: 0,
	quantity: 8,
	detener: 0,
	num1: 0,
	opcion: 0,
	signum: 0,
	estado: 0,
	iniciar: (
		function(){
			this.EventosClick();
		}
	),
	
	animarteclas: function(tecla){		
		document.getElementById(tecla).style.transform="scale(0.9)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},


	EventosClick: function(){
		document.getElementById("0").addEventListener("click",function(){Calculadora.vernum("0")});
		document.getElementById("1").addEventListener("click",function(){Calculadora.vernum("1")});
		document.getElementById("2").addEventListener("click",function(){Calculadora.vernum("2")});
		document.getElementById("3").addEventListener("click",function(){Calculadora.vernum("3")});
		document.getElementById("4").addEventListener("click",function(){Calculadora.vernum("4")});
		document.getElementById("5").addEventListener("click",function(){Calculadora.vernum("5")});
		document.getElementById("6").addEventListener("click",function(){Calculadora.vernum("6")});
		document.getElementById("7").addEventListener("click",function(){Calculadora.vernum("7")});
		document.getElementById("8").addEventListener("click",function(){Calculadora.vernum("8")});
		document.getElementById("9").addEventListener("click",function(){Calculadora.vernum("9")});
		document.getElementById("on").addEventListener("click",function(){Calculadora.on("")});
		document.getElementById("sign").addEventListener("click",function(){Calculadora.sign()});
		document.getElementById("dividido").addEventListener("click",function(){Calculadora.dividido()});
		document.getElementById("menos").addEventListener("click",function(){Calculadora.menos()});
		document.getElementById("punto").addEventListener("click",function(){Calculadora.punto()});
		document.getElementById("igual").addEventListener("click",function(){Calculadora.igual()});
		document.getElementById("mas").addEventListener("click",function(){Calculadora.mas()});
		document.getElementById("por").addEventListener("click",function(){Calculadora.por()});
	},

	mas: function(){
		    this.animarteclas("mas");
			this.num1 += Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 1,
			this.estado = 0,
			this.signo = 0,
			this.signum = 0,
			this.decimal = 0,
			this.verdisplay();
	},
	
		menos: function(){
		    this.animarteclas("menos");
			this.num1 = Number(this.pantalla);
			this.pantalla = "",
			this.opcion = 2,
			this.estado = 0,
			this.signo = 0,
			this.signum = 0,
			this.decimal = 0,
			this.verdisplay();
	},
	
		por: function(){
		    this.animarteclas("por");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 3,
			this.estado = 0,
			this.signo = 0,
			this.signum = 0,
			this.decimal = 0,
			this.verdisplay();
	},
	
		dividido: function(){
		    this.animarteclas("dividido");
			this.num1 = Number(this.pantalla),
			this.pantalla = "",
			this.opcion = 4,
			this.estado = 0,
			this.signo = 0,
			this.signum = 0,
			this.decimal = 0,
			this.verdisplay();
	},
	
	
	
	igual: function(){
		this.animarteclas("igual");
		switch(this.opcion){
			case 1:
					if(this.estado == 0){
						this.signum = Number(this.pantalla),
						this.pantalla = this.num1 + Number(this.pantalla),
						this.estado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)+this.signum;
					}
				break;
			case 2:
					if(this.estado == 0){
						this.signum = Number(this.pantalla),
						this.pantalla = this.num1 - Number(this.pantalla),
						this.estado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)-this.signum;
					}
				break;
			case 3:
					if(this.estado == 0){
						this.signum = Number(this.pantalla),
						this.pantalla = this.num1 * Number(this.pantalla),
						this.estado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)*this.signum;
					}
				break;
			case 4:
					if(this.estado == 0){
						this.signum = Number(this.pantalla),
						this.pantalla = this.num1 / Number(this.pantalla),
						this.estado = 1,
						this.num1 = 0;
					}else{
						this.pantalla = Number(this.pantalla)/this.signum;
					}
				break;
			default:
				break;
		}
		this.verdisplay();
	},
	
	
	
	vernum: function(valor){
		this.animarteclas(valor);
		if(this.signo == 1 && this.detener == 0){
			this.quantity += 1,
			this.detener = 1;
		}
		if(this.decimal == 1  && this.detener == 0){
			this.quantity += 1,
			this.detener = 1;
		}
		if(this.pantalla.length < this.quantity){
			if(this.pantalla != "0"){
				this.pantalla += valor;
			}else if(valor != 0){
				this.pantalla = "",
				this.pantalla += valor;
			}
			this.verdisplay();
		}
	},
	
	on: function(){
		this.animarteclas("on");
		this.pantalla = "0",
		this.decimal = 0,
		this.signum = 0,	
		this.opcion = 0,
		this.signo = 0,
		this.detener = 0,
		this.quantity = 8 
		this.num1 = 0,
		this.estado = 0,
		this.verdisplay();
	},
	
	sign: function(){
		this.animarteclas("sign");
		if(this.pantalla != 0){
			if(this.signo == 0){
				this.pantalla = "-" + this.pantalla,
				this.signo = 1;
			}else{
				this.pantalla = this.pantalla.slice(1);
				this.signo = 0;
			}
		}
		this.verdisplay();
	},

	punto: function(){
		this.animarteclas("punto");
		if(this.decimal == 0){
			this.pantalla += ".";
		}
		this.decimal = 1,
		this.verdisplay();
	},
	
	verdisplay: function(){
		if(this.pantalla.toString().length > this.controlen){
			this.pantalla = this.pantalla.toString().substring(0,8);
		}
		document.getElementById("display").innerHTML = this.pantalla;
	}		
}
Calculadora.iniciar();