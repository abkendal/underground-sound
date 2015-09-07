app.controller('MainController', ['$scope', '$http', '$sce', function($scope, $http, $sce){

	$scope.api_key = 'FPTUEWIJXBRDVF0EU';
	$scope.search = '';
	$scope.google="http://google.com";
	$scope.song = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/207761424&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
	$scope.artists = [
		{
			name:'Corbin Butler',
			genre: ['rap', 'hip hop', 'indie rock', 'rap rock', 'trap music', 'underground rap'],
			song: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/207761424&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
			soundcloud: 'https://soundcloud.com/corbin-butler',
			desc: 'Young rapper/musician from Souther California'
		},
		{
			name:'KAMAU',
			genre: ['rap', 'hip hop', 'singer-songwriter', 'underground rap'],
			song: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220599163&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
			soundcloud: 'https://soundcloud.com/kamauothm',
			desc: 'Rapper/singer from Brooklyn.'
		},

		{
			name:'CHINAH',
			genre: ['pop', 'indie pop', 'indie rock', 'indie pop rock', 'shoegaze', 'emo', 'indie emo', 'indie folk', 'chillwave', "melancholia", "permanent wave"],
			song: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/213453701&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
			soundcloud: 'https://soundcloud.com/chinahchinah',
			desc: 'Pop trio from Denmark'
		},

		{
			name:'Emily Jones',
			genre: ['pop', 'indie pop', 'indie pop rock', 'shoegaze', 'emo', 'indie emo', 'indie folk', 'singer-songwriter', 'electronic', 'chillwave', "melancholia", "permanent wave"],
			song: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/131046257&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
			soundcloud: 'https://soundcloud.com/emilyrmj',
			desc: 'Electro-pop vocalist from the UK'
		},
		
		{
			name:'kaya',
			genre: ['indie pop', 'indie pop rock', 'shoegaze', 'emo', 'indie emo', 'indie folk', 'singer-songwriter', 'acoustic pop', 'deep acoustic pop', "melancholia", "permanent wave"],
			song: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217690010&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
			soundcloud: 'https://soundcloud.com/kaya2281',
			desc: 'Singer/songwriter from NYC'
		},
		
		{
			name:'Her',
			genre: ['indie rock', 'rock', 'blues', 'chill groove', 'dance rock', 'dance-punk'],
			song: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/222138957&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
			soundcloud: 'https://soundcloud.com/thebandher',
			desc: 'Dance-punk duo from France'
		},
		
		{
			name:'P2THEGOLDMA$K',
			genre: ['future ambient', 'experimental', 'electro', 'trap music', 'deep psytrance', 'rap', 'chillwave', 'dark wave', 'emo', 'rap', 'hip hop'],
			song: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/215176984&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
			soundcloud: 'https://soundcloud.com/p2ski',
			desc: 'Emo thugg rapper from the internet.'
		},
		
		{
			name:'Kweku Collins',
			genre: ['singer-songwriter', 'pop', 'pop rap', 'alternative hip hop', 'indie rock'],
			song: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/215673535&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true',
			soundcloud: 'https://soundcloud.com/kwekucollins',
			desc: 'Singer/rapper from Illinois.'
		},
		// {
		// 	name:'',
		// 	genre: [],
		// 	song: [
				
		// 		],
		// 	soundcloud: '',
		// 	desc: ''
		// },
		
	];

	// Stores the value in the input field and performs the echonest genre API call 
	$scope.artistInput = function() {
		$scope.search = $('#artistInput').val();
		$scope.fetch();
	};

	// Echonest genre API call, find the genres of the artist entered in the input field
	$scope.fetch = function() {
		$http.get("http://developer.echonest.com/api/v4/artist/profile?api_key=" + $scope.api_key + "&name=" + $scope.search + "&bucket=genre&format=json")
		     .success(function(response){
		     	$scope.details = response;
		     	$scope.genreResp = response.response.artist.genres;
		     	$scope.genre = [];

		     	// Populate array with all the genres provided in the response
		     	for (var i = 0; i < $scope.genreResp.length; i++) {
		     		$scope.genre[i] = $scope.genreResp[i].name;
		     	}; 

		     	console.log($scope.genre);

		     	$scope.artistMatch($scope.genre);
		     });
	};

	// Find recommendation artists that have a genre that matches at least one genre from the API response
	$scope.artistMatch = function(response){
		$scope.matches = [];
		// Each artist in the database
		for (var i = 0; i < $scope.artists.length; i++){
			var match = 0;
			// Each genre for the database artist
			for (var j = 0; j < $scope.artists[i].genre.length; j++){
				for (var k = 0; k < response.length; k++){
					// Look for matching genres
					if (response[k] === $scope.artists[i].genre[j]) {
						match = 1;
					};
				};
				// If there is a matching genre, move onto the next artist
				if (match === 1) {
					match = 0;
					$scope.matches.push($scope.artists[i]);
					break;
				}
			};
		};
		$scope.artistRand($scope.matches);
	};

	// Randomly choose a suggestion from the matches
	$scope.artistRand = function(matches){
		var selection = Math.round(Math.random() * (matches.length - 1));
		$scope.suggestion = matches[selection];
		$scope.suggestionUrl = $sce.trustAsResourceUrl($scope.suggestion.song);
		console.log($scope.suggestion);
	};


}]);
















