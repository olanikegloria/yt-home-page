import axios from "axios";

const Base_Url = 'https://youtube-v31.p.rapidapi.com';
const options = {
  url: Base_Url,
  params: {
    maxResults: '44'
  },
  headers: {
    'X-RapidAPI-Key': 'a018ef236dmshdee85e2adbcdef9p1e359djsn1b163cdcb0dc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const FetchFromApi = async (url) => {
   const {data} = await axios.get(`${Base_Url}/${url}`, options);

   return data;
}
