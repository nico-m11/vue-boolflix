const app = new Vue ({
  el: '#root',
  data: {
    searchInput: '',
    movies: [],

  },
  mounted: function () { //home page movies
    this.getMovies(),
      axios.get("https://api.themoviedb.org/3/movie/popular",{
        params: {
          api_key: "871cee00d0a867c5177dcdfba199cbc4",
        }
      })
      .then((result) => {
        this.movies = result.data.results;
        console.log(result.data.results);
      })
  },
  methods: {
      getMovies() { // search Movies
        axios.get("https://api.themoviedb.org/3/search/movie",{
          params: {
            api_key: "871cee00d0a867c5177dcdfba199cbc4",
            query: this.searchInput
          }
        })
        .then((result) => {
          this.movies = result.data.results;
          console.log(result.data.results);
        }),
        axios.get("https://api.themoviedb.org/3/search/tv", { // search Tv Show
          params: {
            api_key: "871cee00d0a867c5177dcdfba199cbc4",
            query: this.searchInput
          }
        })
        .then((result) => {
          this.movies = result.data.results;
          console.log(result.data.results);
        })
      },
      calcStar(n) { // calc star Vote
        return Math.ceil(n / 2)
      },
      lenguageDefault:
       (l) => {       // lenguageBandier not notfound
        return l.target.src = 'bandiere/notfound.png';
      },
      imgDefault:
       (l) => {    // ImgBandier not notfou
        return l.target.src = 'img/notfound.png';
      }
    }
})
