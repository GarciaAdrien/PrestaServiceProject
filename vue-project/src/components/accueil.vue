<script >

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
<nav>
  <input id="nav-toggle" type="checkbox">
  <div class="logo"><strong></strong></div>
  <ul class="links">
    <li><a href="exploration">Explorer</a></li>
    <li><a href="ajoutPrestation">Ajouter une Prestation</a></li>
    <li><a href="mesprestations">Mes Prestations</a></li> 
    <li><a href="compte">Mon Compte</a></li>
    <li><a href="connexion">Connexion</a></li>
  </ul>
  <label for="nav-toggle" class="icon-burger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </label>
</nav>

<div class="container">

</div>
  <p id="AccueilWelcome"> Bienvenue sur PrestaService</p>
  <div id="exploration"><a href="exploration"><p>Trouvez dès maintenant le meilleur professionnel proche de chez vous</p></a></div>
  </div>

</template>

<style >
body {
  padding: 0;
  margin: 0;
}
.container {
  position: relative;
  margin-top: 100px;
}
.container img {
  display: block;
  width: 100%;
}
nav {
    position: fixed;
    z-index: 10;
    left: 400px;
    right: 0;
    top: 0px;
    font-family: "Montserrat", sans-serif;
    padding: 0 5%;
    height: 120px;
    background-color: black;
}

nav .links {
  float: right;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: max-content;
}
nav .links li {
  list-style: none;
}
nav .links a {
  display: block;
  padding: 1em;
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
nav .links a:hover {
  color:rgb(204, 29, 85)

}
#AccueilWelcome {
    font-size: 60px;
    font-style: oblique;
    left: 0%;
    position: fixed;
    top: 13%;
    font-weight:bold;
}
#exploration {
  font-size:40px;
  position:fixed;
  top:30%;
  left:20%;

box-shadow: 10px 5px 0px    rgb(204, 29, 85);


}
#exploration a:hover {
    color:rgb(204, 29, 85);
}
#exploration a {
color:black;
    text-decoration:none;
}
#nav-toggle {
  position: absolute;
  top: -100px;
}
nav .icon-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}
nav .icon-burger .line {
  width: 30px;
  height: 5px;
  background-color: #fff;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 768px) {
  nav .logo {
    float: none;
    width: auto;
    justify-content: center;
  }
  nav .links {
    float: none;
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 100%;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.5s ease-in-out;
  }
  nav .links a {
    font-size: 20px;
  }
  nav :checked ~ .links {
    bottom: 0;
  }
  nav .icon-burger {
    display: block;
  }
  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(10px) rotate(225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-10px) rotate(-225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(2) {
    opacity: 0;
  }
}

.youtube-link {
  position: fixed;
  left: 20px;
  bottom: 20px;
  color: #000;
  text-decoration: none;
  font-size: 12px;
}

</style>
