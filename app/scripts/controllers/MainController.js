app.controller('MainController', ['$scope', '$http', function($scope, $http){

	$scope.api_key = 'FPTUEWIJXBRDVF0EU';

	$scope.artists = [
		{
			name:'Corbin Butler',
			genre: ['rap', 'hip hop', 'indie rock', 'rap rock', 'trap music', 'underground rap'],
			songs: [
				'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?soundcloud=https%3A//api.soundcloud.com/tracks/207761424&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
				],
			soundcloud: 'https://soundcloud.com/corbin-butler',
			desc: 'Young rapper/musician from Souther California'
		},
		{
			name:'KAMAU',
			genre: ['rap', 'hip hop', 'singer-songwriter', 'underground rap'],
			songs: [
				'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?soundcloud=https%3A//api.soundcloud.com/tracks/220599163&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
				],
			soundcloud: 'https://soundcloud.com/kamauothm',
			desc: 'Rapper/singer from Brooklyn.'
		},

		{
			name:'CHINAH',
			genre: ['pop', 'indie pop', 'indie rock', 'indie pop rock', 'shoegaze', 'emo', 'indie emo', 'indie folk', 'chillwave'],
			songs: [
				'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?soundcloud=https%3A//api.soundcloud.com/tracks/213453701&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
				],
			soundcloud: 'https://soundcloud.com/chinahchinah',
			desc: 'Pop trio from Denmark'
		},

		{
			name:'Emily Jones',
			genre: ['pop', 'indie pop', 'indie pop rock', 'shoegaze', 'emo', 'indie emo', 'indie folk', 'singer-songwriter', 'electronic', 'chillwave'],
			songs: [
				'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?soundcloud=https%3A//api.soundcloud.com/tracks/188161303&color=f2346d"></iframe>',
				],
			soundcloud: 'https://soundcloud.com/emilyrmj',
			desc: 'Electro-pop vocalist from the UK'
		},
		
		{
			name:'kaya',
			genre: ['indie pop', 'indie pop rock', 'shoegaze', 'emo', 'indie emo', 'indie folk', 'singer-songwriter', 'acoustic pop', 'deep acoustic pop'],
			songs: [
				'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?soundcloud=https%3A//api.soundcloud.com/tracks/217690010&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
				],
			soundcloud: 'https://soundcloud.com/kaya2281',
			desc: 'Singer/songwriter from NYC'
		},
		
		{
			name:'Her',
			genre: ['indie rock', 'rock', 'blues', 'chill groove', 'dance rock', 'dance-punk'],
			songs: [
				'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?soundcloud=https%3A//api.soundcloud.com/tracks/222138957&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
				],
			soundcloud: 'https://soundcloud.com/thebandher',
			desc: 'Dance-punk duo from France'
		},
		
		{
			name:'P2THEGOLDMA$K',
			genre: ['future ambient', 'experimental', 'electro', 'trap music', 'deep psytrance', 'rap', 'chillwave', 'dark wave', 'emo', 'rap', 'hip hop'],
			songs: [
				'https://soundcloud.com/p2ski/s-e-n-p-a-i-2-ep-mix-by-burger-pmg',
				],
			soundcloud: 'https://soundcloud.com/p2ski',
			desc: 'Emo thugg rapper from the internet.'
		},
		
		{
			name:'Kweku Collins',
			genre: ['singer-songwriter', 'pop', 'pop rap', 'alternative hip hop', 'indie rock'],
			songs: [
				'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/215673535&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
				],
			soundcloud: 'https://soundcloud.com/kwekucollins',
			desc: 'Singer/rapper from Illinois.'
		},
		// {
		// 	name:'',
		// 	genre: [],
		// 	songs: [
				
		// 		],
		// 	soundcloud: '',
		// 	desc: ''
		// },
		
	];

	// Stores the value in the input field and performs the echonest genre API call 
	$scope.artistInput = function() {
		$scope.search = $('#artistInput').val();
		fetch();
	};

	// Echonest genre API call, find the genres of the artist entered in the input field
	function fetch() {
		$http.get("http://developer.echonest.com/api/v4/artist/profile?api_key=" + $scope.api_key + "&name=" + $scope.search + "&bucket=genre&format=json")
		     .success(function(response){
		     	$scope.details = response;
		     	console.log($scope.details);
		     });
	};

}]);















