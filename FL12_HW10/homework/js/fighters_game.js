/* Your code goes here */
'use strict'

class Fighter {

    constructor(name, damage, health, strength, agility) {
      this.name = name;
      this.damage = damage;
      this.strength = strength;
      this.agility = agility;
      this.health = health;
    }

    getName() {
        return this._name;
    }
  
    getDamage() {
        return this._damage;
    }

    getHealth() {
        return this._health;
    }

    getStrength() {
        return this._strength;
    }

    getAgility() {
        return this._agility;
    }

    attack(fighter) {
        const rang = 100 - (fighter.getStrength + fighter.getAgility);    
        const rand = Math.floor(Math.random() * 101);

        if ( rand <= rang ) {
            fighter.getHealth = fighter.getHealth - fighter.getDamage;
            console.log(`${this.getName} makes ${fighter.getDamage} damage to ${fighter.getName}`);

            console.log(fighter.getHealth);
        } else {
            console.log(`${fighter.getName} attack missed`);
        }
        
    } 

    logCombatHistory() {
        console.log(`Name: ${this.getName}, Wins: 0, Losses: 0`);
    }

    heal(hp) {
        if ( this.getHealth < hp ) {
            this.getHealth = hp;
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
    fighter1.attack(fighter2);
  }
