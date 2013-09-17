#import "../tuneup_js/tuneup.js"
test('Tap button fifty times', function(target, app) {
  target.frontMostApp().mainWindow().buttons()[0].tapWithOptions({tapCount:50});
  target.delay(1.0);
  assertEquals(target.frontMostApp().mainWindow().textViews()[0].value(), "Pressed 50 times");
});
