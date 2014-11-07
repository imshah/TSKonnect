(function(){
    describe("When I add two positive numbers", function () {

        var x, y, res;

        beforeEach(function(){
            x = 10 ;
            y = 20;

            //custom matcher
            beforeEach(function(){
               this.addMatchers({
                   toBeNonNegative: function(){
                       if(this.actual < 0){
                           return false;
                       }
                       return true;
                   }
               });
            });
        });


        it('should give me the sum properly', function () {
            result = x + y;
            expect(result).toBe(30);

        });

        it('should not be a negative number', function () {
            result = x + y;
            expect(result).toBeNonNegative();
        });

    });
})();


