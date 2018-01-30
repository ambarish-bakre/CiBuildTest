pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat './build.bat'
        script {
          currentBuild.displayName = "${GIT_BRANCH}.${BUILD_NUMBER}"
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