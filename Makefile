include .env
SHELL	=	/bin/bash

PROJECT_NAME = blog
tag = stage

test:
	@docker run -p 5001:3000 ${REPOSITORY}:${tag}
login:
	@aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin ${REGISTRY}
build:
	@docker compose build initcloud-blog-${tag}
clean-dangling:
	@docker image rm -f $$(docker images | grep -E '<none>[^\S\r\n]+<none>' | awk '{print $3}' | sort | uniq)
push: 
	@docker push ${REGISTRY}/${REPOSITORY}:${tag} -q

publish: build login push
deploy-qa: publish
	@aws ecr get-login-password --region ap-northeast-2 | ssh initcloud-qa 'docker login --username AWS --password-stdin ${REGISTRY}'
	@ssh initcloud-qa 'cd docker-compose && docker pull ${REGISTRY}/${REPOSITORY}:${tag} -q && docker compose down && docker compose up -d'
