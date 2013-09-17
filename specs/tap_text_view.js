#import "../../../tuneup_js/tuneup.js"
test('Tap switch on second page.', function(target, app) {
  target.frontMostApp().mainWindow().textViews()[0].tap();
  target.delay(1.0);
});
