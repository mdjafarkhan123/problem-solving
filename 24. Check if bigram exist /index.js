function canFind(bigrams, words) {
    let result = bigrams.every((bigram) => {
        return words.some((word) => word.includes(bigram));
    });

    console.log(result);
}

canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]);
canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]);
canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]);
canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]);
