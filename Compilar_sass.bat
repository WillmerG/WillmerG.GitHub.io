@echo off
title Actualizar Automaticamente scss
color 03

set destino=%~d0%~p0css\
set origen=%~d0%~p0scss\

echo %origen%:%destino%
sass --watch %origen%:%destino% --no-cache --style compressed

exit