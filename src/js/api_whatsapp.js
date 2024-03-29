var number = window.prompt("Por favor, insira seu número:");
  const setup = (function () {
    // console.log('setup');
    document.getElementById('sendMessage').onsubmit = function (e) {
      e.preventDefault();
      console.log('click');
      const name = document.getElementById('name').value;
      const endereco = document.getElementById('endereco').value;
      const complemento = document.getElementById('complemento').value;
      const estado = document.getElementById('estado').value;

      
      if (!number) {
        Swal.fire({
          title: "Número não inserido!",
          text: "O número do celular não foi inserido. Atualiza a página!'",
          icon: "error"
        });
        return;
      }

      link = `https://web.whatsapp.com/send?phone=${CODE_COUNTRY}${number}&text=${MESSAGE+LINE_BREAK+NAME+name+LINE_BREAK+ADRESS+endereco+LINE_BREAK+COMPLEMENT+complemento+LINE_BREAK+STATE+estado}`;
      if ((new MobileDetect(window.navigator.userAgent)).mobile()) {
        link = `https://api.whatsapp.com/send?phone=${CODE_COUNTRY}${number}&text=${MESSAGE+LINE_BREAK+NAME+name+LINE_BREAK+ADRESS+endereco+LINE_BREAK+COMPLEMENT+complemento+LINE_BREAK+STATE+estado}`;
      }
      console.log(number, link);
      window.open(link);
    };
  })
  if (window.attachEvent) {
    window.attachEvent('onload', setup);
  } else {
    window.addEventListener('load', setup, false);
  }