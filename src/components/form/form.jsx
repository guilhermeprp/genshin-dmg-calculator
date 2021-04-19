import React from "react";
import { ContainerCenter } from "./formStyles.js";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charBaseAtk: null,
      atkPercentage: null,
      total: null,
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
    // console.log(event.target.value);
  };

  handleCalculate = () => {
    // console.log(typeof charBaseAtk, charBaseAtk);

    console.log(typeof this.state.total, this.state.total);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let charBaseAtk = parseInt(this.state.charBaseAtk);
    let atkPercentage = parseInt(this.state.atkPercentage);
    this.state.total = charBaseAtk + atkPercentage;
    this.setState({ total: this.state.total });
    // let charBaseAtk = this.state.charBaseAtk;
    // let atkPercentage = this.state.atkPercentage;
  };

  render() {
    return (
      <ContainerCenter>
        <div className="img-wrapper">
          <img src="https://wallpaperaccess.com/full/2505746.jpg" />
        </div>
        <form
          onSubmit={this.handleSubmit}
          id="formulario"
          action="../controller/calculateDmg.js"
        >
          <h1>Figure out your Damage!!</h1>
          <div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  name="charBaseAtk"
                  id="input-character-flat-atk"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <label
                  id="label-character-flat-atk"
                  htmlFor="input-character-flat-atk"
                >
                  Character Flat Atk
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  name="atkPercentage"
                  id="input-character-passive-atk"
                  onChange={this.handleChange}
                />
                <label
                  id="label-character-passive-atk"
                  htmlFor="input-character-passive-atk"
                >
                  Character Passive % Atk
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-weapon-flat-atk"
                />
                <label
                  id="label-weapon-flat-atk"
                  htmlFor="input-weapon-flat-atk"
                >
                  Weapon Flat Atk
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-weapon-percentage-atk"
                />
                <label
                  id="label-weapon-percentage-atk"
                  htmlFor="input-weapon-percentage-atk"
                >
                  Weapon % Atk
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-artifact-flat-atk"
                />
                <label
                  id="label-artifact-flat-atk"
                  htmlFor="input-artifact-flat-atk"
                >
                  Artifact Flat Atk
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-artifact-percentage-atk"
                />
                <label
                  id="label-artifact-percentage-atk"
                  htmlFor="input-artifact-percentage-atk"
                >
                  Artifact % Atk
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-character-flat-dmg"
                />
                <label
                  id="label-character-flat-dmg"
                  htmlFor="input-character-flat-dmg"
                >
                  Elemental/Physical Dmg
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-critical-percentage-dmg"
                />
                <label
                  id="label-critical-percentage-dmg"
                  htmlFor="input-critical-percentage-dmg"
                >
                  Critical Dmg %
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-skill-percentage-dmg"
                />
                <label
                  id="label-skill-percentage-dmg"
                  htmlFor="input-skill-percentage-dmg"
                >
                  Skill Multiplier %
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-character-level"
                />
                <label
                  id="label-character-level"
                  htmlFor="input-character-level"
                >
                  Character Level
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-enemy-level"
                />
                <label id="label-enemy-level" htmlFor="input-enemy-level">
                  Enemy Level
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  className="input-text"
                  id="input-enemy-resistance"
                />
                <label
                  id="label-enemy-resistance"
                  htmlFor="input-enemy-resistance"
                >
                  Enemy Resistance %
                </label>
              </div>
            </div>
            <div className="row row-button">
              <button type="submit">
                <span> DAMAGE! </span>
              </button>
            </div>
            <div className="row row-button">
              <h1>Total: {this.state.total}</h1>
            </div>
          </div>
        </form>
      </ContainerCenter>
    );
  }
}

export default Form;
