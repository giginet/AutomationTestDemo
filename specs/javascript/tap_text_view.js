#import "../../tuneup_js/tuneup.js"
test('Tap switch on second page.', function(target, app) {
  createImageAsserter('../../tuneup_js',  './',  '../../specs/image');
  target.frontMostApp().mainWindow().textViews()[0].tap();
  target.delay(1.0);
  assertScreenMatchesImageNamed("tap_text_view", "a screenshot of second page is not matched.", 1471);
});
