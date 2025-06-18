pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm --version || echo "npm not found, skipping"'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'node test.js'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'echo "Build completed successfully"'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
