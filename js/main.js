$('document').ready(()=>{  
    tata();
    // let dataS = "status=" + $('#potencia').val();
    let e1=0, e2=0, e3=0, e4=0, e5=0, e6=0;
    setInterval(() => {  
        $.ajax({
            type: "GET",
            url: "https://voicebackend.000webhostapp.com/backend",
            success: function(res){
                let valor = JSON.parse(res);
                if(valor.hasOwnProperty('data')){
                    let a1 = valor.data[0]['xM'];
                    let a2 = valor.data[0]['yM'];
                    let a3 = valor.data[0]['zM'];
                    let a4 = valor.data[0]['xT'];
                    let a5 = valor.data[0]['yT'];
                    let a6 = valor.data[0]['zT'];
    
                    if(a1 != e1 || a2 != e2 || a3 != e3 || a4 != e4 || a6 != e6){
                        $('#tcoordenadas').DataTable().destroy();
                        tata(); 
                        e1 = a1;
                        e2 = a2;
                        e3 = a3;
                        e4 = a4;
                        e5 = a5;
                        e6 = a6;
                    }
                }                
            }
        });                    
    }, 2000);

    function tata(){
        $('#tcoordenadas').DataTable({
            "scrollY":300,
            "ordering":false,
            "ajax":{
                "method":"POST",
                "url":"https://voicebackend.000webhostapp.com/backend",
                "error":function(){
                    console.log("falla");
                }
            },
            "columns":[
                {"data":"id"},
                {"data":"xM"},
                {"data":"yM"},
                {"data":"zM"},
                {"data":"xT"},
                {"data":"yT"},
                {"data":"zT"}
            ]
        });
    }
});