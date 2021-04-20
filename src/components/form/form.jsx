import React from "react";
import { ContainerCenter } from "./formStyles.js";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charBaseAtk: null,
      charPercentage: 0,
      weaponBaseAtk: null,
      weaponPercentage: 0,
      artifactFlatAtk: 0,
      artifactPercentage: 0,
      bonusDmgPercentage: null,
      criticalDmg: null,
      skillMultiplier: null,
      charLevel: null,
      enemyLevel: null,
      enemyRes: 0,
      total: null,
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
    console.log(event.target.value);
  };

  handleCalculate = () => {
    console.log(typeof this.state.total, this.state.total);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let charBaseAtk = parseInt(this.state.charBaseAtk);
    let charPercentage = parseInt(this.state.charPercentage)
      ? parseInt(this.state.charPercentage)
      : 0;
    let weaponBaseAtk = parseInt(this.state.weaponBaseAtk);
    let weaponPercentage = parseInt(this.state.weaponPercentage)
      ? parseInt(this.state.weaponPercentage)
      : 0;
    let artifactFlatAtk = parseInt(this.state.artifactFlatAtk);
    let artifactPercentage = parseInt(this.state.artifactPercentage)
      ? parseInt(this.state.artifactPercentage)
      : 0;
    let bonusDmgPercentage = parseInt(this.state.bonusDmgPercentage) / 100 + 1;
    let criticalDmg = parseInt(this.state.criticalDmg) / 100 + 1;
    let skillMultiplier = parseInt(this.state.skillMultiplier) / 100 + 1;
    let charLevel = parseInt(this.state.charLevel) + 100;
    let enemyLevel = parseInt(this.state.enemyLevel) + 100;
    let enemyRes = parseInt(this.state.enemyRes)
      ? parseInt(this.state.enemyRes)
      : 0;

    console.log(
      typeof charBaseAtk,
      charBaseAtk,
      typeof charPercentage,
      charPercentage,
      typeof weaponBaseAtk,
      weaponBaseAtk,
      typeof weaponPercentage,
      weaponPercentage,
      typeof artifactFlatAtk,
      artifactFlatAtk,
      typeof artifactPercentage,
      artifactPercentage,
      typeof bonusDmgPercentage,
      bonusDmgPercentage,
      typeof criticalDmg,
      criticalDmg,
      typeof skillMultiplier,
      skillMultiplier,
      typeof charLevel,
      charLevel,
      typeof enemyLevel,
      enemyLevel,
      typeof enemyRes,
      enemyRes
    );

    var baseAtk = charBaseAtk + weaponBaseAtk;
    var atkPercentage =
      1 + (charPercentage + weaponPercentage + artifactPercentage) / 100;
    var levelDiffDef = charLevel / (charLevel + enemyLevel);
    var totalAtk = baseAtk * atkPercentage + artifactFlatAtk;

    console.log(typeof baseAtk, baseAtk);
    console.log(typeof atkPercentage, atkPercentage);
    console.log(typeof levelDiffDef, levelDiffDef);
    console.log(typeof totalAtk, totalAtk);

    console.log(totalAtk * bonusDmgPercentage * skillMultiplier);
    console.log(
      (totalAtk * bonusDmgPercentage * skillMultiplier * levelDiffDef) /
        (enemyRes / 100 + 1)
    );

    this.state.total = parseInt(
      (totalAtk * bonusDmgPercentage * skillMultiplier * levelDiffDef) /
        (enemyRes / 100 + 1)
    );
    this.setState({ total: this.state.total });
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
          <div className="inputs-area">
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  id="input-character-flat-atk"
                  className="input-text"
                  name="charBaseAtk"
                  onBlur={this.handleChange}
                />
                <label
                  id="label-character-flat-atk"
                  htmlFor="input-character-flat-atk"
                >
                  Character Flat Atk <span className="obrigatorio">*</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  id="input-character-passive-atk"
                  className="input-text"
                  name="charPercentage"
                  onBlur={this.handleChange}
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
                  id="input-weapon-flat-atk"
                  className="input-text"
                  name="weaponBaseAtk"
                  onBlur={this.handleChange}
                />
                <label
                  id="label-weapon-flat-atk"
                  htmlFor="input-weapon-flat-atk"
                >
                  Weapon Flat Atk <span className="obrigatorio">*</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  id="input-weapon-percentage-atk"
                  className="input-text"
                  name="weaponPercentage"
                  onBlur={this.handleChange}
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
                  id="input-artifact-flat-atk"
                  className="input-text"
                  name="artifactFlatAtk"
                  onBlur={this.handleChange}
                />
                <label
                  id="label-artifact-flat-atk"
                  htmlFor="input-artifact-flat-atk"
                >
                  Artifact Flat Atk <span className="obrigatorio">*</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  id="input-artifact-percentage-atk"
                  className="input-text"
                  name="artifactPercentage"
                  onBlur={this.handleChange}
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
                  id="input-character-flat-dmg"
                  className="input-text"
                  name="bonusDmgPercentage"
                  onBlur={this.handleChange}
                />
                <label
                  id="label-character-flat-dmg"
                  htmlFor="input-character-flat-dmg"
                >
                  Elemental/Physical Dmg <span className="obrigatorio">*</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  id="input-critical-percentage-dmg"
                  className="input-text"
                  name="criticalDmg"
                  onBlur={this.handleChange}
                />
                <label
                  id="label-critical-percentage-dmg"
                  htmlFor="input-critical-percentage-dmg"
                >
                  Critical Dmg % <span className="obrigatorio">*</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  id="input-skill-percentage-dmg"
                  className="input-text"
                  name="skillMultiplier"
                  onBlur={this.handleChange}
                />
                <label
                  id="label-skill-percentage-dmg"
                  htmlFor="input-skill-percentage-dmg"
                >
                  Skill Multiplier % <span className="obrigatorio">*</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  id="input-character-level"
                  className="input-text"
                  name="charLevel"
                  onBlur={this.handleChange}
                />
                <label
                  id="label-character-level"
                  htmlFor="input-character-level"
                >
                  Character Level <span className="obrigatorio">*</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  id="input-enemy-level"
                  className="input-text"
                  name="enemyLevel"
                  onBlur={this.handleChange}
                />
                <label id="label-enemy-level" htmlFor="input-enemy-level">
                  Enemy Level <span className="obrigatorio">*</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-block">
                <input
                  type="text"
                  id="input-enemy-resistance"
                  className="input-text"
                  name="enemyRes"
                  onBlur={this.handleChange}
                />
                <label
                  id="label-enemy-resistance"
                  htmlFor="input-enemy-resistance"
                >
                  Enemy Resistance %
                </label>
              </div>
            </div>
          </div>
          <div className="row row-button">
            <button type="submit">
              <span> DAMAGE! </span>
            </button>
          </div>
          <div id="result-box" className="row row-button">
            <h1>Total: {this.state.total}</h1>
          </div>
        </form>
      </ContainerCenter>
    );
  }
}

export default Form;
