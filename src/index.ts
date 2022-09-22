
const root = document.getElementById('root')



root.innerHTML= `
        <div class="input_form-container">
            <form class="input__form">
                <div class="input__form-input-container>
                    <label for="Username"></label>
                    <input
                    class="input__form-username"
                    name="Username"
                    value=""
                    type="text"
                    placeholder="Username"
                    />
                </div>
                <div class="input__form-input-container>
                    <label for="Password"></label>
                    <input
                    class="input__form-password"
                    name="Password"
                    value=""
                    type="password"
                    placeholder="Password"
                    />
                </div>
                    <div class="input__form-btn-container">
                        <button class="input__form-btn">
                            Submit
                        </button>
                </div>
            </form>
        </div>
`