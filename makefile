build:
	docker-compose up --build

dev:
	docker-compose up && http://localhost:3000

down:
	docker-compose down

test-e2e:
	docker-compose run -e API_URL=http://api:4000/api --rm e2e npm run test

test-web:
	docker-compose exec web npm run test

test-api:
	docker-compose run -e DATABASE_URI=mongodb://database:27017/cabify-test-db api npm run test

test-watch-api:
	docker-compose run -e DATABASE_URI=mongodb://database:27017/cabify-test-db api npm run test:watch

update-project:
	git submodule update --recursive --remote

release-api:
	cd api && make release

release-web:
	cd web && make release
