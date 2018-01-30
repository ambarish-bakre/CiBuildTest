pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat './build.bat'
        script {
          currentBuild.description = "${GIT_BRANCH}.${BUILD_NUMBER}"
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