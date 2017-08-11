const axios = require('axios')

axios.get('http://localhost:3000/',{params: {
	original: 'house'
}})
.then(function (response) {
	console.log(response.status)
	console.log(response.data);
})
.catch(function (error) {
	console.log(error);
});

// ----------------------------------------------------

// axios.post('http://localhost:3000/',{data:{
// 		original:'house'
// 	}}).then(function(res){
//   console.log(res.status)
//   console.log(res.data)
// }).catch(function(err){
//   console.log(err)
// })
