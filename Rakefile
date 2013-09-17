require 'tmpdir'
PROJECT = 'AutomationTestDemo.xcodeproj'
CONFIGURATION = 'DEBUG'
APP_NAME = 'AutomationTestDemo.app'
TMP_DIR = 'tmp'
SPECS_DIR = 'specs/javascript'
BUILD_DIR = 'build'

task :default => [:clean, :build, :automation]

desc 'Clean build folder via xcodebuild'
task :clean do
  sh "xcodebuild -project #{PROJECT} clean"
end

desc 'Build demo application'
task :build do
  Dir.mkdir(BUILD_DIR) unless File.exists?(BUILD_DIR)
  sh "xcodebuild \
    -project #{PROJECT} \
    -configuration #{CONFIGURATION} \
    -sdk iphonesimulator6.1 \
    ONLY_ACTIVE_ARCH=NO \
    CONFIGURATION_BUILD_DIR=#{BUILD_DIR} \
    TARGETED_DEVICE_FAMILY=1"
end
 
desc 'run automation testing.'
task :automation do
  app_path = [Dir.pwd, BUILD_DIR, APP_NAME].join(File::SEPARATOR)
  tmp_path = [Dir.pwd, TMP_DIR].join(File::SEPARATOR)
  Dir.mkdir(tmp_path) unless File.exists?(tmp_path)
  js_files = FileList["#{SPECS_DIR}/*.js"]
  js_files.each do |js|
    Dir.mktmpdir([TMP_DIR, ''], tmp_path) do |dir|
      sh "tuneup_js/test_runner/run #{app_path} #{js} #{dir} -c -x"
    end
  end
end
