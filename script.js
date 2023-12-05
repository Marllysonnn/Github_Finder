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

// Iniciar busca e modificacao com os dados recebidos do usuario
document.querySelector('button').addEventListener('click', fetchGitHubData);
document.addEventListener('keypress', function(e){ 
       if(e.which == 13){
          fetchGitHubData();
       }
    },false);
