## Install
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```
## Determine Which Shell you are using

```
echo $SHELL
```

## Ensure .bashrc or .zshrc exists
If Not create in root User directory
```
touch .bashrc
```
Or

```
touch .zshrc
```

## Update the file you just created
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```