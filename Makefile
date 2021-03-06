build:
	docker-compose build --no-cache 
	docker-compose up -d
	docker-compose exec -T app npm run db:migrate
	docker-compose down

dev:
	docker-compose up -d

stop:
	docker-compose down
	docker-compose -f docker-compose.test.yml down -v

watch:
	docker-compose up

build_test:
	docker-compose -f docker-compose.test.yml up --build -d --force-recreate
	docker-compose -f docker-compose.test.yml exec -T test-app npm run db:migrate
	docker-compose -f docker-compose.test.yml exec -T test-app npm run db:seed:test

test:
	- make build_test
	- docker-compose -f docker-compose.test.yml exec -T test-app npm run test
	docker-compose -f docker-compose.test.yml down --remove-orphans


test_cov:
	- make build_test
	- docker-compose -f docker-compose.test.yml exec -T test-app npm run test:coverage
	docker-compose -f docker-compose.test.yml down --remove-orphans

migrate:
	docker-compose exec -T app npm run db:migrate

seed:
	docker-compose exec -T app npm run db:seed:test