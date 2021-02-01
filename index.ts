export interface MeleeCharacter {
  attackWithSword(): void;

  defendWithShield(): void;

  dodge(): void;
}

export interface RangerCharacter {
  attackWithBow(): void;

  attackWithKnife(): void;

  defendWithKnife(): void;

  sidestep(): void;
}

export class BanditCharacter implements MeleeCharacter {
  attackWithSword(): void {
    console.log("Swing with sword");
  }

  defendWithShield(): void {
    console.log("Use shield");
  }

  dodge(): void {
    console.log("Moves 3 steps back");
  }
}

export class AssasinCharacter implements RangerCharacter {
  attackWithBow(): void {
    console.log("Shoot arrow");
  }

  attackWithKnife(): void {
    console.log("Backstabbing with knife");
  }

  defendWithKnife(): void {
    console.log("Use knife as a shield");
  }

  sidestep(): void {
    console.log("Moves 1 step back");
  }
}

export class MeleeAssasinCharacter implements MeleeCharacter {
  private mAssasin: RangerCharacter;

  constructor(assasin: RangerCharacter) {
    this.mAssasin = assasin;
  }

  attackWithSword(): void {
    this.mAssasin.attackWithKnife();
  }

  defendWithShield(): void {
    this.mAssasin.defendWithKnife();
  }

  dodge(): void {
    this.mAssasin.sidestep();
    this.mAssasin.sidestep();
    this.mAssasin.sidestep();
  }
}

export class MeleeCombo {
  private mCharacter: MeleeCharacter;

  constructor(character: MeleeCharacter) {
    this.mCharacter = character;
  }

  performCombo() {
    this.mCharacter.attackWithSword();
    this.mCharacter.dodge();
    this.mCharacter.attackWithSword();
    this.mCharacter.defendWithShield();
  }
}

const bandit: MeleeCharacter = new BanditCharacter();
const assasin: RangerCharacter = new AssasinCharacter();

console.log("Performing bandit melee combo");
new MeleeCombo(bandit).performCombo();

console.log("");

console.log("Assasin can't perform a melee combo");
console.log("Adapting assasin to melee character");

const meleeAssasin: MeleeCharacter = new MeleeAssasinCharacter(assasin);
new MeleeCombo(meleeAssasin).performCombo();
