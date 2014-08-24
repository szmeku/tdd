describe("Testy modułu berola:", function() {

    it("funkcja dodawanie powinna dodawac", function() {
        expect(ModulBerola.dodawanie(2, 4)).toBe(6);
    });

    it("funkcja potegowanie powinna potegowac", function(){
        expect(ModulBerola.potega(2, 3)).toBe(8);
    });
    //will insert additional tests here later
});