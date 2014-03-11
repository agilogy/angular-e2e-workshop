describe( 'calendar index', function() {  

  describe( 'application is loaded correctly', function() {

    it( 'has title', function () {   
      //Login as an administrative assistant
      browser().navigateTo('/#/');
      //check welcome message
      expect(element('div.title:visible','div with prev, next buttons').count()).toBe(1);

      var objDate = new Date(),
        locale = "en-us",
        month = objDate.toLocaleString(locale, { month: "short" });


      expect(element('div.title:visible').text()).toContain(month);
    });

    it('show some weeks', function(){
      browser().navigateTo('/#/');

      expect(repeater('tr').count()).toBeGreaterThan(3);
    });

  });


});

