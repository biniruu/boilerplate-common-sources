# Python Starter

```text
⚠️ 이 스타터는 이제 막 만들기 시작했어요. 아직 준비 중이고, 언제 완성될지는 저도 모르겠어요.😅
```

Python 프로젝트 환경 설정을 빠르게 할 수 있도록 도와주는 스타터예요.

<br>

## 📌Required options in VS Code

VS Code의 설정에서 아래 옵션을 변경해주세요.

- Editor: Default Formatter ➡️ `ms-python.black-formatter`
- Editor: Format On Save ➡️ `true`

또는 `settings.json`에 다음 설정을 추가해주세요.

```json
{
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true
  }
}
```

<br>

## 📥Installing packages

이곳에 있는 명령어를 사용해 패키지를 설치하세요.

> VS Code를 사용한다면 패키지를 설치하지 않고 [🧩Required extensions for VS Code](#required-extensions-for-vs-code) 목록에 있는 익스텐션을 설치해 사용할 수 있어요.

```bash
# Black

pip install black

# Flake8

pip install flake8

# Pylint

pip install pylint
```

<br>

## 🧩Required extensions for VS Code

lint나 formatting 패키지를 사용하기 위해 꼭 설치해야 하는 익스텐션이에요. `Flake8`과 `Pylint`는 둘 중 하나만 사용하거나 두 개를 함께 사용할 수 있어요.

- `Black Formatter` (ms-python.black-formatter)
- `Flake8` (ms-python.flake8)
- `Pylint` (ms-python.pylint)

<br>

## 🚀Recommended extensions for VS Code

편의성을 높여주는 익스텐션이에요.

- `autoDocstring - Python Docstring Generator` (njpwerner.autodocstring)
- `AREPL for python` (almenon.arepl)
- `Code Runner` (formulahendry.code-runner)
- `Django` (batisteo.vscode-django)
- `IntelliCode` (VisualStudioExptTeam.vscodeintellicode)
- `Jinja` (wholroyd.jinja)
- `Jupyter` (ms-toolsai.jupyter)
- `Jupyter Cell Tags` (ms-toolsai.vscode-jupyter-cell-tags)
- `Jupyter Keymap` (ms-toolsai.jupyter-keymap)
- `Jupyter Notebook Renderers` (ms-toolsai.jupyter-renderers)
- `Jupyter Slide Show` (ms-toolsai.vscode-jupyter-slideshow)
- `Pylance` (ms-python.vscode-pylance)
- `Python` (ms-python.python)
- `Python Environment Manager` (donjayamanne.python-environment-manager)
- `Python Extended` (tushortz.python-extended-snippets)
- `Python Indent` (KevinRose.vsc-python-indent)
