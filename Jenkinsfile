pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat '\\"${tool \'MSBuild\'}\\" C#/WindowsFormsApp/WindowsFormsApp.sln /p:Configuration=Release /p:Platform=\\"Any CPU\\" /p:ProductVersion=1.0.0.${env.BUILD_NUMBER}'
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts 'C#/WindowsFormsApp/WindowsFormsApp/bin/release/**'
      }
    }
  }
}