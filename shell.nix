{ pkgs ? import <nixpkgs> {} }:

let
    my-python = pkgs.python3;
    npm = pkgs.nodePackages.npm;
    python-with-my-packages = my-python.withPackages (p: with p; [
        psutil
    ]);
in
    pkgs.mkShell {
        buildInputs = [
            python-with-my-packages
            npm
        ];
        shellHook = ''
            PYTHONPATH=${python-with-my-packages}/${python-with-my-packages.sitePackages}
            # maybe set more env-vars
        '';
    }
