node {
	stage 'Git Checkout'
		git url: 'https://github.com/treselle-workbench/node_view_model_poc.git'
	stage 'Container cleanup'
		sh "sudo docker stop node_view_model"
		sh "sudo docker rm node_view_model"
		sh "sudo docker rmi node_view_model"
	stage 'Build Docker Image'
		sh "sudo docker build -t node_view_model ."
	stage 'Run Docker Container'
		sh "sudo docker run --name node_view_model -p 3003:3003 -d node_view_model"
}