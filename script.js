const title = document.getElementById('title'),
  inputLogin = document.getElementById('input-login'),
  btnLogin = document.getElementById('btn-send-login');


const getGitHubData = async (login) => {
  const url = `https://api.github.com/users/${login}`;
  const res = await fetch(url);
  return res.ok ? await res.json() : { id: null }
}

const setText = (login, id) =>
  title.innerText = id
    ? `${login}  is GitHub user #${id}`
    : `${login}  is NOT GitHub user`

const limitQuery = (data) => {
  title.innerText = data.message
}

const getID = async () => {
  if (inputLogin.value === '') return title.innerText = 'Find GitHub Your ID'
  const login = inputLogin.value
  const data = await getGitHubData(login);
  const id = data.id
  setText(login, id)
  if (data.message && data.documentation_url) limitQuery(data)
}

const checkKeyPress = (e) => { if (e.keyCode == 13) getID(); }

inputLogin.addEventListener('keypress', checkKeyPress)
btnLogin.addEventListener('click', getID)