#import "../../tuneup_js/tuneup.js"
test('Tap switch on second page.', function(target, app) {
  createImageAsserter('../../tuneup_js',  './',  '../../specs/image');
  target.frontMostApp().navigationBar().rightButton().tap();
  target.delay(1.0);
  assertEquals(target.frontMostApp().mainWindow().staticTexts()[0].label(), "The quick brown fox");
  assertEquals(target.frontMostApp().mainWindow().staticTexts()[1].label(), "jumps over the lazy dog");
  target.frontMostApp().mainWindow().switches()[0].setValue(0);
  target.delay(1.0);
  target.frontMostApp().mainWindow().switches()[0].setValue(1);
  target.delay(1.0);
  target.frontMostApp().mainWindow().switches()[0].setValue(0);
  assertScreenMatchesImageNamed("switch_on_second_page", "a screenshot of second page is not matched.", 341);
});
