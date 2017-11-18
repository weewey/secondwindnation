# SWN CI/CD Pipeline
The purpose of this pipeline is to allow developers in SWN to focus on the code of the application and have testings, and deployments to be all automated.

In this pipeline, the application is containerised in Docker. Refer to Dockerfile for the docker configuration. Kubernetes is used for the orchestration of the containers. Jenkins and the SWN-frontend is deployed in Google Container Engine.

It is recommended to install Gcloud CLI and Kubectl on your machine.

## GCP git url
```
git remote add gcp https://source.developers.google.com/p/swn-jenkins/r/default
```

# Development
## Create a Development Branch

When tasked to work on a new feature, please create a new development branch on your repo.

To create a development environment from a feature branch, you can push the branch to the Git server and let Jenkins deploy your environment.

Create a development branch and push it to the Git server.

```shell
git checkout -b new-feature
```

## Building the feature
We work in the TDD manner, meaning writing test before writing any production code.
![](SWN%20CI:CD%20Pipeline/SWN%20CI:CD%20Pipeline/D25F18D8-7EAD-4EBC-809A-B36EF108431F.png)

## Pushing to the repo
```
git add Jenkinsfile html.go main.go

git commit -m "new feature"

git push gcp <dev branch name>
```

## Jenkins Build & Deploy
http://jenkins.secondwindnation.com

Jenkins will then pick up the changes in the new branch, test and deploy it in the kubernetes cluster.

In a development scenario, you wouldn't use a public-facing load balancer. To help secure your application, you can use kubectl proxy. The proxy authenticates itself with the Kubernetes API and proxies requests from your local machine to the service in the cluster without exposing your service to the Internet.

```shell
kubectl proxy &
```

# Canary
> A smaller-capacity site that receives a percentage of your user traffic. Use this environment to sanity check your software with live traffic before it's released to the live environment.  

```
git checkout -b canary

git merge <dev branch name>

git push gcp canary
```


# Production
> Production. The live site that your users access.  

```
git checkout master

git merge canary

git push gcp master
```

#k8s
#swn
#swn/development