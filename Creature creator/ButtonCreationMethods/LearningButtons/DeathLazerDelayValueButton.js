//lets the user adjust the death lazer delay
function generateDeathLazerDelayValueButton(x, y, w, h) {
    let valueButton = new ValueButton(x, y, w, h, "DEATH Lazer Delay");
    valueButton.getValue = () => deathLazerDelay;
    valueButton.increaseValue = () => {
        deathLazerDelay += 10;

        //reset everything since all previous scores are invalid

        population.bestOfEachSpecies=[];
        population.bestScore = 0;
        population.globalBestScore = 0;
        for (let p of population.players) {
            p.bestScore = 0;
        }

        speciesNumber =0;
        for (let s of population.species) {
            s.rep.bestScore = 0;
            s.champ.bestScore = 0;
            s.bestFitness = 0;
            s.maxPlayerLength = 0;

            s.speciesNumber = speciesNumber;
            speciesNumber++;
            population.bestOfEachSpecies.push({champ: s.champ.cloneForReplay(), maxPlayerLength: 1});



        }
        population.bestScoreOfAPreviousBatch = 0;
        population.resetGeneration();
        resetAudio();
        warning = new Warning("Generation Reset, all previous scores reset to 0 as they are now invalid", 300, true);
    };
    valueButton.decreaseValue = () => deathLazerDelay = max(0, deathLazerDelay - 10);
    return valueButton;
}