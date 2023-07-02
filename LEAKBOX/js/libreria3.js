// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            calcular();
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  
  function calcular(){
      //alert("Todo listo para calcular");
      var nombre = document.getElementById("txtNombre").value;
      var producto = document.getElementById("txtpro").value;
      var departamento = document.getElementById("cbodepa").value;
      var peso = document.getElementById("txtpeso").value;; 
      var peso1=peso*1;
      var costo ;
      if(departamento == "Amazonas"){
          costo = peso1 * 1.20;
      }
      else if(departamento == "Ancash"){
          costo = peso1 * 1.53;
      }
      else if(departamento == "Apurimac"){
          costo = peso1 * 1.54;
      }
      else if(departamento == "Arequipa"){
          costo = peso1 * 1.24;
      }
          else if(departamento == "Ayacuho"){
          costo = peso1 * 1.45;
      }
      else if(departamento == "Cajamarca"){
          costo = peso1 * 1.32;
      }
      else if(departamento == "Cusco"){
          costo = peso1 * 1.23;
      }
      else if(departamento == "Huancavelica"){
          costo = peso1 * 1.15;
      }
      else if(departamento == "Huanuco"){
          costo = peso1 * 1.24;
      }
      else if(departamento == "Ica"){
          costo = peso1 * 1,13;
      }
      else if(departamento == "Junin"){
          costo = peso1 * 1.16;
      }
      else if(departamento == "La Libertad"){
          costo = peso1 * 1.04;
      }
      else if(departamento == "Lambayeque"){
          costo = peso1 * 1.02;
      }
      else if(departamento == "Lima"){
          costo = peso1 * 1.01;
      }
      else if(departamento == "Loreto"){
          costo = peso1 * 1.12;
      }
      else if(departamento == "Madre de Dios"){
          costo = peso1 * 1.10;
      }
      else if(departamento == "Moquegua"){
          costo = peso1 * 1.2;
      }
      else if(departamento == "Pasco"){
          costo = peso1 * 1.1;
      }
      else if(departamento == "Piura"){
          costo = peso1 * 1;
      }
      else if(departamento == "Puno"){
          costo = peso1 * 2;
      }
      else if(departamento == "San Martin"){
          costo = peso1 * 2;
      }
      else if(departamento == "Tumbes"){
          costo = peso1 * 1;
      }
      else{
          costo = peso1 * 1;
      }
      
      
      
      alert("Hola" +"  "+nombre+ 
           "\nRESUMEN\nEl producto: "+ producto+
            "\nTiene el costo: "+costo );
  }