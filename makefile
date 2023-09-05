VERSION := 0.1.0

build b:
	docker build . -t docker.io/brianwolf94/relucis-front:$(VERSION)

run r:
	docker run -it -p 8080:8080 docker.io/brianwolf94/relucis-front:$(VERSION)

push p:
	docker push docker.io/brianwolf94/relucis-front:$(VERSION)
