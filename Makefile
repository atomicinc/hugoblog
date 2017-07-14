.PHONY: clean build serve

DIST ?= $(PWD)/dist
SRC ?= $(PWD)/src

clean:
	rm -rf $(DIST)

build:
	hugo -s $(SRC) -d $(DIST)

serve:
	hugo serve -s $(SRC)

