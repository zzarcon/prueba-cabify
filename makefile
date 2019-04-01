build:
	API_URL=http://localhost:4000/api docker-compose up --build

dev:
	API_URL=http://localhost:4000/api docker-compose up && http://localhost:3000

down:
	docker-compose down

test-e2e:
	API_URL=http://api:4000/api docker-compose run --rm e2e npm run test

test-web:
	docker-compose exec web npm run test

test-api:
	docker-compose exec api npm run test

update-project:
	git submodule update --recursive --remote

release-api:
	cd api && make release

release-web:
	cd web && make release