// ***********************
//
// Build and deploy different environments with jenkins pipeline
//
// Merge to develop -> triggers development release
// Merge to master without tag -> triggers staging release
// Merge to master with tag -> triggers staging and production release
// Production release requires manual approval on the jenkins job
// 
// Configure jenkins pipeline project to pull tags! By default, tags are not pulled!
// -> Check "Advanced clone behaviours" feature of jenkins git plugin
//
// ***********************


def CONTAINER_NAME="rnssolution/besmetaverse-frontend"
def CONTAINER_TAG="0.0.1"
def DOCKER_HUB_USER="rnssolutions"


pipeline {
    agent {label params.node}

    tools {nodejs "node"}

    environment {
        GLOBAL_ENVIRONMENT = 'NO_DEPLOYMENT'

        // Need the staging properties anyway to deploy to staging and production simultaneously when doing a prod release
        ENVIRONMENT_STAGING = 'staging'
    }

    options {
        // Keep maximum 30 archived artifacts
        buildDiscarder(logRotator(numToKeepStr: '30', artifactNumToKeepStr: '30'))

        // No simultaneous builds
        disableConcurrentBuilds()
    }


    post {
        always {

        discordSend description: 'Jenkins Pipeline Build', footer:  '' , link: env.BUILD_URL, result: currentBuild.currentResult, unstable: false, title: JOB_NAME, webhookURL: 'https://discord.com/api/webhooks/1095986279310708807/TJAdvMMG7HN1fbNgO0xfrNQ5GJ5hBCn8NJjGVDrOfo0dx2FrFjulfSWokDFkoEX-AqU2'
        }
    }

    stages {
        stage('Prepare workspace') {
            steps {
                echo 'Prepare workspace'

                // Clean workspace
                step([$class: 'WsCleanup'])

                // Checkout git
                checkout scm
            }
        }

        stage('Setup environment') {
            steps {
                echo 'Setup environment'
                
                script {
                    // Determine whether this is a test or a staging / production build                    
                    switch (env.BRANCH_NAME) {
                        case 'development':
                            GLOBAL_ENVIRONMENT = 'development'
                            break
                        case 'testing':
                            GLOBAL_ENVIRONMENT = 'testing'
                            break
                        case 'staging':
                            GLOBAL_ENVIRONMENT = 'staging'
                            break
                        case 'master':
                            GLOBAL_ENVIRONMENT = 'production'
                            break
                        default: 
                            GLOBAL_ENVIRONMENT = 'NO_DEPLOYMENT'
                            break
                    }

                    // Get tag on current branch
                    TAG = sh(returnStdout: true, script: 'git tag --points-at HEAD')

                    echo 'Banch To Build'
                    echo env.BRANCH_NAME

                    if (TAG && GLOBAL_ENVIRONMENT == 'staging') {
                        echo 'Build for production'

                        // Ask user whether master should be builded and deployed to production
                        try {
                            timeout(time: 30, unit: 'MINUTES') {
                                APPROVED = input(
                                    id: 'BuildForProductionInput',
                                    message: 'Build and deploy',
                                    parameters: [
                                        booleanParam(
                                            defaultValue: false,
                                            description: '',
                                            name: 'Build and deploy ' + TAG + ' for production?'
                                        )
                                    ]
                                )

                                if (APPROVED) {
                                    GLOBAL_ENVIRONMENT = 'production'
                                } else {
                                    error 'Build for production aborted'
                                }
                            }
                        } catch (err) {
                            error 'Build for production aborted'
                        }
                    }
                }
            }
        }

        stage('Build-image') {
                    steps {
                        echo 'Build ' + GLOBAL_ENVIRONMENT

                        buildImage(GLOBAL_ENVIRONMENT)
                        
                    }
        }


        stage('Deploy') {
            steps {
                echo 'Deploy ' + GLOBAL_ENVIRONMENT

                script {
                    if (GLOBAL_ENVIRONMENT == 'NO_DEPLOYMENT') {
                        echo 'This is not develop nor master branch and should not be deployed'
                    } else {
                        deploy(GLOBAL_ENVIRONMENT)

                        if (GLOBAL_ENVIRONMENT == 'production') {
                            echo 'Additionally, deploy staging'
                        }
                    }
                }
            }
        }
    }
}


def buildImage(ENVIRONMENT) {

  echo 'started building image...'
  sh './jenkins/scripts/docker-build.sh'

}


def deploy(ENVIRONMENT) {

    echo 'started deploying'

    sh './jenkins/scripts/remote-deploy.sh' 
 

}
