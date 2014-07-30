TESTS = test/*.js
REPORTER ?= dot

test:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(TESTS)

install:
	npm install
	git submodule update --init

.PHONY: test