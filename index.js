const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const register = async (EMAIL, NAME, PHONE) => {
	const form = new FormData();
	form.append('1_email', EMAIL);
	form.append('1_name', NAME);
	form.append('1_phone', PHONE);
	form.append('1_term1', 'on');
	form.append('1_term2', 'on');
	form.append('1_term3', 'on');
	form.append('0', '[{"data":"Đã hết vé !","result":{"checkinCode":null,"id":null}},"$K1"]');

		data: 
	axios.post('https://galaxy-ai-immersive.vercel.app/', form , {
		headers: {
			'accept':'text/x-component',
			'accept-language':'en-US,en;q=0.9,vi;q=0.8',
			'next-action':'e9378d5e629b88a02a14671e2c470c942a4959d9',
			'next-router-state-tree':'%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%3Ffbclid%3DIwY2xjawEfE65leHRuA2FlbQIxMAABHcAXCgJU1XQBB9rBBrHb0DJaXjhl7OklW1DPHbwp5Meuyw6jv0jTMQOwwg_aem_EEVGi_SxDcbBV_pNaQE-Hg%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
			'origin':'https://galaxy-ai-immersive.vercel.app',
			'priority':'u=1, i',
			'referer':'https://galaxy-ai-immersive.vercel.app/',
			'sec-ch-ua':'"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
			'sec-ch-ua-mobile':'?0',
			'sec-ch-ua-platform':'"Windows"',
			'sec-fetch-dest':'empty',
			'sec-fetch-mode':'cors',
			'sec-fetch-site':'same-origin',
			'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
		}
	  })
	.then(response => {
		console.log(response.data);
	})
	.catch(error => {
		console.error(error);
	});
}

app.listen(3000, async () => {
  console.log('Express server listening on port 3000');
  	setInterval(async () => {
		await register('minhky.book@gmail.com', 'Minh Kỳ', '0899910699');
		await register('ngocha273155@gmail.com', 'Ngọc Hà', '0383345830');
		await register('thinhkhainguyen@gmail.com', 'Nguyễn Phúc Thịnh', '0971221156');
	}, 5000);
	setInterval(async () => {
        console.log('Ping to register ss');
		axios.get('https://register-ss.onrender.com');
	}, 300000);
});