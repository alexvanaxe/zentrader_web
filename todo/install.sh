#! /bin/bash

git clone https://github.com/rebeccamorgan/due.git
wget https://raw.githubusercontent.com/mgarrido/todo.txt-cli/note/todo.actions.d/archive; chmod 755 ./archive
wget https://raw.githubusercontent.com/mgarrido/todo.txt-cli/note/todo.actions.d/del; chmod 755 ./del
wget https://raw.githubusercontent.com/mgarrido/todo.txt-cli/note/todo.actions.d/note; chmod 755 ./note
wget https://raw.githubusercontent.com/mgarrido/todo.txt-cli/note/todo.actions.d/rm; chmod 755 ./rm
