define([], function() {
    // return a rng where each number will have the probability
    // of itself squared to be chosen, so the number 0.20 has a 4% chance 
    return function squareProbability(factor) {
        var factor = factor || 1,
            chance = 0,
            candidate = 0,
            probability = -1;

        while (chance > probability) {
            chance = Math.random();
            candidate = Math.random();
            probability = candidate * candidate;
        }

        return candidate * factor;
    };
});
