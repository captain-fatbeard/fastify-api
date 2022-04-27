build:
	docker-compose build
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

test:
	docker-compose -f docker-compose.test.yml up --build -d
	docker-compose -f docker-compose.test.yml exec -T test-app npm run db:migrate
	docker-compose -f docker-compose.test.yml exec -T test-app npm run test
	docker-compose -f docker-compose.test.yml down

migrate:
	docker-compose exec -T app npm run db:migrate