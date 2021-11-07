

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

  deleteChosenFurniture = (id) => {
    this.state.loading = true;
    this.render();
    API.deleteFurniture(() =>
      API.getFurniture( //pirmas parametras
        (furniture) => {
          this.state.furniture = furniture;
          this.state.loading = false;
          this.render();
        },
        (err) => console.error(err) //antras parametras
      ),
      (err) => console.error(err)
      , id //perduodu id i deletefurniture funkcija esancia api
    );
  }

  initialize = () => {
    this.fetchFurniture();
    this.htmlElement = document.createElement('div');
    this.render();
  }


  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif"></div>';
    } else {
      this.htmlElement.innerHTML = '';
      this.state.furniture.forEach(furniture => {
        const newCard = new FurnitureCardComponent({
          data: furniture,
          onDelete: this.deleteChosenFurniture,
        });
        this.htmlElement.appendChild(newCard.htmlElement);
      });
    }
  }
}
