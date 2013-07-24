#!/bin/bash

CLOS_DIR='/home/nick/dev/closure/'
CALCDEPS=`echo $CLOS_DIR`'library/closure/bin/calcdeps.py'
LIBRARY=`echo $CLOS_DIR`'library/'

COMMAND='python '$CALCDEPS

FILES=`find . -type f -name '*.js'`
for i in $FILES
do
  COMMAND=$COMMAND' -i '`echo $i`
done

COMMAND=$COMMAND' -p '$LIBRARY' -p . -o deps > deps.js'

eval $COMMAND
