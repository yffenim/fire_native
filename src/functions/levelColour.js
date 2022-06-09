  export function levelColour(level) {
    let colour = "";
    let hash = {
        1: "indigo.500",
        2: "blue.500", 
        3: "cyan.500",
        4: "teal.500",
        5: "green.500",
        6: "lime.500",
        7: "yellow.500",
        8: "amber.500",
        9: "orange.500"
      };
    colour = hash[level];
    return colour;
  };
