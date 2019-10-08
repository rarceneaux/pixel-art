import utils from '../../helpers/util';

const colors = ['green', 'yellow', 'blue', 'red', 'orange', 'purple '];

const printColorPicker = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    domString += `
    <div class="form-check form-check-inline">
      <input class="form-check-input color-choice" name="color" type="radio" id="${color}inlineCheckbox1" value="${color}">
      <label class="form-check-label" for="${color}inlineCheckbox1">${color}</label>
    </div>
    `;

    utils.printToDom('color-picker', domString);
  }
};

export default { printColorPicker };
