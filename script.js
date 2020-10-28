const title = document.getElementById('title'),
      inputLogin = document.getElementById('input-login'),
      btnLogin = document.getElementById('btn-send-login');


const getGitHubData= async (login) => {
  const url = `https://api.github.com/users/${login}`;
  const res = await fetch(url);
  return res.ok ? await res.json() : {id: null}
}

const setText = (login, id) => 
  title.innerText = id 
    ? `${login}  is GitHub user #${id}`
    : `${login}  is NOT GitHub user`


const getID = async () => {
  const login = inputLogin.value
  const data = await getGitHubData(login);
  console.log(data);
  const id = data.id
  setText(login, id)
}

const checkKeyPress = (e) => (e.keyCode == 13) ? getID() : null;


inputLogin.addEventListener('keypress', checkKeyPress)
btnLogin.addEventListener('click', getID)