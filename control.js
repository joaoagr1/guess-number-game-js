      var numeroSortido = Math.floor(Math.random() * 500) + 1;
      var contErro = 0;
      var tentativas= 0;
      var indicadorTentativas=7;

      document.getElementById("numeroForm").addEventListener("submit", function(event) {
         event.preventDefault(); // Impede o envio do formulário

         var numeroEscolhido = document.getElementById("numeroEscolhido").value;

         if (numeroSortido == numeroEscolhido) {
            showMessage("Você acertou o número",tentativas);
            alert("Você acertou o número!!");
            location.reload(true);
         } else if (numeroSortido > numeroEscolhido) {
            tentativas = indicadorTentativas-contErro;
            showMessage("Digite um número maior!","Tentativas Restantes: " + tentativas);
            contErro++;
         } else {
            tentativas = indicadorTentativas-contErro;
            showMessage("Digite um número menor!","Tentativas Restantes: " + tentativas);
            contErro++;
         }

         if (contErro > indicadorTentativas) {
            alert("Você gastou todas as suas tentativas... Recomece o jogo!!!");
            location.reload(true);

         }
      });

      function showMessage(message,tentativas) {
         document.getElementById("message").innerHTML = message;
         document.getElementById("tentativas").innerHTML = tentativas;
      }

      
