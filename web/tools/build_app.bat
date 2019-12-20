cd ..

python node_modules/google-closure-library/closure/bin/build/closurebuilder.py ^
	--root="node_modules/google-closure-library/closure/goog/" ^
    --root="node_modules/google-closure-library/third_party/closure/goog/mochikit/" ^
    --root="node_modules/closure-templates/" ^
    --root="app/" ^
	--namespace="Typewriter.boot"

cd tools/