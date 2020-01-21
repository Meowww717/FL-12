/* Your code goes here */
'use strict'

class Fighter {

    constructor(name, damage, strength, agility, health) {
      this.name = name;
      this.damage = damage;
      this.strength = strength;
      this.agility = agility;
      this.health = health;
    }

    getName() {
        return this.name;
    }
  
    getDamage() {
        return this.damage;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.health;
    }

    attack(fighter) {
        const rang = 100 - (fighter.getStrength() + fighter.getAgility());    
        const rand = Math.floor(Math.random() * 101);

        if ( rand <= rang ) {
            fighter.health = fighter.getHealth() - fighter.getDamage();
            console.log(`${this.getName()} makes ${fighter.getDamage()} damage to ${fighter.getName()}`);
        } else {
            console.log(`${fighter.getName()} attack missed`);
        }
        
    } 

    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.win}, Losses: ${this.losses}`);
    }

    heal(hp) {
        if ( this.getHealth() < hp ) {
            this.health = hp;
        }
    }

    dealDamage(dam) {
        this.health -= dam;
    }

    addWin() {
        this.win += 1;
    }

    addLoss() {
        this.losses += 1;
    }
  }

  function battle(fighter1, fighter2) {

    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }

    fighter1.getHealth() > 0 ? console.log(`${fighter1.getName()} has won!`) : 
        console.log(`${fighter1.getName()} is dead and can't fight!`);  
        
    fighter2.getHealth() > 0 ? console.log(`${fighter2.getName()} has won!`) : 
        console.log(`${fighter2.getName()} is dead and can't fight!`);
    
  }
