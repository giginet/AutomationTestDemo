require 'tmpdir'
PROJECT = 'AutomationTestDemo.xcodeproj'
CONFIGURATION = 'DEBUG'
APP_NAME = 'AutomationTestDemo.app'
TMP_DIR = 'tmp'
SPECS_DIR = 'specs'

task :default => [:clean, :build, :automation]

desc 'Clean build folder via xcodebuild'
task :clean do
  sh "xcodebuild -project #{PROJECT} clean"
end

desc 'Build demo application'
task :build do
  sh "xcodebuild \
    -project #{PROJECT} \
    -configuration #{CONFIGURATION} \
    -sdk iphonesimulator6.1 \
    ONLY_ACTIVE_ARCH=NO \
    CONFIGURATION_BUILD_DIR=#{TMP_DIR} \
    TARGETED_DEVICE_FAMILY=1"
end
 
desc 'run automation testing.'
task :automation do
  tmp_path = [Dir.pwd, TMP_DIR].join(File::SEPARATOR)
  app_path = [tmp_path, APP_NAME].join(File::SEPARATOR)
  js_files = FileList["#{SPECS_DIR}/*.js"]
  js_files.each do |js|
    Dir.mktmpdir([PROJECT, CONFIGURATION], tmp_path) do |dir|
      sh "tuneup_js/test_runner/run #{app_path} #{js} #{dir} -c -x"
    end
  end
end
