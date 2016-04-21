COMPILE_DIR='./compile';

PREPARE() {

    [ -d ${COMPILE_DIR} ] && rm -rf ${COMPILE_DIR};

    COMPILE() {
        local resource=$1;
        deepify compile-es6 ${resource} -x .js --out-dir ${COMPILE_DIR}/${resource}
    }

    COMPILE test;

    LINK_RES=(node_modules package.json)

    for RES in ${LINK_RES[@]}; do
        [ -e ${COMPILE_DIR}/${RES} ] && rm -f ${COMPILE_DIR}/${RES};
        ln -s ../${RES} ${COMPILE_DIR}/${RES};
    done;
}

if [ "$OSTYPE" != "msys" ] && [ "$OSTYPE" != "win32" ] && [ "$OSTYPE" != "win64" ]; then
    PREPARE;

    node `which istanbul` cover --report lcov _mocha -- --ui tdd --recursive --reporter spec compile/test/**/*.spec.js

elif [ "$OSTYPE" == "win32" ] || [ "$OSTYPE" == "win64" ]; then
    echo "You should have installed and configured http://git-scm.com/ and run all bash command by using git-bash.exe"
elif [ -d 'lib/' ]; then
    echo "Running from git-bash without gathering coverage"
    
    PREPARE;
    
    node `which _mocha` --ui tdd --recursive --reporter spec compile/test/**/*.spec.js
else
   echo "Skipping testing..."
fi
