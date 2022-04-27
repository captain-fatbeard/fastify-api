build:
	docker-compose build

dev:
	docker-compose up -d

stop:
	docker-compose down

watch:
	docker-compose up

test:
	docker-compose exec -T app npm run test

migrate:
	docker-compose exec -T app npm run db:migrate