

class FurnitureGridComponent {
  constructor() {
    this.state = {
      furniture: [],
      loading: false
    };
    this.initialize();
  }

  fetchFurniture = () => {
    this.state.loading = true;
    API.getFurniture(
      (furniture) => {
        this.state.furniture = furniture;
        this.state.loading = false;
        // console.log(this.state.furniture);
        this.render();
      },
      (err) => console.error(err)
    );
  }

  initialize = () => {
    this.fetchFurniture();
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'container solid border 2px';
    this.render();
  }


  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif"></div>';
    } else {
      this.htmlElement.innerHTML = '';
    }
  }
}
