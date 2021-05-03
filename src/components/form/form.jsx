import React from "react";
import { ContainerCenter } from "./formStyles.js";
import { TextField } from "@material-ui/core";

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
        <div className="content-wrapper">
          <div className="content-col-center">
            <form
              onSubmit={this.handleSubmit}
              id="formulario"
              action="../controller/calculateDmg.js"
            >
              <h1>Figure out your Damage!!</h1>
              <div className="inputs-area">
                <div className="row">
                  <div className="input-block">
                    <TextField
                      required
                      type="number"
                      id="outlined-basic"
                      name="charBaseAtk"
                      label="Character Flat Atk "
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      type="number"
                      id="outlined-basic"
                      className="optional-input"
                      name="charPercentage"
                      label="Character Passive % Atk"
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      required
                      type="number"
                      id="outlined-basic"
                      name="weaponBaseAtk"
                      label="Weapon Flat Atk "
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      type="number"
                      id="outlined-basic"
                      className="optional-input"
                      name="weaponPercentage"
                      label="Weapon % Atk"
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      required
                      type="number"
                      id="outlined-basic"
                      name="artifactFlatAtk"
                      label="Artifact Flat Atk "
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      type="number"
                      id="outlined-basic"
                      className="optional-input"
                      name="artifactPercentage"
                      label="Artifact % Atk"
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      required
                      type="number"
                      id="outlined-basic"
                      name="bonusDmgPercentage"
                      label="Elemental/Physical Dmg "
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      required
                      type="number"
                      id="outlined-basic"
                      name="criticalDmg"
                      label="Critical Dmg % "
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      required
                      type="number"
                      id="outlined-basic"
                      name="skillMultiplier"
                      label="Skill Multiplier % "
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      required
                      type="number"
                      id="outlined-basic"
                      name="charLevel"
                      label="Character Level "
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      required
                      type="number"
                      id="outlined-basic"
                      name="enemyLevel"
                      label="Enemy Level "
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-block">
                    <TextField
                      type="number"
                      id="outlined-basic"
                      className="optional-input"
                      name="enemyRes"
                      label="Enemy Resistance %"
                      variant="outlined"
                      onBlur={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-button">
                <button className="submit-button" type="submit">
                  <span> DAMAGE! </span>
                </button>
              </div>
              <div id="result-box" className="row row-button">
                <h1>Total: {this.state.total}</h1>
              </div>
            </form>
          </div>
        </div>
      </ContainerCenter>
    );
  }
}

export default Form;
