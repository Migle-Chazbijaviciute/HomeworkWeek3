

class FurnitureGridComponent {
  constructor() {
    this.state = {
      furniture: [],
    };
    this.initialize();
  }

  fetchFurniture = () => {
    API.getFurniture(
      (furniture) => {
        this.state.furniture = furniture;
        console.log(this.state.furniture);
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

  }


}
