pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat './versionbump.bat'
        bat './build.bat'
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts '**/**/**/bin/Debug/*.exe'
      }
    }
  }
}