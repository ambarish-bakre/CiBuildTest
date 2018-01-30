pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat './build.bat'
        script {
          currentBuild.description = "#${BUILD_NUMBER}, branch ${BRANCH}"
        }
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts '**/**/**/bin/Debug/*.exe'
      }
    }
  }
}