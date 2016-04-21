KARMA=$(karma)

echo "Karma path: ${KARMA}"

echo "PATH: ${PATH}"

cmd='${KARMA} start config.karma.js'

eval $cmd