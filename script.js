function sendEmail(){
    emailjs.init({
  publicKey: 'RRlahPfj_j4j1d1LI',
});
            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();

            const params={
                from_name:name,
                from_email:email,
                message:message,
            };

emailjs.send('service_7q8oc8f', 'template_8uy98iw', params).then(function(){
    alert('Email sent !');
}).catch(function(){
    alert('Failed to sent!');
})

           
}