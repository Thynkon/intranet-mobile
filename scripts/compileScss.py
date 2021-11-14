#!/usr/bin/env python3

import os, subprocess, psutil

def main():
    scss_path = "./scss"
    css_path = "./css"
    file_path = ""

    if not os.path.exists(css_path):
        os.mkdir(css_path)


    PROCNAME = "node"

    for proc in psutil.process_iter():
        # check whether the process name matches
        if proc.name() == PROCNAME:
            proc.kill()

    for root, dirs, files in os.walk(scss_path):
        for file in files:
            print(root.replace(scss_path, css_path))
            subprocess.Popen(["sass", "--watch", root + "/" + file, root.replace(scss_path, css_path) + file.replace("scss", "css")])

    exit(0)

if __name__ == "__main__":
    main()
