#!/usr/bin/env bash

export LESS="-R"
export LESS_TERMCAP_mb=$'\E[1;31m'
export LESS_TERMCAP_md=$'\E[1;36m'
export LESS_TERMCAP_me=$'\E[0m'
export LESS_TERMCAP_so=$'\E[01;44;33m'
export LESS_TERMCAP_se=$'\E[0m'
export LESS_TERMCAP_us=$'\E[1;32m'
export LESS_TERMCAP_ue=$'\E[0m'

alias \
  l="ls -a --color=auto --group-directories-first" \
  ll="ls -al --color=auto --group-directories-first" \
  lc="ls -alC --color=auto --group-directories-first"

# Prompt
c="\[\e[0m\]"
pink="\[\e[38;5;168m\]"
cyan="\[\e[38;5;51m\]"
offwhite="\[\e[38;5;252m\]"
green="\[\e[38;5;83m\]"
red="\[\e[38;5;196m\]"

if [ "`id -u`" -eq 0 ]; then # Root
    PS1="$cyan\u$c$offwhite@$c$pink\H$c $red\w$c #$c ";
else # User
    PS1="$cyan\u$c$offwhite@$c$pink\H$c $green\w$c \$$c ";
fi

# fnm
export PATH=/root/.fnm:$PATH
eval "`fnm env`"

