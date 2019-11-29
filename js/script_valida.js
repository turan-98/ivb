$(document).ready(function(){
	$("#ivb_qtd_anovigencia").change(function(){
		//variáveis
		var $value_ivb = $("#ivb_qtd_anovigencia").val(),
			alfa = ['a','b','c','d','e','f','g','h','i','j','k','l','o','p','q'
					,'r','s','u','t','v','w','y','z','ç','<','>']


		//desativando o botão de envio
		$("#configButton").attr('disabled','disabled')
		
		for(i = 0; i < alfa.length; i++){
			for(j = 0; j < $value_ivb.length; j++){
				if(alfa[i] == $value_ivb[j]){
					alert("Apenas números aqui")
				}
			}
		}


	});
});

/*
}*/