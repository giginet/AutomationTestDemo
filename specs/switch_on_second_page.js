#import "../tuneup_js/tuneup.js"
test('Tap switch on second page.', function(target, app) {
  target.frontMostApp().navigationBar().rightButton().tap();
  target.delay(1.0);
  assertEquals(target.frontMostApp().mainWindow().staticTexts()[0].label(), "The quick brown fox");
  assertEquals(target.frontMostApp().mainWindow().staticTexts()[1].label(), "jumps over the lazy dog");
  target.frontMostApp().mainWindow().switches()[0].setValue(0);
  target.delay(1.0);
});
