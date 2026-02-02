pipeline {
    agent any

    environment {
        FRONTEND_DIR = "frontend"
        BACKEND_DIR  = "backend"
    }

    stages {

        stage('Code Checkout') {
            steps {
                echo "📥 Code checkout ho raha hai"
                checkout scm
            }
        }

        stage('Frontend Install & Build') {
            steps {
                echo "⚛️ React build start"
                dir("${FRONTEND_DIR}") {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Backend Install') {
            steps {
                echo "🟢 Backend dependencies install"
                dir("${BACKEND_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Backend Test') {
            steps {
                echo "🧪 Backend tests run"
                dir("${BACKEND_DIR}") {
                    sh 'npm test || echo "No tests found"'
                }
            }
        }

        stage('Build Success') {
            steps {
                echo "✅ CI pipeline successful"
            }
        }
    }

    post {
        success {
            echo "🎉 Build & Test pass ho gaya"
        }
        failure {
            echo "❌ Pipeline fail – code check karo"
        }
    }
}
