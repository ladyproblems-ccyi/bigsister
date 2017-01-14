import faker from 'faker';
import R from 'ramda';


const tags = new Set(["salud", "salud sexual", "las relaciones", "profesional", "carrera", "communidad"]);

const badges = new Set(["amable", "hablador", "cariñoso", "alegre"]);

const randomAge = (min=14, max=49) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let profile = function(){
  return {
    name: faker.name.findName(),
    password: faker.internet.password(),
    age: randomAge(),
    languages: [],
    badges: []
  };
};

const numProfiles = 10;
let profiles = R.times(profile, numProfiles);

let addBadge = (n, profile) => profile.badges.push([...badges][n]);

let addAmable = R.curry(addBadge)(0);
let addHablador = R.curry(addBadge)(1);
let addCari = R.curry(addBadge)(2);
let addAlegre = R.curry(addBadge)(3);


profiles.forEach((profile, index) => {

  if(numProfiles % index === 0) {
    addAlegre(profile);
    addCari(profile);
    profile.languages.push("Inglés");
  } else if(numProfiles % index === 1) {
    addAmable(profile);
  } else {
    addHablador(profile);
  }
  profile.languages.push("Castellano");
  profile.email = profile.name.substring(0, profile.name.indexOf(' ')) + "@gmail.es";
});

//set a couple older ages
profiles[numProfiles-1].age = 64;
profiles[numProfiles-2].age = 50;


export default {profiles};
