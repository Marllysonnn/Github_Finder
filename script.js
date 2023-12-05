const usernameInput = document.getElementById('github-username');
const userElement = document.querySelector('.user');
const profileLink = document.querySelector('.nick a');
const reposElement = document.querySelector('.repos');
const followersElement = document.querySelector('.follow');
const followingElement = document.querySelector('.followi');
const locationElement = document.querySelector('.local');
const companyElement = document.querySelector('.empresa');
const twitterElement = document.querySelector('.git');
const siteElement = document.querySelector('.site');
const profileImage = document.querySelector('.perfil');
const bioContent = document.querySelector('.bio');
const joinnedElement = document.querySelector('.login');

// Buscar os dados do GitHub com a api
function fetchGitHubData() {
  const username = usernameInput.value;
  const apiUrl = `https://api.github.com/users/${username}`;

  // Transformar os dados caputrados em json
  fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro na solicitação da API');
      }
    })
    .then(data => {
      // Selecionar quais itens do codigo serão trocados
      userElement.textContent = data.name || data.login;
      profileLink.href = data.html_url;
      profileLink.textContent = `@${data.login}`;
      reposElement.textContent = data.public_repos;
      followersElement.textContent = data.followers;
      followingElement.textContent = data.following;
      locationElement.textContent = data.location || 'Not available';
      companyElement.textContent = data.company || 'Not available';
      twitterElement.textContent = data.twitter_username || 'Not available';
      siteElement.textContent = data.blog || 'Not available';
      siteElement.href = data.blog || '#';
      profileImage.src = data.avatar_url;
      bioContent.textContent = data.bio || 'This profile has no bio';
      const joinnedDate = new Date(data.created_at);
      const joinnedDateString = joinnedDate.toLocaleDateString();
      joinnedElement.textContent = `Joinned ${joinnedDateString}`;
    })
    .catch(error => {
      console.error('Erro: ' + error);
    });
}

 function getStyle() {
   return'
body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
}
*{
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
}
header{
    display: flex;
    gap: 30rem;
}
header div{
    display: flex;
    align-items: center;
    gap: 1em;
}
.pesquisa{
    display: flex;
    width: 43.5rem;
    border-radius: 0.4em;
    padding: 0.3em 0.4em;
    background-color: rgb(37, 37, 77);
}
.pesquisa img{
    width: 2em;
    object-fit: contain;
}
input{
    width: 45em;
    margin: 0 1em;
    border: none;
    background-color: transparent;
}
::placeholder{
    color: rgba(255, 255, 255, 0.733);
}
input:focus{
    outline: none;
}
button{
    width: 8em;
    height: 3em;
    cursor: pointer;
    border: none;
    border-radius: 0.4em;
    background-color: rgb(45, 45, 230);
}
section{
    display: flex;
    width: 42.5em;
    margin: 1em;
    padding: 1em;
    background-color: rgb(28, 28, 51);
}
.perfil{
    width: 20%;
    height: 20%;
    padding: 2em;
    object-fit: cover;
    border-radius: 20em;
}
.name h5{
    color: rgba(255, 255, 255, 0.726);
}
.info{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.name{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.nick a{
    color: rgb(64, 64, 182);
    margin: 0;
}
.bio{
    color: rgba(255, 255, 255, 0.726);
}
.dados{
    display: flex;
    padding: 1em 0;
    border-radius: 0.4em;
    justify-content: space-around;
    background-color: rgb(13, 13, 34);
}
.dados h4{
    margin: 0.2em 0;   
}
.dados h5{
    margin: 0;
    font-size: 1.5em;
}
.links{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1em;
    margin-left: 1em;
    gap: 1em;
}
.local::before{
    content: "";
    position: absolute;
    margin-left: -1.2em;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(arquivos/localNight.png);
}
.site{
    overflow: hidden;
    text-overflow: ellipsis;
    width: 12em;
}
.git::before{
    content: "";
    position: absolute;
    margin-left: -1.2em;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(arquivos/twitterNight.png);
}
.site::before{
    content: "";
    position: absolute;
    margin-left: -1.2em;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(arquivos/ligacaoNight.png);
}
.empresa::before{
    content: "";
    position: absolute;
    margin-left: -1.2em;
    width: 1em;
    height: 1em;
    background-size: cover;
    background-image: url(arquivos/companhiaNight.png);
}
@media (max-width: 600px) {
    html{
        scale: 0.6;
    }
  }'
}

function applyStyles() {
            document.getElementById('styles').innerText = getStyles();
        }

        function toggleMode() {
            var body = document.body;
            body.classList.toggle('light-mode');
            body.classList.toggle('dark-mode');
        }

        // Aplicar estilos iniciais
        applyStyles();


// Iniciar busca e modificacao com os dados recebidos do usuario
document.querySelector('button').addEventListener('click', fetchGitHubData);
document.addEventListener('keypress', function(e){ 
       if(e.which == 13){
          fetchGitHubData();
       }
    },false);
