pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat './build.bat'
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts 'C#/WindowsFormsApp/WindowsFormsApp/bin/release/**'
      }
    }
  }
}