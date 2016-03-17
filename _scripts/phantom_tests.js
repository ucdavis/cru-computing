casper.test.begin('Home page', 1, function suite(test) {
  casper.start("./_site/index.html", function() {
    test.assertTitle("Home | Feeding Texas", "Feeding Texas homepage title is the one expected");
  });

  casper.run(function() {
    test.done();
  });
});
