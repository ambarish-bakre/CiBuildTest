pipeline {
  agent {
    node {
        label 'master'
        customWorkspace 'C:/Jenkins/${BRANCH_NAME}'
    }
  }
  stages {
    stage('Build') {
      steps {
        bat './versionbump.bat'
        bat './build.bat'
      }
    }
    stage('Archive') {
      steps {
        archiveArtifacts '**/bin/**/*.exe'
        archiveArtifacts '**/*.msi'
      }
    }
  }
}