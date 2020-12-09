import React from "react";
import { ContainerCenter } from "./formStyles.js";
import { inputBlur, inputFocus } from "./formEvents.js";

function Form() {
  return (
    <ContainerCenter>
      <form>
        <h1>Figure out your Damage!!</h1>
        <div>
          <div className="input-block">
            <input
              id="input-character-flat-atk"
              type="text"
              onBlur={inputBlur}
              onFocus={inputFocus}
            ></input>
            <label id="label-character-flat-atk" for="input-character-flat-atk">
              Character Flat Atk
            </label>
          </div>
          <div className="input-block">
            <input id="input-character-passive-atk" type="text"></input>
            <label
              id="label-character-passive-atk"
              for="input-character-passive-atk"
            >
              Character Passive % Atk
            </label>
          </div>
          <div className="input-block">
            <input id="input-weapon-flat-atk" type="text"></input>
            <label id="label-weapon-flat-atk" for="input-weapon-flat-atk">
              Weapon Flat Atk
            </label>
          </div>
          <div className="input-block">
            <input id="input-weapon-percentage-atk" type="text"></input>
            <label
              id="label-weapon-percentage-atk"
              for="input-weapon-percentage-atk"
            >
              Weapon % Atk
            </label>
          </div>
          <div className="input-block">
            <input id="input-artifact-flat-atk" type="text"></input>
            <label id="label-artifact-flat-atk" for="input-artifact-flat-atk">
              Artifact Flat Atk
            </label>
          </div>
          <div className="input-block">
            <input id="input-artifact-percentage-atk" type="text"></input>
            <label
              id="label-artifact-percentage-atk"
              for="input-artifact-percentage-atk"
            >
              Artifact % Atk
            </label>
          </div>
          <div className="input-block">
            <input id="input-character-flat-dmg" type="text"></input>
            <label id="label-character-flat-dmg" for="input-character-flat-dmg">
              Elemental/Physical Dmg
            </label>
          </div>
          <div className="input-block">
            <input id="input-critical-percentage-dmg" type="text"></input>
            <label
              id="label-critical-percentage-dmg"
              for="input-critical-percentage-dmg"
            >
              Critical Dmg %
            </label>
          </div>
          <div className="input-block">
            <input id="input-skill-percentage-dmg" type="text"></input>
            <label
              id="label-skill-percentage-dmg"
              for="input-skill-percentage-dmg"
            >
              Skill Multiplier %
            </label>
          </div>
          <div className="input-block">
            <input id="input-character-level" type="text"></input>
            <label id="label-character-level" for="input-character-level">
              Character Level
            </label>
          </div>
          <div className="input-block">
            <input id="input-enemy-level" type="text"></input>
            <label id="label-enemy-level" for="input-enemy-level">
              Enemy Level
            </label>
          </div>
          <div className="input-block">
            <input id="input-enemy-resistance" type="text"></input>
            <label id="label-enemy-resistance" for="input-enemy-resistance">
              Enemy Resistance %
            </label>
          </div>
        </div>
      </form>
    </ContainerCenter>
  );
}

export default Form;
