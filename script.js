const inputLogin = document.getElementById('input-login'),
      btnLogin = document.getElementById('btn-send-login');


const getGitHubData= async (login) => {
  const url = `https://api.github.com/users/${login}`;
  const res = await fetch(url);
  return await res.json();
}

const getID = async () => {
  const login = inputLogin.value
  const data = await getGitHubData(login);
  console.log(data);
}



btnLogin.addEventListener('click', getID)
getID();
