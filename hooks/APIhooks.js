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
}

export {useLoadMedia};
