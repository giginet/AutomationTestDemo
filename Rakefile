PROJECT = 'AutomationTestDemo.xcodeproj'
CONFIGURATION = 'DEBUG'
TARGET = 'AutomationTestDemo'

desc 'Clean build folder via xcodebuild'
task :clean do
  sh "xcodebuild -project #{PROJECT} clean"
end
 
desc 'Build demo application for testing.'
task :build do
  tmp_path = [Dir.pwd].join(File::SEPARATOR)
  directory tmp_path
  sh "xcodebuild \
  -project #{PROJECT} \
  -configuration #{CONFIGURATION} \
  -sdk iphonesimulator6.1 \
  ONLY_ACTIVE_ARCH=NO \
  CONFIGURATION_BUILD_DIR=#{tmp_path} \
  TARGETED_DEVICE_FAMILY=1"
end
