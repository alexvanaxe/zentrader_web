#! /bin/fish

set -x FZF_DEFAULT_COMMAND "fd --type f"

set -x PATH "$PWD/node_modules/.bin" $PATH

alias todo.sh="todo.sh -d $PWD/todo/config"
