import axios from 'axios';
import {useState,useEffect} from 'react';


const apiUrl = 'http://media.mw.metropolia.fi/wbma/';
const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (limit = 20) => {
    try {
      const response = await fetch(apiUrl + 'media?limit=' + limit);
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (item) => {
          const response = await fetch(apiUrl + 'media/' + item.file_id);
          const json = await response.json();
          return json;
        }));

      setMediaArray(media);
      console.log('mediaArray:', mediaArray);
    } catch (error) {
      console.log('loadMedia error', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return mediaArray;
  };

const postLogIn = async (userCreds) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(userCreds),
  };
  try {
    const response = await fetch(apiUrl + 'login', options);
    const userData = await response.json();
    if (response.ok) {
      return userData;
    } else {
      throw new Error(userData.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

const checkToken = async (token) => {
  const options = {
    method: 'GET',
    headers: {
      'x-access-token':token
    },
  };
  try {
    const response = await fetch(apiUrl + 'users/user', options);
    const userData = await response.json();
    if (response.ok) {
      return userData;
    } else {
      throw new Error(userData.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

const postRegistration = async (newUser) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  };
  try {
    const response = await fetch(apiUrl + 'users', options);
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message);
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

  const getAvatar = async (id) => {

    try {
      const response = await fetch(apiUrl + 'tags/' + id  );
      const avatarImages = await response.json();
      if (response.ok) {
        return avatarImages;
      } else {
        throw new Error(avatarImages.message);
      };
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const checkAvailable = async (username) => {
    try {
      const response = await fetch(apiUrl + 'users/username/' + username);
      const resultData = await response.json();
      if (response.ok) {
        if (resultData.available) {
          return null;
        } else {
          return 'Username ' + username + ' is not available.';
        }
      } else {
        throw new Error(resultData.message);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

const upload = async (fd,token) => {
  const options = {
    method: 'POST',
    headers: {
      'x-access-token': token},
    data: fd,
    url: apiUrl + 'media',
  }
  try {
    const response = await axios(options);
    return response.data;
  } catch (e) {
    throw new Error('Error upload', e.message);
  }
};


export {useLoadMedia,postLogIn,checkToken,postRegistration,getAvatar,checkAvailable,upload};

