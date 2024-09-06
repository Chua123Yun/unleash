pipeline { 
    agent any 
    stages { 
        stage('Checkout') { 
            steps { 
                git branch: 'master', url: 'https://github.com/LEEWAILUN/unleash.git' 
            } 
        } 
        stage('Build') { 
            steps { powershell 'gradle clean build'} 
        } 
        stage('Test') { 
            steps { powershell 'gradle test'} 
        } 
        stage('Deploy') { 
            steps { powershell 'java -jar build/libs/unleash-test-V1.jar'}            
        }     
} 
UECS2363 SOFTWARE CONSTRUCTION AND CONFIGURATION 
post { 
always { 
echo 'Cleaning up workspace' 
deleteDir() // Clean up the workspace after the build 
} 
success { 
echo 'Build succeeded!!!' 
// You could add notification steps here 
} 
failure { 
echo 'Build failed!' 
// You could add notification steps here 
} 
} 
} 