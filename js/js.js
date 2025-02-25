function send() {
    var templateParams = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        message: document.getElementById('message')
      };
      
      emailjs.send('service_87n7yws', 'template_mxdpv46', templateParams).then(
        (response) => {
            alert('SUCCESS!', response.status, response.text);
        },
        (error) => {
            alert('FAILED...', error);
        },
      );
    
    }



    



  