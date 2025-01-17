class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    
    get name() {
      return this._name;
    }
    
    get level() {
      return this._level;
    }

    get numberOfStudents() {
      return this._numberOfStudents;
    }

    set numberOfStudents(value) {
      if(value === number) {
      return this._numberOfStudents = value;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }

    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    
    static pickSubstiteteacher(arr) {
      const index = Math.floor(Math.random() * arr.length);
      return arr[index];
    }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
  super(name, 'primary', numberOfStudents);
  this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts();
const substiteTeacher = School.pickSubstiteteacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(lorraineHansbury.pickupPolicy);
console.log(substiteTeacher);

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
  super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
  super(name, 'high', numberOfStudents);
  this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.sportsTeams;