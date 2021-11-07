class FurnitureCardComponent {
  constructor(props) {
    this.props = props;
    this.initialize();
  }

  createCard = () => {
    let { id, title, type, price, location, owner } = this.props.data;
    const element = document.createElement('div');
    element.innerHTML = `
  <div class="card mb-5" style="width: 300px" id="card-style">
    <div class="card-body">
      <h4 class="card-title">${type} ${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${price} $</h6>
      <h6 class="card-title">Kilmės šalis</h5>
        <p class="list-group-item">Šalis: ${location.country}</p>
        <p class="list-group-item">Miestas: ${location.city}</p>
        <p class="list-group-item">Gatvė: ${location.street}</p>
      <h6 class="card-title">Savininkas</h5>
        <p class="list-group-item">Vardas,pavardė: ${owner.fullname}</p>
        <p class="list-group-item">Mobilusis: ${owner.mobile}</p>
        <p class="list-group-item">Adresas: ${owner.address}</p>
        <p class="list-group-item">El.paštas: ${owner.email}</p>
    </div>
  </div>  
`
    return element;
  };

  initialize = () => {
    this.htmlElement = document.createElement('div');

    this.render();
  };

  render = () => {
    this.htmlElement.appendChild(this.createCard());
  };
}
