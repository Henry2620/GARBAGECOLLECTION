function name(MariaAntonieta, LuisXVl ) {
    LuisXVl.husband = MariaAntonieta;
    MariaAntonieta.wife = LuisXVl;
    return {
      name1: MariaAntonieta,
      name2: LuisXVl
    };
  }
  
  
    let society = createSociety({ name1: "MariaAntonieta" }, { name2: "LuisXVl" });
    console.log(society.name1.husband,wife.name);
    
    society = null;
    console.log(society);