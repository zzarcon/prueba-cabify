build:
	docker-compose up --build

dev:
	docker-compose up && http://localhost:3000

down:
	docker-compose down

test-api:
	docker-compose run --rm -e DATABASE_URI=mongodb://database:27017/cabify-test-db api npm run test

test-watch-api:
	docker-compose run --rm -e DATABASE_URI=mongodb://database:27017/cabify-test-db api npm run test:watch

update-project:
	git submodule update --recursive --remote

release-api:
	cd api && make release
