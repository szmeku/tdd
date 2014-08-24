describe("Testy modułu berola:", function() {

    it("funkcja dodawanie powinna dodawac", function() {
        expect(ModulBerola.dodawanie(2, 4)).toBe(6);
    });

    // testowanie potegowania
    // [pierwszy argumont, drugi, wynik]
    var argumentsAndResults = [
        [20,2,400],
        [3,2,9],
        [2,3,8],
        [4,0,1]
    ];

    for(var i in argumentsAndResults){
        it("potega "+argumentsAndResults[i][0]
            + '^'+argumentsAndResults[i][1] + ' ma być '
            + argumentsAndResults[i][2] , function(){

            expect(
                ModulBerola.potega(argumentsAndResults[i][0],
                                    argumentsAndResults[i][1])
                ).toBe(argumentsAndResults[i][2]);

        });
    }
});