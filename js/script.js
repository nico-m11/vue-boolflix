const app = new Vue ({
  el: '#root',
  data: {
    searchInput: '',
    movies: [],
    vote: '',
  },
  mounted: function () {
    this.getMovies()
  },
  methods: {
      getMovies() {
        axios.get("https://api.themoviedb.org/3/search/movie",{
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
      calcStar(n) {
        return Math.ceil(n / 2)
      },
    }
})
