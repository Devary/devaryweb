pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    tools {
        nodejs 'NodeJS_24'  // Make sure Jenkins has this tool name configured
    }

    stages {
    	stage('scm') {
    	   steps {
	    	    checkout scm
    		}
    	}

        stage('Install Dependencies') {
            steps {
                sh 'rm -rf node_modules package-lock.json'
                sh 'npm install --save-dev @angular/build && npm install'
            }
        }

        //stage('Lint') {
        //    steps {
        //        sh 'npm run lint'
        //    }
        //}

        //stage('Run Tests') {
        //    steps {
        //        sh 'npm test -- --watch=false --browsers=ChromeHeadless'
        //    }
        //}

        stage('Build') {
            steps {
                sh 'npx ng build --configuration production'
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Angular build completed successfully.'
        }
        failure {
            echo 'Build failed. Check logs.'
        }
    }
}
