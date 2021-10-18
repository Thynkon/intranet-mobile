#!/usr/bin/env bash
# set -e
set -x

main() {
	local READONLY SCSS_PATH="./scss"
	local READONLY CSS_PATH="./css"

	local scss_files=($(find "${SCSS_PATH}" -name '*.scss' -type f))
	local file_path=""

	killall node

	[[ -d "${CSS_PATH}" ]] || mkdir -p "${CSS_PATH}"

	for f in "${scss_files[@]}"; do
		file_path=${f##${SCSS_PATH}}
		sass --watch "${f}" "${CSS_PATH}/${file_path%.*}.css" &
	done

}

main $@
exit 0
