function verif()
  {
   var error=false;
      var trouve=false;
if(document.connexion.username.value==="")
{
alert("vous devez saisir votre adresse");
error=true ;
}
if(document.connexion.password.value=="")
{
alert("vous devez saisir votre mot de passe");
error=true;
}
  }
  function verif1()
  {
    var error=false;
      var trouve=false;
if(document.creation.Nom.value=="")
{
alert("vous devez saisir votre nom");
error=true ;

}
if(document.creation.Prenom.value=="")
{
alert("vous devez saisir votre prénom");
error=true ; 
}
if(document.creation.email.value=="")
{
alert("vous devez saisir votre email");
error=true ;

 }
 if(document.creation.password_first.value=="")
{
alert("vous devez saisir un mot de passe");
error=true ;

 }
 if(document.creation.password_second.value=="")
{
alert("vous devez confirmer votre mot de passe");
error=true ;
 }
 if(document.creation.password_first.value!=document.creation.password_second.value)
 {
  alert("vous devez verifier votre mot de passe")
 }
 if (isNaN(document.creation.Tel.value))

alert("vous devez saisir un numéro");

if(docyment.creation.Tel.value.length != 8)
{
alert("vous devez saisir un numéro télephone composé de 8 chiffres");
error=true;
}
if (error)
document.creation.sumbit();
}

function cookies()
{
  window.confirm("Vous pouvez accepter les cookies?");
}
