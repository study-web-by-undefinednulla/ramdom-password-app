const resultValue = document.getElementById("result"),
    copyValue = document.getElementById("copy"),
    lengthValue = document.getElementById("length"),
    upperValue = document.getElementById("upper"),
    lowerValue = document.getElementById("lower"),
    numberValue = document.getElementById("number"),
    symbolValue = document.getElementById("symbol"),
    errorValue = document.getElementById("error"),
    submitValue = document.getElementById("submit"),
    notiValue = document.getElementById("noti"),
    upperText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerText = 'abcdefghijklmnopqrstuvwxyz',
    numberText = '0123456789',
    symbolText = '!@#$%^&*()_+-='


const root = {
    handle: function () {
        submitValue.addEventListener("click", () => {
            checkError()
        })
        copyValue.addEventListener("click", () => {
            if (resultValue.value) {
                navigator.clipboard.writeText(resultValue.value)
            }
        })
        const copyRightValue = 'Copyright @ 2021 <a href="https://facebook.com/haidanghahaha"> Hai Dang</a>',
            copyRight = document.getElementById("copy-right")
        copyRight.innerHTML = copyRightValue
        function checkError() {
            if (!lengthValue.value) {
                errorValue.innerHTML = '<div class="error">Error Generator</div>'
                notiValue.innerHTML = ''
                return false
            } else if (lengthValue.value <= 5 || lengthValue.value >= 40) {
                errorValue.innerHTML = '<div class="error">Minimum and maximum Length Password is 6 and 40</div>'
                notiValue.innerHTML = ''
                return false
            } else if (!upperValue.checked && !lowerValue.checked && !numberValue.checked && !symbolValue.checked) {
                errorValue.innerHTML = '<div class="error">Plese Tick On The Option</div>'
                notiValue.innerHTML = ''
                return false
            } else {
                errorValue.innerHTML = ''
                notiValue.innerHTML = '<div class="noti">Success Generator</div>'
                generate()
            }
        }
        function getUpper() {
            return upperText[Math.floor(Math.random() * upperText.length)]
        }
        function getLower() {
            return lowerText[Math.floor(Math.random() * lowerText.length)]
        }
        function getNumber() {
            return numberText[Math.floor(Math.random() * numberText.length)]
        }
        function getSymbol() {
            return symbolText[Math.floor(Math.random() * symbolText.length)]
        }
        function generate() {
            const length = Number(lengthValue.value)
            let password = ''
            for (let i = 0; i < length; i++) {
                password += submit()
            }
            resultValue.value = password
        }
        function submit() {
            let result = ''
            if (upperValue.checked) {
                result += getUpper()
            }
            if (lowerValue.checked) {
                result += getLower()
            }
            if (numberValue.checked) {
                result += getNumber()
            }
            if (symbolValue.checked) {
                result += getSymbol()
            }
            return result[Math.floor(Math.random() * result.length)]
        }
    },
    language: function () {
        const languageVi = document.getElementById('vi'),
            languageNa = document.getElementById('na'),
            languagesChoose = document.getElementById("languages-choose"),
            labelLength = document.getElementById("label-length"),
            labelUpper = document.getElementById("label-upper"),
            labelLower = document.getElementById("label-lower"),
            labelNumber = document.getElementById("label-number"),
            labelSymbol = document.getElementById("label-symbol")
        languageVi.addEventListener('click', () => {
            vietNam()
        })
        languageNa.addEventListener('click', () => {
            engLish()
        })
        function vietNam() {
            languagesChoose.innerHTML = 'Ngôn ngữ:'
            labelLength.innerHTML = 'Độ dài mật khẩu'
            labelUpper.innerHTML = 'Bao gồm chữ in hoa'
            labelLower.innerHTML = 'Bao gồm chữ thường'
            labelNumber.innerHTML = 'Bao gồm chữ số'
            labelSymbol.innerHTML = 'Bao gồm kí tự đặc biệt !@#$*&...'
            submitValue.innerHTML = 'Tạo Mật Khẩu'
            resultValue.setAttribute('placeholder', 'Kết Quả Hiển Thị Ở Đây!')
            copyValue.innerHTML = 'Sao chép'
        }
        function engLish() {
            languagesChoose.innerHTML = 'Languages:'
            labelLength.innerHTML = 'length Password'
            labelUpper.innerHTML = 'contain uppercase letters'
            labelLower.innerHTML = 'contain lowercase letters'
            labelNumber.innerHTML = 'contain numbers'
            labelSymbol.innerHTML = 'contain symbols !@#$*&...'
            submitValue.innerHTML = 'Password Generator'
            resultValue.setAttribute('placeholder', 'Result Password Here')
            copyValue.innerHTML = 'copy'
        }
    },
    start: function () {
        this.handle()
        this.language()
    }
}

root.start()
