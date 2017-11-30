const API_ROOT = `http://localhost:3001/api/v1`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const getPaintings = () => {
  return fetch(`${API_ROOT}/paintings/`).then(res => res.json());
};

const login = data => {
  return fetch(`${API_ROOT}/auth`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  return fetch(`${API_ROOT}/current_user`, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

export const api = {
  auth: {
    login,
    getCurrentUser
  },
  paintings: {
    getPaintings
  }
};
